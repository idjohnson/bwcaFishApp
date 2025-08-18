
provider "google" {
  project = var.project_id
  region  = var.region
}

resource "google_project_service" "run_api" {
  service = "run.googleapis.com"
}

resource "google_project_service" "artifactregistry_api" {
  service = "artifactregistry.googleapis.com"
}

resource "google_artifact_registry_repository" "repo" {
  location      = var.region
  repository_id = "${var.service_name}-repo"
  format        = "DOCKER"
}

resource "google_service_account" "service_account" {
  account_id   = "${var.service_name}-sa"
  display_name = "Service Account for ${var.service_name}"
}

resource "google_cloud_run_v2_service" "default" {
  name     = var.service_name
  location = var.region

  template {
    service_account = google_service_account.service_account.email
    containers {
      image = "${google_artifact_registry_repository.repo.location}-docker.pkg.dev/${var.project_id}/${google_artifact_registry_repository.repo.repository_id}/${var.service_name}:latest"
      ports {
        container_port = 3000
      }

      env {
        name = "OTEL_EXPORTER_OTLP_ENDPOINT"
        value_source {
          secret_key_ref {
            secret  = "OtelEndpoint"
            version = "latest"
          }
        }
      }
      env {
        name = "OTEL_EXPORTER_OTLP_APIKEY"
        value_source {
          secret_key_ref {
            secret  = "OtelApiKey"
            version = "latest"
          }
        }
      }
    }
  }

  depends_on = [
    google_project_service.run_api,
    google_project_service.artifactregistry_api,
    google_project_service.secretmanager_api
  ]
}

resource "google_project_service" "secretmanager_api" {
  service = "secretmanager.googleapis.com"
}

resource "google_secret_manager_secret" "otel_endpoint" {
  secret_id = "OtelEndpoint"

  replication {
    auto {}
  }
}

resource "google_secret_manager_secret" "otel_api_key" {
  secret_id = "OtelApiKey"

  replication {
    auto {}
  }
}

resource "google_secret_manager_secret_iam_member" "otel_endpoint_accessor" {
  project   = google_secret_manager_secret.otel_endpoint.project
  secret_id = google_secret_manager_secret.otel_endpoint.secret_id
  role      = "roles/secretmanager.secretAccessor"
  member    = "serviceAccount:${google_service_account.service_account.email}"
}

resource "google_secret_manager_secret_iam_member" "otel_api_key_accessor" {
  project   = google_secret_manager_secret.otel_api_key.project
  secret_id = google_secret_manager_secret.otel_api_key.secret_id
  role      = "roles/secretmanager.secretAccessor"
  member    = "serviceAccount:${google_service_account.service_account.email}"
}

resource "google_cloud_run_service_iam_member" "noauth" {
  location = google_cloud_run_v2_service.default.location
  service  = google_cloud_run_v2_service.default.name
  role     = "roles/run.invoker"
  member   = "allUsers"
}
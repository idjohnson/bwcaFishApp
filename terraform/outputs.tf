
output "service_url" {
  description = "The URL of the deployed Cloud Run service."
  value       = google_cloud_run_v2_service.default.uri
}

output "otel_endpoint_secret_id" {
  description = "The ID of the OtelEndpoint secret."
  value       = google_secret_manager_secret.otel_endpoint.secret_id
}

output "otel_api_key_secret_id" {
  description = "The ID of the OtelApiKey secret."
  value       = google_secret_manager_secret.otel_api_key.secret_id
}

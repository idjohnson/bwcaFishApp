This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Helm install

You can use helm to deploy.

```
$ helm install bwcafish --set ingress.enabled=true \
   --set ingress.host=bwcafish.steeped.space --set telemetry.enabled=true \
   --set telemetry.otelApiKey=xxxxxxxxxxxxxxxxxxNRAL charts/bwcafishapp/
```

## Terraform Deployment

This project includes Terraform configuration to deploy the application to Google Cloud Run. To use it, you will need to have [Terraform](https.www.terraform.io/downloads.html) and the [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) installed.

1. **Authenticate with Google Cloud:**

   ```bash
   gcloud auth login
   gcloud auth application-default login
   ```

2. **Set the project ID:**

   ```bash
   gcloud config set project YOUR_PROJECT_ID
   ```

3. **Enable the required APIs:**

   ```bash
   gcloud services enable cloudbuild.googleapis.com
   gcloud services enable artifactregistry.googleapis.com
   gcloud services enable run.googleapis.com
   ```

4. **Build and push the Docker image:**

   ```bash
   gcloud builds submit --tag $(gcloud artifacts repositories describe bwcafishapp-repo --location=us-central1 --format='value(name)')/bwcafishapp:latest .
   ```

5. **Initialize and apply the Terraform configuration:**

   ```bash
   cd terraform
   terraform init
   terraform apply -var="project_id=YOUR_PROJECT_ID"
   ```

This will deploy the application to Cloud Run and output the URL of the service.
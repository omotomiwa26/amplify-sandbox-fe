# Amplify CloudPulse

An interactive dashboard that proves your Next.js app is deployed, monitored, and fully automated on AWS, all managed as code with Terraform.

## Overview

Amplify CloudPulse gives you a single-pane view into a modern full-stack deployment. Instead of juggling CLI outputs and separate dashboards, you get a live, simulated feed of your CloudFront edge metrics, serverless SSR latency, build pipeline logs, and even a Terraform inspector right in the browser. It's built to demonstrate that a Next.js App Router application can be provisioned, deployed, and monitored on AWS Amplify Gen 2, all driven by HashiCorp Terraform, without manual clicking in a console.

This project is for engineers who want to show recruiters or teammates that they can design an end-to-end cloud deployment workflow and present it clearly. The dashboard walks through every layer - from the client request to the edge cache to the serverless compute - with interactive toggles, copyable code snippets, and real-time simulated data. No clunky setup, just a clean, modern UI that tells the infrastructure story.

## Installation

Clone the repository and fire up the development server. You'll also find the Terraform configuration files in the `terraform-amplify-sandbox/` directory, which you can adapt to deploy the app live.

```bash
git clone https://github.com/omotomiwa26/amplify-sandbox-fe.git
cd amplify-sandbox-fe
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the dashboard.

For the Terraform provisioning, you'll need AWS credentials and a GitHub token stored in Secrets Manager. The Terraform code expects a secret named `sandbox/github/amplify-token`. Once configured:

```bash
cd terraform-amplify-sandbox
terraform init
terraform apply
```

The outputs will give you the live Amplify URL.

## Usage

The dashboard is organized into distinct, self-contained sections. Each one runs entirely in the browser and simulates realistic data from an AWS Amplify deployment.

- **Hero & Header:** Shows the live deployment status badge, uptime counter, tech stack tags, and a quick command copy for `terraform apply`. The header pulses a green indicator when the app is live.
- **Live Deployment Telemetry (Metrics):** Displays CloudFront cache hit rate, SSR execution latency, and total edge requests. A "Ping Edge Nodes" button refreshes the simulated latency for four global regions.
- **Interactive AWS Infrastructure Topology (ArchitectureMap):** Five clickable cards represent the request flow – Client Browser, CloudFront CDN, AWS Amplify Hosting, Next.js SSR Engine, and Terraform IaC. Selecting a card reveals its role, tech stack, and capabilities.
- **Serverless API Tester:** Simulate HTTP requests against the app's API layer. Choose a method (GET, POST, PUT), set the endpoint path, and hit "Execute". The response panel shows status, latency, region, and a JSON payload, all mimicking Amplify's SSR compute.
- **Terraform Inspector:** View the actual Terraform code that provisions the Amplify app. Tabs let you inspect `main.tf`, `variables.tf`, and `outputs.tf` side by side, with a copy button.
- **Live Deployment Log Stream:** A terminal-like pane streams simulated log entries from the Amplify build pipeline. You can filter by phase (ALL, BUILD, DEPLOY) and pause/resume the stream.

All interactions are client-side and don't require a running backend, so the dashboard remains fully functional even without an active AWS account.

## Features

- **Full deployment demo in the browser:** See how a Next.js app gets from a `git push` to a global CloudFront distribution, all simulated realistically.
- **Interactive infrastructure map:** Click through architectural nodes to understand each layer's job, from DNS resolution to serverless SSR.
- **Live telemetry simulation:** CloudFront cache hit rates, global edge latencies, and request counts update on demand with visually pleasing progress bars.
- **API sandbox:** Test mock endpoints with GET, POST, or PUT and receive latency, region, and JSON payload responses.
- **Terraform code inspector:** Browse, copy, and study the exact HCL files that craft the Amplify app, IAM role, and branch setup.
- **Real-time log streaming:** Simulated build and deployment logs filterable by phase, reinforcing the CI/CD narrative.
- **Clean, recruiter-friendly presentation:** Glassmorphism UI with subtle glows and professional typography, no clutter.

## Technologies Used

| Technology | Purpose |
|------------|---------|
| [Next.js](https://nextjs.org/) | React framework for static + SSR pages (App Router v16) |
| [TypeScript](https://www.typescriptlang.org/) | Type safety across the codebase |
| [React](https://react.dev/) | UI library for client components (v19) |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling with custom glassmorphism classes |
| [AWS Amplify](https://aws.amazon.com/amplify/) | Managed hosting, CI/CD, and serverless SSR |
| [Terraform](https://www.terraform.io/) | IaC to provision Amplify app, branch, IAM role |
| [AWS CloudFront](https://aws.amazon.com/cloudfront/) | Global edge caching and SSL (simulated in dashboard) |
| [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/) | Securely store GitHub token for Amplify access |

## Contributing

Contributions are welcome. If you have ideas for improving the dashboard, adding real API integrations, or enhancing the simulation models, feel free to open an issue or pull request. Please keep the UI clean and the code modular.

## Author

- LinkedIn: [https://linkedin.com/in/omotomiwa afonja](https://linkedin.com/in/omotomiwa%20afonja)
- X (Twitter): [https://x.com/i_am_omotomiwa](https://x.com/i_am_omotomiwa)

## Badges

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![AWS Amplify](https://img.shields.io/badge/AWS_Amplify-FF9900?style=for-the-badge&logo=awsamplify&logoColor=white)](https://aws.amazon.com/amplify/)
[![Terraform](https://img.shields.io/badge/Terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white)](https://www.terraform.io/)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://dokugen.samueltuoyo.com)
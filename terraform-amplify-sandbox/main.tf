# 1. Read the GitHub Token from AWS Secrets Manager
data "aws_secretsmanager_secret_version" "github_token" {
  secret_id = var.github_token_secret_name
}

# 2. IAM Role for AWS Amplify Hosting
resource "aws_iam_role" "amplify_role" {
  name = "${var.app_name}-amplify-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "amplify.amazonaws.com"
        }
      }
    ]
  })
}

# 3. Attach standard permissions for Amplify SSR builds
resource "aws_iam_role_policy_attachment" "amplify_policy" {
  role       = aws_iam_role.amplify_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmplifyBackendDeployFullAccess"
}

# 4. Create the Amplify Application (WEB_COMPUTE for Next.js SSR)
resource "aws_amplify_app" "nextjs_app" {
  name                  = var.app_name
  repository            = var.repository_url
  access_token          = data.aws_secretsmanager_secret_version.github_token.secret_string
  iam_service_role_arn  = aws_iam_role.amplify_role.arn
  platform              = "WEB_COMPUTE"

  build_spec = <<-EOT
    version: 1
    frontend:
      phases:
        preBuild:
          commands:
            - npm ci
        build:
          commands:
            - npm run build
      artifacts:
        baseDirectory: .next
        files:
          - '**/*'
      cache:
        paths:
          - node_modules/**/*
          - .next/cache/**/*
  EOT
}

# 5. Connect the Git Branch and Enable Auto-Build
resource "aws_amplify_branch" "main_branch" {
  app_id            = aws_amplify_app.nextjs_app.id
  branch_name       = var.branch_name
  enable_auto_build = true
  framework         = "Next.js - SSR"
}
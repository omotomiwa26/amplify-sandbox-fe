variable "app_name" {
  description = "The name of the Amplify application"
  type        = string
}

variable "repository_url" {
  description = "The URL of the GitHub repository"
  type        = string
}

variable "github_token_secret_name" {
  description = "The secret name in AWS Secrets Manager holding the GitHub token"
  type        = string
}

variable "branch_name" {
  description = "The Git branch to deploy"
  type        = string
  default     = "main" # Safe to keep as a default since 'main' is standard
}
output "amplify_app_id" {
  description = "The unique ID of the Amplify App"
  value       = aws_amplify_app.nextjs_app.id
}

output "default_domain" {
  description = "Your live sandbox website URL"
  value       = "https://${aws_amplify_branch.main_branch.branch_name}.${aws_amplify_app.nextjs_app.default_domain}"
}
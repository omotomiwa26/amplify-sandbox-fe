import React from "react";
import { IconAws, IconTerraform, IconNextjs, IconExternalLink } from "./Icons";

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-800/80 bg-slate-950/80 py-10 mt-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div>
          <div className="flex items-center space-x-2">
            <span className="font-bold text-white text-sm">AWS Amplify Terraform Sandbox</span>
            <span className="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-300 font-mono">Demo Build</span>
          </div>
          <p className="text-slate-500 mt-1">
            Built for verifying live AWS Amplify web app deployment workflows provisioned via Terraform IaC.
          </p>
        </div>

        <div className="flex items-center space-x-6">
          <a
            href="https://docs.aws.amazon.com/amplify/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 hover:text-amber-400 transition-colors"
          >
            <IconAws className="w-4 h-4 text-amber-500" />
            <span>AWS Amplify Docs</span>
            <IconExternalLink className="w-3 h-3 text-slate-500" />
          </a>

          <a
            href="https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/amplify_app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 hover:text-purple-400 transition-colors"
          >
            <IconTerraform className="w-4 h-4 text-purple-400" />
            <span>Terraform AWS Provider</span>
            <IconExternalLink className="w-3 h-3 text-slate-500" />
          </a>

          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 hover:text-white transition-colors"
          >
            <IconNextjs className="w-4 h-4 text-white" />
            <span>Next.js Docs</span>
            <IconExternalLink className="w-3 h-3 text-slate-500" />
          </a>
        </div>

      </div>
    </footer>
  );
}

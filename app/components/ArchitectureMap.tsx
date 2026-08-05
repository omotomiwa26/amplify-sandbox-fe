"use client";

import React, { useState } from "react";
import { IconGlobe, IconAws, IconServer, IconTerraform, IconCheck, IconShield, IconLayers } from "./Icons";

interface NodeDetail {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  tech: string;
  description: string;
  specs: string[];
}

export function ArchitectureMap() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>("amplify");

  const nodes: NodeDetail[] = [
    {
      id: "client",
      title: "Client Browser",
      subtitle: "End User Request",
      icon: IconGlobe,
      tech: "HTTP/3 • SSL",
      description: "User issues a request from anywhere in the world to your custom domain or AWS Amplify default URL.",
      specs: ["TLS 1.3 Encryption", "DNS Resolution via Route 53 / Amplify", "Brotli Compression"],
    },
    {
      id: "cloudfront",
      title: "Amazon CloudFront CDN",
      subtitle: "Global Edge Network",
      icon: IconShield,
      tech: "AWS Edge Locations",
      description: "Distributed content delivery network caches static files (JS/CSS/Images) and forwards SSR requests to Compute nodes.",
      specs: ["300+ Edge POPs", "Automatic DDoS Protection (Shield)", "Sub-20ms edge cache hits"],
    },
    {
      id: "amplify",
      title: "AWS Amplify Hosting",
      subtitle: "Managed Web Hosting",
      icon: IconAws,
      tech: "AWS Amplify Gen 2",
      description: "Full-stack web hosting framework configured via Terraform. Connects directly to GitHub repo for continuous deployment.",
      specs: ["Automated CI/CD Builds", "Custom Domain Management", "Branch-based Staging & Production"],
    },
    {
      id: "ssr",
      title: "Next.js SSR Engine",
      subtitle: "Serverless SSR Compute",
      icon: IconServer,
      tech: "Lambda@Edge / Compute",
      description: "Executes Next.js App Router dynamic routes, server actions, and API routes on demand with zero server maintenance.",
      specs: ["Next.js 16 App Router", "React 19 Server Components", "On-Demand Serverless Scaling"],
    },
    {
      id: "terraform",
      title: "Terraform IaC",
      subtitle: "Infrastructure Provisioner",
      icon: IconTerraform,
      tech: "HashiCorp Terraform",
      description: "Declarative infrastructure as code provisions the AWS Amplify App, branch associations, environment variables, and IAM roles.",
      specs: ["aws_amplify_app resource", "aws_amplify_branch configuration", "Automated State File Sync"],
    },
  ];

  const activeNode = nodes.find((n) => n.id === selectedNodeId) || nodes[2];

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <IconLayers className="w-5 h-5 text-indigo-400" />
            Interactive AWS Infrastructure Topology
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Click on any architectural node below to inspect its operational role and configuration in this deployment.
          </p>
        </div>

        {/* Nodes Timeline Diagram */}
        <div className="glass-panel p-6 rounded-2xl mb-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
            
            {nodes.map((node, idx) => {
              const Icon = node.icon;
              const isSelected = node.id === selectedNodeId;

              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  className={`relative p-4 rounded-xl text-left transition-all ${
                    isSelected
                      ? "bg-slate-900 border-2 border-amber-500/80 shadow-lg shadow-amber-500/10"
                      : "bg-slate-950/60 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`p-2 rounded-lg ${
                        isSelected ? "bg-amber-500/20 text-amber-400" : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">Step 0{idx + 1}</span>
                  </div>

                  <h3 className="text-xs font-bold text-slate-200">{node.title}</h3>
                  <p className="text-[11px] text-slate-400 mt-0.5">{node.subtitle}</p>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40">
                      {node.tech}
                    </span>
                  </div>
                </button>
              );
            })}

          </div>
        </div>

        {/* Selected Node Details Box */}
        <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-amber-500">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-800">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                {React.createElement(activeNode.icon, { className: "w-6 h-6" })}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{activeNode.title}</h3>
                <p className="text-xs text-amber-400 font-mono">{activeNode.subtitle} • {activeNode.tech}</p>
              </div>
            </div>

            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              <IconCheck className="w-3.5 h-3.5" />
              <span>Configured & Verified</span>
            </span>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            {activeNode.description}
          </p>

          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Technical Capabilities</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {activeNode.specs.map((spec, i) => (
                <div key={i} className="flex items-center space-x-2 bg-slate-950/80 px-3 py-2 rounded-lg border border-slate-800/80 text-xs text-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

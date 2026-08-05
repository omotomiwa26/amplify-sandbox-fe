"use client";

import React, { useState } from "react";
import { IconAws, IconTerraform, IconNextjs, IconCheck, IconActivity, IconExternalLink, IconCopy } from "./Icons";

export function Hero() {
  const [copied, setCopied] = useState(false);
  const repoUrl = "https://github.com/omotomiwa26/amplify-sandbox-fe";

  const copyToClipboard = () => {
    navigator.clipboard.writeText("terraform apply -auto-approve");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-12 pb-8 overflow-hidden">
      {/* Background Lighting Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-amber-500/10 via-cyan-500/10 to-purple-500/10 blur-3xl pointer-events-none -z-10 rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs text-slate-300 shadow-xl backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-slate-200">Live Amplify Sandbox Ready</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Terraform + AWS Amplify Web Hosting</span>
          </div>
        </div>

        {/* Main Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            AWS Amplify Next.js <br />
            <span className="bg-gradient-to-r from-amber-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Infrastructure Showcase
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A production-grade Next.js application automated and deployed onto <strong className="text-amber-400 font-semibold">AWS Amplify</strong> using <strong className="text-purple-400 font-semibold">Terraform IaC</strong>.
          </p>
        </div>

        {/* Quick Action Buttons & Command Snippet */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center space-x-3 bg-slate-950/90 border border-slate-800 rounded-xl px-4 py-2.5 shadow-2xl font-mono text-sm">
            <span className="text-emerald-400">$</span>
            <span className="text-slate-200">terraform apply</span>
            <button
              onClick={copyToClipboard}
              className="ml-2 text-slate-400 hover:text-white transition-colors p-1 rounded-md hover:bg-slate-800"
              title="Copy Terraform Command"
            >
              {copied ? <IconCheck className="w-4 h-4 text-emerald-400" /> : <IconCopy className="w-4 h-4" />}
            </button>
          </div>

          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-semibold text-sm shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02]"
          >
            <span>View Source Repository</span>
            <IconExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="glass-panel p-5 rounded-2xl border border-slate-800/80 hover:border-amber-500/40 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <IconAws className="w-5 h-5" />
              </span>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Active</span>
            </div>
            <h3 className="text-sm font-semibold text-slate-200">AWS Amplify Hosting</h3>
            <p className="text-xs text-slate-400 mt-1">Automatic branch builds, SSR compute, global CDN integration.</p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-800/80 hover:border-purple-500/40 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <IconTerraform className="w-5 h-5" />
              </span>
              <span className="text-xs font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">Automated</span>
            </div>
            <h3 className="text-sm font-semibold text-slate-200">Terraform Provisioned</h3>
            <p className="text-xs text-slate-400 mt-1">Declarative infrastructure setup with branch connection & app configs.</p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <IconNextjs className="w-5 h-5" />
              </span>
              <span className="text-xs font-mono text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">v16.3</span>
            </div>
            <h3 className="text-sm font-semibold text-slate-200">Next.js App Router</h3>
            <p className="text-xs text-slate-400 mt-1">React 19 Server & Client Components optimized for edge performance.</p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-800/80 hover:border-emerald-500/40 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <IconActivity className="w-5 h-5" />
              </span>
              <span className="text-xs font-mono text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">99.99%</span>
            </div>
            <h3 className="text-sm font-semibold text-slate-200">Global Edge Network</h3>
            <p className="text-xs text-slate-400 mt-1">Low-latency CloudFront edge caching with automated SSL certificates.</p>
          </div>

        </div>

      </div>
    </section>
  );
}

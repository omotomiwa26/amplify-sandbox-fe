"use client";

import React, { useState, useEffect } from "react";
import { IconAws, IconTerraform, IconNextjs, IconGlobe, IconCheck } from "./Icons";

export function Header() {
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setUptime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatUptime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins > 0 ? `${mins}m ` : ""}${secs}s`;
  };

  return (
    <header className="relative w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Status */}
          <div className="flex items-center space-x-4">
            <div className="relative group flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 via-orange-600 to-indigo-600 p-0.5 shadow-lg shadow-amber-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <IconAws className="w-6 h-6 text-amber-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                  Amplify CloudPulse
                </h1>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping mr-1.5"></span>
                  v1.0.0
                </span>
              </div>
              <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                <span>Infrastructure as Code</span>
                <span className="text-slate-600">•</span>
                <span className="text-cyan-400 font-mono">AWS Amplify Gen 2</span>
              </p>
            </div>
          </div>

          {/* Infrastructure Tech Badges */}
          <div className="hidden md:flex items-center space-x-3">
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300">
              <IconTerraform className="w-4 h-4 text-purple-400" />
              <span>Terraform Managed</span>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300">
              <IconNextjs className="w-4 h-4 text-white" />
              <span>Next.js 16 SSR</span>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-400">
              <IconCheck className="w-4 h-4" />
              <span>Deployment Active</span>
            </div>
          </div>

          {/* Global Region & Live Uptime Badge */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-medium text-slate-300">
              <IconGlobe className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="font-mono text-cyan-300">us-east-1</span>
              <span className="w-1 h-1 rounded-full bg-slate-700"></span>
              <span className="text-slate-400 font-mono">{formatUptime(uptime)}</span>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

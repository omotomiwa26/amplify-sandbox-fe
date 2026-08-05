"use client";

import React, { useState } from "react";
import { IconActivity, IconRefresh, IconCheck, IconServer, IconShield, IconGlobe } from "./Icons";

interface EdgeRegion {
  name: string;
  code: string;
  latency: number;
  status: "optimal" | "testing" | "ready";
}

export function Metrics() {
  const [testing, setTesting] = useState(false);
  const [regions, setRegions] = useState<EdgeRegion[]>([
    { name: "US East (N. Virginia)", code: "us-east-1", latency: 14, status: "optimal" },
    { name: "EU West (Ireland)", code: "eu-west-1", latency: 38, status: "optimal" },
    { name: "Asia Pacific (Tokyo)", code: "ap-northeast-1", latency: 85, status: "optimal" },
    { name: "South America (São Paulo)", code: "sa-east-1", latency: 112, status: "optimal" },
  ]);

  const [cacheHitRate, setCacheHitRate] = useState(99.4);
  const [ssrLatency, setSsrLatency] = useState(12);
  const [requestsTotal, setRequestsTotal] = useState(14820);

  const runLatencyCheck = () => {
    setTesting(true);
    setRegions((prev) => prev.map((r) => ({ ...r, status: "testing" })));

    setTimeout(() => {
      setRegions([
        { name: "US East (N. Virginia)", code: "us-east-1", latency: Math.floor(10 + Math.random() * 8), status: "optimal" },
        { name: "EU West (Ireland)", code: "eu-west-1", latency: Math.floor(32 + Math.random() * 12), status: "optimal" },
        { name: "Asia Pacific (Tokyo)", code: "ap-northeast-1", latency: Math.floor(75 + Math.random() * 20), status: "optimal" },
        { name: "South America (São Paulo)", code: "sa-east-1", latency: Math.floor(100 + Math.random() * 25), status: "optimal" },
      ]);
      setCacheHitRate(+(99.2 + Math.random() * 0.6).toFixed(1));
      setSsrLatency(Math.floor(9 + Math.random() * 8));
      setRequestsTotal((prev) => prev + Math.floor(10 + Math.random() * 50));
      setTesting(false);
    }, 900);
  };

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <IconActivity className="w-5 h-5 text-amber-400" />
              Live Deployment Telemetry
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Simulated edge performance & global distribution metrics on AWS Amplify CloudFront CDN.
            </p>
          </div>

          <button
            onClick={runLatencyCheck}
            disabled={testing}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-500/50 text-slate-200 text-xs font-semibold transition-all disabled:opacity-50"
          >
            <IconRefresh className={`w-4 h-4 text-amber-400 ${testing ? "animate-spin" : ""}`} />
            <span>{testing ? "Pinging Edge Nodes..." : "Ping Edge Nodes"}</span>
          </button>
        </div>

        {/* Top 3 High Level Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          
          <div className="glass-panel p-5 rounded-2xl relative overflow-hidden group">
            <div className="flex items-center justify-between text-slate-400 mb-2 text-xs font-medium">
              <span>CloudFront Cache Hit Rate</span>
              <IconShield className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-extrabold text-white font-mono">{cacheHitRate}%</span>
              <span className="text-xs text-emerald-400 font-semibold">▲ +0.4%</span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full mt-4 overflow-hidden">
              <div
                className="bg-gradient-to-r from-cyan-500 to-emerald-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${cacheHitRate}%` }}
              />
            </div>
            <p className="text-[11px] text-slate-400 mt-2">Static & SSG assets served directly from Edge</p>
          </div>

          <div className="glass-panel p-5 rounded-2xl relative overflow-hidden group">
            <div className="flex items-center justify-between text-slate-400 mb-2 text-xs font-medium">
              <span>Next.js SSR Execution</span>
              <IconServer className="w-4 h-4 text-purple-400" />
            </div>
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-extrabold text-white font-mono">{ssrLatency}ms</span>
              <span className="text-xs text-purple-400 font-semibold">Ultra Fast</span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full mt-4 overflow-hidden">
              <div
                className="bg-gradient-to-r from-purple-500 to-indigo-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, (ssrLatency / 50) * 100)}%` }}
              />
            </div>
            <p className="text-[11px] text-slate-400 mt-2">Dynamic SSR serverless response latency</p>
          </div>

          <div className="glass-panel p-5 rounded-2xl relative overflow-hidden group">
            <div className="flex items-center justify-between text-slate-400 mb-2 text-xs font-medium">
              <span>Total Simulated Edge Requests</span>
              <IconGlobe className="w-4 h-4 text-amber-400" />
            </div>
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-extrabold text-white font-mono">
                {requestsTotal.toLocaleString()}
              </span>
              <span className="text-xs text-amber-400 font-semibold">Req / min</span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full mt-4 overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500 to-orange-400 h-full rounded-full w-4/5 animate-pulse" />
            </div>
            <p className="text-[11px] text-slate-400 mt-2">Automatically load-balanced by AWS CloudFront</p>
          </div>

        </div>

        {/* Global Regional Latency Grid */}
        <div className="glass-panel p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              Regional Edge Node Latencies
            </h3>
            <span className="text-xs text-slate-400 font-mono">HTTP/3 TLS 1.3</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {regions.map((region) => (
              <div
                key={region.code}
                className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-300">{region.name}</span>
                  <span className="text-[10px] font-mono text-slate-500">{region.code}</span>
                </div>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <span className="text-2xl font-bold font-mono text-white">
                      {region.latency}
                      <span className="text-xs font-normal text-slate-400 ml-1">ms</span>
                    </span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-xs text-emerald-400 font-medium">
                    <IconCheck className="w-3.5 h-3.5" />
                    <span>Ready</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

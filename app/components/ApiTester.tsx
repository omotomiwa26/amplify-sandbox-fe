"use client";

import React, { useState } from "react";
import { IconCode, IconPlay, IconCheck, IconCopy, IconRefresh } from "./Icons";

export function ApiTester() {
  const [method, setMethod] = useState<"GET" | "POST" | "PUT">("GET");
  const [endpoint, setEndpoint] = useState("/api/amplify/status");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const [response, setResponse] = useState<any>({
    status: 200,
    statusText: "OK - Deployed via AWS Amplify",
    latencyMs: 16,
    region: "us-east-1",
    timestamp: "2026-08-05T14:30:00.000Z",
    payload: {
      provider: "AWS Amplify",
      framework: "Next.js 16 (App Router)",
      iac: "HashiCorp Terraform",
      branch: "main",
      environment: "production",
      health: "100% Operational",
      features: [
        "Global Edge CDN Acceleration",
        "Automated SSL Certificate",
        "SSR Serverless Functions",
        "Git-driven Continuous Deployment"
      ]
    }
  });

  const handleTestApi = () => {
    setLoading(true);
    const start = performance.now();

    setTimeout(() => {
      const duration = Math.round(performance.now() - start);
      setResponse({
        status: 200,
        statusText: "200 OK - Edge Response",
        latencyMs: Math.max(12, duration),
        region: "us-east-1",
        timestamp: new Date().toISOString(),
        request: {
          method,
          url: endpoint,
        },
        payload: {
          message: "AWS Amplify Serverless API response generated successfully!",
          buildId: "amp-build-" + Math.floor(Math.random() * 899999 + 100000),
          requestedAt: new Date().toLocaleTimeString(),
          terraformManaged: true,
          amplifyAppId: "d1a2b3c4d5e6f7",
          edgeCacheStatus: "HIT from CloudFront",
        }
      });
      setLoading(false);
    }, 450);
  };

  const copyResponse = () => {
    navigator.clipboard.writeText(JSON.stringify(response, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <IconCode className="w-5 h-5 text-cyan-400" />
            Interactive Serverless API Tester
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Test requests against the simulated Next.js Serverless API layer running on AWS Amplify.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Controls Column */}
          <div className="lg:col-span-5 glass-panel p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                HTTP Method & Endpoint
              </label>
              
              <div className="flex space-x-2 mb-4">
                {(["GET", "POST", "PUT"] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => setMethod(m)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                      method === m
                        ? m === "GET"
                          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                          : m === "POST"
                          ? "bg-amber-500/20 text-amber-400 border border-amber-500/40"
                          : "bg-purple-500/20 text-purple-400 border border-purple-500/40"
                        : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-white"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>

              <div className="mb-4">
                <label className="block text-xs text-slate-400 mb-1">Target Path</label>
                <input
                  type="text"
                  value={endpoint}
                  onChange={(e) => setEndpoint(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs font-mono text-cyan-300 focus:outline-none focus:border-cyan-500/60"
                />
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 mb-4">
                <h4 className="text-xs font-semibold text-slate-300 mb-2">Simulated Headers</h4>
                <div className="space-y-1 font-mono text-[11px] text-slate-400">
                  <p><span className="text-slate-500">x-amz-amplify-app:</span> terraform-sandbox</p>
                  <p><span className="text-slate-500">x-amz-cf-id:</span> Amplified-Edge-Node</p>
                  <p><span className="text-slate-500">content-type:</span> application/json</p>
                </div>
              </div>
            </div>

            <button
              onClick={handleTestApi}
              disabled={loading}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <IconRefresh className="w-4 h-4 animate-spin" />
                  <span>Executing Serverless Request...</span>
                </>
              ) : (
                <>
                  <IconPlay className="w-4 h-4" />
                  <span>Execute Endpoint Request</span>
                </>
              )}
            </button>
          </div>

          {/* Response Inspector Column */}
          <div className="lg:col-span-7 glass-panel p-6 rounded-2xl flex flex-col">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
              <div className="flex items-center space-x-3">
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/30 font-mono">
                  {response.status || 200} OK
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Latency: <strong className="text-white">{response.latencyMs || 14}ms</strong>
                </span>
              </div>

              <button
                onClick={copyResponse}
                className="inline-flex items-center space-x-1 text-xs text-slate-400 hover:text-white px-2.5 py-1 rounded bg-slate-900 border border-slate-800"
              >
                {copied ? <IconCheck className="w-3.5 h-3.5 text-emerald-400" /> : <IconCopy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied" : "Copy JSON"}</span>
              </button>
            </div>

            {/* Code Output */}
            <div className="flex-1 bg-slate-950 rounded-xl p-4 border border-slate-800 font-mono text-xs overflow-x-auto text-emerald-300">
              <pre>{JSON.stringify(response, null, 2)}</pre>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

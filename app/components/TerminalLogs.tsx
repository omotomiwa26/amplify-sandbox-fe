"use client";

import React, { useState, useEffect } from "react";
import { IconTerminal, IconPlay, IconCheck, IconRefresh } from "./Icons";

interface LogEntry {
  id: string;
  time: string;
  phase: "PROVISION" | "BUILD" | "DEPLOY" | "INFO";
  text: string;
}

export function TerminalLogs() {
  const [filter, setFilter] = useState<"ALL" | "BUILD" | "DEPLOY">("ALL");
  const [paused, setPaused] = useState(false);

  const [logs, setLogs] = useState<LogEntry[]>([
    { id: "1", time: "14:32:01", phase: "PROVISION", text: "Terraform plan initialized: 2 resources to add (aws_amplify_app, aws_amplify_branch)." },
    { id: "2", time: "14:32:04", phase: "PROVISION", text: "aws_amplify_app.nextjs_sandbox: Creation complete after 3s [id=d1a2b3c4d5e6f7]" },
    { id: "3", time: "14:32:08", phase: "BUILD", text: "Amplify Build Pipeline Triggered from commit: main (feat: production showcase)" },
    { id: "4", time: "14:32:12", phase: "BUILD", text: "Executing preBuild phase: npm ci (Installed 348 dependencies in 4.2s)" },
    { id: "5", time: "14:32:20", phase: "BUILD", text: "Executing build phase: next build --turbopack (Compiled static & SSR routes)" },
    { id: "6", time: "14:32:26", phase: "DEPLOY", text: "Deploying Next.js 16 SSR Bundle to AWS Amplify Web Compute Edge..." },
    { id: "7", time: "14:32:30", phase: "DEPLOY", text: "Global CloudFront distribution invalidation broadcast complete." },
    { id: "8", time: "14:32:32", phase: "INFO", text: "✓ Deployment Live & Healthy: https://main.d1a2b3c4d5e6f7.amplifyapp.com" },
  ]);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      const timeStr = new Date().toLocaleTimeString();
      const randomLogs: Omit<LogEntry, "id">[] = [
        { time: timeStr, phase: "INFO", text: `CloudFront edge health check ping: 200 OK (latency: ${Math.floor(10 + Math.random() * 8)}ms)` },
        { time: timeStr, phase: "DEPLOY", text: `Automated SSL certificate auto-renew verified for *.amplifyapp.com` },
        { time: timeStr, phase: "BUILD", text: `Next.js App Router cache revalidated for dynamic server components` },
      ];

      const newLog = {
        ...randomLogs[Math.floor(Math.random() * randomLogs.length)],
        id: Math.random().toString(),
      };

      setLogs((prev) => [...prev.slice(-15), newLog]);
    }, 4000);

    return () => clearInterval(interval);
  }, [paused]);

  const filteredLogs = filter === "ALL" ? logs : logs.filter((l) => l.phase === filter);

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <IconTerminal className="w-5 h-5 text-emerald-400" />
              AWS Amplify Live Deployment Log Stream
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Real-time pipeline logs streamed directly from AWS Amplify build console.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
              {(["ALL", "BUILD", "DEPLOY"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                    filter === f
                      ? "bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/40"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            <button
              onClick={() => setPaused(!paused)}
              className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300 hover:text-white"
            >
              {paused ? "Resume Stream" : "Pause Stream"}
            </button>
          </div>
        </div>

        {/* Terminal Window */}
        <div className="glass-panel rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
          <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-mono text-slate-300">AWS Amplify Build Console stdout</span>
            </div>
            <span className="text-[11px] font-mono text-slate-500">Auto-scroll Active</span>
          </div>

          <div className="p-5 bg-slate-950/95 font-mono text-xs space-y-2 max-h-72 overflow-y-auto">
            {filteredLogs.map((log) => (
              <div key={log.id} className="flex items-start space-x-3 text-slate-300">
                <span className="text-slate-500 shrink-0">{log.time}</span>
                <span
                  className={`px-1.5 py-0.5 rounded text-[10px] font-bold shrink-0 ${
                    log.phase === "PROVISION"
                      ? "bg-purple-950 text-purple-400 border border-purple-800"
                      : log.phase === "BUILD"
                      ? "bg-amber-950 text-amber-400 border border-amber-800"
                      : log.phase === "DEPLOY"
                      ? "bg-cyan-950 text-cyan-400 border border-cyan-800"
                      : "bg-emerald-950 text-emerald-400 border border-emerald-800"
                  }`}
                >
                  {log.phase}
                </span>
                <span className="text-slate-200">{log.text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

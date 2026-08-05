import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Metrics } from "./components/Metrics";
import { ArchitectureMap } from "./components/ArchitectureMap";
import { ApiTester } from "./components/ApiTester";
import { TerraformViewer } from "./components/TerraformViewer";
import { TerminalLogs } from "./components/TerminalLogs";
import { Footer } from "./components/Footer";

export const metadata = {
  title: "AWS Amplify + Terraform Demo | Next.js Deployment Showcase",
  description: "Live Next.js demo application provisioned with Terraform IaC and deployed on AWS Amplify Gen 2 hosting.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 bg-grid-pattern selection:bg-amber-500 selection:text-slate-950 flex flex-col justify-between">
      <Header />
      <main className="flex-1 space-y-4">
        <Hero />
        <Metrics />
        <ArchitectureMap />
        <ApiTester />
        <TerraformViewer />
        <TerminalLogs />
      </main>
      <Footer />
    </div>
  );
}

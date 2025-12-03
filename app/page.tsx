"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  FileSearch,
  FileSpreadsheet,
  Brain,
  Shield,
  Zap,
  Users,
  ChevronRight,
  Lock,
} from "lucide-react";
import { motion } from "motion/react";

/*
 * Design System:
 * - 8-point grid: all spacing uses multiples of 8px
 * - Type Scale (Major Third 1.25)
 * - Font Pairing: Geist Sans (UI), Source Serif 4 (headlines), Geist Mono (data)
 * - Aesthetic: Finance + Tech brutalism, dithered textures, Excel/grid references
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - 64px height (8 * 8) */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-zinc-900 px-6 lg:px-8">
        <div className="max-w-[1120px] mx-auto h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-zinc-900 flex items-center justify-center">
              <span className="text-white font-mono font-bold text-sm">D</span>
            </div>
            <span className="font-mono font-medium text-zinc-900 text-sm tracking-tight">
              DEALTEAM
            </span>
            <span className="hidden sm:inline font-mono text-[10px] text-zinc-400 ml-2">
              v0.1.0
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#features"
              className="text-xs font-mono text-zinc-600 hover:text-zinc-900 transition-colors hidden sm:block uppercase tracking-wider"
            >
              Features
            </a>
            <a
              href="#security"
              className="text-xs font-mono text-zinc-600 hover:text-zinc-900 transition-colors hidden sm:block uppercase tracking-wider"
            >
              Security
            </a>
            <Button
              size="sm"
              className="bg-zinc-900 text-white hover:bg-zinc-700 h-8 px-4 text-xs font-mono uppercase tracking-wider rounded-none"
            >
              Request Access
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full viewport height */}
      <section className="min-h-screen flex flex-col justify-center px-6 lg:px-8 pt-16 relative overflow-hidden">
        {/* Grid Background Pattern */}
        <div className="absolute inset-0 opacity-[0.04]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-[1120px] mx-auto w-full relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Copy */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge
                variant="outline"
                className="mb-8 px-3 py-1 text-xs font-mono bg-white text-zinc-900 border-zinc-900 rounded-none uppercase tracking-wider"
              >
                Private Beta
              </Badge>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-zinc-900 tracking-tight leading-[1.08] mb-6">
                The AI workspace for
                <br />
                <span className="text-zinc-400">investment teams</span>
              </h1>

              <p className="text-base sm:text-lg text-zinc-600 max-w-[480px] leading-relaxed mb-10">
                A private intelligence platform that accelerates deal review and
                underwriting. Built on your firm&apos;s knowledge, standards, and
                workflows.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Button
                  size="lg"
                  className="bg-zinc-900 text-white hover:bg-zinc-700 h-12 px-6 text-sm font-mono uppercase tracking-wider rounded-none"
                >
                  Request Early Access
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-6 text-sm font-mono uppercase tracking-wider text-zinc-900 border-zinc-900 hover:bg-zinc-100 rounded-none"
                >
                  Learn more
                </Button>
              </div>
            </motion.div>

            {/* Right: Stylized Spreadsheet Visual */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Corner brackets */}
                <div className="absolute -top-3 -left-3 w-6 h-6 border-l-2 border-t-2 border-zinc-900" />
                <div className="absolute -top-3 -right-3 w-6 h-6 border-r-2 border-t-2 border-zinc-900" />
                <div className="absolute -bottom-3 -left-3 w-6 h-6 border-l-2 border-b-2 border-zinc-900" />
                <div className="absolute -bottom-3 -right-3 w-6 h-6 border-r-2 border-b-2 border-zinc-900" />

                {/* Spreadsheet */}
                <div className="border border-zinc-900 bg-white">
                  {/* Header row */}
                  <div className="flex border-b border-zinc-900">
                    <div className="w-12 h-8 bg-zinc-100 border-r border-zinc-900 flex items-center justify-center">
                      <span className="font-mono text-[10px] text-zinc-400"></span>
                    </div>
                    {['A', 'B', 'C', 'D'].map((col) => (
                      <div key={col} className="flex-1 h-8 bg-zinc-100 border-r border-zinc-900 last:border-r-0 flex items-center justify-center">
                        <span className="font-mono text-[10px] text-zinc-500">{col}</span>
                      </div>
                    ))}
                  </div>

                  {/* Data rows */}
                  {[
                    { row: 1, data: ['Deal Name', 'Revenue', 'EBITDA', 'Multiple'] },
                    { row: 2, data: ['Acme Corp', '$12.4M', '$3.2M', '8.2x'] },
                    { row: 3, data: ['Beta Inc', '$8.7M', '$2.1M', '7.8x'] },
                    { row: 4, data: ['Gamma LLC', '$24.1M', '$6.8M', '9.1x'] },
                    { row: 5, data: ['Delta Co', '$15.3M', '$4.2M', '8.5x'] },
                  ].map(({ row, data }, idx) => (
                    <div key={row} className={`flex border-b border-zinc-200 last:border-b-0 ${idx === 0 ? 'bg-zinc-50' : ''}`}>
                      <div className="w-12 h-10 bg-zinc-100 border-r border-zinc-900 flex items-center justify-center">
                        <span className="font-mono text-[10px] text-zinc-500">{row}</span>
                      </div>
                      {data.map((cell, i) => (
                        <div key={i} className={`flex-1 h-10 border-r border-zinc-200 last:border-r-0 flex items-center px-3 ${idx === 0 ? 'font-medium' : ''}`}>
                          <span className={`font-mono text-xs ${i === 0 ? 'text-zinc-900' : 'text-zinc-600'} ${idx === 0 ? 'text-zinc-700 text-[10px] uppercase tracking-wider' : ''}`}>
                            {cell}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}

                  {/* Status bar */}
                  <div className="flex items-center justify-between px-3 py-2 bg-zinc-900 text-white">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-[10px] text-zinc-400">READY</span>
                      <span className="font-mono text-[10px] text-zinc-500">|</span>
                      <span className="font-mono text-[10px] text-zinc-400">4 deals loaded</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                      <span className="font-mono text-[10px] text-zinc-400">AI Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Metrics bar - styled like spreadsheet cells */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-20 lg:mt-24"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px flex-1 bg-zinc-200" />
              <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">Key Metrics</span>
              <div className="h-px flex-1 bg-zinc-200" />
            </div>
            <div className="flex flex-wrap gap-0 border border-zinc-900 w-fit">
              {[
                { value: '10x', label: 'Faster review', cell: 'A1' },
                { value: '100%', label: 'Private', cell: 'B1' },
                { value: '24/7', label: 'Available', cell: 'C1' },
              ].map((metric) => (
                <div key={metric.cell} className="px-6 sm:px-8 py-5 border-r border-zinc-900 last:border-r-0 relative group">
                  <div className="absolute top-1 left-1 font-mono text-[8px] text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity">
                    {metric.cell}
                  </div>
                  <div className="font-mono text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight tabular-nums">
                    {metric.value}
                  </div>
                  <div className="text-[10px] sm:text-xs font-mono text-zinc-500 mt-1 uppercase tracking-wider">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">Scroll</span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-4 h-6 border border-zinc-300 rounded-full flex items-start justify-center p-1"
            >
              <div className="w-1 h-1.5 bg-zinc-400 rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 lg:py-32 px-6 lg:px-8 bg-zinc-50 relative">
        {/* Row numbers on the side */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-zinc-100 border-r border-zinc-200 hidden xl:flex flex-col items-center pt-32 gap-[88px]">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <span key={n} className="font-mono text-[10px] text-zinc-400">{n}</span>
          ))}
        </div>

        <div className="max-w-[1120px] mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 lg:mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-5 bg-zinc-900 flex items-center justify-center">
                <span className="font-mono text-[10px] text-white">01</span>
              </div>
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                Capabilities
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-zinc-900 tracking-tight mb-4">
              Built for how you work
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 max-w-[480px] leading-relaxed">
              A primary agent orchestrates specialized sub-agents designed for
              investment workflows.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-px bg-zinc-900 border border-zinc-900">
            {[
              {
                icon: FileSearch,
                title: "Document Intelligence",
                description:
                  "Reads and analyzes CIMs, financial statements, and firm documents. Extracts key data points and identifies risks automatically.",
                cell: "A2",
              },
              {
                icon: FileSpreadsheet,
                title: "Excel Model Builder",
                description:
                  "Builds, runs, and iterates on financial models. Follows your firm's templates and underwriting standards.",
                cell: "B2",
              },
              {
                icon: Brain,
                title: "Research Agent",
                description:
                  "Searches the web, aggregates market data, and creates connections between research and investment facts.",
                cell: "A3",
              },
              {
                icon: Users,
                title: "Learns From You",
                description:
                  "A sandboxed reinforcement learning environment where the system learns your workflows simply by using it.",
                cell: "B3",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group p-6 lg:p-8 bg-white hover:bg-zinc-50 transition-colors duration-200 relative"
              >
                {/* Cell reference */}
                <div className="absolute top-2 right-2 font-mono text-[10px] text-zinc-300 group-hover:text-zinc-400 transition-colors">
                  {feature.cell}
                </div>

                <div className="w-10 h-10 border border-zinc-900 flex items-center justify-center mb-5">
                  <feature.icon className="h-5 w-5 text-zinc-900" />
                </div>
                <h3 className="text-base lg:text-lg font-semibold text-zinc-900 mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 relative">
        <div className="max-w-[1120px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 lg:mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-5 bg-zinc-900 flex items-center justify-center">
                <span className="font-mono text-[10px] text-white">02</span>
              </div>
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                Process
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-zinc-900 tracking-tight mb-4">
              From data to decision
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 max-w-[480px] leading-relaxed">
              Think Notebook LM with agentic capabilities—working alongside and
              for you, not just answering queries.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                step: "A1",
                title: "Upload Your Deal",
                description:
                  "Drop in CIMs, financial statements, market research, or any deal materials. The system ingests and indexes everything.",
                keys: ["⌘", "U"],
              },
              {
                step: "B1",
                title: "AI Analysis Begins",
                description:
                  "Specialized agents work in parallel—extracting financials, running your models, conducting market research.",
                keys: ["⌘", "⏎"],
              },
              {
                step: "C1",
                title: "Review & Iterate",
                description:
                  "Review the AI's work, provide feedback, and watch it improve. The system learns your preferences over time.",
                keys: ["⌘", "R"],
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connection line */}
                {index < 2 && (
                  <div className="hidden lg:block absolute top-4 left-full w-12 border-t border-dashed border-zinc-300" />
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-8 bg-zinc-900 text-white font-mono text-sm flex items-center justify-center">
                    {item.step}
                  </div>
                  {/* Keyboard shortcut */}
                  <div className="flex items-center gap-1">
                    {item.keys.map((key, i) => (
                      <span key={i} className="inline-flex items-center justify-center w-6 h-6 bg-zinc-100 border border-zinc-200 rounded font-mono text-[10px] text-zinc-500">
                        {key}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-zinc-900 mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-24 lg:py-32 px-6 lg:px-8 bg-zinc-900 text-white relative overflow-hidden">
        {/* Dither pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="securityDither" width="4" height="4" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="1" height="1" fill="white"/>
                <rect x="2" y="2" width="1" height="1" fill="white"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#securityDither)" />
          </svg>
        </div>

        <div className="max-w-[1120px] mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-5 bg-white flex items-center justify-center">
                  <span className="font-mono text-[10px] text-zinc-900">03</span>
                </div>
                <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
                  Security
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight mb-6">
                Private by design
              </h2>
              <p className="text-base sm:text-lg text-zinc-400 mb-10 leading-relaxed max-w-[440px]">
                Your data never leaves your control. Built with enterprise-grade
                security for the most sensitive investment workflows.
              </p>

              <div className="space-y-3">
                {[
                  { icon: Lock, text: "Private LLM deployment options", status: "enabled" },
                  { icon: Shield, text: "SOC 2 Type II compliant", status: "verified" },
                  { icon: Users, text: "Role-based access controls", status: "enabled" },
                  { icon: Zap, text: "End-to-end encryption", status: "active" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center justify-between gap-4 py-3 border-b border-zinc-800 last:border-b-0">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 border border-zinc-700 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-4 w-4 text-zinc-400" />
                      </div>
                      <span className="text-sm text-zinc-300">{item.text}</span>
                    </div>
                    <span className="font-mono text-[10px] text-emerald-500 uppercase tracking-wider">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative hidden lg:block"
            >
              {/* Security visualization - layered boxes */}
              <div className="relative aspect-square">
                {/* Outer frame */}
                <div className="absolute inset-0 border border-zinc-700">
                  <div className="absolute -top-2 -left-2 w-4 h-4 border-l border-t border-zinc-600" />
                  <div className="absolute -top-2 -right-2 w-4 h-4 border-r border-t border-zinc-600" />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l border-b border-zinc-600" />
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r border-b border-zinc-600" />
                </div>

                {/* Inner layers */}
                <div className="absolute inset-6 border border-zinc-700 opacity-80" />
                <div className="absolute inset-12 border border-zinc-700 opacity-60" />
                <div className="absolute inset-[72px] border border-zinc-700 opacity-40" />

                {/* Center content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-zinc-800 border border-zinc-700 flex items-center justify-center mx-auto mb-3">
                      <Shield className="h-8 w-8 text-zinc-500" />
                    </div>
                    <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-wider">Protected</span>
                  </div>
                </div>

                {/* Corner labels */}
                <span className="absolute top-2 left-2 font-mono text-[10px] text-zinc-700">TLS 1.3</span>
                <span className="absolute top-2 right-2 font-mono text-[10px] text-zinc-700">AES-256</span>
                <span className="absolute bottom-2 left-2 font-mono text-[10px] text-zinc-700">RSA-4096</span>
                <span className="absolute bottom-2 right-2 font-mono text-[10px] text-zinc-700">SHA-512</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 relative">
        <div className="max-w-[1120px] mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-[640px]"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-5 bg-zinc-900 flex items-center justify-center">
                <span className="font-mono text-[10px] text-white">04</span>
              </div>
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                Get Started
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-zinc-900 tracking-tight mb-4">
              Ready to transform your deal flow?
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 mb-8 leading-relaxed">
              Join leading investment teams in the private beta.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button
                size="lg"
                className="bg-zinc-900 text-white hover:bg-zinc-700 h-12 px-8 text-sm font-mono uppercase tracking-wider rounded-none"
              >
                Request Early Access
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <div className="flex items-center gap-2 h-12 px-4">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="font-mono text-xs text-zinc-500">12 spots remaining</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 lg:px-8 border-t border-zinc-900">
        <div className="max-w-[1120px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-zinc-900 flex items-center justify-center">
                <span className="text-white font-mono font-bold text-xs">D</span>
              </div>
              <span className="font-mono text-zinc-900 text-xs uppercase tracking-wider">
                DealTeam
              </span>
            </div>
            <span className="hidden sm:inline font-mono text-[10px] text-zinc-400">
              Build {new Date().getFullYear()}.12.01
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="font-mono text-[10px] text-zinc-500 hover:text-zinc-900 uppercase tracking-wider">
              Privacy
            </a>
            <a href="#" className="font-mono text-[10px] text-zinc-500 hover:text-zinc-900 uppercase tracking-wider">
              Terms
            </a>
            <span className="font-mono text-[10px] text-zinc-400">
              © 2025
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

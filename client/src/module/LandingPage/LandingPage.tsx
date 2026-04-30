import Navbar from "../components/navbar";
import { navItems } from "./navItems";
import HeroSection from "../../components/ui/hero";

// ── Feature cards ────────────────────────────────────────────────────────────
const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
      </svg>
    ),
    gradient: "from-violet-500! to-purple-600!" ,
    title: "Cloud Code Editor",
    description:
      "A full-featured IDE in your browser. Write, edit, and preview code across multiple languages and frameworks — no local setup required.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    ),
    gradient: "from-cyan-500! to-blue-600!",
    title: "AI Code Generation",
    description:
      "Describe what you want to build in plain English. Powered by Google Gemini and Anthropic Claude — iterative, context-aware, and fast.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
    gradient: "from-emerald-500! to-teal-600!",
    title: "One-Click Deployment",
    description:
      "Ship your project instantly. Git-based builds, AWS-hosted infrastructure, and a live URL for every project — zero configuration needed.",
  },
];

// ── Steps ────────────────────────────────────────────────────────────────────
const steps = [
  { number: "01", title: "Sign up", description: "Create your free account in seconds — no credit card required." },
  { number: "02", title: "Create a project", description: "Start from a template or a blank canvas. Your workspace lives in the cloud." },
  { number: "03", title: "Write or generate code", description: "Use the editor yourself, or prompt the AI to build features for you." },
  { number: "04", title: "Deploy", description: "One click. Live URL. Share your app with the world instantly." },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#080810] text-white overflow-x-hidden">
      <Navbar items={navItems} />
      <HeroSection />

      {/* ── FEATURES ────────────────────────────────────────────────────── */}
      <section id="features" className="relative py-16 px-4 sm:py-20 sm:px-6 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Everything you need to ship</h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
              Three powerful tools, one seamless workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${f.gradient} flex items-center justify-center text-white mb-5`}>
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────────────────── */}
      <section id="how-it-works" className="relative py-16 px-4 sm:py-20 sm:px-6 md:py-28 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">How it works</h2>
            <p className="text-gray-400 text-base sm:text-lg">From idea to live app in minutes.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, idx) => (
              <div key={step.number} className="relative text-center">
                {/* Connector line */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-px bg-linear-to-r from-violet-500/40 to-transparent" />
                )}
                <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-full border border-violet-500/50 bg-violet-500/10 text-violet-300 font-bold text-sm mb-5 mx-auto">
                  {step.number}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="relative py-20 px-4 sm:py-28 sm:px-6 md:py-32 border-t border-white/6">
        <div className="relative max-w-xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-5 leading-tight">
            Start building today.
            <br />
            <span className="text-white/40">For free.</span>
          </h2>
          <p className="text-white/30 text-base mb-10">
            No credit card. No setup. Just open your browser and start building.
          </p>
          <a
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md border border-[#9b87f5]/40 bg-[#9b87f5]/10 text-[#9b87f5] text-sm font-medium hover:bg-[#9b87f5]/20 hover:border-[#9b87f5]/60 transition-all duration-200"
          >
            Get started for free
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer className="border-t border-white/6 bg-[#080810]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Top row */}
          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-12 mb-10 md:mb-12">
            {/* Brand */}
            <div className="max-w-xs">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-7 h-7 rounded-md border border-[#9b87f5]/40 bg-[#9b87f5]/10 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <span className="text-white/80 font-medium text-sm">CloudForge</span>
              </div>
              <p className="text-white/30 text-xs leading-relaxed">
                A cloud IDE with AI-powered code generation and one-click deployment.
                Write, generate, and ship — all from your browser.
              </p>
            </div>

            {/* Links */}
            <div className="flex gap-10 sm:gap-16">
              <div>
                <p className="text-white/20 text-xs uppercase tracking-widest mb-4">Product</p>
                <ul className="space-y-3">
                  {["Features", "Pricing", "Changelog"].map((l) => (
                    <li key={l}>
                      <a href="#" className="text-white/40 text-xs hover:text-white/70 transition-colors">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-white/20 text-xs uppercase tracking-widest mb-4">Company</p>
                <ul className="space-y-3">
                  {[["Contact", "/contactus"], ["Sign in", "/login"], ["Get started", "/register"]].map(([l, h]) => (
                    <li key={l}>
                      <a href={h} className="text-white/40 text-xs hover:text-white/70 transition-colors">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/6">
            <p className="text-white/20 text-xs">
              © {new Date().getFullYear()} CloudForge. MIT License.
            </p>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#9b87f5]/60" />
              <span className="text-white/20 text-xs">Built with Gemini &amp; Claude</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

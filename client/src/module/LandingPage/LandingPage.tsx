import Navbar from "../components/navbar";
import { navItems } from "./navItems";
import HeroSection from "../../components/ui/hero";

// ── Testimonials ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Frontend Engineer",
    company: "Vercel",
    avatar: "SC",
    color: "from-violet-500 to-purple-600",
    quote: "CloudForge cut our onboarding time in half. New devs are productive on day one — no more 'works on my machine' nightmares.",
  },
  {
    name: "Marcus Williams",
    role: "Indie Hacker",
    company: "SideProjector",
    avatar: "MW",
    color: "from-cyan-500 to-blue-600",
    quote: "I shipped my SaaS MVP in a weekend. The AI generation + one-click deploy combo is genuinely insane.",
  },
  {
    name: "Priya Nair",
    role: "CTO",
    company: "Stackbloom",
    avatar: "PN",
    color: "from-emerald-500 to-teal-600",
    quote: "We replaced our entire local dev setup for staging environments with CloudForge. The cost savings and speed gains are remarkable.",
  },
  {
    name: "James O'Brien",
    role: "Full-Stack Developer",
    company: "Freelance",
    avatar: "JO",
    color: "from-orange-500 to-amber-600",
    quote: "The Gemini integration understands my codebase context like nothing else. It's like pair programming with someone who never forgets anything.",
  },
  {
    name: "Lena Müller",
    role: "DevOps Lead",
    company: "Cloudnative GmbH",
    avatar: "LM",
    color: "from-pink-500 to-rose-600",
    quote: "Zero-config AWS deployments with proper infra isolation per project. Our security team was actually impressed — that never happens.",
  },
  {
    name: "Carlos Reyes",
    role: "Startup Founder",
    company: "LaunchFast",
    avatar: "CR",
    color: "from-indigo-500 to-violet-600",
    quote: "Pitched to investors with a live demo I built entirely in CloudForge during the week before the meeting. Closed our seed round.",
  },
  {
    name: "Anika Patel",
    role: "Engineering Manager",
    company: "Shipyard Labs",
    avatar: "AP",
    color: "from-teal-500 to-cyan-600",
    quote: "Feature branches with isolated deployments per PR has transformed our review process. The team loves it.",
  },
  {
    name: "Tom Eriksson",
    role: "Bootcamp Graduate",
    company: "Self-taught",
    avatar: "TE",
    color: "from-yellow-500 to-orange-500",
    quote: "As someone just learning to code, having an AI that explains what it's generating in context was a game changer for my learning.",
  },
];

// ── Feature cards ────────────────────────────────────────────────────────────
const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 8l2.5 2.5L7 13M12 13h4" />
      </svg>
    ),
    gradient: "from-blue-500! to-indigo-600!",
    title: "Cloud Code Editor",
    description:
      "A full-featured IDE in your browser. Write, edit, and preview code across multiple languages and frameworks — no local setup required.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    gradient: "from-orange-500! to-amber-400!",
    title: "AI Code Generation",
    description:
      "Describe what you want to build in plain English. Powered by Google Gemini and Anthropic Claude — iterative, context-aware, and fast.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.5c-3.5 0-6 3.5-6 6.5 0 2.2 1.2 4 3 5v2.5h6V14c1.8-1 3-2.8 3-5 0-3-2.5-6.5-6-6.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 21h6M9.5 16.5h5" />
      </svg>
    ),
    gradient: "from-rose-500! to-pink-600!",
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
      <section id="features" className="relative py-20 px-4 sm:py-24 sm:px-6 md:py-32 overflow-hidden">
        {/* Ambient background glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-cyan-600/8 blur-[100px]" />
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              <span className="text-white">Everything you need</span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                to ship
              </span>
            </h2>
          </div>
          <p className="text-center text-white/40 text-base sm:text-lg max-w-md mx-auto mb-14 md:mb-20">
            Three powerful tools unified into one seamless workflow — from idea to live URL.
          </p>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-5">
            {features.map((f, idx) => (
              <div
                key={f.title}
                className="group relative rounded-2xl p-px overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
                }}
              >
                {/* Card inner glow border on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-gradient-to-br ${f.gradient} blur-sm`} style={{ opacity: undefined }} />
                <div className="absolute inset-0 rounded-2xl border border-white/8 group-hover:border-white/20 transition-colors duration-500" />

                <div className="relative rounded-2xl bg-[#0d0d18] p-7 h-full flex flex-col">
                  {/* Card number */}
                  <span className="text-white/10 text-6xl font-black leading-none absolute top-5 right-6 select-none tabular-nums">
                    0{idx + 1}
                  </span>

                  {/* Icon */}
                  <div className={`relative w-11 h-11 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center text-white mb-6 shadow-lg`}>
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${f.gradient} opacity-40 blur-md`} />
                    <span className="relative">{f.icon}</span>
                  </div>

                  <h3 className="text-base font-semibold text-white mb-3 tracking-tight">{f.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed flex-1">{f.description}</p>

                  {/* Bottom accent line */}
                  <div className={`mt-6 h-px w-12 rounded-full bg-gradient-to-r ${f.gradient} opacity-60`} />
                </div>
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



      {/* ── TESTIMONIALS ────────────────────────────────────────────────── */}
      <section className="relative py-20 px-0 sm:py-24 border-t border-white/5 overflow-hidden">
        {/* Ambient */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-violet-600/8 blur-[120px]" />
        </div>

        {/* Header */}
        <div className="text-center px-4 mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-white">Loved by builders</span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
              worldwide
            </span>
          </h2>
        </div>

        {/* Row 1 — scrolls left */}
        <div className="relative mb-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-4 animate-marquee w-max">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="w-72 shrink-0 rounded-2xl border border-white/8 bg-white/[0.03] p-5 flex flex-col gap-3"
              >
                <p className="text-white/60 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 pt-2 border-t border-white/6">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white/80 text-xs font-semibold">{t.name}</p>
                    <p className="text-white/30 text-xs">{t.role} · {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls left slower + offset start */}
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-4 animate-marquee-slow w-max" style={{ transform: "translateX(-15%)" }}>
            {[...testimonials.slice(3), ...testimonials, ...testimonials.slice(0, 3)].map((t, i) => (
              <div
                key={i}
                className="w-72 shrink-0 rounded-2xl border border-white/8 bg-white/[0.03] p-5 flex flex-col gap-3"
              >
                <p className="text-white/60 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 pt-2 border-t border-white/6">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white/80 text-xs font-semibold">{t.name}</p>
                    <p className="text-white/30 text-xs">{t.role} · {t.company}</p>
                  </div>
                </div>
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
            href="/login"
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

          </div>
        </div>
      </footer>
    </div>
  );
}

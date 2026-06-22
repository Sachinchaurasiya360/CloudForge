import { motion } from "framer-motion";
import { Link } from "react-router";
import { useState, type ReactNode } from "react";

/* ── Shared primitives ──────────────────────────────────────────────────── */

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-forest">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
          {subtitle}
        </p>
      )}
    </div>
  );
}

const Shell = ({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) => (
  <section id={id} className={`w-full px-5 py-20 sm:px-8 md:py-28 ${className}`}>
    <div className="mx-auto max-w-[1280px]">{children}</div>
  </section>
);

/* ── Trusted By ─────────────────────────────────────────────────────────── */

const logos = [
  "Northwind",
  "Acme Labs",
  "Stackbloom",
  "Vertex OSS",
  "LaunchFast",
  "Cloudnative",
];

export function TrustedBy() {
  return (
    <Shell className="bg-warm-white !py-14">
      <p className="text-center text-sm font-medium text-muted">
        Trusted by engineering teams, startups, and open-source communities
      </p>

      <div
        className="cf-marquee group relative mt-9 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",
        }}
      >
        <div className="cf-marquee-track flex w-max items-center gap-x-16 pr-16">
          {[...logos, ...logos].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="shrink-0 text-lg font-semibold tracking-tight text-slate-blue/55 transition-colors hover:text-slate-blue"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </Shell>
  );
}

/* ── Features ───────────────────────────────────────────────────────────── */

const features = [
  {
    title: "Browser-Based Development",
    description:
      "A complete IDE in your browser — editor, terminal, and file explorer. Start coding instantly with zero local setup.",
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8l2.5 2.5L7 13M12 13h4" />
      </>
    ),
  },
  {
    title: "Containerized Workspaces",
    description:
      "Every project runs in an isolated container with reproducible environments. No more “works on my machine.”",
    icon: (
      <>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
      </>
    ),
  },
  {
    title: "Instant Deployments",
    description:
      "Ship to a global edge network with one command. Git-based builds and a live URL for every project.",
    icon: (
      <>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </>
    ),
  },
  {
    title: "Team Collaboration",
    description:
      "Share workspaces, review changes, and pair in real time. Isolated preview environments for every branch.",
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    title: "AI Development Assistant",
    description:
      "Context-aware code generation and review powered by leading models — built directly into your workflow.",
    icon: (
      <>
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 0 2h-1v1a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-1H3a1 1 0 0 1 0-2h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
        <circle cx="9" cy="14" r="1" />
        <circle cx="15" cy="14" r="1" />
      </>
    ),
  },
  {
    title: "Secure Cloud Infrastructure",
    description:
      "Enterprise-grade isolation, encryption, and access control on infrastructure you can trust at scale.",
    icon: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
];

export function Features() {
  return (
    <Shell id="features" className="bg-surface">
      <Reveal>
        <SectionHeading
          eyebrow="Platform"
          title="Everything you need to build and ship"
          subtitle="A unified platform that replaces your local setup, CI pipeline, and hosting — all from the browser."
        />
      </Reveal>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={(i % 3) * 0.06}>
            <article className="h-full rounded-2xl border border-soft bg-warm-white p-7 transition-all duration-200 hover:border-slate-blue/30 hover:shadow-[0_12px_30px_-18px_rgba(30,58,95,0.35)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy/8 text-navy">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {f.icon}
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-navy">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {f.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Shell>
  );
}

/* ── How It Works ───────────────────────────────────────────────────────── */

const steps = [
  {
    n: "01",
    title: "Create Workspace",
    description:
      "Spin up a containerized environment from a template or blank canvas in under two seconds.",
  },
  {
    n: "02",
    title: "Build & Test",
    description:
      "Write code in the browser IDE, run it instantly, and let the AI assistant accelerate your work.",
  },
  {
    n: "03",
    title: "Deploy Globally",
    description:
      "Push once to ship to a global network with a live URL and zero configuration.",
  },
];

export function HowItWorks() {
  return (
    <Shell id="how-it-works" className="bg-warm-white">
      <Reveal>
        <SectionHeading
          eyebrow="Workflow"
          title="From idea to production in three steps"
          subtitle="A straightforward path that takes you from an empty workspace to a globally deployed application."
        />
      </Reveal>
      <div className="relative mt-16 grid gap-10 md:grid-cols-3">
        {/* connecting line */}
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 top-6 hidden h-px bg-soft md:block"
        />
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.1}>
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-soft bg-surface text-sm font-semibold text-navy shadow-sm tnum">
                {s.n}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {s.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Shell>
  );
}

/* ── Testimonials ───────────────────────────────────────────────────────── */

const testimonials = [
  {
    quote:
      "CloudForge cut our onboarding time in half. New engineers are productive on day one — no more environment drift.",
    name: "Sarah Chen",
    role: "Senior Engineer",
    company: "Northwind",
    initials: "SC",
    image: "https://randomuser.me/api/portraits/women/79.jpg",
  },
  {
    quote:
      "Isolated preview environments for every pull request transformed how our team reviews and ships work.",
    name: "Marcus Williams",
    role: "Engineering Manager",
    company: "Stackbloom",
    initials: "MW",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "Zero-config deployments with real infrastructure isolation. Our security team was genuinely impressed.",
    name: "Priya Nair",
    role: "CTO",
    company: "LaunchFast",
    initials: "PN",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

function Avatar({
  src,
  alt,
  initials,
}: {
  src: string;
  alt: string;
  initials: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy/10 text-sm font-semibold text-navy">
        {initials}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-11 w-11 shrink-0 rounded-full object-cover ring-1 ring-soft"
    />
  );
}

export function Testimonials() {
  return (
    <Shell className="bg-surface">
      <Reveal>
        <SectionHeading
          eyebrow="Testimonials"
          title="Developers ship faster on CloudForge"
        />
      </Reveal>
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08}>
            <figure className="flex h-full flex-col rounded-2xl border border-soft bg-warm-white p-7">
              <blockquote className="flex-1 text-[15px] leading-relaxed text-charcoal">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-soft pt-5">
                <Avatar src={t.image} alt={t.name} initials={t.initials} />
                <div>
                  <p className="text-sm font-semibold text-navy">{t.name}</p>
                  <p className="text-xs text-muted">
                    {t.role} · {t.company}
                  </p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Shell>
  );
}

/* ── Pricing ────────────────────────────────────────────────────────────── */

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "/ month",
    description: "For individuals exploring CloudForge.",
    features: [
      "1 containerized workspace",
      "Community support",
      "Single deployment region",
      "AI assistant (limited)",
    ],
    cta: "Start Building Free",
    featured: false,
  },
  {
    name: "Professional",
    price: "$20",
    period: "/ month",
    description: "For professional developers and small teams.",
    features: [
      "Unlimited workspaces",
      "Priority support",
      "Global deployment network",
      "Full AI assistant",
      "Team collaboration",
    ],
    cta: "Start 14-day Trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with advanced needs.",
    features: [
      "SSO & RBAC",
      "Dedicated infrastructure",
      "SOC 2 & compliance reports",
      "Premium SLA & support",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-forest" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export function Pricing() {
  return (
    <Shell id="pricing" className="bg-warm-white">
      <Reveal>
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, transparent pricing"
          subtitle="Start free and scale as your team grows. No hidden fees, no surprises."
        />
      </Reveal>
      <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
        {plans.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 0.08}>
            <div
              className={`flex h-full flex-col rounded-2xl bg-surface p-8 ${
                plan.featured
                  ? "border-2 border-navy shadow-[0_20px_50px_-24px_rgba(30,58,95,0.4)]"
                  : "border border-soft"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-navy">{plan.name}</h3>
                {plan.featured && (
                  <span className="rounded-full bg-forest/10 px-2.5 py-1 text-xs font-semibold text-forest">
                    Most popular
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-muted">{plan.description}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="tnum text-4xl font-semibold tracking-tight text-navy">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-sm text-muted">{plan.period}</span>
                )}
              </div>
              <Link
                to="/login"
                className={`mt-6 rounded-lg px-5 py-2.5 text-center text-sm font-semibold transition-colors duration-200 ${
                  plan.featured
                    ? "bg-navy text-white hover:bg-navy-700"
                    : "border border-soft text-charcoal hover:border-slate-blue/40"
                }`}
              >
                {plan.cta}
              </Link>
              <ul className="mt-7 space-y-3 border-t border-soft pt-7">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm text-charcoal">
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Shell>
  );
}

/* ── Final CTA ──────────────────────────────────────────────────────────── */

export function FinalCTA() {
  return (
    <Shell className="bg-warm-white">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-16 text-center sm:px-12 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Start Building on CloudForge Today
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
              Everything developers need to build, ship, and scale from a single
              platform.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/login"
                className="w-full rounded-lg bg-white px-6 py-3 text-center text-sm font-semibold text-navy transition-colors duration-200 hover:bg-warm-white sm:w-auto"
              >
                Get Started Free
              </Link>
              <a
                href="#features"
                className="w-full rounded-lg border border-white/25 px-6 py-3 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10 sm:w-auto"
              >
                View Documentation
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Shell>
  );
}

/* ── Footer ─────────────────────────────────────────────────────────────── */

const footerCols = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Documentation", "Changelog"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Contact"],
  },
  {
    title: "Resources",
    links: ["Guides", "API Reference", "Community", "Status"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security", "Compliance"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-soft bg-warm-white px-5 py-14 sm:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 md:grid-cols-[1.5fr_2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <span className="text-[15px] font-semibold tracking-tight text-navy">
                CloudForge
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              The complete cloud development platform. Build, run, deploy, and
              collaborate directly from your browser.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerCols.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-charcoal">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted transition-colors hover:text-navy"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-soft pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            © 2026 CloudForge, Inc. All rights reserved.
          </p>
          <p className="text-sm text-muted">Built for developers, everywhere.</p>
        </div>
      </div>
    </footer>
  );
}

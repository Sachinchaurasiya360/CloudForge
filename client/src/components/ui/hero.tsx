import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

/* ── Animation variants ─────────────────────────────────────────────────── */

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

/* ── Editable workspace editor ──────────────────────────────────────────── */

const SOURCE = `// CloudForge workspace — auto-provisioned
import { serve } from "@cloudforge/runtime";

const app = serve({
  port: 3000,
  region: "global",
});

app.get("/", () => "Shipped from the browser.");`;

const TOKEN =
  /(\/\/[^\n]*)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|\b(import|from|const|let|var|function|return|export|default|new|async|await|if|else|for|while)\b|(\b\d+(?:\.\d+)?\b)/g;

function highlight(code: string) {
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let key = 0;
  let m: RegExpExecArray | null;
  TOKEN.lastIndex = 0;
  while ((m = TOKEN.exec(code)) !== null) {
    if (m.index > last) nodes.push(code.slice(last, m.index));
    const [full, comment, str, kw, num] = m;
    const cls = comment
      ? "text-muted/70"
      : str
        ? "text-forest"
        : kw
          ? "text-navy font-medium"
          : num
            ? "text-forest"
            : "";
    nodes.push(
      <span key={key++} className={cls}>
        {full}
      </span>,
    );
    last = m.index + full.length;
  }
  if (last < code.length) nodes.push(code.slice(last));
  return nodes;
}

function WorkspaceEditor({ onTyped }: { onTyped: () => void }) {
  const [code, setCode] = useState("");
  const [typing, setTyping] = useState(true);
  const preRef = useRef<HTMLPreElement>(null);
  const taRef = useRef<HTMLTextAreaElement>(null);
  const onTypedRef = useRef(onTyped);
  onTypedRef.current = onTyped;

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) {
      setCode(SOURCE);
      setTyping(false);
      onTypedRef.current();
      return;
    }

    let i = 0;
    let timer = 0;
    const tick = () => {
      i += 1;
      setCode(SOURCE.slice(0, i));
      if (i < SOURCE.length) {
        // brief pause on line breaks for a natural cadence
        const delay = SOURCE[i - 1] === "\n" ? 110 : 20;
        timer = window.setTimeout(tick, delay);
      } else {
        setTyping(false);
        onTypedRef.current();
      }
    };
    const start = window.setTimeout(tick, 650);
    return () => {
      window.clearTimeout(start);
      window.clearTimeout(timer);
    };
  }, []);

  const syncScroll = () => {
    if (preRef.current && taRef.current) {
      preRef.current.scrollTop = taRef.current.scrollTop;
      preRef.current.scrollLeft = taRef.current.scrollLeft;
    }
  };

  const lineCount = code.split("\n").length;

  return (
    <div className="flex min-h-[16rem] bg-surface font-mono text-[13px] leading-6">
      {/* gutter */}
      <div
        aria-hidden="true"
        className="select-none py-4 pl-4 pr-3 text-right text-muted/50"
      >
        {Array.from({ length: lineCount }).map((_, i) => (
          <div key={i}>{i + 1}</div>
        ))}
      </div>

      {/* editable code surface */}
      <div className="relative flex-1 overflow-hidden">
        <pre
          ref={preRef}
          aria-hidden="true"
          className="pointer-events-none m-0 h-full w-full overflow-hidden whitespace-pre py-4 pr-4 text-charcoal"
        >
          {highlight(code)}
          {typing && <span className="cf-caret align-middle" />}
        </pre>
        <textarea
          ref={taRef}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onScroll={syncScroll}
          readOnly={typing}
          spellCheck={false}
          autoCapitalize="off"
          autoCorrect="off"
          aria-label="CloudForge workspace editor"
          className="absolute inset-0 h-full w-full resize-none overflow-auto whitespace-pre bg-transparent py-4 pr-4 text-transparent caret-navy outline-none"
        />
      </div>
    </div>
  );
}

/* ── IDE mockup ─────────────────────────────────────────────────────────── */

const files = [
  { name: "src", indent: 0, folder: true },
  { name: "index.ts", indent: 1, active: true },
  { name: "server.ts", indent: 1 },
  { name: "routes", indent: 1, folder: true },
  { name: "api.ts", indent: 2 },
  { name: "Dockerfile", indent: 0 },
  { name: "package.json", indent: 0 },
];

function IdeMockup() {
  const [typedDone, setTypedDone] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-soft bg-surface shadow-[0_24px_60px_-24px_rgba(30,58,95,0.28)]">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-soft bg-warm-white px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-soft" />
          <span className="h-3 w-3 rounded-full bg-soft" />
          <span className="h-3 w-3 rounded-full bg-soft" />
        </div>
        <div className="mx-auto flex items-center gap-2 rounded-md border border-soft bg-surface px-3 py-1 text-xs text-muted">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          cloudforge.dev/workspace
        </div>
      </div>

      <div className="grid grid-cols-[140px_1fr] sm:grid-cols-[180px_1fr]">
        {/* file explorer */}
        <aside className="hidden border-r border-soft bg-warm-white px-3 py-4 sm:block">
          <p className="mb-3 px-1 text-[10px] font-semibold uppercase tracking-wider text-muted">
            Explorer
          </p>
          <motion.ul
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.4 } } }}
            initial="hidden"
            animate="show"
            className="space-y-0.5 text-[13px]"
          >
            {files.map((f) => (
              <motion.li
                key={f.name}
                variants={{ hidden: { opacity: 0, x: -6 }, show: { opacity: 1, x: 0 } }}
                style={{ paddingLeft: `${f.indent * 12 + 4}px` }}
                className={`flex items-center gap-1.5 rounded px-1.5 py-1 ${
                  f.active ? "bg-navy/8 text-navy" : "text-slate-blue"
                }`}
              >
                {f.folder ? (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  </svg>
                ) : (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6" />
                  </svg>
                )}
                <span className={f.active ? "font-medium" : ""}>{f.name}</span>
              </motion.li>
            ))}
          </motion.ul>
        </aside>

        {/* editor + terminal */}
        <div className="min-w-0">
          {/* tab bar */}
          <div className="flex items-center gap-1 border-b border-soft bg-warm-white px-3 pt-2">
            <span className="rounded-t-md border-x border-t border-soft bg-surface px-3 py-1.5 text-xs font-medium text-navy">
              index.ts
            </span>
            <span className="px-3 py-1.5 text-xs text-muted">server.ts</span>
          </div>

          {/* editable, self-typing code */}
          <WorkspaceEditor onTyped={() => setTypedDone(true)} />

          {/* terminal / deploy strip — appears once typing finishes */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={typedDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="border-t border-soft bg-navy-900 px-4 py-3 font-mono text-[12px] text-white/80"
          >
            <div className="mb-1 flex items-center gap-2 text-white/50">
              <span className="text-forest">$</span> cloudforge deploy
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-white/60">Building container…</span>
              <motion.span
                initial={{ opacity: 0, scale: 0.85 }}
                animate={typedDone ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.45, delay: 0.6, ease: "backOut" }}
                className="inline-flex items-center gap-1.5 rounded-full bg-forest/20 px-2 py-0.5 text-[11px] font-medium text-forest-200"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-forest" />
                Deployed in 1.8s
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ── Hero ───────────────────────────────────────────────────────────────── */

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-warm-white pt-32 pb-16 sm:pt-40 md:pb-24">
      {/* subtle dotted grid texture — no glow, no gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(30,58,95,0.06) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0) 70%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0) 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.h1
            variants={item}
            className="text-4xl font-semibold leading-[1.08] tracking-tight text-navy sm:text-5xl md:text-6xl"
          >
            Build, Deploy, and Scale Applications
            <span className="text-forest"> Directly from Your Browser</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted"
          >
            CloudForge provides a complete cloud development environment with
            browser-based coding, containerized execution, AI-assisted
            workflows, deployments, and team collaboration.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              to="/login"
              className="w-full rounded-lg bg-navy px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-navy-700 sm:w-auto"
            >
              Start Building Free
            </Link>
            <a
              href="#how-it-works"
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-soft bg-surface px-6 py-3 text-sm font-semibold text-charcoal shadow-sm transition-colors duration-200 hover:border-slate-blue/40 sm:w-auto"
            >
              View Documentation
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* hero visual */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mx-auto mt-16 max-w-5xl"
        >
          <IdeMockup />
        </motion.div>
      </div>
    </section>
  );
}

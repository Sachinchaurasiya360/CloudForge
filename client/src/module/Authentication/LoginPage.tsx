import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const HARDCODED_EMAIL = "test@gmail.com";
const HARDCODED_PASSWORD = "test@123";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      if (email === HARDCODED_EMAIL && password === HARDCODED_PASSWORD) {
        navigate("/dashboard");
      } else {
        setError("Invalid email or password.");
      }
      setLoading(false);
    }, 800);
  }

  return (
    <div className="min-h-screen w-full flex">
      {/* Left — brand panel */}
      <div className="hidden lg:flex lg:w-[44%] bg-[#0b0b12] flex-col justify-between p-12 relative overflow-hidden select-none">
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Top-left accent corner */}
        <div className="absolute top-0 left-0 w-24 h-px bg-gradient-to-r from-[#6c5ce7] to-transparent" />
        <div className="absolute top-0 left-0 w-px h-24 bg-gradient-to-b from-[#6c5ce7] to-transparent" />

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-2.5">
          <div className="h-7 w-7 border border-[#6c5ce7]/50 rounded flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 text-[#6c5ce7]" stroke="currentColor" strokeWidth={2}>
              <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          </div>
          <span className="text-sm font-medium text-white/90 tracking-tight">CloudForge</span>
        </div>

        {/* Body copy */}
        <div className="relative z-10">
          <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#6c5ce7]/60 mb-5">
            Cloud Infrastructure
          </p>
          <h2 className="text-[2.1rem] font-light text-white leading-[1.18] tracking-tight">
            Deploy with<br />
            <span className="text-white/35">confidence.</span>
          </h2>
          <p className="mt-5 text-sm text-white/30 leading-relaxed max-w-[18rem]">
            Manage servers, automate deployments, and monitor your infrastructure from one place.
          </p>

          {/* Stat pills */}
          <div className="mt-10 flex flex-col gap-3">
            {[
              { label: "Uptime SLA", value: "99.99%" },
              { label: "Deploy time", value: "< 30 s" },
              { label: "Regions", value: "12 global" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between max-w-[14rem]">
                <span className="text-xs text-white/25 font-mono">{item.label}</span>
                <span className="text-xs text-white/50 font-mono">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="h-px flex-1 bg-white/[0.07]" />
          <span className="text-[10px] font-mono text-white/15">v2.4.1</span>
        </div>
      </div>

      {/* Right — form panel */}
      <div className="flex-1 bg-white flex items-center justify-center px-6 py-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="w-full max-w-[22rem]"
        >
          {/* Mobile-only logo */}
          <div className="lg:hidden mb-8 flex items-center gap-2">
            <div className="h-6 w-6 border border-[#6c5ce7]/40 rounded flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3 text-[#6c5ce7]" stroke="currentColor" strokeWidth={2}>
                <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <span className="text-sm font-medium text-[#0b0b12]">CloudForge</span>
          </div>

          <div className="mb-8">
            <h1 className="text-[1.6rem] font-semibold text-[#0b0b12] tracking-tight leading-tight">
              Welcome back
            </h1>
            <p className="mt-1.5 text-sm text-[#6b7280]">
              Sign in to your account to continue.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-xs font-medium text-[#374151] mb-1.5">
                Email address
              </label>
              <input
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full border border-[#e5e7eb] rounded-lg px-3.5 py-2.5 text-sm text-[#111827] placeholder-[#c4c9d4] outline-none transition-all focus:border-[#6c5ce7] focus:ring-2 focus:ring-[#6c5ce7]/12 bg-white"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-medium text-[#374151] mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full border border-[#e5e7eb] rounded-lg px-3.5 py-2.5 pr-10 text-sm text-[#111827] placeholder-[#c4c9d4] outline-none transition-all focus:border-[#6c5ce7] focus:ring-2 focus:ring-[#6c5ce7]/12 bg-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#b0b7c3] hover:text-[#6b7280] transition-colors"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth={1.8}>
                      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth={1.8}>
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2.5"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 text-red-500 shrink-0 mt-px" stroke="currentColor" strokeWidth={2.2}>
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <p className="text-xs text-red-600 leading-relaxed">{error}</p>
              </motion.div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-1 bg-[#0b0b12] hover:bg-[#1a1a2e] text-white text-sm font-medium rounded-lg px-4 py-2.5 transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="h-3.5 w-3.5 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <circle className="opacity-20" cx="12" cy="12" r="10" />
                    <path className="opacity-80" d="M4 12a8 8 0 018-8" />
                  </svg>
                  Signing in…
                </span>
              ) : (
                "Continue"
              )}
            </button>
          </form>

          {/* Divider + test credentials */}
          <div className="mt-7">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1 bg-[#f3f4f6]" />
              <span className="text-[10px] font-mono text-[#c4c9d4] uppercase tracking-widest">
                Test credentials
              </span>
              <div className="h-px flex-1 bg-[#f3f4f6]" />
            </div>

            <div className="rounded-lg border border-[#f0f1f3] bg-[#fafafa] px-4 py-3 font-mono text-[11px] space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[#c4c9d4]">Email</span>
                <span className="text-[#6b7280]">test@gmail.com</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#c4c9d4]">Pass</span>
                <span className="text-[#6b7280]">test@123</span>
              </div>
            </div>
          </div>

        
        </motion.div>
      </div>
    </div>
  );
}

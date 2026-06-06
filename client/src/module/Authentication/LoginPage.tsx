import { useState } from "react";
import { Link, useNavigate } from "react-router";
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
        navigate("/");
      } else {
        setError("Invalid email or password.");
      }
      setLoading(false);
    }, 800);
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#080810] flex items-center justify-center px-4">
      {/* Ambient glows */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 20%, rgba(155,135,245,0.13) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(155,135,245,0.09) 0%, transparent 50%)",
        }}
      />

      {/* Grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Logo */}
        <div className="mb-8 text-center">
          <Link to="/" className="inline-flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-lg bg-[#9b87f5]/20 border border-[#9b87f5]/30 flex items-center justify-center group-hover:bg-[#9b87f5]/30 transition-colors">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4 text-[#9b87f5]"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <span className="text-lg font-light text-white tracking-wide">
              CloudForge
            </span>
          </Link>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-8 shadow-2xl">
          <div className="mb-6">
            <h1 className="text-2xl font-light text-white">Welcome back</h1>
            <p className="mt-1 text-sm text-white/50">
              Sign in to your account to continue
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="mb-1.5 block text-xs font-medium text-white/60 uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-all focus:border-[#9b87f5]/50 focus:bg-white/[0.08] focus:ring-1 focus:ring-[#9b87f5]/30"
              />
            </div>

            {/* Password */}
            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label className="text-xs font-medium text-white/60 uppercase tracking-wider">
                  Password
                </label>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 pr-11 text-sm text-white placeholder-white/25 outline-none transition-all focus:border-[#9b87f5]/50 focus:bg-white/[0.08] focus:ring-1 focus:ring-[#9b87f5]/30"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-lg border border-red-500/20 bg-red-500/10 px-3 py-2 text-xs text-red-400"
              >
                {error}
              </motion.p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="neumorphic-button relative mt-2 w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-[#9b87f5] to-[#7c6fd4] px-6 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:shadow-[0_0_24px_rgba(155,135,245,0.45)] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="h-4 w-4 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" />
                    <path className="opacity-75" d="M4 12a8 8 0 018-8" />
                  </svg>
                  Signing in…
                </span>
              ) : (
                "Sign in"
              )}
            </button>
          </form>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-white/30">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#9b87f5]/80 hover:text-[#9b87f5] transition-colors">
            Sign up for free
          </Link>
        </p>

        {/* Test credentials hint */}
        <div className="mt-4 rounded-xl border border-[#9b87f5]/15 bg-[#9b87f5]/5 px-4 py-3 text-center">
          <p className="mb-1 text-[10px] font-medium uppercase tracking-widest text-[#9b87f5]/50">
            Test credentials
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-white/40">
            <span>
              <span className="text-white/25">email </span>test@gmail.com
            </span>
            <span className="text-white/20">·</span>
            <span>
              <span className="text-white/25">password </span>test@123
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

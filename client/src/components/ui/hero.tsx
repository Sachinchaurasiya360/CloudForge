import { Link } from "react-router";
import { motion } from "framer-motion";
import Globe3D from "./Globe3D";

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden pb-10 pt-28 font-light text-white antialiased sm:pt-36 md:pb-16 md:pt-40 bg-[#080810]"
    >
      {/* Ambient glow — right */}
      <div
        className="absolute right-0 top-0 h-1/2 w-1/2"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(155, 135, 245, 0.15) 0%, rgba(13, 10, 25, 0) 60%)",
        }}
      />
      {/* Ambient glow — left (mirrored) */}
      <div
        className="absolute left-0 top-0 h-1/2 w-1/2 -scale-x-100"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(155, 135, 245, 0.15) 0%, rgba(13, 10, 25, 0) 60%)",
        }}
      />

      <div className="container relative z-10 mx-auto max-w-2xl px-4 text-center md:max-w-4xl md:px-6 lg:max-w-7xl">
        {/* Badge + headline + subtext */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="mx-auto mb-6 max-w-4xl text-3xl font-light sm:text-4xl md:text-5xl lg:text-7xl">
            Build and ship anything with{" "}
            <span className="text-[#9b87f5]">AI-Powered</span> Cloud Development
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-base text-white/60 sm:text-lg md:text-xl">
            CloudForge combines a full-featured browser IDE with AI code generation via Gemini &amp;
            Claude, and one-click AWS deployment, all in a single unified platform.
          </p>

          {/* CTAs */}
          <div className="mb-10 flex flex-col items-center justify-center gap-3 sm:mb-0 sm:flex-row">
            <Link
              to="/register"
              className="neumorphic-button relative w-full overflow-hidden rounded-full border border-white/10 bg-linear-to-b from-white/10 to-white/5 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base text-white shadow-lg transition-all duration-300 hover:border-[#9b87f5]/30 hover:shadow-[0_0_20px_rgba(155,135,245,0.4)] sm:w-auto"
            >
              Start building for free
            </Link>
            <a
              href="#how-it-works"
              className="flex w-full items-center justify-center gap-2 text-white/70 transition-colors hover:text-white sm:w-auto"
            >
              <span>See how it works</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Visual — 3D spinning globe, half visible */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          {/* Full globe centered with ambient glow */}
          <div className="relative mx-auto mt-8 flex items-center justify-center">
            <Globe3D />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

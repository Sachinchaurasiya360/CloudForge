import { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
}

interface navBarProps {
  items: NavItem[];
}

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2.5 shrink-0">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      </div>
      <span className="text-[15px] font-semibold tracking-tight text-navy">
        CloudForge
      </span>
    </a>
  );
}

export default function Navbar({ items }: navBarProps) {
  const [open, setOpen] = useState(false);
  const navLinks = items.filter((i) => i.label !== "Login");
  const loginItem = items.find((i) => i.label === "Login");

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-soft bg-surface shadow-[0_1px_3px_rgba(30,58,95,0.04)]"
    >
      <nav className="mx-auto grid h-16 max-w-[1280px] grid-cols-[auto_1fr_auto] items-center px-5 sm:px-8">
        <Logo />

        {/* Desktop nav links — centered */}
        <ul className="hidden items-center justify-center gap-9 md:flex">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="group relative text-sm font-medium text-slate-blue transition-colors duration-150 hover:text-navy"
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-full bg-forest transition-all duration-200 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-1.5 justify-self-end md:flex">
          {loginItem && (
            <Link
              to={loginItem.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-charcoal transition-colors duration-150 hover:bg-warm-white"
            >
              Sign in
            </Link>
          )}
          <Link
            to="/login"
            className="rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-navy-700 hover:shadow-md"
          >
            Start Building Free
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="col-start-3 flex h-10 w-10 items-center justify-center justify-self-end rounded-lg text-charcoal transition-colors hover:bg-warm-white md:hidden"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="overflow-hidden border-t border-soft bg-surface px-5 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-charcoal transition-colors hover:bg-warm-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-col gap-2 border-t border-soft pt-4">
            {loginItem && (
              <Link
                to={loginItem.href}
                onClick={() => setOpen(false)}
                className="rounded-lg border border-soft px-4 py-2.5 text-center text-sm font-medium text-charcoal"
              >
                Sign in
              </Link>
            )}
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-navy px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Start Building Free
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

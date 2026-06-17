import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import apiClient from "../../utils/axios";

const links = [
  { label: "Home", to: "/dashboard" },
  { label: "Projects", to: "/projects" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const [loggingOut, setLoggingOut] = useState(false);

  async function handleLogout() {
    setLoggingOut(true);
    try {
      // Clears the httpOnly session cookie on the server.
      await apiClient.post("/auth/logout");
    } catch {
      // Even if the request fails, send the user back to login.
    } finally {
      navigate("/login");
    }
  }

  return (
    <nav className="sticky top-0 z-20 bg-[#0b0b12] border-b border-white/[0.07]">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand */}
        <div className="flex items-center gap-8">
          <NavLink to="/dashboard" className="flex items-center gap-2.5 select-none">
            <div className="flex h-7 w-7 items-center justify-center rounded border border-[#6c5ce7]/50">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-3.5 w-3.5 text-[#6c5ce7]"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <span className="text-sm font-medium tracking-tight text-white/90">
              CloudForge
            </span>
          </NavLink>

          {/* Links */}
          <div className="hidden items-center gap-1 sm:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-md px-3 py-1.5 text-sm transition-colors ${
                    isActive
                      ? "bg-white/[0.06] text-white"
                      : "text-white/45 hover:text-white/80"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Logout */}
        <button
          type="button"
          onClick={handleLogout}
          disabled={loggingOut}
          className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm text-white/45 transition-colors hover:text-white/80 disabled:opacity-50"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-4 w-4"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          {loggingOut ? "Logging out…" : "Log out"}
        </button>
      </div>
    </nav>
  );
}

interface NavItem {
  label: string;
  href: string;
}

interface navBarProps {
  items: NavItem[];
}

export default function Navbar({ items }: navBarProps) {
  const navLinks = items.filter((i) => i.label !== "Login");
  const loginItem = items.find((i) => i.label === "Login");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0a0613]/70 border-b border-white/6">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-14 md:h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-7 h-7 rounded-md border border-[#9b87f5]/40 bg-[#9b87f5]/10 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
          <span className="text-white/90 font-medium text-sm tracking-wide">CloudForge</span>
        </a>

        {/* Nav Links — desktop only */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-xs font-medium text-white/40 hover:text-white/80 transition-colors duration-150 tracking-wide uppercase"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        {loginItem && (
          <div className="flex items-center gap-3">
            <a
              href={loginItem.href}
              className="hidden sm:block text-xs text-white/40 hover:text-white/70 transition-colors duration-150"
            >
              Sign in
            </a>
            <a
              href="/register"
              className="text-xs px-3 py-1.5 sm:px-4 sm:py-2 rounded-md border border-[#9b87f5]/40 bg-[#9b87f5]/10 text-[#9b87f5] font-medium hover:bg-[#9b87f5]/20 hover:border-[#9b87f5]/60 transition-all duration-200 whitespace-nowrap"
            >
              Get started
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

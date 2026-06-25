import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, Clock, LineChart, Menu, X } from "lucide-react";
import Logo from "./Logo.jsx";

const links = [
  { to: "/", label: "Home", icon: Home, end: true },
  { to: "/timeline", label: "Timeline", icon: Clock, end: false },
  { to: "/stats", label: "Stats", icon: LineChart, end: false },
];

function linkClasses({ isActive }) {
  const base =
    "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors";
  return isActive
    ? `${base} bg-brand-700 text-white shadow-sm`
    : `${base} text-slate-600 hover:bg-brand-50 hover:text-brand-700`;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:py-4">
        <Logo />

        {/* Desktop links */}
        <div className="hidden items-center gap-1 sm:flex">
          {links.map(({ to, label, icon: Icon, end }) => (
            <NavLink key={to} to={to} end={end} className={linkClasses}>
              <Icon size={16} strokeWidth={2} />
              {label}
            </NavLink>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-slate-600 hover:bg-brand-50 hover:text-brand-700 sm:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-200 bg-white px-4 pb-4 sm:hidden">
          <div className="flex flex-col gap-1 pt-2">
            {links.map(({ to, label, icon: Icon, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                onClick={() => setOpen(false)}
                className={linkClasses}
              >
                <Icon size={16} strokeWidth={2} />
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

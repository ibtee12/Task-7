import { Instagram, Facebook, Twitter } from "lucide-react";

const socials = [
  { label: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { label: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { label: "Twitter / X", icon: Twitter, href: "https://twitter.com" },
];

const legalLinks = ["Privacy Policy", "Terms of Service", "Cookies"];

export default function Footer() {
  return (
    <footer className="mt-auto bg-brand-700 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 text-center">
        <p className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          <span>Keen</span>
          <span className="font-medium">Keeper</span>
        </p>
        <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <p className="mt-8 text-sm font-semibold">Social Links</p>
        <div className="mt-3 flex items-center justify-center gap-3">
          {socials.map(({ label, icon: Icon, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink transition-transform hover:scale-110"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-5 text-xs text-brand-100 sm:flex-row sm:justify-between">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <ul className="flex items-center gap-5">
            {legalLinks.map((link) => (
              <li key={link}>
                <a href="#" className="transition-colors hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

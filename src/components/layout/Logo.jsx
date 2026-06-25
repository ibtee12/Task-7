import { Link } from "react-router-dom";

export default function Logo({ className = "" }) {
  return (
    <Link
      to="/"
      className={`inline-flex items-center text-xl font-extrabold tracking-tight ${className}`}
      aria-label="KeenKeeper home"
    >
      <span className="text-ink">Keen</span>
      <span className="text-brand-500">Keeper</span>
    </Link>
  );
}

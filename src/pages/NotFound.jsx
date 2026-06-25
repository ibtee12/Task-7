import { Link } from "react-router-dom";
import { Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
      <Compass size={56} className="text-brand-400" strokeWidth={1.5} />
      <p className="mt-6 text-6xl font-extrabold text-brand-700">404</p>
      <h1 className="mt-3 text-2xl font-bold text-ink">Page not found</h1>
      <p className="mt-2 max-w-md text-slate-500">
        The page you're looking for doesn't exist or may have been moved. Let's
        get you back to your friends.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-800"
      >
        <Home size={16} />
        Back to Home
      </Link>
    </main>
  );
}

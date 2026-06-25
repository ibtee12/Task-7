import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useApp } from "../context/AppContext.jsx";
import FriendInfoCard from "../components/detail/FriendInfoCard.jsx";

export default function FriendDetail() {
  const { id } = useParams();
  const { getFriendById, loading } = useApp();

  if (loading) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-16 text-center text-slate-400">
        Loading friend…
      </main>
    );
  }

  const friend = getFriendById(id);

  if (!friend) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-ink">Friend not found</h1>
        <p className="mt-2 text-slate-500">
          We couldn't find the friend you're looking for.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
      <Link
        to="/"
        className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-brand-700"
      >
        <ArrowLeft size={16} />
        Back to Friends
      </Link>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left column */}
        <div className="lg:col-span-1">
          <FriendInfoCard friend={friend} />
        </div>

        {/* Right column — stats, goal, quick check-in (next step) */}
        <div className="lg:col-span-2">
          <div className="rounded-xl border border-dashed border-slate-200 bg-white p-8 text-center text-sm text-slate-400">
            Stats, goal, and quick check-in coming next.
          </div>
        </div>
      </div>
    </main>
  );
}

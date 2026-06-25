import { Link } from "react-router-dom";
import StatusBadge from "../StatusBadge.jsx";

export default function FriendCard({ friend }) {
  return (
    <Link
      to={`/friend/${friend.id}`}
      className="group flex flex-col items-center rounded-xl border border-slate-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
    >
      <img
        src={friend.picture}
        alt={friend.name}
        loading="lazy"
        className="h-16 w-16 rounded-full object-cover ring-2 ring-slate-100"
      />
      <h3 className="mt-3 font-semibold text-ink">{friend.name}</h3>
      <p className="mt-0.5 text-xs text-slate-400">
        {friend.days_since_contact}d ago
      </p>

      <div className="mt-3 flex flex-wrap justify-center gap-1.5">
        {friend.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-brand-50 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-brand-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4">
        <StatusBadge status={friend.status} />
      </div>
    </Link>
  );
}

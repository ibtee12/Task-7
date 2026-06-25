import { AlarmClock, Archive, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import StatusBadge from "../StatusBadge.jsx";

const actions = [
  {
    label: "Snooze 2 Weeks",
    icon: AlarmClock,
    onClick: (name) => toast.success(`Snoozed ${name} for 2 weeks`),
    className: "text-slate-700 hover:bg-slate-50",
  },
  {
    label: "Archive",
    icon: Archive,
    onClick: (name) => toast(`${name} archived`),
    className: "text-slate-700 hover:bg-slate-50",
  },
  {
    label: "Delete",
    icon: Trash2,
    onClick: (name) => toast.error(`${name} deleted`),
    className: "text-red-600 hover:bg-red-50",
  },
];

export default function FriendInfoCard({ friend }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-xl border border-slate-100 bg-white p-6 text-center shadow-sm">
        <img
          src={friend.picture}
          alt={friend.name}
          className="mx-auto h-24 w-24 rounded-full object-cover ring-2 ring-slate-100"
        />
        <h2 className="mt-4 text-lg font-bold text-ink">{friend.name}</h2>

        <div className="mt-2 flex justify-center">
          <StatusBadge status={friend.status} />
        </div>

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

        <p className="mt-4 text-sm italic text-slate-500">"{friend.bio}"</p>
        <p className="mt-3 text-xs text-slate-400">Preferred: {friend.email}</p>
      </div>

      <div className="flex flex-col gap-2.5">
        {actions.map(({ label, icon: Icon, onClick, className }) => (
          <button
            key={label}
            type="button"
            onClick={() => onClick(friend.name)}
            className={`flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium shadow-sm transition-colors ${className}`}
          >
            <Icon size={16} />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

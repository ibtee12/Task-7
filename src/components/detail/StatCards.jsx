import { useApp } from "../../context/AppContext.jsx";

function StatCard({ value, label }) {
  return (
    <div className="rounded-xl border border-slate-100 bg-white p-5 text-center shadow-sm">
      <p className="text-2xl font-bold text-brand-700">{value}</p>
      <p className="mt-1 text-xs text-slate-500">{label}</p>
    </div>
  );
}

export default function StatCards({ friend }) {
  const { formatDisplayDate } = useApp();
  const nextDue = formatDisplayDate(new Date(friend.next_due_date));

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <StatCard value={friend.days_since_contact} label="Days Since Contact" />
      <StatCard value={friend.goal} label="Goal (Days)" />
      <StatCard value={nextDue} label="Next Due Date" />
    </div>
  );
}

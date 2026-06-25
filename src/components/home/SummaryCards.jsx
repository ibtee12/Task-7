import { useMemo } from "react";
import { Users, CheckCircle2, AlertTriangle, Activity } from "lucide-react";
import { useApp } from "../../context/AppContext.jsx";

function SummaryCard({ icon: Icon, value, label }) {
  return (
    <div className="rounded-xl border border-slate-100 bg-white p-5 text-center shadow-sm">
      <div className="flex items-center justify-center gap-2">
        <Icon size={18} className="text-brand-500" />
        <span className="text-3xl font-bold text-brand-700">{value}</span>
      </div>
      <p className="mt-1 text-sm text-slate-500">{label}</p>
    </div>
  );
}

export default function SummaryCards() {
  const { friends, timeline } = useApp();

  const stats = useMemo(() => {
    const total = friends.length;
    const onTrack = friends.filter((f) => f.status === "on-track").length;
    const needAttention = friends.filter(
      (f) => f.status === "overdue" || f.status === "almost due"
    ).length;

    const now = new Date();
    const interactionsThisMonth = timeline.filter((entry) => {
      const d = new Date(entry.date);
      return (
        d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()
      );
    }).length;

    return { total, onTrack, needAttention, interactionsThisMonth };
  }, [friends, timeline]);

  const cards = [
    { icon: Users, value: stats.total, label: "Total Friends" },
    { icon: CheckCircle2, value: stats.onTrack, label: "On Track" },
    { icon: AlertTriangle, value: stats.needAttention, label: "Need Attention" },
    {
      icon: Activity,
      value: stats.interactionsThisMonth,
      label: "Interactions This Month",
    },
  ];

  return (
    <section className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-4 px-4 lg:grid-cols-4">
      {cards.map((card) => (
        <SummaryCard key={card.label} {...card} />
      ))}
    </section>
  );
}

import { useMemo } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { useApp } from "../context/AppContext.jsx";
import { INTERACTION_CONFIG } from "../utils/interactions.js";

const CHART_TYPES = ["text", "call", "video"];

export default function Stats() {
  const { timeline, loading } = useApp();

  const data = useMemo(() => {
    return CHART_TYPES.map((type) => ({
      name: INTERACTION_CONFIG[type].label,
      value: timeline.filter((e) => e.type === type).length,
      color: INTERACTION_CONFIG[type].color,
    }));
  }, [timeline]);

  const total = data.reduce((sum, d) => sum + d.value, 0);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-ink">Friendship Analytics</h1>

      <div className="mt-6 rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
        <h2 className="font-semibold text-ink">By Interaction Type</h2>

        {loading ? (
          <p className="py-20 text-center text-slate-400">Loading chart…</p>
        ) : total === 0 ? (
          <p className="py-20 text-center text-slate-400">
            No interactions logged yet.
          </p>
        ) : (
          <div className="mt-4 h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={110}
                  paddingAngle={3}
                  stroke="none"
                  isAnimationActive={false}
                >
                  {data.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name) => [`${value} interactions`, name]}
                  contentStyle={{
                    borderRadius: "10px",
                    border: "1px solid #e2e8f0",
                    fontSize: "13px",
                  }}
                />
                <Legend
                  verticalAlign="bottom"
                  iconType="circle"
                  formatter={(value) => (
                    <span className="text-sm text-slate-600">{value}</span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </main>
  );
}

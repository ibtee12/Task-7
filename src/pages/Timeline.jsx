import { useMemo, useState } from "react";
import { useApp } from "../context/AppContext.jsx";
import TimelineEntry from "../components/timeline/TimelineEntry.jsx";

const FILTERS = [
  { value: "all", label: "All interactions" },
  { value: "call", label: "Call" },
  { value: "text", label: "Text" },
  { value: "video", label: "Video" },
  { value: "meetup", label: "Meetup" },
];

export default function Timeline() {
  const { timeline, loading } = useApp();
  const [filter, setFilter] = useState("all");

  const entries = useMemo(() => {
    const filtered =
      filter === "all"
        ? timeline
        : timeline.filter((e) => e.type === filter);
    // Newest first.
    return [...filtered].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [timeline, filter]);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-ink">Timeline</h1>

      <div className="mt-5">
        <label htmlFor="timeline-filter" className="sr-only">
          Filter timeline
        </label>
        <select
          id="timeline-filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 sm:w-64"
        >
          {FILTERS.map((f) => (
            <option key={f.value} value={f.value}>
              {f.value === "all" ? "Filter timeline" : f.label}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <p className="mt-8 text-center text-slate-400">Loading timeline…</p>
      ) : entries.length === 0 ? (
        <p className="mt-10 text-center text-slate-400">
          No interactions yet. Check in with a friend to get started!
        </p>
      ) : (
        <ul className="mt-5 flex flex-col gap-3">
          {entries.map((entry) => (
            <TimelineEntry key={entry.id} entry={entry} />
          ))}
        </ul>
      )}
    </main>
  );
}

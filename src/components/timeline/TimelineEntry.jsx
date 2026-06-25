import { getInteractionConfig, formatTimelineDate } from "../../utils/interactions.js";

export default function TimelineEntry({ entry }) {
  const config = getInteractionConfig(entry.type);
  const Icon = config.icon;

  return (
    <li className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-sm transition-colors hover:border-slate-200">
      <span
        className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: `${config.color}1a`, color: config.color }}
      >
        <Icon size={18} />
      </span>
      <div className="min-w-0">
        <p className="text-sm">
          <span className={`font-semibold ${config.text}`}>{config.label}</span>{" "}
          <span className="text-slate-600">with {entry.friendName}</span>
        </p>
        <p className="text-xs text-slate-400">{formatTimelineDate(entry.date)}</p>
      </div>
    </li>
  );
}

/**
 * Visual config for each friend status.
 * Statuses come from friends.json: "overdue" | "almost due" | "on-track".
 */
export const STATUS_CONFIG = {
  overdue: {
    label: "Overdue",
    badge: "bg-red-100 text-red-700",
    solid: "bg-red-500 text-white",
    dot: "bg-red-500",
  },
  "almost due": {
    label: "Almost Due",
    badge: "bg-amber-100 text-amber-700",
    solid: "bg-amber-500 text-white",
    dot: "bg-amber-500",
  },
  "on-track": {
    label: "On-Track",
    badge: "bg-brand-100 text-brand-700",
    solid: "bg-brand-700 text-white",
    dot: "bg-brand-600",
  },
};

export function getStatusConfig(status) {
  return STATUS_CONFIG[status] ?? STATUS_CONFIG["on-track"];
}

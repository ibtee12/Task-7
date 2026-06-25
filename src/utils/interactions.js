import { PhoneCall, MessageSquare, Video, Handshake } from "lucide-react";

/**
 * Visual config for each timeline interaction type.
 * Types: "call" | "text" | "video" | "meetup".
 * Colors for call/text/video are reused by the Stats pie chart.
 */
export const INTERACTION_CONFIG = {
  call: { label: "Call", icon: PhoneCall, color: "#1e4d3a", text: "text-brand-700" },
  text: { label: "Text", icon: MessageSquare, color: "#7c3aed", text: "text-violet-600" },
  video: { label: "Video", icon: Video, color: "#22c55e", text: "text-green-500" },
  meetup: { label: "Meetup", icon: Handshake, color: "#f59e0b", text: "text-amber-500" },
};

export function getInteractionConfig(type) {
  return INTERACTION_CONFIG[type] ?? INTERACTION_CONFIG.call;
}

export function formatTimelineDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

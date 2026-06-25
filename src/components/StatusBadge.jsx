import { getStatusConfig } from "../utils/status.js";

export default function StatusBadge({ status, variant = "solid", className = "" }) {
  const config = getStatusConfig(status);
  const styles = variant === "soft" ? config.badge : config.solid;

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${styles} ${className}`}
    >
      {config.label}
    </span>
  );
}

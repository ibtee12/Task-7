import { PhoneCall, MessageSquare, Video } from "lucide-react";
import toast from "react-hot-toast";
import { useApp } from "../../context/AppContext.jsx";

const checkIns = [
  { type: "call", label: "Call", icon: PhoneCall },
  { type: "text", label: "Text", icon: MessageSquare },
  { type: "video", label: "Video", icon: Video },
];

export default function QuickCheckIn({ friend }) {
  const { addTimelineEntry } = useApp();

  function handleCheckIn(type, label) {
    addTimelineEntry(friend, type);
    toast.success(`${label} with ${friend.name} logged to your timeline`);
  }

  return (
    <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
      <h3 className="font-semibold text-ink">Quick Check-In</h3>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {checkIns.map(({ type, label, icon: Icon }) => (
          <button
            key={type}
            type="button"
            onClick={() => handleCheckIn(type, label)}
            className="flex flex-col items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-4 text-sm font-medium text-slate-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            <Icon size={20} />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

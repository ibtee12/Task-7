import { useState } from "react";
import { Pencil, Check, X } from "lucide-react";
import toast from "react-hot-toast";

export default function RelationshipGoal({ goal, onSave }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(goal);

  function startEditing() {
    setDraft(goal);
    setEditing(true);
  }

  function save() {
    const value = Number(draft);
    if (!Number.isFinite(value) || value < 1) {
      toast.error("Please enter a valid number of days");
      return;
    }
    onSave(value);
    setEditing(false);
    toast.success("Relationship goal updated");
  }

  return (
    <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-ink">Relationship Goal</h3>
        {!editing && (
          <button
            type="button"
            onClick={startEditing}
            className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-50"
          >
            <Pencil size={13} />
            Edit
          </button>
        )}
      </div>

      {editing ? (
        <div className="mt-3 flex items-center gap-2">
          <span className="text-sm text-slate-500">Connect every</span>
          <input
            type="number"
            min={1}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            className="w-20 rounded-md border border-slate-300 px-2 py-1 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
            autoFocus
          />
          <span className="text-sm text-slate-500">days</span>
          <button
            type="button"
            onClick={save}
            className="ml-1 rounded-md bg-brand-700 p-1.5 text-white transition-colors hover:bg-brand-800"
            aria-label="Save goal"
          >
            <Check size={15} />
          </button>
          <button
            type="button"
            onClick={() => setEditing(false)}
            className="rounded-md border border-slate-200 p-1.5 text-slate-500 transition-colors hover:bg-slate-50"
            aria-label="Cancel"
          >
            <X size={15} />
          </button>
        </div>
      ) : (
        <p className="mt-2 text-sm text-slate-500">
          Connect every <span className="font-semibold text-ink">{goal} days</span>
        </p>
      )}
    </div>
  );
}

export default function FriendCardSkeleton() {
  return (
    <div className="flex animate-pulse flex-col items-center rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="h-16 w-16 rounded-full bg-slate-200" />
      <div className="mt-3 h-4 w-24 rounded bg-slate-200" />
      <div className="mt-2 h-3 w-12 rounded bg-slate-100" />
      <div className="mt-3 flex gap-1.5">
        <div className="h-4 w-12 rounded-full bg-slate-100" />
        <div className="h-4 w-12 rounded-full bg-slate-100" />
      </div>
      <div className="mt-4 h-6 w-20 rounded-full bg-slate-200" />
    </div>
  );
}

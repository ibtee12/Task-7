import { UserPlus } from "lucide-react";
import toast from "react-hot-toast";

export default function Banner() {
  return (
    <section className="px-4 pt-12 pb-2 text-center sm:pt-16">
      <h1 className="mx-auto max-w-3xl text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl">
        Friends to keep close in your life
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-sm text-slate-500 sm:text-base">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <div className="mt-7 flex justify-center">
        <button
          type="button"
          onClick={() => toast.success("Friend adding is coming soon!")}
          className="inline-flex items-center gap-2 rounded-lg bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
        >
          <UserPlus size={18} strokeWidth={2.2} />
          Add a Friend
        </button>
      </div>
    </section>
  );
}

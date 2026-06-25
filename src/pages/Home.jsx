import Banner from "../components/home/Banner.jsx";
import SummaryCards from "../components/home/SummaryCards.jsx";

export default function Home() {
  return (
    <main className="pb-16">
      <Banner />
      <SummaryCards />

      {/* Your Friends grid arrives in the next step */}
      <section className="mx-auto mt-12 max-w-6xl px-4">
        <h2 className="text-xl font-bold text-ink">Your Friends</h2>
        <p className="mt-2 text-sm text-slate-400">Friend cards coming soon.</p>
      </section>
    </main>
  );
}

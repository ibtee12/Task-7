import Banner from "../components/home/Banner.jsx";
import SummaryCards from "../components/home/SummaryCards.jsx";
import FriendsGrid from "../components/home/FriendsGrid.jsx";

export default function Home() {
  return (
    <main className="pb-16">
      <Banner />
      <SummaryCards />
      <FriendsGrid />
    </main>
  );
}

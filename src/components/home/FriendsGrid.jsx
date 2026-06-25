import { useApp } from "../../context/AppContext.jsx";
import FriendCard from "./FriendCard.jsx";
import FriendCardSkeleton from "./FriendCardSkeleton.jsx";

export default function FriendsGrid() {
  const { friends, loading } = useApp();

  return (
    <section className="mx-auto mt-12 max-w-6xl px-4">
      <h2 className="mb-5 text-xl font-bold text-ink">Your Friends</h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => (
              <FriendCardSkeleton key={i} />
            ))
          : friends.map((friend) => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
      </div>

      {!loading && friends.length === 0 && (
        <p className="py-10 text-center text-slate-400">
          No friends yet. Add your first connection!
        </p>
      )}
    </section>
  );
}

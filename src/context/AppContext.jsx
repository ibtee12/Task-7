import { createContext, useContext, useEffect, useMemo, useState } from "react";
import friendsData from "../data/friends.json";
import timelineData from "../data/timeline.json";

const AppContext = createContext(null);

/** Format a Date as "Month D, YYYY" (e.g. "June 25, 2026"). */
function formatDisplayDate(date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function AppProvider({ children }) {
  const [friends, setFriends] = useState([]);
  const [timeline, setTimeline] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate fetching the friends data so the Home page can show a loading state.
  useEffect(() => {
    let active = true;
    setLoading(true);

    const timer = setTimeout(() => {
      if (!active) return;
      setFriends(friendsData);
      setTimeline(timelineData);
      setLoading(false);
    }, 900);

    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, []);

  /**
   * Log a new interaction (call / text / video) with a friend.
   * Adds a timeline entry stamped with today's date and a "Type with Name" title.
   */
  function addTimelineEntry(friend, type) {
    const now = new Date();
    const label = type.charAt(0).toUpperCase() + type.slice(1);

    const entry = {
      id: `t-${now.getTime()}`,
      friendId: friend.id,
      type,
      friendName: friend.name,
      title: `${label} with ${friend.name}`,
      date: now.toISOString().slice(0, 10),
    };

    setTimeline((prev) => [entry, ...prev]);
    return entry;
  }

  function getFriendById(id) {
    return friends.find((f) => String(f.id) === String(id));
  }

  const value = useMemo(
    () => ({
      friends,
      timeline,
      loading,
      addTimelineEntry,
      getFriendById,
      formatDisplayDate,
    }),
    [friends, timeline, loading]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return ctx;
}

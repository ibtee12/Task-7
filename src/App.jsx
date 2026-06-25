import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import FriendDetail from "./pages/FriendDetail.jsx";
import Timeline from "./pages/Timeline.jsx";
import Stats from "./pages/Stats.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/friend/:id" element={<FriendDetail />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

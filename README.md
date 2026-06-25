# 👥 KeenKeeper — Keep Your Friendships Alive

KeenKeeper is a friendship-tracking web app that helps you stay close to the
people who matter. Browse your friends, see who needs attention, log quick
check-ins (call, text, video), and review your whole interaction history on a
timeline — with a friendship analytics chart to top it off.

> Built as a single-page React application with client-side routing,
> a shared in-app state layer, and a clean, fully responsive UI.

---

## ✨ Key Features

1. **Friends dashboard with live status** — Every friend is shown as a card with
   their photo, tags, days since last contact, and a color-coded status badge
   (Overdue / Almost Due / On-Track). Summary cards surface totals at a glance.
2. **Quick Check-In with live timeline** — Logging a Call, Text, or Video on a
   friend's detail page instantly adds a dated entry to the Timeline and fires a
   toast notification. The Timeline supports filtering by interaction type.
3. **Friendship Analytics** — A Recharts donut chart breaks down your
   interactions by type, so you can see how you keep in touch at a glance.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **React 19** | UI library |
| **Vite** | Build tool & dev server |
| **React Router DOM** | Client-side page navigation |
| **Tailwind CSS v4** | Styling & responsive design |
| **Recharts** | Friendship analytics pie/donut chart |
| **react-hot-toast** | Toast notifications |
| **lucide-react** | Icons |

---

## 📄 Pages

- **Home (`/`)** — Banner, summary cards, and the "Your Friends" grid
- **Friend Detail (`/friend/:id`)** — Info card + stats, relationship goal, and Quick Check-In
- **Timeline (`/timeline`)** — Filterable, newest-first history of all interactions
- **Stats (`/stats`)** — Friendship Analytics donut chart
- **404** — Friendly fallback for any unknown route

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

The app runs at `http://localhost:5173` by default.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/      # Navbar, Footer, Logo, Layout
│   ├── home/        # Banner, SummaryCards, FriendCard, FriendsGrid
│   ├── detail/      # FriendInfoCard, StatCards, RelationshipGoal, QuickCheckIn
│   ├── timeline/    # TimelineEntry
│   └── StatusBadge.jsx
├── context/         # AppContext (friends + timeline state)
├── data/            # friends.json, timeline.json
├── pages/           # Home, FriendDetail, Timeline, Stats, NotFound
└── utils/           # status & interaction helpers
```

---

## 🌐 Deployment

Configured for **Netlify** (`netlify.toml` + `public/_redirects`) with an SPA
fallback, so reloading any client-side route (e.g. `/timeline`, `/friend/3`)
serves the app correctly instead of a 404.

```bash
npm run build   # outputs to dist/
```

Set the publish directory to `dist` and the build command to `npm run build`.

---

## 📱 Responsive

Works across mobile, tablet, and desktop — the friends grid scales from a single
column up to a four-column layout on large screens, and the navbar collapses to a
menu on small screens.

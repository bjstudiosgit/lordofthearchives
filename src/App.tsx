import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import IntroVideo from "./components/IntroVideo";
import RecentBattles from "./components/RecentBattles";
import Footer from "./components/Footer";
import League from "./pages/League";
import BattleDetail from "./pages/BattleDetail";
import PengamePage from "./pages/PengamePage";
import MCDetail from "./pages/MCDetail";
import MCIndex from "./pages/MCIndex";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

function Home() {
  return (
    <main>
      <RecentBattles />
    </main>
  );
}

function Main() {
  const location = useLocation();
  console.log("Current path:", location.pathname);
  return (
    <div className="min-h-screen bg-zinc-950 selection:bg-brand selection:text-black">
      <ScrollToTop />
      <Navbar />
      {location.pathname === '/' && location.hash === '' && <IntroVideo />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/league" element={<League />} />
        <Route path="/pengame" element={<PengamePage />} />
        <Route path="/mcs" element={<MCIndex />} />
        <Route path="/battle/:slug" element={<BattleDetail />} />
        <Route path="/mc/:slug" element={<MCDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

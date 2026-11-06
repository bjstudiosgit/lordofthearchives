"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  Users,
  Trophy,
  Menu,
  X,
  Youtube,
  Scale,
  Eye,
  Package,
  Newspaper,
  ChevronDown,
} from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

function TiktokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

const leagues = [
  { name: "PenGame", href: "/pengame", count: "450+" },
  { name: "King of the Ronalds", href: "/king-of-the-ronalds", count: "270+" },
  { name: "Prizefighter", href: "/prizefighter", count: "60+" },
  { name: "Clash Money", href: "/clash-money", count: "110+" },
  { name: "Lord of the Mics", href: "/lord-of-the-mics", count: "60+" },
  { name: "Gzone", href: "/gzone", count: "30+" },
  { name: "Talk Is Cheap", href: "/talk-is-cheap", count: "20+" },
];

const vaultLinks = [
  { name: "People's Champion", href: "/peoples-vote", icon: Eye },
  { name: "Hosts & Judges", href: "/hosts-judges", icon: Scale },
  { name: "Prop'erty Vault", href: "/property", icon: Package },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [leaguesOpen, setLeaguesOpen] = useState(false);
  const [vaultOpen, setVaultOpen] = useState(false);
  const pathname = usePathname();

  const leaguesTimeout = useRef<NodeJS.Timeout | null>(null);
  const vaultTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsOpen(false);
    setLeaguesOpen(false);
    setVaultOpen(false);
  }, [pathname]);

  const handleLeaguesEnter = () => {
    if (leaguesTimeout.current) clearTimeout(leaguesTimeout.current);
    setVaultOpen(false);
    setLeaguesOpen(true);
  };

  const handleLeaguesLeave = () => {
    leaguesTimeout.current = setTimeout(() => {
      setLeaguesOpen(false);
    }, 150);
  };

  const handleVaultEnter = () => {
    if (vaultTimeout.current) clearTimeout(vaultTimeout.current);
    setLeaguesOpen(false);
    setVaultOpen(true);
  };

  const handleVaultLeave = () => {
    vaultTimeout.current = setTimeout(() => {
      setVaultOpen(false);
    }, 150);
  };

  const isLeagueActive = [
    "/pengame",
    "/league",
    "/king-of-the-ronalds",
    "/prizefighter",
    "/clash-money",
    "/lord-of-the-mics",
    "/gzone",
    "/talk-is-cheap",
  ].some((path) => pathname === path || pathname.startsWith(`${path}/`));

  const isVaultActive = ["/peoples-vote", "/hosts-judges", "/property"].some(
    (path) => pathname === path,
  );

  const handleScrollToLeagues = (e: React.MouseEvent) => {
    setLeaguesOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById("hero-archives");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-3 pt-3 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto rounded-2xl border border-white/10 bg-black/85 shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-9 w-9 shrink-0 sm:h-10 sm:w-10">
                <img
                  src="/assets/branding/logohires.png"
                  alt="Lord of the Archives Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-base sm:text-lg tracking-tight uppercase leading-none text-white">
                  LORD OF THE <span className="text-brand">ARCHIVES</span>
                </span>
                <span className="mt-1 text-[8px] sm:text-[8.5px] font-black uppercase tracking-[0.25em] leading-none text-zinc-400">
                  WE NEVER FORGET
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* 1. Leagues (Direct link + slim dropdown) */}
            <div
              className="relative"
              onMouseEnter={handleLeaguesEnter}
              onMouseLeave={handleLeaguesLeave}
            >
              <Link
                href="/#hero-archives"
                onClick={handleScrollToLeagues}
                className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                  isLeagueActive || leaguesOpen
                    ? "border border-brand/40 bg-brand/15 text-brand shadow-[0_0_15px_rgba(242,125,38,0.2)]"
                    : "border border-transparent text-zinc-300 hover:border-white/10 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span>Leagues</span>
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${
                    leaguesOpen ? "rotate-180" : ""
                  }`}
                />
              </Link>

              {/* Slim Minimal Dropdown (No panels, just clean links) */}
              <AnimatePresence>
                {leaguesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.12 }}
                    className="absolute left-0 top-full pt-1.5 z-50 w-56"
                  >
                    <div className="rounded-xl border border-white/10 bg-zinc-950/95 p-1.5 shadow-2xl backdrop-blur-xl">
                      <div className="space-y-0.5">
                        {leagues.map((league) => (
                          <Link
                            key={league.name}
                            href={league.href}
                            className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-zinc-300 hover:text-brand hover:bg-white/5 transition-colors"
                          >
                            <span>{league.name}</span>
                            <span className="text-[10px] font-mono text-zinc-500">{league.count}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 2. LOTA League */}
            <Link
              href="/lota-league"
              className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                pathname === "/lota-league"
                  ? "border border-brand/40 bg-brand/15 text-brand shadow-[0_0_15px_rgba(242,125,38,0.2)]"
                  : "border border-transparent text-zinc-300 hover:border-white/10 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Trophy size={14} className="text-brand" />
              <span>LOTA League</span>
            </Link>

            {/* 3. Artists (MCs) */}
            <Link
              href="/mcs"
              className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                pathname === "/mcs" || pathname.startsWith("/mc/")
                  ? "border border-brand/40 bg-brand/15 text-brand shadow-[0_0_15px_rgba(242,125,38,0.2)]"
                  : "border border-transparent text-zinc-300 hover:border-white/10 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Users size={14} className="text-brand" />
              <span>Artists</span>
            </Link>

            {/* 4. News & Guides */}
            <Link
              href="/news"
              className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                pathname === "/news" || pathname.startsWith("/news/")
                  ? "border border-brand/40 bg-brand/15 text-brand shadow-[0_0_15px_rgba(242,125,38,0.2)]"
                  : "border border-transparent text-zinc-300 hover:border-white/10 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Newspaper size={14} className="text-brand" />
              <span>News</span>
            </Link>

            {/* 5. The Vault */}
            <div
              className="relative"
              onMouseEnter={handleVaultEnter}
              onMouseLeave={handleVaultLeave}
            >
              <button
                type="button"
                onClick={() => setVaultOpen(!vaultOpen)}
                className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                  isVaultActive || vaultOpen
                    ? "border border-brand/40 bg-brand/15 text-brand shadow-[0_0_15px_rgba(242,125,38,0.2)]"
                    : "border border-transparent text-zinc-300 hover:border-white/10 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span>Extra</span>
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${
                    vaultOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {vaultOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.12 }}
                    className="absolute right-0 top-full pt-1.5 z-50 w-52"
                  >
                    <div className="rounded-xl border border-white/10 bg-zinc-950/95 p-1.5 shadow-2xl backdrop-blur-xl space-y-0.5">
                      {vaultLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-zinc-300 hover:text-brand hover:bg-white/5 transition-colors"
                        >
                          <item.icon size={14} className="text-brand shrink-0" />
                          <span>{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Social Icons & Actions */}
          <div className="hidden lg:flex items-center gap-2 pl-3 border-l border-white/10">
            <a
              href="https://www.youtube.com/@LordoftheArchives"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-brand/30 bg-brand/10 hover:bg-brand text-brand hover:text-black p-2 rounded-xl transition-all flex items-center justify-center"
              aria-label="Follow us on YouTube"
              title="YouTube Channel"
            >
              <Youtube size={16} />
            </a>
            <a
              href="https://www.tiktok.com/@lordofthearchives"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-brand/30 bg-brand/10 hover:bg-brand text-brand hover:text-black p-2 rounded-xl transition-all flex items-center justify-center"
              aria-label="Follow us on TikTok"
              title="TikTok"
            >
              <TiktokIcon size={16} />
            </a>
          </div>

          {/* Mobile menu hamburger button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand border border-brand/30 bg-brand/10 hover:bg-brand hover:text-black rounded-xl p-2 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="lg:hidden mt-2 border border-white/10 bg-black/95 rounded-2xl shadow-2xl p-4 max-h-[85vh] overflow-y-auto"
          >
            <div className="space-y-4">
              {/* Primary Direct Links */}
              <div className="grid grid-cols-3 gap-2">
                <Link
                  href="/lota-league"
                  className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-zinc-900/60 p-3 text-center transition hover:border-brand/40"
                >
                  <Trophy size={18} className="text-brand mb-1.5" />
                  <span className="text-[10px] font-black uppercase tracking-wider text-white">LOTA League</span>
                </Link>
                <Link
                  href="/mcs"
                  className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-zinc-900/60 p-3 text-center transition hover:border-brand/40"
                >
                  <Users size={18} className="text-brand mb-1.5" />
                  <span className="text-[10px] font-black uppercase tracking-wider text-white">Artists</span>
                </Link>
                <Link
                  href="/news"
                  className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-zinc-900/60 p-3 text-center transition hover:border-brand/40"
                >
                  <Newspaper size={18} className="text-brand mb-1.5" />
                  <span className="text-[10px] font-black uppercase tracking-wider text-white">News</span>
                </Link>
              </div>

              {/* The 7 Leagues List */}
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-2 px-1">
                  Battle Leagues
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {leagues.map((league) => (
                    <Link
                      key={league.name}
                      href={league.href}
                      className="flex items-center justify-between rounded-xl border border-white/5 bg-zinc-900/40 p-2.5 hover:border-brand/30 transition-colors"
                    >
                      <span className="font-display text-sm italic uppercase text-white">{league.name}</span>
                      <span className="text-[10px] font-mono text-brand font-bold">{league.count}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* The Vault */}
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-2 px-1">
                  Extra
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {vaultLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-zinc-900/40 p-2.5"
                    >
                      <item.icon size={15} className="text-brand" />
                      <span className="text-xs font-bold uppercase tracking-wider text-zinc-200">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-center gap-3">
                <a
                  href="https://www.youtube.com/@LordoftheArchives"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-brand text-black py-2.5 rounded-xl font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2"
                >
                  <Youtube size={16} /> YouTube
                </a>
                <a
                  href="https://www.tiktok.com/@lordofthearchives"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-white/15 bg-zinc-900 text-white py-2.5 rounded-xl font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2"
                >
                  <TiktokIcon size={16} /> TikTok
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

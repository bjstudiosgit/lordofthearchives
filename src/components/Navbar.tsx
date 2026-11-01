"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  Users,
  Trophy,
  Menu,
  X,
  Youtube,
  Play,
  Scale,
  Eye,
  Package,
  Newspaper,
  ChevronDown,
  ArrowUpRight,
  Shield,
  Flame,
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
  {
    name: "PenGame",
    era: "2023–26",
    badge: "Flagship",
    count: "450+",
    archiveHref: "/pengame",
    tableHref: "/league",
    description: "Judged clashes, divisional tables & title shots",
    tone: "brand" as const,
  },
  {
    name: "King of the Ronalds",
    era: "2014–20",
    badge: "Underground",
    count: "270+",
    archiveHref: "/king-of-the-ronalds",
    tableHref: null,
    description: "Raw unfiltered UK pub battles & legendary grime clash culture",
    tone: "brand" as const,
  },
  {
    name: "Prizefighter",
    era: "2011–24",
    badge: "Tournament",
    count: "60+",
    archiveHref: "/prizefighter",
    tableHref: "/prizefighter/league",
    description: "140 BPM sudden-death tournament system with points tables",
    tone: "brand" as const,
  },
  {
    name: "Clash Money",
    era: "2015–16",
    badge: "North vs UK",
    count: "110+",
    archiveHref: "/clash-money",
    tableHref: null,
    description: "Headline 1v1, 2v2 and Trials platform from the North",
    tone: "brand" as const,
  },
  {
    name: "Lord of the Mics",
    era: "2004–15",
    badge: "Foundation",
    count: "60+",
    archiveHref: "/lord-of-the-mics",
    tableHref: null,
    description: "Jammer's legendary basement DVD clashes that birthed the scene",
    tone: "brand" as const,
  },
  {
    name: "Gzone",
    era: "Season 1",
    badge: "Grime",
    count: "30+",
    archiveHref: "/gzone",
    tableHref: "/gzone/league",
    description: "High-tempo heavyweight grime clashes & season standings",
    tone: "gzone" as const,
  },
  {
    name: "Talk Is Cheap",
    era: "2024–26",
    badge: "New Era",
    count: "20+",
    archiveHref: "/talk-is-cheap",
    tableHref: null,
    description: "Next-generation underground rap clashes and rapid releases",
    tone: "brand" as const,
  },
];

const vaultLinks = [
  {
    name: "People's Champion",
    href: "/peoples-vote",
    icon: Eye,
    description: "All-time YouTube solo clash view rankings",
  },
  {
    name: "Hosts & Judges",
    href: "/hosts-judges",
    icon: Scale,
    description: "Official referees, hosts, and judging panels",
  },
  {
    name: "Prop'erty Vault",
    href: "/property",
    icon: Package,
    description: "Physical props, scissors & haircuts taken in battles",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [leaguesOpen, setLeaguesOpen] = useState(false);
  const [vaultOpen, setVaultOpen] = useState(false);
  const pathname = usePathname();

  const leaguesTimeout = useRef<NodeJS.Timeout | null>(null);
  const vaultTimeout = useRef<NodeJS.Timeout | null>(null);

  // Close menus on page navigation
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-3 pt-3 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto rounded-2xl border border-white/10 bg-black/80 shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="group flex items-center gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-brand rounded-xl border border-yellow-200/60 flex items-center justify-center font-display text-lg sm:text-xl text-black shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-transform group-hover:scale-105">
                L
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-base sm:text-lg tracking-tight uppercase leading-none text-white group-hover:text-brand transition-colors">
                  LORD OF THE <span className="text-brand">ARCHIVES</span>
                </span>
                <span className="mt-1 text-[8px] sm:text-[8.5px] font-black uppercase tracking-[0.25em] leading-none text-zinc-400">
                  WE NEVER FORGET
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {/* 1. Battle Leagues Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleLeaguesEnter}
              onMouseLeave={handleLeaguesLeave}
            >
              <button
                type="button"
                onClick={() => setLeaguesOpen(!leaguesOpen)}
                className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                  isLeagueActive || leaguesOpen
                    ? "border border-brand/40 bg-brand/15 text-brand shadow-[0_0_15px_rgba(242,125,38,0.2)]"
                    : "border border-transparent text-zinc-300 hover:border-white/10 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span>Battle Leagues</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    leaguesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Flyout Panel */}
              <AnimatePresence>
                {leaguesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 top-full pt-2 z-50 w-[580px]"
                  >
                    <div className="rounded-2xl border border-white/10 bg-zinc-950/95 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.85)] backdrop-blur-2xl">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 px-1">
                        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">
                          The 7 Archived Leagues
                        </span>
                        <Link
                          href="/#hero-archives"
                          className="text-[10px] font-bold uppercase tracking-wider text-brand hover:underline"
                        >
                          View All Overview →
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {leagues.map((league) => (
                          <div
                            key={league.name}
                            className="group flex flex-col justify-between rounded-xl border border-white/5 bg-zinc-900/50 p-2.5 transition-all hover:border-brand/30 hover:bg-zinc-900"
                          >
                            <div className="flex items-start justify-between gap-1 mb-1">
                              <div>
                                <h4 className="font-display text-base uppercase italic leading-none text-white group-hover:text-brand transition-colors">
                                  {league.name}
                                </h4>
                                <span className="text-[9px] font-mono text-zinc-500">
                                  {league.era}
                                </span>
                              </div>
                              <span className="rounded bg-brand/10 px-1.5 py-0.5 text-[8px] font-black uppercase tracking-wider text-brand">
                                {league.count}
                              </span>
                            </div>

                            <div className="flex items-center gap-1.5 mt-2 pt-2 border-t border-white/5">
                              <Link
                                href={league.archiveHref}
                                className="flex-1 rounded-lg bg-white/5 px-2 py-1 text-center text-[10px] font-black uppercase tracking-wider text-zinc-300 transition-colors hover:bg-brand hover:text-black"
                              >
                                Archive
                              </Link>
                              {league.tableHref && (
                                <Link
                                  href={league.tableHref}
                                  className="rounded-lg border border-brand/30 bg-brand/10 px-2 py-1 text-center text-[10px] font-black uppercase tracking-wider text-brand transition-colors hover:bg-brand hover:text-black"
                                >
                                  Table
                                </Link>
                              )}
                            </div>
                          </div>
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

            {/* 5. The Vault Dropdown */}
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
                <span>The Vault</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    vaultOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {vaultOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full pt-2 z-50 w-64"
                  >
                    <div className="rounded-2xl border border-white/10 bg-zinc-950/95 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.85)] backdrop-blur-2xl space-y-1">
                      {vaultLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center gap-3 rounded-xl p-2.5 transition-colors hover:bg-white/5 group"
                        >
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-zinc-900 text-brand group-hover:border-brand/40 group-hover:bg-brand/10 transition-colors">
                            <item.icon size={16} />
                          </div>
                          <div>
                            <p className="font-display text-sm uppercase italic text-white group-hover:text-brand transition-colors leading-none">
                              {item.name}
                            </p>
                            <p className="text-[10px] text-zinc-500 mt-1 line-clamp-1">
                              {item.description}
                            </p>
                          </div>
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

              {/* The 7 Leagues */}
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-2 px-1">
                  Battle Leagues
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {leagues.map((league) => (
                    <div
                      key={league.name}
                      className="flex items-center justify-between rounded-xl border border-white/5 bg-zinc-900/40 p-2.5"
                    >
                      <div>
                        <span className="font-display text-sm italic uppercase text-white">{league.name}</span>
                        <span className="text-[9px] font-mono text-zinc-500 block">{league.era}</span>
                      </div>
                      <div className="flex gap-1.5">
                        <Link
                          href={league.archiveHref}
                          className="rounded-lg bg-white/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-300"
                        >
                          Archive
                        </Link>
                        {league.tableHref && (
                          <Link
                            href={league.tableHref}
                            className="rounded-lg bg-brand/20 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-brand"
                          >
                            Table
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* The Vault */}
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-2 px-1">
                  The Vault
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

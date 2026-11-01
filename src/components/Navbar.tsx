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
  Layers,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

function TiktokIcon({ size = 20 }: { size?: number }) {
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

interface LeagueNav {
  name: string;
  badge: string;
  era: string;
  tone: "brand" | "gzone";
  archiveHref: string;
  leagueHref?: string;
  description: string;
}

const battleLeagues: LeagueNav[] = [
  {
    name: "PenGame Rap Battle",
    badge: "PenGame",
    era: "2023–26",
    tone: "brand",
    archiveHref: "/pengame",
    leagueHref: "/league",
    description: "450+ battles across seasonal divisions and tournaments",
  },
  {
    name: "Gzone Rap Battle",
    badge: "Gzone",
    era: "Season 1",
    tone: "gzone",
    archiveHref: "/gzone",
    leagueHref: "/gzone/league",
    description: "Heavyweight grime clashes featuring Deeno & Roman",
  },
  {
    name: "King of the Ronalds",
    badge: "KOTR",
    era: "2014–20",
    tone: "brand",
    archiveHref: "/king-of-the-ronalds",
    description: "270+ raw UK clashes: Bowski, Hulk, Pedro & Oshea",
  },
  {
    name: "Prizefighter",
    badge: "Prizefighter",
    era: "2011–24",
    tone: "brand",
    archiveHref: "/prizefighter",
    leagueHref: "/prizefighter/league",
    description: "Tournament grime battles across multiple generations",
  },
  {
    name: "Clash Money",
    badge: "Clash Money",
    era: "2015–16",
    tone: "brand",
    archiveHref: "/clash-money",
    description: "110 Main Stage and Trials clashes from 2015–2016",
  },
  {
    name: "Lord of the Mics",
    badge: "LOTM",
    era: "2004–15",
    tone: "brand",
    archiveHref: "/lord-of-the-mics",
    description: "The classic basement DVD series curated by Jammer",
  },
  {
    name: "Talk Is Cheap",
    badge: "TIC",
    era: "2024–26",
    tone: "brand",
    archiveHref: "/talk-is-cheap",
    description: "Next-gen underground rap battle platform",
  },
];

const mainSiteLinks = [
  { name: "MCs", href: "/mcs", icon: Users },
  { name: "LOTA League", href: "/lota-league", icon: Trophy },
  { name: "News", href: "/news", icon: Newspaper },
  { name: "People's Vote", href: "/peoples-vote", icon: Eye },
  { name: "Hosts & Judges", href: "/hosts-judges", icon: Scale },
  { name: "Prop'erty", href: "/property", icon: Package },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLeaguesOpen, setIsLeaguesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isAnyLeagueActive = battleLeagues.some(
    (l) => pathname === l.archiveHref || (l.leagueHref && pathname === l.leagueHref)
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLeaguesOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLeaguesOpen(false);
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    setIsOpen(false);
    setIsLeaguesOpen(false);
    if (isHome && href.startsWith("/#")) {
      e.preventDefault();
      const id = href.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-3 pt-3 sm:px-6">
      <div className="max-w-[90rem] mx-auto rounded-2xl border border-white/10 bg-black/80 shadow-[0_12px_40px_rgba(0,0,0,0.55)] backdrop-blur-xl">
        <div className="flex items-center justify-between h-16 px-4 md:px-5">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="group flex items-center gap-2.5">
              <div className="w-9 h-9 bg-brand rounded-xl border border-yellow-200/60 flex items-center justify-center font-display text-xl text-black shadow-[0_0_22px_rgba(255,215,0,0.22)] transition-transform group-hover:-rotate-3">
                L
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-lg sm:text-xl tracking-tighter uppercase leading-none text-brand">
                  LORD OF THE ARCHIVES
                </span>
                <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] leading-none text-zinc-300">
                  WE NEVER FORGET
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            {/* Leagues Dropdown Trigger */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsLeaguesOpen(!isLeaguesOpen)}
                className={`flex items-center gap-2 rounded-xl border px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                  isLeaguesOpen || isAnyLeagueActive
                    ? "border-brand bg-brand text-black shadow-[0_0_20px_rgba(242,125,38,0.25)]"
                    : "border-white/10 bg-zinc-900/60 text-zinc-200 hover:border-brand/40 hover:text-brand hover:bg-zinc-900"
                }`}
                aria-expanded={isLeaguesOpen}
                aria-haspopup="true"
              >
                <Layers size={14} />
                <span>Leagues ({battleLeagues.length})</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${isLeaguesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Floating Dropdown Panel */}
              <AnimatePresence>
                {isLeaguesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 mt-3 w-[620px] rounded-3xl border border-white/15 bg-zinc-950/95 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.85)] backdrop-blur-2xl z-50"
                  >
                    <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand">
                          Battle Archives
                        </p>
                        <p className="text-xs text-zinc-400">Select a league to browse clashes or view tables</p>
                      </div>
                      <Link
                        href="/#hero-archives"
                        onClick={(e) => handleLinkClick(e, "/#hero-archives")}
                        className="text-[11px] font-semibold text-zinc-400 hover:text-brand transition-colors inline-flex items-center gap-1"
                      >
                        All archives overview <ArrowUpRight size={12} />
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      {battleLeagues.map((league) => {
                        const isArchiveActive = pathname === league.archiveHref;
                        const isLeagueActive = league.leagueHref && pathname === league.leagueHref;

                        return (
                          <div
                            key={league.name}
                            className={`flex flex-col justify-between rounded-2xl border p-3.5 transition-all ${
                              isArchiveActive || isLeagueActive
                                ? "border-brand/40 bg-zinc-900/90"
                                : "border-white/5 bg-zinc-900/40 hover:border-white/15 hover:bg-zinc-900/70"
                            }`}
                          >
                            <div>
                              <div className="flex items-center justify-between gap-1.5 mb-1.5">
                                <span
                                  className={`rounded-md px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider ${
                                    league.tone === "gzone"
                                      ? "bg-gzone/20 text-gzone border border-gzone/30"
                                      : "bg-brand/20 text-brand border border-brand/30"
                                  }`}
                                >
                                  {league.badge}
                                </span>
                                <span className="text-[10px] font-mono text-zinc-500">{league.era}</span>
                              </div>
                              <h4 className="font-display uppercase italic text-sm text-white leading-tight">
                                {league.name}
                              </h4>
                              <p className="mt-1 text-[11px] text-zinc-400 leading-snug line-clamp-1">
                                {league.description}
                              </p>
                            </div>

                            <div className="mt-3 flex items-center gap-1.5 border-t border-white/5 pt-2.5">
                              <Link
                                href={league.archiveHref}
                                onClick={(e) => handleLinkClick(e, league.archiveHref)}
                                className={`inline-flex flex-1 items-center justify-center gap-1 rounded-lg px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider transition-all ${
                                  isArchiveActive
                                    ? "bg-brand text-black"
                                    : "bg-white/5 text-zinc-200 hover:bg-brand/20 hover:text-brand"
                                }`}
                              >
                                <Play size={10} /> Archive
                              </Link>
                              {league.leagueHref && (
                                <Link
                                  href={league.leagueHref}
                                  onClick={(e) => handleLinkClick(e, league.leagueHref!)}
                                  className={`inline-flex items-center justify-center gap-1 rounded-lg px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider transition-all ${
                                    isLeagueActive
                                      ? "bg-brand text-black"
                                      : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
                                  }`}
                                  title="League Standings"
                                >
                                  <Trophy size={10} /> Table
                                </Link>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Main Links */}
            {mainSiteLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                    isActive
                      ? "border-brand/40 bg-brand/10 text-brand"
                      : "border-transparent text-zinc-300 hover:border-white/10 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <link.icon size={14} className={isActive ? "text-brand" : "text-zinc-500"} />
                  {link.name}
                </Link>
              );
            })}

            {/* Social Icons */}
            <div className="flex items-center gap-1.5 ml-1 border-l border-white/10 pl-3">
              <a
                href="https://www.youtube.com/@LordoftheArchives"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-brand/40 bg-brand/10 hover:bg-brand text-brand hover:text-black p-2 rounded-xl transition-all flex items-center justify-center"
                aria-label="Follow us on YouTube"
              >
                <Youtube size={16} />
              </a>
              <a
                href="https://www.tiktok.com/@lordofthearchives"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-brand/40 bg-brand/10 hover:bg-brand text-brand hover:text-black p-2 rounded-xl transition-all flex items-center justify-center"
                aria-label="Follow us on TikTok"
              >
                <TiktokIcon size={16} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
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

      {/* Mobile drawer */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden mt-2 border border-white/10 bg-black/95 rounded-2xl shadow-2xl p-4 max-h-[85vh] overflow-y-auto"
        >
          {/* Main Links */}
          <div className="grid grid-cols-2 gap-2 pb-4 border-b border-white/10">
            {mainSiteLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`flex items-center gap-2 rounded-xl border p-2.5 text-xs font-bold uppercase tracking-wider ${
                  pathname === link.href
                    ? "border-brand/40 bg-brand/15 text-brand"
                    : "border-white/5 bg-zinc-900/40 text-zinc-300 hover:text-white"
                }`}
              >
                <link.icon size={16} className="text-brand shrink-0" />
                {link.name}
              </Link>
            ))}
          </div>

          {/* Leagues Section */}
          <div className="pt-4">
            <p className="px-1 text-[10px] font-black uppercase tracking-[0.24em] text-brand mb-3">
              Battle Leagues ({battleLeagues.length})
            </p>
            <div className="space-y-2">
              {battleLeagues.map((league) => (
                <div
                  key={league.name}
                  className="rounded-xl border border-white/5 bg-zinc-900/40 p-3"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-display uppercase italic text-sm text-white">
                      {league.name}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500">{league.era}</span>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={league.archiveHref}
                      onClick={(e) => handleLinkClick(e, league.archiveHref)}
                      className="inline-flex flex-1 items-center justify-center gap-1 rounded-lg bg-brand/10 border border-brand/20 px-2.5 py-1.5 text-xs font-bold uppercase tracking-wider text-brand"
                    >
                      <Play size={12} /> Archive
                    </Link>
                    {league.leagueHref && (
                      <Link
                        href={league.leagueHref}
                        onClick={(e) => handleLinkClick(e, league.leagueHref!)}
                        className="inline-flex items-center justify-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-bold uppercase tracking-wider text-zinc-300"
                      >
                        <Trophy size={12} /> Table
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-center gap-4">
            <a
              href="https://www.youtube.com/@LordoftheArchives"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand text-black px-4 py-2.5 rounded-xl font-bold uppercase tracking-wider text-xs flex items-center gap-2"
              aria-label="Follow us on YouTube"
            >
              <Youtube size={16} /> YouTube
            </a>
            <a
              href="https://www.tiktok.com/@lordofthearchives"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/15 bg-zinc-900 text-white px-4 py-2.5 rounded-xl font-bold uppercase tracking-wider text-xs flex items-center gap-2"
              aria-label="Follow us on TikTok"
            >
              <TiktokIcon size={16} /> TikTok
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

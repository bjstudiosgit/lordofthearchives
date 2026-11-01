"use client";
import Link from "next/link";
import { motion } from "motion/react";
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
} from "lucide-react";
import React, { useState } from "react";
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

interface NavLinkItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  hideBelow1440?: boolean;
}

interface NavGroupItem {
  label: string;
  tone: "brand" | "gzone" | "neutral";
  links: NavLinkItem[];
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navGroups: NavGroupItem[] = [
    {
      label: "PenGame Rap Battle",
      tone: "brand",
      links: [
        { name: "Archive", href: "/pengame", icon: Play },
        { name: "League", href: "/league", icon: Trophy },
      ],
    },
    {
      label: "Gzone Rap Battle",
      tone: "gzone",
      links: [
        { name: "Archive", href: "/gzone", icon: Trophy },
        { name: "League", href: "/gzone/league", icon: Trophy },
      ],
    },
    {
      label: "KOTR",
      tone: "brand",
      links: [
        { name: "Archive", href: "/king-of-the-ronalds", icon: Play },
      ],
    },
    {
      label: "Prizefighter",
      tone: "brand",
      links: [
        { name: "Archive", href: "/prizefighter", icon: Play },
        { name: "League", href: "/prizefighter/league", icon: Trophy },
      ],
    },
    {
      label: "Clash Money",
      tone: "brand",
      links: [
        { name: "Archive", href: "/clash-money", icon: Play },
      ],
    },
    {
      label: "LOTM",
      tone: "brand",
      links: [
        { name: "Archive", href: "/lord-of-the-mics", icon: Play },
      ],
    },
    {
      label: "Talk Is Cheap",
      tone: "brand",
      links: [
        { name: "Archive", href: "/talk-is-cheap", icon: Play },
      ],
    },
    {
      label: "Lord of the Archives",
      tone: "neutral",
      links: [
        { name: "News", href: "/news", icon: Newspaper },
        { name: "MCs", href: "/mcs", icon: Users },
        { name: "Hosts", href: "/hosts-judges", icon: Scale },
        { name: "League", href: "/lota-league", icon: Trophy },
        { name: "People", href: "/peoples-vote", icon: Eye, hideBelow1440: true },
        { name: "Prop'erty", href: "/property", icon: Package, hideBelow1440: true },
      ],
    },
  ];

  const isHome = pathname === "/";

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    setIsOpen(false);
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
    <nav className="fixed top-0 left-0 right-0 z-50 px-2 pt-2.5 sm:px-4 md:px-6">
      <div className="max-w-[98rem] mx-auto rounded-2xl border border-white/10 bg-black/85 shadow-[0_12px_40px_rgba(0,0,0,0.55)] backdrop-blur-xl">
        <div className="flex items-center justify-between h-16 px-3 sm:px-4">
          {/* Logo */}
          <div className="flex items-center shrink-0 mr-2 xl:mr-3">
            <Link href="/" className="group flex items-center gap-2">
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-brand rounded-xl border border-yellow-200/60 flex items-center justify-center font-display text-lg sm:text-xl text-black shadow-[0_0_22px_rgba(255,215,0,0.22)] transition-transform group-hover:-rotate-3">
                L
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-base sm:text-lg min-[1500px]:text-xl tracking-tighter uppercase leading-none text-brand">
                  LORD OF THE ARCHIVES
                </span>
                <span className="mt-0.5 text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.18em] leading-none text-zinc-300">
                  WE NEVER FORGET
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-1.5 min-[1500px]:gap-2.5 min-[1680px]:gap-3">
            {navGroups.map((group) => (
              <div key={group.label} className="flex flex-col gap-0.5 shrink-0">
                <div
                  className={`whitespace-nowrap px-1.5 text-[8.5px] min-[1500px]:text-[9px] font-black uppercase tracking-[0.16em] min-[1500px]:tracking-[0.2em] ${
                    group.tone === "gzone"
                      ? "text-gzone"
                      : group.tone === "brand"
                      ? "text-brand"
                      : "text-zinc-500"
                  }`}
                >
                  {group.label}
                </div>
                <div className="flex items-center gap-1">
                  {group.links.map((link) => {
                    const isActive = pathname === link.href;
                    const toneClasses =
                      group.tone === "gzone"
                        ? isActive
                          ? "border-gzone/40 bg-gzone/15 text-gzone shadow-[0_0_12px_rgba(242,125,38,0.2)]"
                          : "border-transparent text-gzone hover:border-gzone/25 hover:bg-gzone/10"
                        : group.tone === "brand"
                        ? isActive
                          ? "border-brand/40 bg-brand/15 text-brand shadow-[0_0_12px_rgba(255,215,0,0.2)]"
                          : "border-transparent text-brand hover:border-brand/25 hover:bg-brand/10"
                        : isActive
                        ? "border-brand/40 bg-brand/15 text-brand shadow-[0_0_12px_rgba(255,215,0,0.2)]"
                        : "border-transparent text-zinc-300 hover:border-white/10 hover:bg-white/5 hover:text-white";

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        className={`flex items-center gap-1 rounded-xl border px-1.5 min-[1500px]:px-2 py-1 text-xs min-[1500px]:text-sm font-medium transition-all ${
                          link.hideBelow1440 ? "hidden min-[1440px]:flex" : ""
                        } ${toneClasses}`}
                      >
                        <link.icon size={13} className="shrink-0" />
                        <span>{link.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Social Icons */}
            <div className="flex items-center gap-1.5 ml-1 border-l border-white/10 pl-2 min-[1500px]:pl-2.5 shrink-0">
              <a
                href="https://www.youtube.com/@LordoftheArchives"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-brand/40 bg-brand/10 hover:bg-brand text-brand hover:text-black p-1.5 rounded-xl transition-all flex items-center justify-center"
                aria-label="Follow us on YouTube"
              >
                <Youtube size={16} />
              </a>
              <a
                href="https://www.tiktok.com/@lordofthearchives"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-brand/40 bg-brand/10 hover:bg-brand text-brand hover:text-black p-1.5 rounded-xl transition-all flex items-center justify-center"
                aria-label="Follow us on TikTok"
              >
                <TiktokIcon size={16} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden">
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
          className="xl:hidden mt-2 border border-white/10 bg-black/95 rounded-2xl shadow-2xl p-4 max-h-[85vh] overflow-y-auto"
        >
          <div className="space-y-3">
            {navGroups.map((group) => (
              <div key={group.label} className="border-b border-white/5 pb-2.5 last:border-b-0">
                <div
                  className={`px-1 text-[10px] font-black uppercase tracking-[0.2em] mb-1.5 ${
                    group.tone === "gzone"
                      ? "text-gzone"
                      : group.tone === "brand"
                      ? "text-brand"
                      : "text-zinc-500"
                  }`}
                >
                  {group.label}
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {group.links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        className={`flex items-center gap-2 rounded-xl border p-2 text-xs font-semibold uppercase tracking-wider ${
                          isActive
                            ? group.tone === "gzone"
                              ? "border-gzone/40 bg-gzone/20 text-gzone"
                              : "border-brand/40 bg-brand/20 text-brand"
                            : "border-white/5 bg-zinc-900/40 text-zinc-300 hover:text-white"
                        }`}
                      >
                        <link.icon
                          size={14}
                          className={
                            group.tone === "gzone"
                              ? "text-gzone"
                              : group.tone === "brand"
                              ? "text-brand"
                              : "text-zinc-400"
                          }
                        />
                        <span>{link.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="pt-4 border-t border-white/10 mt-3 flex items-center justify-center gap-4">
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

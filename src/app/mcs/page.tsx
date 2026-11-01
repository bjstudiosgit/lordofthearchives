"use client";
import React, { useState, useMemo } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { allProfileMcs as allMcs, isCatalogueOnlyMc } from "../../data/archiveMcProfiles";
import { 
  Search, 
  Trophy, 
  XCircle, 
  User,
  ChevronRight,
  Swords
} from "lucide-react";

type SortField = "name" | "wins" | "losses" | "battles";
type SortOrder = "asc" | "desc";

const getInitials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase() || "MC";

export default function MCIndex() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState<SortField>("wins");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");

  const filteredAndSortedMCs = useMemo(() => {
    return allMcs
      .filter((mc) =>
        mc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mc.nickname?.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => {
        let comparison = 0;
        if (sortField === "name") {
          comparison = a.name.localeCompare(b.name);
        } else {
          comparison = (a[sortField] || 0) - (b[sortField] || 0);
          if (comparison === 0) {
            if (sortField === "wins") {
              const battleDiff = (a.battles || 0) - (b.battles || 0);
              if (battleDiff !== 0) return sortOrder === "asc" ? battleDiff : -battleDiff;
              const lossDiff = (a.losses || 0) - (b.losses || 0);
              if (lossDiff !== 0) return sortOrder === "asc" ? -lossDiff : lossDiff;
              return a.name.localeCompare(b.name);
            }
            if (sortField === "losses") {
              const battleDiff = (a.battles || 0) - (b.battles || 0);
              if (battleDiff !== 0) return sortOrder === "asc" ? battleDiff : -battleDiff;
              return a.name.localeCompare(b.name);
            }
          }
        }
        return sortOrder === "asc" ? comparison : -comparison;
      });
  }, [searchQuery, sortField, sortOrder]);

  const toggleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder(field === "name" ? "asc" : "desc");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24 min-h-screen bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand mb-2">UK Battle Rap Roster</p>
          <h1 className="text-4xl md:text-6xl font-display italic uppercase leading-tight text-white">
            Lord of the Archives <span className="text-brand">Artists</span>
          </h1>
          <p className="text-zinc-400 mt-4 max-w-xl text-sm md:text-base leading-relaxed">
            Every MC logged in The Archive across 7 leagues. Tap any artist to pull up their full dossier — clash record, form, stats, and complete battle history.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
            <input
              type="text"
              placeholder="Search MCs by name or nickname..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900/50 border border-white/5 rounded-2xl py-3.5 pl-12 pr-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-brand/50 transition-colors text-sm"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <SortButton 
              active={sortField === "name"} 
              onClick={() => toggleSort("name")}
              label="Name"
              icon={<User size={14} />}
            />
            <SortButton 
              active={sortField === "wins"} 
              onClick={() => toggleSort("wins")}
              label="Wins"
              icon={<Trophy size={14} />}
            />
            <SortButton 
              active={sortField === "losses"} 
              onClick={() => toggleSort("losses")}
              label="Losses"
              icon={<XCircle size={14} />}
            />
            <SortButton 
              active={sortField === "battles"} 
              onClick={() => toggleSort("battles")}
              label="Battles"
              icon={<Swords size={14} />}
            />
          </div>
        </div>

        {/* MC Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredAndSortedMCs.map((mc, index) => {
            const isUnreviewed = isCatalogueOnlyMc(mc.id);
            const initials = getInitials(mc.name);

            return (
              <motion.div
                key={mc.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index * 0.015, 0.4) }}
              >
                <Link 
                  href={`/mc/${mc.slug}`}
                  className="group relative flex flex-col justify-between h-full rounded-2xl border border-white/5 bg-zinc-900/40 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-brand/40 hover:bg-zinc-900/80 hover:shadow-[0_8px_30px_rgba(242,125,38,0.08)]"
                >
                  <div>
                    {/* Header: Monogram + Record */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-zinc-950 font-display text-sm italic text-brand transition-colors group-hover:border-brand/50 group-hover:bg-brand/10">
                        {initials}
                      </div>

                      <div className="text-right">
                        <span className={`inline-block font-display text-lg italic leading-none ${isUnreviewed ? "text-zinc-500 text-xs font-sans not-italic font-bold tracking-wider uppercase" : "text-brand"}`}>
                          {isUnreviewed ? "Unreviewed" : `${mc.wins}-${mc.losses}`}
                        </span>
                        {!isUnreviewed && (
                          <p className="text-[8px] font-bold uppercase tracking-widest text-zinc-500">Record</p>
                        )}
                      </div>
                    </div>

                    {/* MC Name & Nickname */}
                    <h3 className="font-display text-xl uppercase italic leading-tight text-white transition-colors group-hover:text-brand truncate">
                      {mc.name}
                    </h3>
                    {mc.nickname && (
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-zinc-500 truncate">
                        &ldquo;{mc.nickname}&rdquo;
                      </p>
                    )}
                  </div>

                  {/* Footer: Stats & Link Arrow */}
                  <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
                    <div className="flex items-center gap-4">
                      <div>
                        <div className="font-mono text-xs font-bold text-zinc-300">{mc.battles}</div>
                        <div className="text-[8px] font-bold uppercase tracking-widest text-zinc-500">Battles</div>
                      </div>
                      <div>
                        <div className="font-mono text-xs font-bold text-zinc-300">{isUnreviewed ? "—" : mc.wins * 3}</div>
                        <div className="text-[8px] font-bold uppercase tracking-widest text-zinc-500">Points</div>
                      </div>
                    </div>

                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-800/80 text-zinc-400 transition-colors group-hover:bg-brand group-hover:text-black">
                      <ChevronRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {filteredAndSortedMCs.length === 0 && (
          <div className="text-center py-24">
            <p className="text-zinc-500 uppercase tracking-[0.2em] font-bold">No MCs found matching your search.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function SortButton({ active, onClick, label, icon }: { active: boolean, onClick: () => void, label: string, icon: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-bold uppercase tracking-widest transition-all ${
        active 
          ? 'bg-brand border-brand text-black' 
          : 'bg-zinc-900/50 border-white/5 text-zinc-400 hover:border-white/20'
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

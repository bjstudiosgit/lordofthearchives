"use client";
import React, { useState, useMemo } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { allProfileMcs as allMcs, isCatalogueOnlyMc } from "../../data/archiveMcProfiles";
import { formatViewCount } from "../../data/viewCounts";
import { hasAvailableMcImage } from "../../data/mcImageAvailability";
import { 
  Search, 
  Trophy, 
  XCircle, 
  User,
  Swords,
  Eye
} from "lucide-react";

type SortField = "views" | "wins" | "losses" | "battles" | "name";
type SortOrder = "asc" | "desc";

export default function MCIndex() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState<SortField>("views");
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
        } else if (sortField === "views") {
          comparison = (a.totalViews || 0) - (b.totalViews || 0);
          if (comparison === 0) {
            const netA = (a.wins * 3) - (a.losses || 0);
            const netB = (b.wins * 3) - (b.losses || 0);
            if (netA !== netB) return sortOrder === "asc" ? netA - netB : netB - netA;
            return a.name.localeCompare(b.name);
          }
        } else if (sortField === "wins") {
          const netA = (a.wins * 3) - (a.losses || 0);
          const netB = (b.wins * 3) - (b.losses || 0);
          if (netA !== netB) {
            comparison = netA - netB;
          } else {
            const lossDiff = (a.losses || 0) - (b.losses || 0);
            if (lossDiff !== 0) return sortOrder === "asc" ? -lossDiff : lossDiff;
            comparison = (a.totalViews || 0) - (b.totalViews || 0);
          }
        } else if (sortField === "losses") {
          comparison = (a.losses || 0) - (b.losses || 0);
          if (comparison === 0) {
            comparison = (a.battles || 0) - (b.battles || 0);
          }
        } else if (sortField === "battles") {
          comparison = (a.battles || 0) - (b.battles || 0);
          if (comparison === 0) {
            comparison = (a.totalViews || 0) - (b.totalViews || 0);
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
          <h1 className="text-4xl md:text-6xl font-display italic uppercase leading-tight text-white">
            Lord of the Archives <span className="text-brand">Artists</span>
          </h1>
          <p className="text-zinc-400 mt-3 max-w-2xl text-sm leading-relaxed font-sans">
            The definitive UK battle rap roster — cataloging over 540 active and historical MCs across 7 major leagues with verified records, cumulative view metrics, and clash dossiers.
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
              active={sortField === "views"}
              onClick={() => toggleSort("views")}
              label="Views"
              icon={<Eye size={14} />}
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
            <SortButton
              active={sortField === "name"}
              onClick={() => toggleSort("name")}
              label="Name"
              icon={<User size={14} />}
            />
          </div>
        </div>

        {/* MC Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredAndSortedMCs.map((mc, index) => {
            const isUnreviewed = isCatalogueOnlyMc(mc.id);
            const netPoints = (mc.wins * 3) - (mc.losses || 0);

            return (
              <motion.div
                key={mc.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index * 0.015, 0.4) }}
              >
                <Link 
                  href={`/mc/${mc.slug}`}
                  className="group relative flex flex-col justify-between h-full rounded-2xl border border-white/5 bg-zinc-900/40 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-brand/40 hover:bg-zinc-900/80 hover:shadow-[0_8px_30px_rgba(242,125,38,0.08)] overflow-hidden"
                >
                  {/* MC Photo Background on the right */}
                  {hasAvailableMcImage(mc.image) && (
                    <div className="absolute bottom-0 right-0 top-0 z-0 w-1/2 overflow-hidden pointer-events-none">
                      <img
                        src={mc.image}
                        alt=""
                        aria-hidden="true"
                        className="absolute right-0 top-0 h-full w-full object-cover object-top opacity-50 contrast-110 grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-75"
                      />
                      <div className="absolute inset-0 z-10 bg-gradient-to-r from-zinc-900 via-zinc-900/35 to-transparent" />
                    </div>
                  )}

                  <div className="relative z-10">
                    {/* Header: Name */}
                    <div className="mb-4">
                      <div className="min-w-0">
                        <h3 className="truncate font-display text-xl uppercase italic leading-tight text-white transition-colors group-hover:text-brand">
                          {mc.name}
                        </h3>
                        {mc.realName && (
                          <p className="mt-1 truncate font-sans text-[11px] font-normal text-zinc-400">
                            {mc.realName}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Footer: Stats */}
                  <div className="mt-5 border-t border-white/5 pt-4">
                    <div className="grid grid-cols-4 gap-2 w-full text-center">
                      <div>
                        <div className={`text-xs font-bold ${isUnreviewed ? "text-zinc-500" : "text-brand"}`}>
                          {isUnreviewed ? "—" : `${mc.wins}-${mc.losses}`}
                        </div>
                        <div className="text-[8px] font-bold uppercase tracking-widest text-zinc-500">Record</div>
                      </div>
                      <div>
                        <div className="font-mono text-xs font-bold text-zinc-300">{mc.battles}</div>
                        <div className="text-[8px] font-bold uppercase tracking-widest text-zinc-500">Battles</div>
                      </div>
                      <div>
                        <div className="font-mono text-xs font-bold text-brand">
                          {mc.totalViews && mc.totalViews > 0 ? formatViewCount(mc.totalViews) : "—"}
                        </div>
                        <div className="text-[8px] font-bold uppercase tracking-widest text-zinc-500">Views</div>
                      </div>
                      <div>
                        <div className="font-mono text-xs font-bold text-zinc-300">
                          {isUnreviewed ? "—" : (mc.points ?? netPoints)}
                        </div>
                        <div className="text-[8px] font-bold uppercase tracking-widest text-zinc-500">Points</div>
                      </div>
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

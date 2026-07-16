"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Archive, CheckCircle2, Clock3, ListTodo, TrendingUp } from "lucide-react";
import { hasBattleArchiveData, pengameBattles } from "../data/pengameBattles";
import { gzoneBattles } from "../data/gzone";
import type { Battle } from "../data/battleTypes";

export default function RecentBattles() {
  const pengameCoverage = getCoverage(pengameBattles, "brand");
  const gzoneCoverage = getCoverage(gzoneBattles, "gzone");
  const upcomingArchives = ["Lord of the Mics", "Don't Flop", "Talk Is Cheap"];

  return (
    <section id="battles" className="relative scroll-mt-24 bg-black py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-zinc-950 p-6 md:p-8"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-brand">
              <Archive size={13} /> Archive Status
            </div>
            <h2 className="max-w-3xl text-4xl font-display italic uppercase leading-none text-white md:text-6xl">
              The archive is <span className="text-brand">live</span>.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-zinc-400 md:text-base">
              The vault is filling up: {pengameCoverage.archivedComplete} of {pengameCoverage.activeBattles.length} PenGame battles are locked in, with {pengameCoverage.inProgress} more cooking.
            </p>
          </motion.div>

          <CoverageCard title="PenGame" href="/pengame" linkLabel="PenGame Archive" coverage={pengameCoverage} delay={0.08} />
          <CoverageCard title="Gzone" href="/gzone" linkLabel="Gzone Archive" coverage={gzoneCoverage} delay={0.12} />

          <div className="space-y-6">
            {upcomingArchives.map((archive) => (
              <div key={archive} className="rounded-2xl border border-white/10 bg-zinc-950 p-6 md:p-8">
                <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-zinc-500">{archive} Coverage</p>
                    <p className="mt-1 text-3xl font-display italic uppercase text-white">0% Complete</p>
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">0 battles indexed</p>
                </div>

                <div className="mb-8 h-4 rounded bg-zinc-900 ring-1 ring-white/10" />

                <div className="grid gap-4 md:grid-cols-3">
                  {pengameCoverage.metrics.map((metric) => {
                    const Icon = metric.icon;

                    return (
                      <div key={metric.label} className="rounded-lg border border-white/10 bg-black/35 p-4">
                        <div className="mb-4 flex items-center justify-between gap-3">
                          <Icon className={metric.tone} size={20} />
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">0%</span>
                        </div>
                        <p className="font-display text-4xl italic leading-none text-white">0</p>
                        <p className="mt-2 min-h-8 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400">
                          {metric.label}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-xs leading-relaxed text-zinc-500">
                    Complete means the archive entry has been fully checked, written, and signed off.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function getCoverage(battles: Battle[], tone: "brand" | "gzone") {
  const activeBattles = battles.filter((battle) => battle.statusNote !== "Cancelled" && battle.winner !== "cancelled");
  const archivedComplete = activeBattles.filter(hasBattleArchiveData).length;
  const unarchived = activeBattles.filter((battle) => battle.isUnreleased || !battle.videoUrl).length;
  const inProgress = Math.max(activeBattles.length - archivedComplete - unarchived, 0);
  const total = activeBattles.length || 1;
  const completePercent = Math.round((archivedComplete / total) * 100);
  const inProgressPercent = Math.round((inProgress / total) * 100);
  const unarchivedPercent = Math.max(100 - completePercent - inProgressPercent, 0);
  const accent = tone === "gzone" ? "text-gzone" : "text-brand";
  const bar = tone === "gzone" ? "bg-gzone" : "bg-brand";

  return {
    activeBattles,
    archivedComplete,
    inProgress,
    completePercent,
    metrics: [
      { label: "Archived Complete", value: archivedComplete, percent: completePercent, icon: CheckCircle2, tone: "text-emerald-300", bar: "bg-emerald-400" },
      { label: "Archive In Progress", value: inProgress, percent: inProgressPercent, icon: Clock3, tone: accent, bar },
      { label: "Unarchived", value: unarchived, percent: unarchivedPercent, icon: ListTodo, tone: "text-zinc-300", bar: "bg-zinc-500" },
    ],
  };
}

function CoverageCard({
  title,
  href,
  linkLabel,
  coverage,
  delay,
}: {
  title: string;
  href: string;
  linkLabel: string;
  coverage: ReturnType<typeof getCoverage>;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
      className="rounded-2xl border border-white/10 bg-zinc-950 p-6 md:p-8"
    >
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-zinc-500">{title} Coverage</p>
          <p className="mt-1 text-3xl font-display italic uppercase text-white">{coverage.completePercent}% Complete</p>
        </div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
          {coverage.activeBattles.length} battles indexed
        </p>
      </div>

      <div className="mb-8 h-4 overflow-hidden rounded bg-zinc-900 ring-1 ring-white/10">
        <div className="flex h-full w-full">
          {coverage.metrics.map((metric) => (
            <div
              key={metric.label}
              className={`${metric.bar} min-w-[2px]`}
              style={{ width: `${metric.percent}%` }}
              title={`${metric.label}: ${metric.value}`}
            />
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {coverage.metrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <div key={metric.label} className="rounded-lg border border-white/10 bg-black/35 p-4">
              <div className="mb-4 flex items-center justify-between gap-3">
                <Icon className={metric.tone} size={20} />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">{metric.percent}%</span>
              </div>
              <p className="font-display text-4xl italic leading-none text-white">{metric.value}</p>
              <p className="mt-2 min-h-8 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400">
                {metric.label}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-zinc-500">
          Complete means the archive entry has been fully checked, written, and signed off.
        </p>
        <Link
          href={href}
          className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-colors hover:text-white ${
            title === "Gzone" ? "text-gzone" : "text-brand"
          }`}
        >
          {linkLabel} <TrendingUp size={17} />
        </Link>
      </div>
    </motion.div>
  );
}

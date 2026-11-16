import BattleDetailClient from "../../battle/[slug]/BattleDetailClient";
import { notFound } from "next/navigation";
import { dontFlopBattles } from "../../../data/dontFlop";
import { getArchiveMcId } from "../../../data/archiveMcProfiles";
type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return dontFlopBattles.map(b => ({ slug: b.slug })); }
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const b = dontFlopBattles.find(b => b.slug === slug);
  return { title: b ? `${b.title} | Don't Flop Rap Battle` : "Battle not found",
    alternates: { canonical: `https://www.lordofthearchives.co.uk/dont-flop/${slug}` } };
}
export default async function BattlePage({ params }: Props) {
  const { slug } = await params;
  const b = dontFlopBattles.find(b => b.slug === slug);
  if (!b) notFound();
  return <BattleDetailClient slug={slug} teamNames={[b.mc1, b.mc2]} battleOverride={{
    id: b.id, slug: b.slug, title: b.title,
    mc1: getArchiveMcId(b.sides[0][0]), mc2: getArchiveMcId(b.sides[1][0]),
    mc3: b.sides[0][1] ? getArchiveMcId(b.sides[0][1]) : undefined,
    mc4: b.sides[1][1] ? getArchiveMcId(b.sides[1][1]) : undefined,
    date: b.date, videoUrl: b.videoUrl, views: b.views,
    theme: "dont-flop", season: "Don?t Flop", winner: "unknown",
    archiveStatus: "in-progress", statusNote: "Result not verified",
  }} />;
}

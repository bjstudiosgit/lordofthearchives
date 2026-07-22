import {
  ArrowRight,
  BookOpen,
  Eye,
  FileSearch,
  Info,
  Mail,
  Package,
  Play,
  Scale,
  ShieldCheck,
  Trophy,
  Users,
  Youtube,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import PrivacySettingsButton from "./PrivacySettingsButton";

function TiktokIcon({ size = 24 }: { size?: number }) {
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

const footerGroups: Array<{
  title: string;
  links: Array<{ href: string; label: string; icon: LucideIcon }>;
}> = [
  {
    title: "Battle archives",
    links: [
      { href: "/pengame", label: "PenGame archive", icon: Play },
      { href: "/gzone", label: "Gzone archive", icon: Play },
      { href: "/lord-of-the-mics", label: "Lord of the Mics", icon: BookOpen },
    ],
  },
  {
    title: "Rankings",
    links: [
      { href: "/league", label: "PenGame league", icon: Trophy },
      { href: "/gzone/league", label: "Gzone league", icon: Trophy },
      { href: "/lota-league", label: "Combined LOTA league", icon: Trophy },
      { href: "/peoples-vote", label: "People's League", icon: Eye },
    ],
  },
  {
    title: "People & culture",
    links: [
      { href: "/mcs", label: "MC profiles", icon: Users },
      { href: "/hosts-judges", label: "Hosts & judges", icon: Scale },
      { href: "/property", label: "Prop'erty", icon: Package },
    ],
  },
  {
    title: "Trust & policies",
    links: [
      { href: "/about", label: "About", icon: Info },
      { href: "/methodology", label: "Editorial methodology", icon: Scale },
      { href: "/sources", label: "Sources & transcripts", icon: FileSearch },
      { href: "/corrections", label: "Corrections", icon: BookOpen },
      { href: "/contact", label: "Contact", icon: Mail },
      { href: "/privacy", label: "Privacy & cookies", icon: ShieldCheck },
      { href: "/terms", label: "Terms", icon: BookOpen },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-brand/20 bg-[#070708]">
      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-brand/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.05fr_1.95fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3" aria-label="Lord of the Archives home">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand font-display text-2xl italic text-black">
                L
              </span>
              <span>
                <span className="block font-display text-xl italic uppercase leading-none text-brand">Lord of the Archives</span>
                <span className="mt-1 block text-[8px] font-black uppercase tracking-[0.22em] text-zinc-500">We never forget</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-zinc-400">
              An independent UK rap battle archive connecting battles, MC profiles, results, league tables and detailed
              research.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.tiktok.com/@lordofthearchives"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 transition hover:border-brand/50 hover:bg-brand hover:text-black"
                aria-label="Follow Lord of the Archives on TikTok"
              >
                <TiktokIcon size={17} />
              </a>
              <a
                href="https://www.youtube.com/@LordoftheArchives"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 transition hover:border-brand/50 hover:bg-brand hover:text-black"
                aria-label="Watch Lord of the Archives on YouTube"
              >
                <Youtube size={17} />
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
            {footerGroups.map((group) => (
              <nav key={group.title} aria-label={`${group.title} footer links`}>
                <h3 className="border-b border-white/10 pb-3 text-[10px] font-black uppercase tracking-[0.2em] text-white">
                  {group.title}
                </h3>
                <ul className="mt-3 space-y-1">
                  {group.links.map((item) => {
                    const Icon = item.icon;

                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="group flex items-center justify-between gap-3 rounded-lg px-2 py-2.5 text-xs font-bold uppercase tracking-[0.1em] text-zinc-500 transition hover:bg-white/5 hover:text-brand"
                        >
                          <span className="flex items-center gap-2.5">
                            <Icon size={14} className="transition group-hover:text-brand" />
                            {item.label}
                          </span>
                          <ArrowRight size={13} className="opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-[9px] uppercase tracking-[0.14em] text-zinc-600 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Lord of the Archives. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <PrivacySettingsButton className="transition hover:text-zinc-300" />
            <span className="text-zinc-700">Research tools</span>
            <a href="https://openai.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-zinc-300">
              OpenAI
            </a>
            <a
              href="https://notebooklm.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-zinc-300"
            >
              NotebookLM
            </a>
            <a href="https://www.nvidia.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-zinc-300">
              NVIDIA
            </a>
            <a
              href="https://www.bjstudios.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-zinc-300"
            >
              BJ Studios
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

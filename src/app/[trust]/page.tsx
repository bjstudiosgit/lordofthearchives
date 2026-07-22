import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PrivacySettingsButton from "../../components/PrivacySettingsButton";

type TrustPage = {
  title: string;
  description: string;
  intro: string;
  sections: Array<{ heading: string; paragraphs: string[] }>;
};

const trustPages: Record<string, TrustPage> = {
  about: {
    title: "About Lord of the Archives",
    description: "Who publishes Lord of the Archives and why this independent UK rap battle archive exists.",
    intro: "Lord of the Archives is an independent UK rap battle archive built to preserve battle history and make it easier to explore.",
    sections: [
      { heading: "What we publish", paragraphs: [
        "We connect battle records, MC profiles, results, league tables, source videos and original editorial analysis. The aim is to document the scene accurately while giving performances the detailed attention they deserve.",
        "Lord of the Archives is not a battle league and does not represent the leagues, performers, hosts or judges covered on the site. Official outcomes are labelled separately from our own archive judgements.",
      ] },
      { heading: "Editorial responsibility", paragraphs: [
        "Research, transcription review, scoring and editorial decisions are made by Lord of the Archives. Site production is supported by BJ Studios. Research tools may assist the workflow, but every published battle analysis is selected, structured and reviewed for this archive.",
      ] },
    ],
  },
  methodology: {
    title: "Editorial and scoring methodology",
    description: "How Lord of the Archives researches battles, distinguishes official results and reaches archive judgements.",
    intro: "Our analysis is designed to be transparent, battle-specific and grounded in the available footage.",
    sections: [
      { heading: "What we assess", paragraphs: [
        "We review directness, writing, structure, rebuttals, delivery, clarity, performance, crowd control and the effect of stumbles or incomplete rounds. A strong crowd reaction is useful context, but it is not treated as automatic proof that a line or round won.",
        "Round summaries explain what each performer attempted and how the material worked. Performance analysis considers strengths, weaknesses and technical choices rather than relying on generic labels.",
      ] },
      { heading: "Results and scoring", paragraphs: [
        "An official result is used when the league, host or judging panel clearly declares one in the source material. Public-vote results are identified as public votes when a reliable final tally is available.",
        "Where no official result survives, we may publish a LOTA archive judgement. That judgement is an editorial assessment, not a claim that the league officially awarded the battle. The explanation should identify the decisive rounds and reasons.",
      ] },
      { heading: "Publication threshold", paragraphs: [
        "A battle detail page is published only after it has a completed clash summary and meaningful original performance analysis. Listings can appear earlier for historical completeness, but unfinished analysis remains non-clickable and is labelled as coming soon.",
      ] },
    ],
  },
  sources: {
    title: "Sources and transcription process",
    description: "The source hierarchy and transcription checks used by Lord of the Archives.",
    intro: "Battle footage is our primary source. We preserve the difference between what can be verified and what remains uncertain.",
    sections: [
      { heading: "Source hierarchy", paragraphs: [
        "We prioritise official league uploads and surviving full-battle footage. On-screen titles, host introductions, judge decisions, league announcements and uploader metadata are used for names, dates, formats and results.",
        "Secondary posts or public comments may help locate context, but they are not treated as equal to a clear primary source. View counts are snapshots and can change after publication.",
      ] },
      { heading: "Transcription and quotation", paragraphs: [
        "Transcripts are produced from the source audio and reviewed against the footage. Battle audio can contain crowd noise, overlaps, accents, reloads and missing sections; unclear wording is not silently presented as certain.",
        "Notable bars are selected to explain a specific writing or performance mechanism. They are contextual excerpts, not substitutes for watching the original battle, and the linked source remains the definitive performance.",
      ] },
      { heading: "Research tools", paragraphs: [
        "Automated transcription and language tools may assist with searching, comparison or drafting. They do not establish a result or source on their own. Published analysis is checked against the available battle material before release.",
      ] },
    ],
  },
  corrections: {
    title: "Corrections policy",
    description: "How to report a factual, transcription or attribution error to Lord of the Archives.",
    intro: "Battle archives are only useful when errors can be challenged and corrected openly.",
    sections: [
      { heading: "What to report", paragraphs: [
        "Please flag misspelt names, incorrect dates, broken or misattributed source links, mistaken official results, transcription errors and material context that changes the meaning of an analysis.",
        "Include the page URL, the disputed wording, the proposed correction and, where possible, a timestamp or reliable source. Clear evidence lets us verify and fix the record faster.",
      ] },
      { heading: "How we respond", paragraphs: [
        "We review the source material and correct confirmed factual errors. Editorial judgements may be updated when new evidence changes the available record, but disagreement alone does not automatically make an assessment factually wrong.",
        "Material corrections should be reflected on the affected page. Minor spelling, formatting and clarity fixes may be made without a separate notice.",
      ] },
    ],
  },
  contact: {
    title: "Contact",
    description: "Contact Lord of the Archives about corrections, sources, rights or the archive.",
    intro: "Use our public channels for archive questions, corrections, source information and rights enquiries.",
    sections: [
      { heading: "Before contacting us", paragraphs: [
        "For a correction, send the affected page URL and supporting timestamp or source. For a rights enquiry, identify the material and explain your connection to it. Do not send confidential information through public comments.",
        "You can reach Lord of the Archives through the linked TikTok and YouTube channels below, or contact BJ Studios through its website for site-administration enquiries.",
      ] },
    ],
  },
  privacy: {
    title: "Privacy and cookie policy",
    description: "How Lord of the Archives uses analytics, advertising technology, cookies and visitor data.",
    intro: "This policy explains what data may be processed when you visit Lord of the Archives and the choices available to you.",
    sections: [
      { heading: "Information processed", paragraphs: [
        "Our hosting provider necessarily receives technical request information such as IP address, browser type, requested URL, date and time, and security or error logs. We use this information to deliver, protect and maintain the site.",
        "We do not ask visitors to create an account or directly submit personal profile data through this website.",
      ] },
      { heading: "Analytics and advertising cookies", paragraphs: [
        "We use Google Analytics to understand aggregate site use and intend to use Google AdSense to fund the archive. Third-party vendors, including Google, use cookies or similar technologies to measure traffic, prevent fraud and serve ads based on a visitor's prior visits to this and other websites.",
        "Google's use of advertising cookies enables Google and its partners to serve personalised ads where consent has been given. Visitors can opt out of personalised advertising through Google My Ad Center; choices for other participating vendors may be available through aboutads.info.",
        "UK, EEA and Swiss visitors must be shown an appropriate consent choice before non-essential analytics storage or personalised advertising is enabled. Refusing consent should not prevent access to the archive. You can revisit available privacy choices through the consent controls shown on the site.",
      ] },
      { heading: "Google and your choices", paragraphs: [
        "Google explains how it uses information from partner sites on its Business Data Responsibility pages. You can manage ad personalisation through Google My Ad Center and can also use browser controls to delete or block cookies.",
        "Some essential storage may be used for security, load balancing or remembering a privacy choice. Retention periods are determined by the relevant service configuration and legal or security needs.",
      ] },
      { heading: "Your rights and updates", paragraphs: [
        "Depending on where you live, you may have rights over personal data, including access, correction, erasure, restriction or objection. Contact us through the channels on the Contact page for privacy enquiries.",
        "We may update this policy when the site or its providers change. Last updated: 19 July 2026.",
      ] },
    ],
  },
  terms: {
    title: "Terms of use",
    description: "Terms governing use of Lord of the Archives and its independent editorial content.",
    intro: "By using this site, you agree to use the archive lawfully and to respect the rights of performers, leagues and publishers.",
    sections: [
      { heading: "Archive content", paragraphs: [
        "Battle records and editorial analysis are provided for information, criticism, review and historical research. We aim for accuracy but cannot promise that every historical detail, external link or changing view count will always be complete or current.",
        "Editorial scoring and LOTA archive judgements are opinions. Official league or panel decisions are identified separately where the source supports them.",
      ] },
      { heading: "Third-party material", paragraphs: [
        "Battle videos, names, marks and other third-party material remain the property of their respective owners. Links and embeds do not imply endorsement or ownership. Do not reuse site content in a way that infringes another party's rights or misrepresents our analysis as an official league decision.",
      ] },
      { heading: "Availability and changes", paragraphs: [
        "We may correct, update, withdraw or reorganise archive material as better sources become available. External services may change or remove content without our control. Nothing on this site is legal advice.",
        "These terms are governed by the laws of England and Wales. Last updated: 19 July 2026.",
      ] },
    ],
  },
};

type Props = { params: Promise<{ trust: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(trustPages).map((trust) => ({ trust }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { trust } = await params;
  const page = trustPages[trust];
  if (!page) return { title: "Page Not Found" };

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `https://www.lordofthearchives.co.uk/${trust}` },
  };
}

export default async function TrustPage({ params }: Props) {
  const { trust } = await params;
  const page = trustPages[trust];
  if (!page) notFound();

  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-16 text-white sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-brand">Trust &amp; transparency</p>
        <h1 className="mt-4 font-display text-4xl uppercase italic sm:text-5xl">{page.title}</h1>
        <p className="mt-6 text-lg leading-8 text-zinc-300">{page.intro}</p>

        <div className="mt-12 space-y-10">
          {page.sections.map((section) => (
            <section key={section.heading} className="border-t border-white/10 pt-7">
              <h2 className="text-xl font-bold text-white">{section.heading}</h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-400">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>
          ))}
        </div>

        {trust === "contact" && (
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="https://www.tiktok.com/@lordofthearchives" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-brand px-4 py-3 text-xs font-black uppercase tracking-wide text-black">TikTok</a>
            <a href="https://www.youtube.com/@LordoftheArchives" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/15 px-4 py-3 text-xs font-black uppercase tracking-wide text-white">YouTube</a>
            <a href="https://www.bjstudios.co.uk" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/15 px-4 py-3 text-xs font-black uppercase tracking-wide text-white">BJ Studios</a>
          </div>
        )}

        {trust === "privacy" && (
          <div className="mt-10 space-y-3 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-zinc-300">
            <a className="block text-brand hover:underline" href="https://business.safety.google/privacy/" target="_blank" rel="noopener noreferrer">How Google uses data from partner sites</a>
            <a className="block text-brand hover:underline" href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer">Google My Ad Center</a>
            <a className="block text-brand hover:underline" href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">Advertising industry opt-out choices</a>
            <PrivacySettingsButton className="block text-left text-brand hover:underline" />
          </div>
        )}

        <p className="mt-12 text-sm text-zinc-500">Questions about this page? <Link href="/contact" className="text-brand hover:underline">Contact Lord of the Archives</Link>.</p>
      </article>
    </main>
  );
}

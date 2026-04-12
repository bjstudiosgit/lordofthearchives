import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { mcs } from "../data/mcs";
import { battles } from "../data/battles";
import { motion } from "motion/react";
import { 
  Instagram, 
  Twitter, 
  Youtube, 
  Play, 
  ChevronLeft, 
  Trophy, 
  Scale, 
  Ruler, 
  MapPin, 
  Zap,
  Star
} from "lucide-react";

export default function MCDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const mc = mcs.find((m) => m.slug === slug);

  if (!mc) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-display italic uppercase mb-4">MC Not Found</h1>
          <Link to="/mcs" className="text-brand hover:underline uppercase tracking-widest text-sm font-bold">
            Back to MCs
          </Link>
        </div>
      </div>
    );
  }

  const mcBattles = battles.filter(
    (b) => b.mc1 === mc.id || b.mc2 === mc.id
  );

  const releasedBattles = mcBattles.filter(b => !b.isUnreleased);
  const wins = releasedBattles.filter(b => b.winner === mc.id).length;
  const losses = releasedBattles.filter(b => b.winner && b.winner !== "" && b.winner !== mc.id).length;
  const totalPoints = wins * 3;

  return (
    <div className="min-h-screen pt-32 pb-24 bg-zinc-950 text-white selection:bg-brand selection:text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-zinc-400 hover:text-brand transition-colors uppercase tracking-[0.2em] text-[10px] font-bold mb-12 group"
        >
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to MC Roster
        </button>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Image */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <img 
                src={mc.image} 
                alt={mc.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
              
              {/* Initial Badge */}
              <div className="absolute bottom-8 right-8 w-20 h-20 bg-brand rounded-full flex items-center justify-center text-black font-display text-4xl italic shadow-[0_0_30px_rgba(242,125,38,0.4)]">
                {mc.name[0]}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Info */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-6xl md:text-8xl font-display italic uppercase leading-none mb-4 tracking-tighter">
                {mc.name}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 mb-8">
                {mc.nickname && (
                  <span className="text-brand font-bold uppercase tracking-[0.3em] text-sm">
                    {mc.nickname}
                  </span>
                )}
                <div className="flex flex-wrap gap-2">
                  {mc.badges?.map((badge, i) => (
                    <span key={i} className="bg-brand/10 text-brand border border-brand/20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                      {badge === "GOLD STAR" && <Star size={10} fill="currentColor" />}
                      {badge}
                    </span>
                  )) || (
                    <>
                      <span className="bg-brand/10 text-brand border border-brand/20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                        DEBUT WINNER
                      </span>
                      <span className="bg-orange-600/20 text-orange-500 border border-orange-500/20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                        <Star size={10} fill="currentColor" />
                        GOLD STAR
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12">
                <StatBadge icon={<Scale size={14} />} label={mc.weightClass || "Heavyweight"} />
                <StatBadge icon={<Ruler size={14} />} label={mc.height || "TBD"} />
                <StatBadge icon={<MapPin size={14} />} label={mc.location || "UK"} />
                <StatBadge icon={<Trophy size={14} />} label={`${wins}-${losses} RECORD`} highlight />
                <StatBadge icon={<Zap size={14} />} label={`${releasedBattles.length} BATTLES`} />
                <StatBadge icon={<Star size={14} />} label={`${totalPoints} POINTS`} />
              </div>

              {/* Socials */}
              <div className="flex gap-4 mb-12">
                {mc.instagram && (
                  <a href={`https://instagram.com/${mc.instagram}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center hover:bg-brand hover:text-black transition-all">
                    <Instagram size={20} />
                  </a>
                )}
                {mc.tiktok && (
                  <a href={`https://tiktok.com/@${mc.tiktok}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center hover:bg-brand hover:text-black transition-all">
                    <Zap size={20} />
                  </a>
                )}
              </div>

              {/* Biography */}
              <div className="mb-16">
                <h2 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-500 mb-6 flex items-center gap-3">
                  <div className="w-1 h-4 bg-brand" />
                  Biography
                </h2>
                <p className="text-zinc-400 text-lg leading-relaxed font-medium">
                  {mc.bio}
                </p>
              </div>

              {/* Battle History */}
              <div>
                <h2 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-500 mb-8 flex items-center gap-3">
                  <div className="w-1 h-4 bg-brand" />
                  Battle History
                </h2>
                <div className="space-y-4">
                  {mcBattles.map((battle) => {
                    const isMc1 = battle.mc1 === mc.id;
                    const opponentId = isMc1 ? battle.mc2 : battle.mc1;
                    const opponent = mcs.find(m => m.id === opponentId);
                    const isWinner = battle.winner === mc.id;

                    return (
                      <Link 
                        key={battle.id}
                        to={`/battle/${battle.slug}`}
                        className="flex items-center justify-between p-4 bg-zinc-900/40 border border-white/5 rounded-2xl hover:bg-white/5 transition-all group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10">
                            <img 
                              src={opponent?.image || `https://picsum.photos/seed/${opponentId}/100/100`} 
                              alt={opponent?.name}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">VS {opponent?.name || opponentId}</span>
                              {isWinner && (
                                <span className="bg-emerald-500/20 text-emerald-500 text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-widest">WIN</span>
                              )}
                              {!isWinner && battle.winner && (
                                <span className="bg-rose-500/20 text-rose-500 text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-widest">LOSS</span>
                              )}
                            </div>
                            <h3 className="font-display italic uppercase text-xl group-hover:text-brand transition-colors">
                              {battle.title}
                            </h3>
                            <div className="flex items-center gap-3 mt-1">
                              <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{battle.views || "0"} views</span>
                              <span className="text-[10px] text-zinc-600 uppercase tracking-widest">{battle.date || "TBD"}</span>
                            </div>
                          </div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-brand group-hover:text-black transition-all">
                          <Play size={16} fill="currentColor" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatBadge({ icon, label, highlight = false }: { icon: React.ReactNode, label: string, highlight?: boolean }) {
  return (
    <div className={`flex items-center gap-3 p-3 rounded-xl border ${highlight ? 'bg-brand/5 border-brand/20' : 'bg-zinc-900/40 border-white/5'}`}>
      <div className={highlight ? 'text-brand' : 'text-zinc-500'}>
        {icon}
      </div>
      <span className={`text-[10px] font-black uppercase tracking-widest ${highlight ? 'text-brand' : 'text-zinc-300'}`}>
        {label}
      </span>
    </div>
  );
}

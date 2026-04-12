import { Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-brand rounded flex items-center justify-center font-display text-xl text-black italic">L</div>
                <div className="flex flex-col leading-none">
                  <span className="font-display text-xl tracking-tighter uppercase italic leading-none text-brand">LORD OF THE ARCHIVES</span>
                </div>
              </Link>
            </div>
            <p className="text-zinc-400 text-sm max-w-sm mb-6">
              The internet’s most comprehensive grime resource.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-brand hover:text-black transition-all" aria-label="Follow us on Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://www.youtube.com/@gingajay" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-brand hover:text-black transition-all" aria-label="Follow us on YouTube">
                <Youtube size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="font-bold uppercase tracking-widest text-[10px] mb-4 text-zinc-500">Platform</h5>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><Link to="/league" className="hover:text-brand transition-colors">League Table</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-[10px] uppercase tracking-widest">
            © 2026 LORD OF THE ARCHIVES. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

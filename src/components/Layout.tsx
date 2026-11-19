import { Outlet, Link } from "react-router-dom";
import { LanguageProvider } from "../context/LanguageProvider";
import HeaderNavbar from "./HeaderNavbar";
import YagoLogo from "./ui/YagoLogo";
import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";

export default function Layout() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <LanguageProvider>
      <div className="min-h-svh flex flex-col bg-slate-50 text-slate-900 font-sans isolate selection:bg-[#0b3b8c] selection:text-white">
        <HeaderNavbar />
        <main className="flex-grow pt-24 pb-12">
          <Outlet />
        </main>

        {/* Custom YAGO SCHOOL Footer */}
        <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800 font-sans">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
              {/* Brand & Address Column */}
              <div className="lg:col-span-4 space-y-4">
                <div className="bg-white p-3 rounded-2xl inline-block shadow-sm">
                  <YagoLogo size="md" showSubtitle={true} />
                </div>
                <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
                  Centre d'apprentissage des langues vivantes, de cours de soutien scolaire et de délivrance d'attestations officiellement certifiées par QR Code à Beni Mellal.
                </p>

                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>IMB KARIMA 2 OUM DHAR 2 BM, BENI MELLAL</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono">
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>07 77 48 62 32 / 06 06 31 41 34</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono">
                    <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>contact@yagoschool.ma</span>
                  </div>
                </div>
              </div>

              {/* Navigation Columns */}
              <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs">
                <div>
                  <h3 className="font-bold text-white uppercase tracking-wider mb-3 text-xs text-red-400">
                    Formations
                  </h3>
                  <ul className="space-y-2 text-slate-300">
                    <li><Link to="/languages" className="hover:text-white transition-colors">Italien (A1 à C2)</Link></li>
                    <li><Link to="/languages" className="hover:text-white transition-colors">Français 1BAC (Prof. Marouane)</Link></li>
                    <li><Link to="/languages" className="hover:text-white transition-colors">Anglais Général & Business</Link></li>
                    <li><Link to="/training" className="hover:text-white transition-colors">Allemand & Soutien Scolaire</Link></li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-white uppercase tracking-wider mb-3 text-xs text-blue-400">
                    Attestations QR
                  </h3>
                  <ul className="space-y-2 text-slate-300">
                    <li><Link to="/certificates" className="hover:text-white transition-colors">Générateur d'Attestation</Link></li>
                    <li><Link to="/certificates" className="hover:text-white transition-colors">Vérification QR Code</Link></li>
                    <li><Link to="/about" className="hover:text-white transition-colors">Agréments & Mentions</Link></li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-white uppercase tracking-wider mb-3 text-xs text-emerald-400">
                    Navigation
                  </h3>
                  <ul className="space-y-2 text-slate-300">
                    <li><Link to="/" className="hover:text-white transition-colors">Accueil</Link></li>
                    <li><Link to="/about" className="hover:text-white transition-colors">À propos</Link></li>
                    <li><Link to="/gallery" className="hover:text-white transition-colors">Galerie Campus</Link></li>
                    <li><Link to="/contact" className="hover:text-white transition-colors">Contact & Inscriptions</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Legal Banner & Copyright */}
            <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-bold text-slate-200">Academie MY YAGO SCHOOL PRIVE</span>
                <span>•</span>
                <span className="font-mono text-emerald-400">IF: 53976503</span>
                <span>•</span>
                <span className="font-mono text-emerald-400">ICE: 003362556000078</span>
              </div>

              <div className="flex items-center gap-4">
                <span>© 2026 YAGO SCHOOL. Tous droits réservés.</span>
                <button
                  onClick={scrollToTop}
                  className="p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-colors cursor-pointer"
                  title="Haut de page"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  );
}

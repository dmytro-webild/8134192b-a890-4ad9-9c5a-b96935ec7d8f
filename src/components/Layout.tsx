import { Outlet, Link } from "react-router-dom";
import { LanguageProvider } from "../context/LanguageProvider";
import HeaderNavbar from "./HeaderNavbar";
import YagoLogo from "./ui/YagoLogo";
import { MapPin, Phone, Mail, ShieldCheck, Award, GraduationCap } from "lucide-react";

function FooterContent() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t-4 border-[#0b3b8c] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Legal */}
          <div className="space-y-4">
            <div className="bg-white p-3 rounded-2xl inline-block shadow-md">
              <YagoLogo size="md" />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              <strong>Academie MY YAGO SCHOOL PRIVE</strong><br />
              Centre de langues et de formations en cours de soutien à Beni Mellal.
            </p>
            <div className="text-[11px] text-slate-400 font-mono space-y-1 bg-slate-800/80 p-3 rounded-xl border border-slate-700/50">
              <div>IF: <strong className="text-white">53976503</strong></div>
              <div>ICE: <strong className="text-white">003362556000078</strong></div>
              <div className="text-emerald-400 font-semibold flex items-center gap-1 mt-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Établissement Certifié
              </div>
            </div>
          </div>

          {/* Col 2: Formations */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-red-500 pl-2">
              Formations & Langues
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/languages" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  Italien (A1 - C2)
                </Link>
              </li>
              <li>
                <Link to="/languages" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Anglais Général & Professionnel
                </Link>
              </li>
              <li>
                <Link to="/languages" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  Français - Préparation BAC 1BAC
                </Link>
              </li>
              <li>
                <Link to="/languages" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  Allemand - Zertifikat
                </Link>
              </li>
              <li>
                <Link to="/training" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Cours de Soutien Scolaire
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Certificate Management */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-[#0b3b8c] pl-2">
              Système de Certificats
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/certificates" className="hover:text-white transition-colors flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-red-400" />
                  Générateur d'Attestation
                </Link>
              </li>
              <li>
                <Link to="/certificates" className="hover:text-white transition-colors flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Vérification QR Code en ligne
                </Link>
              </li>
              <li>
                <Link to="/certificates" className="hover:text-white transition-colors flex items-center gap-2">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                  Registre des diplômés
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                  Galerie & Activités
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-red-500 pl-2">
              Adresse & Contact
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>IMB KARIMA 2 OUM DHAR 2 BM, BENI MELLAL, MOROCCO</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <div className="font-mono text-slate-200">
                  07 77 48 62 32<br />
                  06 06 31 41 34
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="font-mono text-slate-300">contact@yagoschool.ma</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Academie MY YAGO SCHOOL PRIVE. Tous droits réservés.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-slate-300">À propos</Link>
            <Link to="/certificates" className="hover:text-slate-300">Attestations QR</Link>
            <Link to="/contact" className="hover:text-slate-300">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Layout() {
  return (
    <LanguageProvider>
      <div className="min-h-svh flex flex-col bg-slate-50 text-slate-900 font-sans isolate selection:bg-red-600 selection:text-white">
        <HeaderNavbar />
        <main className="flex-grow pt-24 pb-12">
          <Outlet />
        </main>
        <FooterContent />
      </div>
    </LanguageProvider>
  );
}

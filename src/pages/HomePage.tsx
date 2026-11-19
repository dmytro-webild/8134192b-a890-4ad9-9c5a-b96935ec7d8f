import { Link } from 'react-router-dom';
import YagoLogo from '../components/ui/YagoLogo';
import { useLanguage } from '../context/useLanguage';
import {
  Award, ShieldCheck, QrCode, BookOpen, MapPin, Phone, ArrowRight, Sparkles
} from 'lucide-react';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="space-y-16 font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0b3b8c]/5 via-white to-slate-50 pt-6 pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-red-600 border border-red-200 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Rentrée Académique & Examens Régionaux</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0b3b8c] tracking-tight leading-[1.1]">
                Votre réussite, <br />
                <span className="text-red-600">notre mission.</span>
              </h1>

              <p className="text-lg text-slate-700 max-w-2xl leading-relaxed font-medium">
                <strong className="text-[#0b3b8c]">YAGO SCHOOL</strong> (Academie MY YAGO SCHOOL PRIVE) est le centre de référence à Beni Mellal pour l'apprentissage des langues, les cours de soutien scolaire et la délivrance d'attestations certifiées avec vérification par QR Code.
              </p>

              {/* Special Promotion Badge from ref-1 */}
              <div className="bg-gradient-to-r from-[#0b3b8c] to-blue-900 text-white p-4 rounded-2xl shadow-lg border-l-4 border-red-500 flex flex-wrap items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs font-bold uppercase tracking-widest text-red-400">
                    Offre Spéciale BAC
                  </div>
                  <div className="text-base font-bold">
                    Préparations à l'Examen Régional • Français 1BAC
                  </div>
                  <div className="text-xs text-blue-200">
                    Avec le Prof. Marouane
                  </div>
                </div>
                <div className="bg-red-600 text-white text-xs font-black px-3.5 py-2 rounded-xl shadow uppercase tracking-wide animate-pulse">
                  Mois de Septembre Gratuit !
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/certificates"
                  className="flex items-center gap-2 bg-[#0b3b8c] hover:bg-blue-800 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <Award className="w-5 h-5 text-red-400" />
                  <span>{t('action.issue_cert')}</span>
                </Link>

                <Link
                  to="/languages"
                  className="flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm px-6 py-3.5 rounded-xl shadow border border-slate-300 transition-all"
                >
                  <BookOpen className="w-5 h-5 text-[#0b3b8c]" />
                  <span>Découvrir nos formations</span>
                </Link>
              </div>

              {/* Key Trust Signals */}
              <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-200 text-xs text-slate-600">
                <div>
                  <span className="font-bold text-slate-900 text-base block">1 200+</span>
                  Étudiants formés
                </div>
                <div>
                  <span className="font-bold text-[#0b3b8c] text-base block">5 000+</span>
                  Certificats émis
                </div>
                <div>
                  <span className="font-bold text-emerald-600 text-base block">100% QR</span>
                  Authentification
                </div>
              </div>
            </div>

            {/* Hero Right Visual Banner & Photo (Attached ref-1) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                <img
                  src="https://storage.googleapis.com/webild/users/user_3MFjbGIn3Kqfnlr7fvQBozGHRvR/uploaded-1795119391433-ttgozbts.jpg"
                  alt="YAGO SCHOOL Banner - Prof Marouane Français 1BAC"
                  className="w-full h-auto object-cover max-h-[580px] mx-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs font-mono text-red-400 font-bold uppercase tracking-wider">
                    Affiche Officielle YAGO SCHOOL
                  </span>
                  <p className="text-sm font-semibold mt-1">
                    Centre de langues, de formations et de cours de soutien à Beni Mellal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DYNAMIC CERTIFICATE SYSTEM TEASER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#0b3b8c] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                Sécurité & Traçabilité Officielle
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                Système d'Émission et de Vérification des Certificats
              </h2>
              <p className="text-blue-100 text-sm leading-relaxed">
                Chaque attestation délivrée par <strong>Academie MY YAGO SCHOOL PRIVE</strong> comporte un code QR unique lié au registre officiel. Les employeurs, universités et ambassades peuvent vérifier l'authenticité en direct.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/certificates"
                  className="inline-flex items-center gap-2 bg-white text-[#0b3b8c] hover:bg-slate-100 font-bold text-sm px-6 py-3 rounded-xl shadow transition-all"
                >
                  <Award className="w-4 h-4 text-red-600" />
                  Accéder au Générateur d'Attestation
                </Link>
                <Link
                  to="/certificates"
                  className="inline-flex items-center gap-2 bg-red-600 text-white hover:bg-red-700 font-bold text-sm px-6 py-3 rounded-xl shadow transition-all"
                >
                  <QrCode className="w-4 h-4" />
                  Tester la vérification QR
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white text-slate-900 p-6 rounded-2xl shadow-lg border border-slate-200">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <YagoLogo size="sm" showSubtitle={false} />
                  <span className="font-bold text-xs text-[#0b3b8c]">Aperçu d'Attestation</span>
                </div>
                <span className="text-[10px] font-mono bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                  Authentique
                </span>
              </div>
              <div className="text-xs space-y-2 font-mono">
                <div>Ref: <strong>YG-2026-0892</strong></div>
                <div>Étudiant: <strong className="text-[#0b3b8c]">Aymane El Mansouri</strong></div>
                <div>CIN: <strong>I748392</strong></div>
                <div>Formation: <strong>Langue Italienne B2</strong></div>
                <div>Volume: <strong>240 Heures</strong></div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                <span>Code QR Généré</span>
                <span className="text-red-600 font-semibold">Academie MY YAGO SCHOOL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LANGUAGES & TRAINING COURSES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full uppercase tracking-wider">
            Offre Académique
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0b3b8c] mt-3 tracking-tight">
            Langues Étrangères & Cours de Soutien
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Des programmes intensifs dispensés par des enseignants qualifiés pour répondre aux exigences académiques et professionnelles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Italian Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-3">
              <div className="inline-block px-3 py-1 bg-red-50 text-red-700 text-xs font-bold rounded-lg">
                Langue Italienne
              </div>
              <h3 className="text-xl font-bold text-slate-900">Italien (A1 - C2)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Formation complète sur la grammaire, la conversation et la préparation aux dossiers d'études ou de travail en Italie.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-semibold text-[#0b3b8c]">Niveaux A1 à C2</span>
              <Link to="/languages" className="text-red-600 font-bold hover:underline">Détails →</Link>
            </div>
          </div>

          {/* French Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-3">
              <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg">
                Examen Régional
              </div>
              <h3 className="text-xl font-bold text-slate-900">Français 1BAC</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Encadrement spécialisé pour l'Examen Régional de Français du Baccalauréat avec le Prof. Marouane.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-semibold text-red-600">Septembre Gratuit</span>
              <Link to="/languages" className="text-red-600 font-bold hover:underline">Détails →</Link>
            </div>
          </div>

          {/* English Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-3">
              <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-lg">
                Communication
              </div>
              <h3 className="text-xl font-bold text-slate-900">Anglais Général</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Apprentissage pratique de l'anglais des affaires, prise de parole en public et préparation aux examens internationaux.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-semibold text-[#0b3b8c]">Niveaux B1 - C1</span>
              <Link to="/languages" className="text-red-600 font-bold hover:underline">Détails →</Link>
            </div>
          </div>

          {/* German & Soutien Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-3">
              <div className="inline-block px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-lg">
                Allemand & Soutien
              </div>
              <h3 className="text-xl font-bold text-slate-900">Allemand & Soutien</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Cours intensifs d'allemand pour visa d'études et soutien pédagogique continu pour collégiens et lycéens.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-semibold text-[#0b3b8c]">Tous Niveaux</span>
              <Link to="/training" className="text-red-600 font-bold hover:underline">Détails →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GALLERY & CAMPUS LIFE (Attached ref-2 & ref-3) */}
      <section className="bg-slate-100 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                Vie Étudiante & Campus
              </span>
              <h2 className="text-3xl font-black text-[#0b3b8c] mt-1 tracking-tight">
                Les Activités de YAGO SCHOOL à Beni Mellal
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0b3b8c] hover:text-red-600 transition-colors"
            >
              <span>Voir toute la galerie</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Attached Photo Ref 2 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200 group">
              <div className="relative overflow-hidden aspect-video">
                <img
                  src="https://storage.googleapis.com/webild/users/user_3MFjbGIn3Kqfnlr7fvQBozGHRvR/uploaded-1795119391435-jfi4t7nn.jpg"
                  alt="Étudiants YAGO SCHOOL Beni Mellal"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-mono text-red-600 font-bold mb-1">Photo Officielle • Beni Mellal</div>
                <h3 className="text-lg font-bold text-slate-900">
                  Groupes d'étudiants & Équipe pédagogique
                </h3>
                <p className="text-xs text-slate-600 mt-2">
                  Un environnement motivant et chaleureux favorisant l'échange et la réussite académique.
                </p>
              </div>
            </div>

            {/* Attached Photo Ref 3 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200 group">
              <div className="relative overflow-hidden aspect-video">
                <img
                  src="https://storage.googleapis.com/webild/users/user_3MFjbGIn3Kqfnlr7fvQBozGHRvR/uploaded-1795119391435-2si1ke1u.jpg"
                  alt="Élèves et Professeurs YAGO SCHOOL"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-mono text-[#0b3b8c] font-bold mb-1">Campus • IMB Karima 2</div>
                <h3 className="text-lg font-bold text-slate-900">
                  Rencontre promotionnelle et remise d'attestations
                </h3>
                <p className="text-xs text-slate-600 mt-2">
                  Nos élèves célèbrent la fin de leurs sessions de formation certifiante à Beni Mellal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONTACT & LOCATION SUMMARY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full uppercase tracking-wider">
              Localisation & Contacts
            </span>
            <h2 className="text-3xl font-black text-[#0b3b8c] tracking-tight">
              Rejoignez YAGO SCHOOL à Beni Mellal
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Inscrivez-vous dès maintenant aux cours de soutien ou aux formations en langues certifiées.
            </p>

            <div className="space-y-3 pt-2 text-sm text-slate-800">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Adresse :</strong><br />
                  <span className="text-slate-600">IMB KARIMA 2 OUM DHAR 2 BM, BENI MELLAL, MOROCCO</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#0b3b8c] shrink-0" />
                <div>
                  <strong>Téléphones :</strong><br />
                  <span className="font-mono text-slate-700">07 77 48 62 32 / 06 06 31 41 34</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center space-y-4">
            <h3 className="text-lg font-bold text-slate-900">Besoin d'un certificat ou d'une information ?</h3>
            <p className="text-xs text-slate-600">
              Notre équipe administrative est disponible pour répondre à vos questions du Lundi au Samedi.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Link
                to="/contact"
                className="bg-[#0b3b8c] hover:bg-blue-800 text-white font-bold text-sm px-6 py-3 rounded-xl shadow cursor-pointer"
              >
                Formulaire de Contact
              </Link>
              <a
                href="tel:0777486232"
                className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow cursor-pointer"
              >
                Appeler Directement
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

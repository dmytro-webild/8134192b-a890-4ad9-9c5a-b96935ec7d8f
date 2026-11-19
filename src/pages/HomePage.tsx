import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import YagoLogo from '../components/ui/YagoLogo';
import ThreeDCard from '../components/ui/ThreeDCard';
import ThreeDButton from '../components/ui/ThreeDButton';
import Hero3DEducationalCanvas from '../components/kit/Hero3DEducationalCanvas';
import ParticleYardStage from '../components/kit/ParticleYardStage';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  BookOpen,
  Globe2,
  Award,
  Phone,
  MapPin,
  Mail,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Send,
  QrCode,
  Sparkles
} from 'lucide-react';

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  const faqs = [
    {
      q: "Comment vérifier l'authenticité d'une attestation YAGO SCHOOL ?",
      a: "Chaque attestation délivrée par Academie MY YAGO SCHOOL PRIVE comporte un QR Code unique. En scannant ce code avec votre appareil mobile, vous accédez directement à la page de vérification certifiée affichant le nom du lauréat, le niveau validé et le numéro de série du document."
    },
    {
      q: "Quels sont les programmes de cours d'italien disponibles ?",
      a: "YAGO SCHOOL propose un cursus complet en langue italienne du niveau A1 au niveau C2 (selon le cadre CECRL), spécialement conçu pour les étudiants préparant leurs diplômes, des demandes de visa ou un projet professionnel en Italie."
    },
    {
      q: "Comment s'inscrire au cours de soutien Français 1BAC avec le Prof. Marouane ?",
      a: "Les inscriptions se font directement au secrétariat du centre à Beni Mellal ou par téléphone au 07 77 48 62 32 / 06 06 31 41 34. Le programme inclut la méthodologie des œuvres au programme et la préparation intensive aux épreuves régionales."
    },
    {
      q: "Quelles sont les coordonnées et l'adresse officielle de l'établissement ?",
      a: "L'établissement Academie MY YAGO SCHOOL PRIVE est situé à IMB KARIMA 2 OUM DHAR 2 BM, Beni Mellal, Maroc. Identifiants fiscaux : IF 53976503 | ICE 003362556000078."
    }
  ];

  return (
    <div className="relative space-y-20 font-sans max-w-7xl mx-auto px-4 sm:px-6">
      {/* 3D Page-wide Particle Backdrop */}
      <ParticleYardStage variant="abstract" density={0.8} />

      {/* 1. HERO SECTION */}
      <div id="hero" data-section="Hero" data-particle="hero">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#0b3b8c] via-[#092c69] to-slate-950 text-white rounded-3xl p-6 sm:p-12 shadow-2xl border border-blue-900/40">
          {/* Animated 3D Light Orbs */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -right-20 -top-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.25, 0.1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -left-20 -bottom-20 w-96 h-96 bg-red-500/20 rounded-full blur-3xl pointer-events-none"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold text-blue-200 shadow-lg"
              >
                <ShieldCheck className="w-4 h-4 text-red-400" />
                <span>Academie MY YAGO SCHOOL PRIVE • Beni Mellal</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-4"
              >
                <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-50 to-blue-200 drop-shadow-sm">
                  YAGO SCHOOL — Centre de Langues & Cours de Soutien
                </h1>
                <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-2xl">
                  L'établissement de référence à Beni Mellal pour la maîtrise des langues étrangères (Italien A1-C2, Anglais, Français, Allemand), la préparation à l'Examen Régional 1BAC et la délivrance d'attestations certifiées avec QR Code.
                </p>
              </motion.div>

              {/* Action 3D CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <ThreeDButton to="/languages" variant="accent">
                  <span>Découvrir nos formations</span>
                  <ArrowRight className="w-4 h-4" />
                </ThreeDButton>
                <ThreeDButton to="/certificates" variant="glass">
                  <Award className="w-4 h-4 text-red-400" />
                  <span>Attestations & QR Code</span>
                </ThreeDButton>
              </motion.div>

              {/* KPI Highlights in 3D elevation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 font-sans"
              >
                <div className="bg-white/5 backdrop-blur-sm p-3 rounded-2xl border border-white/10 shadow-inner text-center">
                  <div className="text-2xl sm:text-3xl font-black text-white">1 200+</div>
                  <div className="text-[11px] text-blue-200 uppercase font-semibold tracking-wider">Étudiants Formés</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-3 rounded-2xl border border-white/10 shadow-inner text-center">
                  <div className="text-2xl sm:text-3xl font-black text-red-400">5 000+</div>
                  <div className="text-[11px] text-blue-200 uppercase font-semibold tracking-wider">Attestations Émises</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-3 rounded-2xl border border-white/10 shadow-inner text-center">
                  <div className="text-2xl sm:text-3xl font-black text-emerald-400">100%</div>
                  <div className="text-[11px] text-blue-200 uppercase font-semibold tracking-wider">Vérification QR</div>
                </div>
              </motion.div>
            </div>

            {/* Hero Right Visual Card with 3D Educational R3F Canvas */}
            <div className="lg:col-span-5 space-y-4">
              <ThreeDCard depth={30} glowColor="rgba(220, 38, 38, 0.2)" className="bg-white/95 backdrop-blur border border-white/30 p-6 text-slate-900 shadow-2xl">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <YagoLogo size="sm" showSubtitle={true} />
                  <span className="bg-red-50 text-red-700 text-[10px] font-bold px-2.5 py-1 rounded-full border border-red-200 uppercase shadow-sm">
                    Beni Mellal 3D
                  </span>
                </div>

                {/* 3D Interactive Educational Canvas */}
                <Hero3DEducationalCanvas />

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 font-medium">Spécialité :</span>
                    <span className="font-bold text-[#0b3b8c]">Italien A1-C2 & 1BAC</span>
                  </div>
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="text-slate-600">IF:</span>
                    <span className="font-bold text-slate-800">53976503</span>
                  </div>
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="text-slate-600">ICE:</span>
                    <span className="font-bold text-slate-800">003362556000078</span>
                  </div>
                </div>
              </ThreeDCard>
            </div>
          </div>
        </div>
      </div>

      {/* 2. ABOUT & MISSION SECTION */}
      <div id="about" data-section="About" data-particle="overview">
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="bg-blue-100 text-[#0b3b8c] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-blue-200 shadow-sm">
              Pourquoi choisir YAGO SCHOOL ?
            </span>
            <h2 className="text-3xl font-black text-[#0b3b8c] tracking-tight">
              L'Excellence Pédagogique et la Garantie d'Attestations Authentiques
            </h2>
            <p className="text-slate-600 text-sm">
              Un encadrement de qualité supérieure pour la maîtrise des langues et le succès académique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ThreeDCard depth={25} glowColor="rgba(11, 59, 140, 0.2)" className="bg-white border border-slate-200 p-6">
              <div className="w-12 h-12 bg-blue-50 text-[#0b3b8c] rounded-2xl flex items-center justify-center shadow-inner">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0b3b8c] mt-4">Langues Étrangères (CECRL)</h3>
              <p className="text-slate-600 text-xs leading-relaxed mt-2">
                Apprentissage méthodique de l'Italien (A1 à C2), Anglais, Français et Allemand pour études supérieures, visas et opportunités professionnelles.
              </p>
            </ThreeDCard>

            <ThreeDCard depth={25} glowColor="rgba(220, 38, 38, 0.2)" className="bg-white border border-slate-200 p-6">
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center shadow-inner">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0b3b8c] mt-4">Préparation Examen Régional 1BAC</h3>
              <p className="text-slate-600 text-xs leading-relaxed mt-2">
                Encadrement méthodologique de Français avec le Prof. Marouane pour réussir l'Examen Régional avec mention.
              </p>
            </ThreeDCard>

            <ThreeDCard depth={25} glowColor="rgba(16, 185, 129, 0.2)" className="bg-white border border-slate-200 p-6">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shadow-inner">
                <QrCode className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0b3b8c] mt-4">Attestations Certifiées QR Code</h3>
              <p className="text-slate-600 text-xs leading-relaxed mt-2">
                Certificats officiels A4 d'Academie MY YAGO SCHOOL PRIVE avec un système de vérification instantané par QR Code.
              </p>
            </ThreeDCard>
          </div>
        </div>
      </div>

      {/* 3. ACADEMIC COURSES & FEATURES SECTION */}
      <div id="features" data-section="Features" data-particle="scan">
        <div className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-100 pb-6">
            <div>
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider">Offre Académique</span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0b3b8c] tracking-tight mt-1">
                Nos Formations Certifiantes & Soutien Scolaire
              </h2>
            </div>
            <Link
              to="/languages"
              className="text-xs font-bold text-[#0b3b8c] hover:underline flex items-center gap-1"
            >
              <span>Voir tout le catalogue</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Course 1: Italian */}
            <ThreeDCard depth={20} className="bg-slate-50 border border-slate-200 p-6">
              <div className="flex items-center justify-between">
                <span className="bg-red-100 text-red-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase shadow-sm">
                  Le Spécialiste à Beni Mellal
                </span>
                <span className="text-xs font-mono font-bold text-slate-500">240h / niveau</span>
              </div>
              <h3 className="text-xl font-bold text-[#0b3b8c] mt-3">Langue Italienne (A1 à C2)</h3>
              <p className="text-slate-600 text-xs leading-relaxed mt-2">
                Module complet de grammaire, conversation et préparation aux dossiers d'études ou de travail en Italie (CILS/CELI).
              </p>
              <div className="flex flex-wrap gap-1.5 pt-4">
                {["Italien A1", "Italien A2", "Italien B1", "Italien B2", "Visa Italie"].map((tag) => (
                  <span key={tag} className="bg-white px-2.5 py-1 rounded-lg border border-slate-200 text-[11px] text-slate-700 font-medium shadow-2xs">
                    {tag}
                  </span>
                ))}
              </div>
            </ThreeDCard>

            {/* Course 2: French 1BAC */}
            <ThreeDCard depth={20} className="bg-slate-50 border border-slate-200 p-6">
              <div className="flex items-center justify-between">
                <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase shadow-sm">
                  Examen Régional 1BAC
                </span>
                <span className="text-xs font-mono font-bold text-slate-500">120h de préparation</span>
              </div>
              <h3 className="text-xl font-bold text-[#0b3b8c] mt-3">Français 1BAC avec Prof. Marouane</h3>
              <p className="text-slate-600 text-xs leading-relaxed mt-2">
                Étude approfondie des œuvres au programme, techniques de rédaction pour la dissertation et séries d'examens blancs.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-4">
                {["1BAC Français", "Œuvres 1BAC", "Dissertation", "Examen Blanc"].map((tag) => (
                  <span key={tag} className="bg-white px-2.5 py-1 rounded-lg border border-slate-200 text-[11px] text-slate-700 font-medium shadow-2xs">
                    {tag}
                  </span>
                ))}
              </div>
            </ThreeDCard>

            {/* Course 3: English */}
            <ThreeDCard depth={20} className="bg-slate-50 border border-slate-200 p-6">
              <div className="flex items-center justify-between">
                <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase shadow-sm">
                  Communication & Business
                </span>
                <span className="text-xs font-mono font-bold text-slate-500">150h par cycle</span>
              </div>
              <h3 className="text-xl font-bold text-[#0b3b8c] mt-3">Anglais Général & Professionnel</h3>
              <p className="text-slate-600 text-xs leading-relaxed mt-2">
                Expression orale, préparation d'entretiens, rédaction administrative et préparation aux tests IELTS / TOEFL.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-4">
                {["General English", "Business English", "Speaking", "IELTS"].map((tag) => (
                  <span key={tag} className="bg-white px-2.5 py-1 rounded-lg border border-slate-200 text-[11px] text-slate-700 font-medium shadow-2xs">
                    {tag}
                  </span>
                ))}
              </div>
            </ThreeDCard>

            {/* Course 4: German & Support */}
            <ThreeDCard depth={20} className="bg-slate-50 border border-slate-200 p-6">
              <div className="flex items-center justify-between">
                <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase shadow-sm">
                  Visa & Continuous Support
                </span>
                <span className="text-xs font-mono font-bold text-slate-500">Accompagnement Annuel</span>
              </div>
              <h3 className="text-xl font-bold text-[#0b3b8c] mt-3">Allemand & Soutien Scolaire</h3>
              <p className="text-slate-600 text-xs leading-relaxed mt-2">
                Cours d'allemand pour visas d'études et soutien continu du collège au lycée dans l'ensemble des matières.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-4">
                {["Allemand A1-B1", "Maths", "Physique", "Soutien Scolaire"].map((tag) => (
                  <span key={tag} className="bg-white px-2.5 py-1 rounded-lg border border-slate-200 text-[11px] text-slate-700 font-medium shadow-2xs">
                    {tag}
                  </span>
                ))}
              </div>
            </ThreeDCard>
          </div>
        </div>
      </div>

      {/* 4. GALLERY & CAMPUS LIFE SECTION */}
      <div id="gallery" data-section="Gallery" data-particle="ambient">
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider">Campus & Événements</span>
              <h2 className="text-3xl font-black text-[#0b3b8c] tracking-tight mt-1">
                Vie Étudiante à YAGO SCHOOL Beni Mellal
              </h2>
            </div>
            <ThreeDButton to="/gallery" variant="primary">
              Voir la galerie complète
            </ThreeDButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ThreeDCard depth={25} className="bg-white border border-slate-200 p-4">
              <img
                src="https://storage.googleapis.com/webild/users/user_3MFjbGIn3Kqfnlr7fvQBozGHRvR/uploaded-1795119391433-ttgozbts.jpg"
                alt="Affiche YAGO SCHOOL"
                className="w-full h-48 object-cover rounded-2xl shadow-sm"
              />
              <div className="space-y-1 mt-3">
                <span className="text-[10px] font-bold text-red-600 uppercase">Affiche Officielle</span>
                <h3 className="text-base font-bold text-[#0b3b8c]">Rentrée Académique & Renseignements</h3>
                <p className="text-xs text-slate-600">Offre spéciale soutien 1BAC et cours de langues à Beni Mellal.</p>
              </div>
            </ThreeDCard>

            <ThreeDCard depth={25} className="bg-white border border-slate-200 p-4">
              <img
                src="https://storage.googleapis.com/webild/users/user_3MFjbGIn3Kqfnlr7fvQBozGHRvR/uploaded-1795119391435-jfi4t7nn.jpg"
                alt="Promotion Etudiants"
                className="w-full h-48 object-cover rounded-2xl shadow-sm"
              />
              <div className="space-y-1 mt-3">
                <span className="text-[10px] font-bold text-blue-600 uppercase">Vie Étudiante</span>
                <h3 className="text-base font-bold text-[#0b3b8c]">Promo Élèves & Corps Professoral</h3>
                <p className="text-xs text-slate-600">Ambiance conviviale et encadrement rapproché lors des ateliers.</p>
              </div>
            </ThreeDCard>

            <ThreeDCard depth={25} className="bg-white border border-slate-200 p-4">
              <img
                src="https://storage.googleapis.com/webild/users/user_3MFjbGIn3Kqfnlr7fvQBozGHRvR/uploaded-1795119391435-2si1ke1u.jpg"
                alt="Remise d'Attestations"
                className="w-full h-48 object-cover rounded-2xl shadow-sm"
              />
              <div className="space-y-1 mt-3">
                <span className="text-[10px] font-bold text-emerald-600 uppercase">Cérémonie</span>
                <h3 className="text-base font-bold text-[#0b3b8c]">Remise des Attestations Certifiées</h3>
                <p className="text-xs text-slate-600">Délivrance des diplômes A4 sécurisés avec validation QR Code.</p>
              </div>
            </ThreeDCard>
          </div>
        </div>
      </div>

      {/* 5. CERTIFICATE QR CODE SHOWCASE SECTION */}
      <div id="certificates" data-section="Certificates" data-particle="close">
        <div className="bg-[#0b3b8c] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-blue-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 bg-red-600 text-white text-xs font-bold px-3.5 py-1.5 rounded-full uppercase shadow-md">
                <QrCode className="w-4 h-4" />
                Vérification d'Authenticité Instantanée
              </div>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
                Générateur & Système de Contrôle d'Attestations QR
              </h2>
              <p className="text-blue-100 text-sm leading-relaxed">
                Toutes nos attestations de formation (Italien, Français, Anglais, Allemand) comportent un numéro d'enregistrement unique et un code QR scannable en temps réel.
              </p>
              <div className="pt-2">
                <ThreeDButton to="/certificates" variant="secondary">
                  <Award className="w-4 h-4 text-red-600" />
                  <span>Accéder au Générateur & Vérificateur</span>
                </ThreeDButton>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ThreeDCard depth={30} glowColor="rgba(56, 189, 248, 0.3)" className="bg-white/10 backdrop-blur border border-white/20 p-6 text-xs space-y-3 font-mono">
                {/* Simulated 3D QR Laser Scanner Effect */}
                <div className="relative p-3 bg-slate-900/60 rounded-xl border border-white/10 overflow-hidden">
                  <motion.div
                    animate={{ y: [0, 80, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-x-0 h-0.5 bg-red-500 shadow-[0_0_8px_#ef4444] z-20 pointer-events-none"
                  />
                  <div className="flex items-center justify-between border-b border-white/20 pb-2">
                    <span className="text-blue-200">Raison Sociale:</span>
                    <span className="font-bold text-white">Academie MY YAGO SCHOOL PRIVE</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/20 pb-2">
                    <span className="text-blue-200">Identifiant Fiscal (IF):</span>
                    <span className="font-bold text-emerald-400">53976503</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/20 pb-2">
                    <span className="text-blue-200">Identifiant Commun (ICE):</span>
                    <span className="font-bold text-emerald-400">003362556000078</span>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-blue-200">Localisation:</span>
                    <span className="font-bold text-white">IMB KARIMA 2, BENI MELLAL</span>
                  </div>
                </div>
              </ThreeDCard>
            </div>
          </div>
        </div>
      </div>

      {/* 6. FAQ SECTION */}
      <div id="faq" data-section="FAQ">
        <div className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider">Foire aux Questions</span>
            <h2 className="text-3xl font-black text-[#0b3b8c] tracking-tight">
              Informations Pratiques & FAQ
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <ThreeDCard key={idx} depth={10} className="border border-slate-200 bg-white">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 text-left font-bold text-sm text-[#0b3b8c] bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="p-4 text-xs text-slate-600 bg-white border-t border-slate-100 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </ThreeDCard>
            ))}
          </div>
        </div>
      </div>

      {/* 7. CONTACT & LOCATION SECTION */}
      <div id="contact" data-section="Contact">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5">
            <ThreeDCard depth={25} glowColor="rgba(11, 59, 140, 0.3)" className="bg-[#0b3b8c] text-white p-8 shadow-2xl space-y-6">
              <h2 className="text-2xl font-bold tracking-tight">Secrétariat YAGO SCHOOL</h2>
              <p className="text-blue-100 text-xs leading-relaxed">
                Pour toute demande de renseignement, inscription aux cours de soutien ou création d'attestation certifiée.
              </p>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white/10 rounded-xl shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <strong className="block text-white">Adresse du Centre :</strong>
                    <span className="text-blue-100">IMB KARIMA 2 OUM DHAR 2 BM, Beni Mellal</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white/10 rounded-xl shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <strong className="block text-white">Téléphones Directs :</strong>
                    <span className="text-blue-100 font-mono">07 77 48 62 32 / 06 06 31 41 34</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white/10 rounded-xl shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-blue-300" />
                  </div>
                  <div>
                    <strong className="block text-white">Email Général :</strong>
                    <span className="text-blue-100 font-mono">contact@yagoschool.ma</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/20 font-mono text-[11px] text-blue-200">
                <div>IF : <strong className="text-white">53976503</strong></div>
                <div>ICE : <strong className="text-white">003362556000078</strong></div>
              </div>
            </ThreeDCard>
          </div>

          {/* Quick Contact Form */}
          <div className="lg:col-span-7">
            <ThreeDCard depth={15} className="bg-white border border-slate-200 p-8 shadow-xl">
              <h2 className="text-xl font-bold text-[#0b3b8c] mb-1">Formulaire d'Information</h2>
              <p className="text-xs text-slate-500 mb-6">Laissez-nous vos coordonnées et votre message.</p>

              {contactSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-6 text-center text-emerald-800 space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h3 className="font-bold text-base">Message envoyé avec succès !</h3>
                  <p className="text-xs text-slate-600">Notre équipe vous recontactera rapidement.</p>
                  <button
                    onClick={() => setContactSubmitted(false)}
                    className="text-xs font-bold text-[#0b3b8c] hover:underline cursor-pointer pt-2"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Nom Complet *</label>
                      <input
                        type="text"
                        required
                        placeholder="Ex. Salma Bennani"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#0b3b8c]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Téléphone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="Ex. 0600000000"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono focus:outline-none focus:ring-2 focus:ring-[#0b3b8c]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email</label>
                    <input
                      type="email"
                      placeholder="votre.email@domaine.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#0b3b8c]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Message *</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Précisez votre demande ou question..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#0b3b8c]"
                    />
                  </div>

                  <ThreeDButton type="submit" variant="primary" className="w-full">
                    <Send className="w-4 h-4" />
                    <span>Envoyer le message</span>
                  </ThreeDButton>
                </form>
              )}
            </ThreeDCard>
          </div>
        </div>
      </div>
    </div>
  );
}

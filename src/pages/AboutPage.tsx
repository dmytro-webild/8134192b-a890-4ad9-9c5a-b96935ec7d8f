import { ShieldCheck } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 font-sans">
      {/* Title Header */}
      <div className="bg-[#0b3b8c] text-white rounded-3xl p-8 sm:p-12 shadow-xl">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            Établissement Agréé à Beni Mellal
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            À propos de YAGO SCHOOL
          </h1>
          <p className="text-blue-100 text-base leading-relaxed">
            Centre de langues, de formations professionnelles certifiantes et de cours de soutien scolaire au cœur de la ville de Beni Mellal.
          </p>
        </div>
      </div>

      {/* Main Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Mission & Legal Status */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <h2 className="text-2xl font-bold text-[#0b3b8c]">Notre Mission Pédagogique</h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              Fondé sous la dénomination officielle <strong className="text-slate-900">Academie MY YAGO SCHOOL PRIVE</strong>, l'établissement s'est donné pour ambition d'accompagner les élèves et professionnels dans la maîtrise des langues vivantes et l'excellence académique.
            </p>
            <p className="text-slate-700 text-sm leading-relaxed">
              De l'apprentissage des langues (Italien, Anglais, Français, Allemand) jusqu'à la préparation ciblée de l'Examen Régional du Baccalauréat (1BAC), notre méthode repose sur la rigueur, le suivi individuel et la délivrance de certificats officiels sécurisés par QR Code.
            </p>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-4">
            <h3 className="text-lg font-bold text-red-400">Identifiants Administratifs & Légaux</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              <div className="bg-slate-800 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400 block text-[10px] uppercase">Raison Sociale</span>
                <span className="font-bold text-white text-sm">Academie MY YAGO SCHOOL PRIVE</span>
              </div>
              <div className="bg-slate-800 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400 block text-[10px] uppercase">Identifiant Fiscal (IF)</span>
                <span className="font-bold text-emerald-400 text-sm">53976503</span>
              </div>
              <div className="bg-slate-800 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400 block text-[10px] uppercase">Identifiant Commun (ICE)</span>
                <span className="font-bold text-emerald-400 text-sm">003362556000078</span>
              </div>
              <div className="bg-slate-800 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400 block text-[10px] uppercase">Siège social</span>
                <span className="font-bold text-slate-200 text-xs">Beni Mellal, Maroc</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Faculty & Photo Banner */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://storage.googleapis.com/webild/users/user_3MFjbGIn3Kqfnlr7fvQBozGHRvR/uploaded-1795119391433-ttgozbts.jpg"
                alt="Prof Marouane YAGO SCHOOL"
                className="w-20 h-20 rounded-2xl object-cover border-2 border-[#0b3b8c]"
              />
              <div>
                <span className="text-xs font-bold text-red-600 uppercase tracking-wider">Corps Enseignant</span>
                <h3 className="text-xl font-bold text-[#0b3b8c]">Prof. Marouane</h3>
                <p className="text-xs text-slate-500">Formateur & Responsable Pédagogique</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Spécialiste de la préparation à l'Examen Régional de Français (1BAC) et accompagnateur d'étudiants en langues vivantes avec une méthodologie axée sur le résultat.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <img
              src="https://storage.googleapis.com/webild/users/user_3MFjbGIn3Kqfnlr7fvQBozGHRvR/uploaded-1795119391435-jfi4t7nn.jpg"
              alt="Promotion YAGO SCHOOL"
              className="w-full h-auto object-cover"
            />
            <div className="bg-slate-900 text-white p-4 text-xs">
              <strong>Campus Beni Mellal</strong> — Promo étudiants & corps professoral.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { Award, CheckCircle2, Globe2, Clock } from 'lucide-react';

export default function LanguagesPage() {
  const languages = [
    {
      id: 'italian',
      name: 'Langue Italienne',
      levels: 'A1, A2, B1, B2, C1, C2',
      badge: 'Le Spécialiste à Beni Mellal',
      badgeColor: 'bg-red-50 text-red-700 border-red-200',
      description: 'Cursus complet de langue italienne structuré selon le Cadre Européen Commun de Référence pour les Langues (CECRL). Requis pour les diplômes et visas d\'études en Italie.',
      hours: '80h à 240h par niveau',
      features: [
        'Grammaire, vocabulaire et pratique orale intensive',
        'Préparation aux examens officiels CILS / CELI',
        'Délivrance de l\'Attestation de Formation certifiée QR',
        'Supports pédagogiques et ateliers de conversation'
      ]
    },
    {
      id: 'french',
      name: 'Langue Française & Preparation 1BAC',
      levels: 'Examen Régional 1BAC • Tous Niveaux',
      badge: 'Septembre Gratuit avec Prof. Marouane',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      description: 'Programme spécifique d\'excellence destiné aux élèves de la 1ère année du Baccalauréat pour réussir l\'Examen Régional avec mention.',
      hours: '120h de soutien spécialisé',
      features: [
        'Analyse méthodique des œuvres au programme (La Boîte à Merveilles, Le Dernier Jour d\'un Condamné, Antigone)',
        'Techniques d\'écriture de la production écrite et dissertation',
        'Séries d\'examens blancs corrigés individuellement',
        'Offre Rentrée : Mois de Septembre 100% Gratuit !'
      ]
    },
    {
      id: 'english',
      name: 'Langue Anglaise',
      levels: 'General & Business English (B1 - C1)',
      badge: 'Communication & Business',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      description: 'Perfectionnement de la maîtrise de l\'anglais parlé et écrit pour les études supérieures, la carrière internationale et la communication professionnelle.',
      hours: '150h par cycle',
      features: [
        'Prise de parole en public et débats thématiques',
        'Rédaction de CV et lettres de motivation en anglais',
        'Préparation aux certifications IELTS / TOEFL',
        'Attestation officielle YAGO SCHOOL'
      ]
    },
    {
      id: 'german',
      name: 'Langue Allemande',
      levels: 'A1, A2, B1',
      badge: 'Visa d\'Études & Travail',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      description: 'Apprentissage accéléré de l\'allemand pour les étudiants et candidats à la formation professionnelle (Ausbildung) ou au regroupement familial.',
      hours: '180h par niveau',
      features: [
        'Grammaire fondamentale et lexique thématique',
        'Entraînement aux épreuves du Goethe-Zertifikat / ÖSD',
        'Mises en situation et dialogues professionnels',
        'Suivi individuel par des enseignants certifiés'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 font-sans">
      {/* Page Title Header */}
      <div className="bg-[#0b3b8c] text-white rounded-3xl p-8 sm:p-12 shadow-xl">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <Globe2 className="w-4 h-4" />
            Cadre Européen CECRL
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Offre de Formation en Langues Étrangères
          </h1>
          <p className="text-blue-100 text-base leading-relaxed">
            Maîtrisez les langues indispensables pour réussir vos études, vos concours et vos projets à l'international.
          </p>
        </div>
      </div>

      {/* Languages List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {languages.map((lang) => (
          <div key={lang.id} className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${lang.badgeColor}`}>
                  {lang.badge}
                </span>
                <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#0b3b8c]" />
                  {lang.hours}
                </span>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0b3b8c]">{lang.name}</h2>
                <div className="text-xs font-mono font-bold text-slate-600 mt-1">
                  Niveaux : <span className="text-red-600">{lang.levels}</span>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                {lang.description}
              </p>

              <div className="border-t border-slate-100 pt-4 space-y-2">
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Inclus dans ce programme :
                </div>
                {lang.features.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between">
              <Link
                to="/contact"
                className="bg-[#0b3b8c] hover:bg-blue-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow transition-colors"
              >
                S'inscrire à ce cours
              </Link>
              <Link
                to="/certificates"
                className="text-xs font-bold text-red-600 hover:underline flex items-center gap-1"
              >
                <Award className="w-3.5 h-3.5" />
                Obtenir une attestation
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

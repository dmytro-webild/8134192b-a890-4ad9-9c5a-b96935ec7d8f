import { Link } from 'react-router-dom';
import { GraduationCap, Award } from 'lucide-react';

export default function TrainingPage() {
  const programs = [
    {
      title: 'Préparation Examen Régional 1BAC Français',
      category: 'Soutien Scolaire',
      duration: '120 Heures',
      highlight: 'Septembre Gratuit !',
      instructor: 'Prof. Marouane',
      description: 'Accompagnement méthodologique complet sur l\'épreuve de français avec fiches de révision, étude d\'œuvres et exercices de rédaction guidée.'
    },
    {
      title: 'Cursus Accéléré Italien B1-B2',
      category: 'Langues & Formation',
      duration: '240 Heures',
      highlight: 'Requis pour l\'Italie',
      instructor: 'Formateurs Spécialisés',
      description: 'Module complet pour maîtriser l\'italien à des fins académiques et professionnelles avec délivrance de l\'attestation de formation A4.'
    },
    {
      title: 'Anglais Professionnel & Communication',
      category: 'Perfectionnement',
      duration: '150 Heures',
      highlight: 'Certifiant',
      instructor: 'Enseignants Anglophones',
      description: 'Cours axé sur l\'expression orale fluide, le vocabulaire professionnel et la préparation aux entretiens d\'embauche.'
    },
    {
      title: 'Cours de Soutien Continu (Collège & Lycée)',
      category: 'Soutien Scolaire',
      duration: 'Suivi Annuel',
      highlight: 'Toutes Matières',
      instructor: 'Équipe YAGO SCHOOL',
      description: 'Renforcement en mathématiques, physique-chimie et langues pour tous les niveaux scolaires avec bilans réguliers.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 font-sans">
      <div className="bg-[#0b3b8c] text-white rounded-3xl p-8 sm:p-12 shadow-xl">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" />
            Programmes & Volume Horaire
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Programmes de Formation & Soutien
          </h1>
          <p className="text-blue-100 text-base leading-relaxed">
            Consultez nos parcours de formation, durées de cours et modalités d'obtention d'attestations certifiées à Beni Mellal.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {programs.map((item, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
                  {item.category}
                </span>
                <span className="text-xs font-mono font-bold text-[#0b3b8c] bg-blue-50 px-2.5 py-1 rounded-lg">
                  {item.duration}
                </span>
              </div>

              <h2 className="text-xl font-bold text-slate-900">{item.title}</h2>
              <div className="text-xs text-slate-500">
                Encadrement : <strong className="text-slate-800">{item.instructor}</strong> • <span className="text-red-600 font-semibold">{item.highlight}</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <Link
                to="/certificates"
                className="text-xs font-bold text-[#0b3b8c] hover:underline flex items-center gap-1.5"
              >
                <Award className="w-4 h-4 text-red-600" />
                Délivrance d'attestation
              </Link>
              <Link
                to="/contact"
                className="bg-[#0b3b8c] text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-blue-800 transition-colors"
              >
                S'informer
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

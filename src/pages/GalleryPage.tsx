import { useState } from 'react';
import { Camera, X } from 'lucide-react';

export default function GalleryPage() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const galleryItems = [
    {
      src: 'https://storage.googleapis.com/webild/users/user_3MFjbGIn3Kqfnlr7fvQBozGHRvR/uploaded-1795119391433-ttgozbts.jpg',
      title: 'Bannière de Promotion YAGO SCHOOL',
      tag: 'Affiche Officielle',
      desc: 'Information sur l\'Examen Régional 1BAC Français avec le Prof. Marouane et l\'offre du mois de Septembre Gratuit.'
    },
    {
      src: 'https://storage.googleapis.com/webild/users/user_3MFjbGIn3Kqfnlr7fvQBozGHRvR/uploaded-1795119391435-jfi4t7nn.jpg',
      title: 'Groupe d\'Étudiants & Corps Professeural',
      tag: 'Événement Campus',
      desc: 'Rassemblement officiel des élèves inscrits aux cours de soutien et formations en langues à Beni Mellal.'
    },
    {
      src: 'https://storage.googleapis.com/webild/users/user_3MFjbGIn3Kqfnlr7fvQBozGHRvR/uploaded-1795119391435-2si1ke1u.jpg',
      title: 'Promotion d\'Élèves YAGO SCHOOL',
      tag: 'Vie Éducative',
      desc: 'Remise des attestation de fin de cursus et journée d\'orientation à Beni Mellal.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 font-sans">
      <div className="bg-[#0b3b8c] text-white rounded-3xl p-8 sm:p-12 shadow-xl">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <Camera className="w-4 h-4" />
            Galerie Photos Officielle
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Galerie d'Activités & Événements
          </h1>
          <p className="text-blue-100 text-base leading-relaxed">
            Découvrez la vie étudiante, nos promotions d'élèves et les affiches officielles de YAGO SCHOOL.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveImage(item.src)}
            className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer group"
          >
            <div className="relative overflow-hidden aspect-video sm:aspect-square bg-slate-100">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-red-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
                  {item.tag}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0b3b8c] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-12 right-0 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={activeImage}
              alt="Aperçu Galerie YAGO SCHOOL"
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain mx-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
}

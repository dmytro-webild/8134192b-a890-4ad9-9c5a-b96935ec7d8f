import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Inscriptions & Formations',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 font-sans">
      {/* Title Header */}
      <div className="bg-[#0b3b8c] text-white rounded-3xl p-8 sm:p-12 shadow-xl">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <Mail className="w-4 h-4" />
            Administration & Secrétariat
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Contactez YAGO SCHOOL
          </h1>
          <p className="text-blue-100 text-base leading-relaxed">
            Notre équipe est à votre disposition pour toute information relative aux inscriptions, aux cours de soutien et à la vérification des attestations.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Contact Cards & Legal Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <h2 className="text-xl font-bold text-[#0b3b8c]">Coordonnées Officielle</h2>

            <div className="space-y-4 text-sm text-slate-800">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-red-50 text-red-600 rounded-xl shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-slate-900 font-bold">Adresse du Centre :</strong>
                  <span className="text-slate-600 text-xs">
                    IMB KARIMA 2 OUM DHAR 2 BM, BENI MELLAL, MOROCCO
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-blue-50 text-[#0b3b8c] rounded-xl shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-slate-900 font-bold">Téléphones Directs :</strong>
                  <div className="font-mono text-xs text-slate-700 space-y-0.5 mt-0.5">
                    <div>07 77 48 62 32</div>
                    <div>06 06 31 41 34</div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-slate-900 font-bold">Email Général :</strong>
                  <span className="font-mono text-xs text-slate-600">contact@yagoschool.ma</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-purple-50 text-purple-600 rounded-xl shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-slate-900 font-bold">Horaires d'Ouverture :</strong>
                  <span className="text-xs text-slate-600">Lundi – Samedi : 08h30 – 19h30</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <div className="bg-slate-900 text-white p-4 rounded-2xl font-mono text-xs space-y-1">
                <div className="text-red-400 font-bold font-sans">Academie MY YAGO SCHOOL PRIVE</div>
                <div>IF : <strong className="text-white">53976503</strong></div>
                <div>ICE : <strong className="text-white">003362556000078</strong></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[#0b3b8c] mb-2">Envoyez-nous un Message</h2>
          <p className="text-xs text-slate-500 mb-6">
            Remplissez ce formulaire pour recevoir nos brochures, tarifs ou demandes d'inscriptions.
          </p>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-6 text-center text-emerald-800 space-y-2 animate-fadeIn">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="font-bold text-lg">Message Transmis avec Succès !</h3>
              <p className="text-xs text-slate-600">
                Merci {formData.name}. L'équipe administrative de YAGO SCHOOL vous recontactera dans les plus brefs délais.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 text-xs font-bold text-[#0b3b8c] hover:underline cursor-pointer"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nom et Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex. Salma Bennani"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0b3b8c]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ex. 0600000000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#0b3b8c]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Adresse Email
                </label>
                <input
                  type="email"
                  placeholder="votre.email@domaine.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0b3b8c]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Sujet de la Demande
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0b3b8c]"
                >
                  <option value="Inscriptions & Formations">Inscriptions aux cours de langues</option>
                  <option value="Soutien 1BAC Français">Soutien 1BAC Français (Prof. Marouane)</option>
                  <option value="Demande d'Attestation">Demande ou vérification d'attestation</option>
                  <option value="Autre">Autre renseignement</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Précisez votre demande ou question..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0b3b8c]"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#0b3b8c] hover:bg-blue-800 text-white font-bold text-sm py-3.5 rounded-xl shadow-md transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                Envoyer le message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

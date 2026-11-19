import React, { useState, useEffect, useCallback } from 'react';
import type { CertificateData } from './types';
import { SAMPLE_CERTIFICATES } from './types';
import CertificateDocument from './CertificateDocument';
import {
  Users, Award, BookOpen, QrCode, Search, PlusCircle, ShieldCheck, CheckCircle2,
  FileText, Eye, X, Filter, Sparkles
} from 'lucide-react';

interface CertificateManagerProps {
  initialVerifyId?: string | null;
}

export default function CertificateManager({ initialVerifyId }: CertificateManagerProps) {
  const [certificates, setCertificates] = useState<CertificateData[]>(SAMPLE_CERTIFICATES);
  const [activeTab, setActiveTab] = useState<'certificates' | 'issue' | 'verify' | 'students'>('certificates');
  const [selectedCert, setSelectedCert] = useState<CertificateData | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterLanguage, setFilterLanguage] = useState('All');

  // Verify Tab state
  const [verifyIdInput, setVerifyIdInput] = useState(initialVerifyId || '');
  const [verifiedCertResult, setVerifiedCertResult] = useState<CertificateData | null>(null);
  const [verifyError, setVerifyError] = useState(false);

  // New Certificate Form State
  const [formData, setFormData] = useState({
    studentName: '',
    cin: '',
    birthDate: '',
    birthPlace: 'Beni Mellal',
    courseTitle: 'Langue Italienne - Niveau B2',
    language: 'Italien',
    level: 'B2',
    totalHours: 200,
    startDate: '01/10/2025',
    endDate: '15/02/2026',
    issueDate: new Date().toLocaleDateString('fr-FR'),
    grade: 'Très Bien',
    directorName: 'Prof. Marouane'
  });

  const handlePerformVerify = useCallback((idToVerify: string) => {
    const cleanId = idToVerify.trim().toUpperCase();
    const found = certificates.find(
      c => c.id.toUpperCase() === cleanId || c.cin.toUpperCase() === cleanId
    );
    if (found) {
      setVerifiedCertResult(found);
      setVerifyError(false);
    } else {
      setVerifiedCertResult(null);
      setVerifyError(true);
    }
  }, [certificates]);

  useEffect(() => {
    if (initialVerifyId) {
      setActiveTab('verify');
      handlePerformVerify(initialVerifyId);
    }
  }, [initialVerifyId, handlePerformVerify]);

  const handleIssueSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName || !formData.cin) return;

    const newId = `YG-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const newCert: CertificateData = {
      id: newId,
      studentName: formData.studentName,
      cin: formData.cin.toUpperCase(),
      birthDate: formData.birthDate || '10/04/2002',
      birthPlace: formData.birthPlace,
      courseTitle: formData.courseTitle,
      language: formData.language,
      level: formData.level,
      totalHours: Number(formData.totalHours),
      startDate: formData.startDate,
      endDate: formData.endDate,
      issueDate: formData.issueDate,
      grade: formData.grade,
      directorName: formData.directorName,
      verificationHash: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 8),
      status: 'VÉRIFIÉ'
    };

    setCertificates([newCert, ...certificates]);
    setSelectedCert(newCert);
    setActiveTab('certificates');
    setFormData({
      studentName: '',
      cin: '',
      birthDate: '',
      birthPlace: 'Beni Mellal',
      courseTitle: 'Langue Italienne - Niveau B2',
      language: 'Italien',
      level: 'B2',
      totalHours: 200,
      startDate: '01/10/2025',
      endDate: '15/02/2026',
      issueDate: new Date().toLocaleDateString('fr-FR'),
      grade: 'Très Bien',
      directorName: 'Prof. Marouane'
    });
  };

  const filteredCertificates = certificates.filter(cert => {
    const matchesSearch =
      cert.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.cin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLang = filterLanguage === 'All' || cert.language === filterLanguage;
    return matchesSearch && matchesLang;
  });

  return (
    <div className="w-full max-w-6xl mx-auto my-8 px-4 font-sans">
      {/* Top Header & Dashboard Metrics */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              Système de Gestion YAGO SCHOOL
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0b3b8c] mt-2 tracking-tight">
              Gestion des Attestations & Authentification QR
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Générez, administrez et vérifiez l'authenticité des certificats de formation de YAGO SCHOOL.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('issue')}
              className="flex items-center gap-2 bg-[#0b3b8c] hover:bg-blue-800 text-white font-medium text-sm px-4 py-2.5 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              Créer une Attestation
            </button>
            <button
              onClick={() => setActiveTab('verify')}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium text-sm px-4 py-2.5 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <QrCode className="w-4 h-4" />
              Vérification QR
            </button>
          </div>
        </div>

        {/* Dashboard Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-medium uppercase tracking-wider">Étudiants Inscrits</span>
              <div className="p-2 bg-blue-50 text-[#0b3b8c] rounded-xl">
                <Users className="w-5 h-5" />
              </div>
            </div>
            <div className="text-2xl font-black text-slate-900">1 240+</div>
            <div className="text-[11px] text-emerald-600 font-semibold mt-1">
              +15% cette année
            </div>
          </div>

          <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-medium uppercase tracking-wider">Certificats Émis</span>
              <div className="p-2 bg-red-50 text-red-600 rounded-xl">
                <Award className="w-5 h-5" />
              </div>
            </div>
            <div className="text-2xl font-black text-slate-900">5 000+</div>
            <div className="text-[11px] text-slate-500 mt-1">
              Tous cursus confondus
            </div>
          </div>

          <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-medium uppercase tracking-wider">Programmes</span>
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
                <BookOpen className="w-5 h-5" />
              </div>
            </div>
            <div className="text-2xl font-black text-slate-900">12 Modules</div>
            <div className="text-[11px] text-slate-500 mt-1">
              Italien, Anglais, Français, Soutien
            </div>
          </div>

          <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-medium uppercase tracking-wider">Traçabilité QR</span>
              <div className="p-2 bg-purple-50 text-purple-600 rounded-xl">
                <ShieldCheck className="w-5 h-5" />
              </div>
            </div>
            <div className="text-2xl font-black text-emerald-600">100%</div>
            <div className="text-[11px] text-slate-500 mt-1">
              Authentification garantie
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-slate-200 mb-6 gap-2 overflow-x-auto pb-1">
        <button
          onClick={() => setActiveTab('certificates')}
          className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-t-xl transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'certificates'
              ? 'bg-[#0b3b8c] text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <FileText className="w-4 h-4" />
          Liste des Attestations ({certificates.length})
        </button>
        <button
          onClick={() => setActiveTab('issue')}
          className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-t-xl transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'issue'
              ? 'bg-[#0b3b8c] text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <PlusCircle className="w-4 h-4" />
          Générer une Attestation
        </button>
        <button
          onClick={() => setActiveTab('verify')}
          className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-t-xl transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'verify'
              ? 'bg-[#0b3b8c] text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <QrCode className="w-4 h-4" />
          Portail de Vérification QR
        </button>
        <button
          onClick={() => setActiveTab('students')}
          className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-t-xl transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'students'
              ? 'bg-[#0b3b8c] text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Users className="w-4 h-4" />
          Fichiers Étudiants
        </button>
      </div>

      {/* TAB 1: LIST OF CERTIFICATES */}
      {activeTab === 'certificates' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Rechercher par Nom, CIN ou N°..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0b3b8c]"
              />
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto">
              <Filter className="w-4 h-4 text-slate-400" />
              <select
                value={filterLanguage}
                onChange={(e) => setFilterLanguage(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-xl text-sm px-3 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0b3b8c]"
              >
                <option value="All">Toutes les langues</option>
                <option value="Italien">Italien</option>
                <option value="Français">Français</option>
                <option value="Anglais">Anglais</option>
                <option value="Allemand">Allemand</option>
              </select>
            </div>
          </div>

          {/* Certificates Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 text-xs uppercase tracking-wider">
                  <th className="p-3.5">N° Certificat</th>
                  <th className="p-3.5">Étudiant</th>
                  <th className="p-3.5">CIN</th>
                  <th className="p-3.5">Formation</th>
                  <th className="p-3.5">Heures</th>
                  <th className="p-3.5">Date</th>
                  <th className="p-3.5 text-center">Statut</th>
                  <th className="p-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredCertificates.map((cert) => (
                  <tr key={cert.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 font-mono font-bold text-[#0b3b8c]">
                      {cert.id}
                    </td>
                    <td className="p-3.5 font-semibold text-slate-900">
                      {cert.studentName}
                    </td>
                    <td className="p-3.5 font-mono text-xs text-slate-600">
                      {cert.cin}
                    </td>
                    <td className="p-3.5 max-w-[220px] truncate text-slate-700">
                      <span className="inline-block px-2 py-0.5 text-xs font-semibold bg-blue-50 text-blue-800 rounded mr-1">
                        {cert.level}
                      </span>
                      {cert.courseTitle}
                    </td>
                    <td className="p-3.5 font-medium text-slate-800">
                      {cert.totalHours} h
                    </td>
                    <td className="p-3.5 text-xs text-slate-500">
                      {cert.issueDate}
                    </td>
                    <td className="p-3.5 text-center">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3" />
                        {cert.status}
                      </span>
                    </td>
                    <td className="p-3.5 text-right">
                      <button
                        onClick={() => setSelectedCert(cert)}
                        className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-[#0b3b8c] text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        Voir / Imprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: GENERATE NEW CERTIFICATE */}
      {activeTab === 'issue' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm max-w-3xl mx-auto">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-4 mb-6">
            <div className="p-2.5 bg-blue-50 text-[#0b3b8c] rounded-xl">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Générateur d'Attestation de Formation
              </h3>
              <p className="text-slate-500 text-xs mt-0.5">
                Remplissez le formulaire ci-dessous pour délivrer un document A4 certifié avec QR Code.
              </p>
            </div>
          </div>

          <form onSubmit={handleIssueSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nom et Prénom de l'étudiant *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex. Karim El Idrissi"
                  value={formData.studentName}
                  onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0b3b8c]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  N° Carte Nationale CIN / CNE *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex. I794012"
                  value={formData.cin}
                  onChange={(e) => setFormData({ ...formData, cin: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#0b3b8c]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Date de naissance
                </label>
                <input
                  type="text"
                  placeholder="JJ/MM/AAAA"
                  value={formData.birthDate}
                  onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0b3b8c]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Lieu de naissance
                </label>
                <input
                  type="text"
                  value={formData.birthPlace}
                  onChange={(e) => setFormData({ ...formData, birthPlace: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0b3b8c]"
                />
              </div>
            </div>

            <div className="border-t border-slate-200 pt-4 mt-4 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Intitulé officiel de la formation *
                </label>
                <input
                  type="text"
                  required
                  value={formData.courseTitle}
                  onChange={(e) => setFormData({ ...formData, courseTitle: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0b3b8c]"
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Langue
                  </label>
                  <select
                    value={formData.language}
                    onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0b3b8c]"
                  >
                    <option value="Italien">Italien</option>
                    <option value="Français">Français</option>
                    <option value="Anglais">Anglais</option>
                    <option value="Allemand">Allemand</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Niveau
                  </label>
                  <select
                    value={formData.level}
                    onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0b3b8c]"
                  >
                    <option value="A1">A1</option>
                    <option value="A2">A2</option>
                    <option value="B1">B1</option>
                    <option value="B2">B2</option>
                    <option value="C1">C1</option>
                    <option value="C2">C2</option>
                    <option value="1BAC">1BAC (Français)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Heures
                  </label>
                  <input
                    type="number"
                    value={formData.totalHours}
                    onChange={(e) => setFormData({ ...formData, totalHours: Number(e.target.value) })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0b3b8c]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mention
                  </label>
                  <select
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0b3b8c]"
                  >
                    <option value="Excellent">Excellent</option>
                    <option value="Très Bien">Très Bien</option>
                    <option value="Bien">Bien</option>
                    <option value="Assez Bien">Assez Bien</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-200">
              <button
                type="submit"
                className="flex items-center gap-2 bg-[#0b3b8c] hover:bg-blue-800 text-white font-bold text-sm px-6 py-2.5 rounded-xl shadow-md transition-all cursor-pointer"
              >
                <Award className="w-4 h-4" />
                Générer & Délivrer l'Attestation
              </button>
            </div>
          </form>
        </div>
      )}

      {/* TAB 3: VERIFY PORTAL */}
      {activeTab === 'verify' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm max-w-3xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="inline-flex p-3 bg-red-50 text-red-600 rounded-2xl mb-3">
              <QrCode className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-[#0b3b8c] tracking-tight">
              Vérification d'Authentification de Certificat
            </h3>
            <p className="text-slate-600 text-sm mt-1">
              Entrez le numéro d'attestation ou le CIN de l'étudiant pour contrôler sa validité au registre officiel d'Academie MY YAGO SCHOOL PRIVE.
            </p>
          </div>

          <div className="flex gap-2 max-w-md mx-auto mb-8">
            <input
              type="text"
              placeholder="Ex. YG-2026-0892 ou CIN"
              value={verifyIdInput}
              onChange={(e) => setVerifyIdInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handlePerformVerify(verifyIdInput)}
              className="flex-grow px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#0b3b8c]"
            />
            <button
              onClick={() => handlePerformVerify(verifyIdInput)}
              className="bg-[#0b3b8c] hover:bg-blue-800 text-white font-bold text-sm px-5 py-3 rounded-xl transition-all cursor-pointer"
            >
              Vérifier
            </button>
          </div>

          {verifiedCertResult && (
            <div className="bg-emerald-50 border-2 border-emerald-500 rounded-2xl p-6 text-slate-800 animate-fadeIn">
              <div className="flex items-center gap-3 border-b border-emerald-200 pb-4 mb-4">
                <ShieldCheck className="w-8 h-8 text-emerald-600" />
                <div>
                  <div className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
                    DOCUMENT AUTHENTIQUE ET ENREGISTRÉ
                  </div>
                  <div className="text-lg font-black text-slate-900">
                    Académie MY YAGO SCHOOL PRIVE
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-sm font-sans">
                <div className="grid grid-cols-2 gap-2">
                  <span className="text-slate-500">N° d'Attestation :</span>
                  <span className="font-mono font-bold text-slate-900">{verifiedCertResult.id}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span className="text-slate-500">Titulaire :</span>
                  <span className="font-bold text-[#0b3b8c]">{verifiedCertResult.studentName}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span className="text-slate-500">CIN :</span>
                  <span className="font-mono font-medium">{verifiedCertResult.cin}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span className="text-slate-500">Formation Suivie :</span>
                  <span className="font-semibold text-slate-900">{verifiedCertResult.courseTitle}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span className="text-slate-500">Volume Horaire :</span>
                  <span>{verifiedCertResult.totalHours} Heures</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span className="text-slate-500">Mention Obtenue :</span>
                  <span className="font-bold text-emerald-700">{verifiedCertResult.grade}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span className="text-slate-500">Date d'Émission :</span>
                  <span>{verifiedCertResult.issueDate}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-emerald-200 flex justify-end">
                <button
                  onClick={() => setSelectedCert(verifiedCertResult)}
                  className="flex items-center gap-2 bg-[#0b3b8c] hover:bg-blue-800 text-white font-semibold text-xs px-4 py-2 rounded-xl shadow cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  Afficher l'Attestation A4 Officielle
                </button>
              </div>
            </div>
          )}

          {verifyError && (
            <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-6 text-center text-red-700">
              <h4 className="font-bold text-base">Aucun certificat trouvé</h4>
              <p className="text-xs mt-1 text-slate-600">
                Le numéro ou identifiant renseigné ne correspond à aucune attestation active au registre de YAGO SCHOOL.
              </p>
            </div>
          )}
        </div>
      )}

      {/* TAB 4: STUDENTS LIST */}
      {activeTab === 'students' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-4">
            Registre des Étudiants et Suivi des Cursus
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certificates.map((student) => (
              <div key={student.cin} className="border border-slate-200 rounded-xl p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div>
                  <div className="font-bold text-slate-900">{student.studentName}</div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    CIN: <span className="font-mono">{student.cin}</span> • Lieu: {student.birthPlace}
                  </div>
                  <div className="text-xs text-[#0b3b8c] font-semibold mt-1">
                    {student.courseTitle} ({student.level})
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    Certifié
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Full Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="relative w-full max-w-4xl my-8">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute -top-12 right-0 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <CertificateDocument certificate={selectedCert} />
          </div>
        </div>
      )}
    </div>
  );
}

import type { CertificateData } from './types';
import YagoLogo from '../ui/YagoLogo';
import QRCodeSVG from './QRCodeSVG';
import { ShieldCheck, Award, Printer, CheckCircle2 } from 'lucide-react';

interface CertificateDocumentProps {
  certificate: CertificateData;
  onPrint?: () => void;
  showActions?: boolean;
}

export default function CertificateDocument({
  certificate,
  onPrint,
  showActions = true
}: CertificateDocumentProps) {
  const verifyUrl = `${window.location.origin}/certificates?verify=${certificate.id}`;

  const handlePrintClick = () => {
    if (onPrint) {
      onPrint();
    } else {
      window.print();
    }
  };

  return (
    <div className="flex flex-col items-center w-full my-4">
      {/* Action Bar (No-print) */}
      {showActions && (
        <div className="no-print flex flex-wrap items-center justify-between w-full max-w-4xl bg-slate-900 text-white p-4 rounded-t-xl gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-400 text-xs font-semibold px-2.5 py-1 rounded-full border border-emerald-500/30">
              <ShieldCheck className="w-4 h-4" />
              {certificate.status}
            </span>
            <span className="text-sm font-mono text-slate-300">
              Ref: <strong className="text-white">{certificate.id}</strong>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrintClick}
              className="flex items-center gap-2 bg-[#0b3b8c] hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shadow-sm cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              Imprimer / PDF
            </button>
          </div>
        </div>
      )}

      {/* Printable Certificate Frame */}
      <div className="printable-certificate relative w-full max-w-4xl bg-white text-slate-900 p-8 sm:p-12 shadow-2xl border-4 border-[#0b3b8c] rounded-b-xl overflow-hidden font-serif">
        {/* Double Inner Frame Border */}
        <div className="border-2 border-red-600/70 p-6 sm:p-8 h-full relative isolate">
          {/* Subtle Background Watermark Logo */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none select-none">
            <YagoLogo size="lg" showSubtitle={false} className="scale-[3]" />
          </div>

          {/* Top Header Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between border-b-2 border-slate-200 pb-6 gap-4">
            {/* Left Header: Legal Name */}
            <div className="text-center sm:text-left font-sans">
              <div className="text-xs font-bold text-red-600 tracking-wider uppercase">Royaume du Maroc</div>
              <div className="text-sm font-black text-[#0b3b8c] tracking-tight mt-0.5">
                ACADEMIE MY YAGO SCHOOL PRIVE
              </div>
              <div className="text-[11px] text-slate-500">
                Centre de langues et de formations en cours de soutien
              </div>
            </div>

            {/* Center Header: Official Emblem */}
            <div className="flex flex-col items-center">
              <YagoLogo size="md" showSubtitle={false} />
            </div>

            {/* Right Header: Administrative Identifiers */}
            <div className="text-center sm:text-right font-sans text-xs text-slate-600">
              <div className="font-semibold text-slate-800">Beni Mellal, Maroc</div>
              <div>IF: <span className="font-mono font-medium">53976503</span></div>
              <div>ICE: <span className="font-mono font-medium">003362556000078</span></div>
            </div>
          </div>

          {/* Certificate Title Header */}
          <div className="text-center my-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-700 text-xs font-sans font-bold uppercase tracking-widest rounded-full border border-red-200 mb-2">
              <Award className="w-3.5 h-3.5" />
              Document Officiel A4
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#0b3b8c] tracking-tight uppercase font-serif">
              ATTESTATION DE FORMATION
            </h1>
            <div className="text-xs font-mono text-slate-500 mt-1">
              N° d'Attestation : <strong className="text-slate-900">{certificate.id}</strong>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-[#0b3b8c] via-red-600 to-[#0b3b8c] mx-auto mt-3 rounded-full" />
          </div>

          {/* Certificate Attestation Body */}
          <div className="text-center sm:text-justify max-w-2xl mx-auto space-y-4 text-base leading-relaxed text-slate-800 my-6 font-serif">
            <p className="text-center italic text-slate-600">
              Le Directeur du Centre de langues et de formations en cours de soutien{' '}
              <strong className="text-[#0b3b8c] font-sans font-semibold">Academie MY YAGO SCHOOL PRIVE</strong> atteste par la présente que :
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center my-4">
              <div className="text-2xl font-bold text-[#0b3b8c] font-sans">
                {certificate.studentName}
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-xs text-slate-600 mt-2 font-sans">
                <span>CIN / CNE : <strong className="text-slate-900 font-mono">{certificate.cin}</strong></span>
                <span>Né(e) le : <strong className="text-slate-900">{certificate.birthDate}</strong> à <strong className="text-slate-900">{certificate.birthPlace}</strong></span>
              </div>
            </div>

            <p className="text-center">
              A suivi avec succès le programme de formation professionnelle dans le module :
            </p>

            <div className="text-center font-bold text-xl text-red-600 font-sans tracking-wide">
              « {certificate.courseTitle} »
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs font-sans mt-4 bg-blue-50/50 p-3 rounded-lg border border-blue-100">
              <div>
                <span className="text-slate-500 block">Niveau</span>
                <span className="font-bold text-[#0b3b8c] text-sm">{certificate.level}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Volume Horaire</span>
                <span className="font-bold text-slate-900 text-sm">{certificate.totalHours} Heures</span>
              </div>
              <div>
                <span className="text-slate-500 block">Période</span>
                <span className="font-semibold text-slate-900 text-[11px]">{certificate.startDate} - {certificate.endDate}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Mention</span>
                <span className="font-bold text-emerald-700 text-sm">{certificate.grade}</span>
              </div>
            </div>

            <p className="text-center text-xs text-slate-500 italic mt-4">
              En foi de quoi, la présente attestation lui est délivrée pour servir et valoir ce que de droit.
            </p>
          </div>

          {/* Footer Seals & Verification Block */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-slate-200 gap-6 mt-8 font-sans">
            {/* QR Code Authenticity Verification Box */}
            <div className="flex items-center gap-3">
              <QRCodeSVG value={verifyUrl} size={90} />
              <div className="text-left text-[11px] text-slate-600 max-w-[160px]">
                <div className="flex items-center gap-1 font-bold text-[#0b3b8c]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Code QR Authentique
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">
                  Scannez pour vérifier au registre de l'Académie MY YAGO SCHOOL PRIVE.
                </div>
                <div className="text-[9px] font-mono text-slate-400 mt-1 truncate">
                  Hash: {certificate.verificationHash.slice(0, 12)}
                </div>
              </div>
            </div>

            {/* Official Stamp Graphic Simulation */}
            <div className="relative w-28 h-28 flex items-center justify-center opacity-85 pointer-events-none select-none">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#0b3b8c] animate-pulse" />
              <div className="w-24 h-24 rounded-full border-2 border-[#0b3b8c] flex flex-col items-center justify-center text-[8px] font-black text-[#0b3b8c] text-center p-1 uppercase leading-tight bg-blue-50/20">
                <span>★ ACADEMIE ★</span>
                <span className="text-[9px] text-red-600 font-bold">MY YAGO SCHOOL</span>
                <span>PRIVE</span>
                <span className="text-[7px] text-slate-500">BENI MELLAL</span>
              </div>
            </div>

            {/* Signature Block */}
            <div className="text-center sm:text-right text-xs">
              <div className="text-slate-600">
                Fait à <strong className="text-slate-900">Beni Mellal</strong>, le <span className="font-mono">{certificate.issueDate}</span>
              </div>
              <div className="font-bold text-[#0b3b8c] mt-2">
                Le Directeur du Centre
              </div>
              <div className="font-serif italic text-base text-slate-800 font-bold mt-3">
                {certificate.directorName}
              </div>
              <div className="text-[10px] text-slate-400 mt-1">
                Cachet et signature de l'établissement
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

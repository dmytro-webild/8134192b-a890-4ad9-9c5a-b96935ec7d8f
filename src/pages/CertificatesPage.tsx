import { useSearchParams } from 'react-router-dom';
import CertificateManager from '../components/certificate/CertificateManager';
import { Award } from 'lucide-react';

export default function CertificatesPage() {
  const [searchParams] = useSearchParams();
  const verifyId = searchParams.get('verify');

  return (
    <div className="space-y-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#0b3b8c] text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <Award className="w-4 h-4 text-white" />
              Plateforme Officielle Académie MY YAGO SCHOOL PRIVE
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              Gestionnaire d'Attestations & Authentification QR
            </h1>
            <p className="text-blue-100 text-base leading-relaxed">
              Générez des attestations officielles A4 conformes aux spécifications de YAGO SCHOOL ou vérifiez la validité d'un document en temps réel.
            </p>
          </div>
        </div>
      </div>

      <CertificateManager initialVerifyId={verifyId} />
    </div>
  );
}

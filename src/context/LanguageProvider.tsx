import { useState, useEffect, type ReactNode } from 'react';
import { LanguageContext, type Language } from './LanguageContext';

const translations: Record<Language, Record<string, string>> = {
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.languages': 'Langues',
    'nav.training': 'Formations',
    'nav.gallery': 'Galerie',
    'nav.certificates': 'Attestations & QR',
    'nav.contact': 'Contact',
    'nav.admin': 'Espace Admin',
    'brand.subtitle': 'Centre de langues et de formations en cours de soutien',
    'brand.legal': 'Academie MY YAGO SCHOOL PRIVE',
    'action.issue_cert': 'Créer une attestation',
    'action.verify_cert': 'Vérifier un certificat',
    'action.contact_us': 'Nous contacter',
    'action.print': 'Imprimer / Exporter PDF',
    'action.download': 'Télécharger',
    'action.search': 'Rechercher...',
    'action.filter': 'Filtrer par niveau',
    'label.student': 'Étudiant',
    'label.cne': 'CIN / Identifiant',
    'label.course': 'Formation',
    'label.hours': 'Volume horaire',
    'label.period': 'Période',
    'label.grade': 'Mention',
    'label.date': 'Date de délivrance',
    'label.status': 'Statut',
    'label.verified': 'Authentique & Vérifié',
    'label.location': 'Beni Mellal, Maroc',
    'label.address': 'IMB KARIMA 2 OUM DHAR 2 BM, BENI MELLAL, MOROCCO',
    'label.phone': '07 77 48 62 32 / 06 06 31 41 34',
    'label.legal_ids': 'IF: 53976503 | ICE: 003362556000078'
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.languages': 'اللغات',
    'nav.training': 'برامج التدريب',
    'nav.gallery': 'معرض الصور',
    'nav.certificates': 'الشهادات والتحقق',
    'nav.contact': 'تواصل معنا',
    'nav.admin': 'لوحة الإدارة',
    'brand.subtitle': 'مركز اللغات والتكوين والدعم المدرسي',
    'brand.legal': 'أكاديمية مي ياغو سكول الخاصة',
    'action.issue_cert': 'إنشاء شهادة جديدة',
    'action.verify_cert': 'التحقق من الشهادة',
    'action.contact_us': 'تواصل معنا',
    'action.print': 'طباعة / تصدير PDF',
    'action.download': 'تحميل',
    'action.search': 'بحث...',
    'action.filter': 'تصفية حسب المستوى',
    'label.student': 'الطالب',
    'label.cne': 'رقم البطاقة الوطنية / المعرف',
    'label.course': 'الدورة التدريبية',
    'label.hours': 'عدد الساعات',
    'label.period': 'الفترة',
    'label.grade': 'التقدير',
    'label.date': 'تاريخ الإصدار',
    'label.status': 'الحالة',
    'label.verified': 'شهادة موثوقة ومعتمدة',
    'label.location': 'بني ملال، المغرب',
    'label.address': 'عمارة كريمة 2 أم ضار 2 بني ملال، المغرب',
    'label.phone': '07 77 48 62 32 / 06 06 31 41 34',
    'label.legal_ids': 'المعرف الضريبي IF: 53976503 | ICE: 003362556000078'
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('fr');
  const isRtl = lang === 'ar';

  useEffect(() => {
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
  }, [lang, isRtl]);

  const t = (key: string): string => {
    return translations[lang]?.[key] || translations.fr[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, isRtl, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

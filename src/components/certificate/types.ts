export interface CertificateData {
  id: string; // e.g. 'YG-2026-0892'
  studentName: string;
  cin: string;
  birthDate: string;
  birthPlace: string;
  courseTitle: string;
  language: string;
  level: string; // 'A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'Soutien BAC'
  totalHours: number;
  startDate: string;
  endDate: string;
  issueDate: string;
  grade: string; // 'Très Bien', 'Bien', 'Assez Bien', 'Excellent'
  directorName: string;
  verificationHash: string;
  status: 'VÉRIFIÉ' | 'EN ATTENTE' | 'ARCHIVÉ';
}

export const SAMPLE_CERTIFICATES: CertificateData[] = [
  {
    id: 'YG-2026-0892',
    studentName: 'Aymane El Mansouri',
    cin: 'I748392',
    birthDate: '14/05/2002',
    birthPlace: 'Beni Mellal',
    courseTitle: 'Langue Italienne - Formation Complète Intensif',
    language: 'Italien',
    level: 'B2',
    totalHours: 240,
    startDate: '10/09/2025',
    endDate: '15/02/2026',
    issueDate: '20/02/2026',
    grade: 'Très Bien',
    directorName: 'Prof. Marouane',
    verificationHash: '9a8f2e7c4b1d6e3a890f',
    status: 'VÉRIFIÉ'
  },
  {
    id: 'YG-2026-0104',
    studentName: 'Fatima Zohra Chraibi',
    cin: 'WA298104',
    birthDate: '28/11/2003',
    birthPlace: 'Kasba Tadla',
    courseTitle: 'Cours de Soutien & Préparation Régional BAC Français',
    language: 'Français',
    level: '1BAC',
    totalHours: 120,
    startDate: '01/10/2025',
    endDate: '30/01/2026',
    issueDate: '05/02/2026',
    grade: 'Excellent',
    directorName: 'Prof. Marouane',
    verificationHash: '3f7b9c1d2e5a8f0b4c6e',
    status: 'VÉRIFIÉ'
  },
  {
    id: 'YG-2026-0341',
    studentName: 'Youssef Bennani',
    cin: 'BK619402',
    birthDate: '09/03/2001',
    birthPlace: 'Beni Mellal',
    courseTitle: 'Langue Anglaise - Communication & Niveau Avancé',
    language: 'Anglais',
    level: 'C1',
    totalHours: 180,
    startDate: '15/08/2025',
    endDate: '10/01/2026',
    issueDate: '15/01/2026',
    grade: 'Très Bien',
    directorName: 'Prof. Marouane',
    verificationHash: '1d4e7f9a2b5c8e0f3b6a',
    status: 'VÉRIFIÉ'
  },
  {
    id: 'YG-2026-0567',
    studentName: 'Salma El Amrani',
    cin: 'BH452091',
    birthDate: '19/07/2004',
    birthPlace: 'Fkih Ben Salah',
    courseTitle: 'Langue Allemande - Niveau A2 Zertiﬁkat',
    language: 'Allemand',
    level: 'A2',
    totalHours: 150,
    startDate: '01/11/2025',
    endDate: '28/02/2026',
    issueDate: '01/03/2026',
    grade: 'Bien',
    directorName: 'Prof. Marouane',
    verificationHash: '8e2b5c9f1a4d7e0b3c6f',
    status: 'VÉRIFIÉ'
  }
];

export interface Route {
  path: string;
  label: string;
  pageFile: string;
}

export const routes: Route[] = [
  { path: '/', label: 'Accueil', pageFile: 'HomePage' },
  { path: '/about', label: 'À propos', pageFile: 'AboutPage' },
  { path: '/languages', label: 'Langues', pageFile: 'LanguagesPage' },
  { path: '/training', label: 'Formations', pageFile: 'TrainingPage' },
  { path: '/gallery', label: 'Galerie', pageFile: 'GalleryPage' },
  { path: '/certificates', label: 'Attestations & QR', pageFile: 'CertificatesPage' },
  { path: '/contact', label: 'Contact', pageFile: 'ContactPage' },
];

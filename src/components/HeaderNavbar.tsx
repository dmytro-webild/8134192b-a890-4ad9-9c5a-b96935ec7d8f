import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import YagoLogo from './ui/YagoLogo';
import { useLanguage } from '../context/useLanguage';
import { Menu, X, Award, Phone } from 'lucide-react';

export default function HeaderNavbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/languages', label: t('nav.languages') },
    { path: '/training', label: t('nav.training') },
    { path: '/gallery', label: t('nav.gallery') },
    { path: '/certificates', label: t('nav.certificates') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200' : 'bg-white/90 backdrop-blur-sm py-4 border-b border-slate-100'
    }`}>
      {/* Top Banner Stripe for Administrative Legal Info & Phones */}
      <div className="bg-[#0b3b8c] text-white text-[11px] py-1 px-4 font-sans">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="font-bold uppercase tracking-wider text-red-400">Royaume du Maroc</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="hidden sm:inline font-mono">Academie MY YAGO SCHOOL PRIVE</span>
            <span className="text-slate-300">•</span>
            <span className="font-mono text-slate-200">IF: 53976503 | ICE: 003362556000078</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:0777486232" className="flex items-center gap-1 hover:text-red-300 transition-colors">
              <Phone className="w-3 h-3 text-red-400" />
              <span>07 77 48 62 32</span>
            </a>
            <a href="tel:0606314134" className="hidden md:flex items-center gap-1 hover:text-red-300 transition-colors">
              <span>06 06 31 41 34</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4 mt-1">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <YagoLogo size="md" showSubtitle={true} />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-blue-50 text-[#0b3b8c] font-bold'
                    : 'text-slate-700 hover:text-[#0b3b8c] hover:bg-slate-100'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Language Switcher & Quick CTA */}
        <div className="flex items-center gap-3">
          {/* FR / AR Toggle */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-bold">
            <button
              onClick={() => setLang('fr')}
              className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                lang === 'fr' ? 'bg-[#0b3b8c] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLang('ar')}
              className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                lang === 'ar' ? 'bg-[#0b3b8c] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              العربية
            </button>
          </div>

          <Link
            to="/certificates"
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#0b3b8c] hover:bg-blue-800 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-sm transition-all"
          >
            <Award className="w-4 h-4 text-red-400" />
            <span>{t('action.issue_cert')}</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2 shadow-xl animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-sm font-semibold ${
                location.pathname === link.path
                  ? 'bg-blue-50 text-[#0b3b8c] font-bold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <Link
              to="/certificates"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#0b3b8c] text-white font-bold text-sm py-2.5 rounded-xl shadow-sm"
            >
              <Award className="w-4 h-4 text-red-400" />
              <span>{t('action.issue_cert')}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

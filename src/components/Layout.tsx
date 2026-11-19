import { Outlet } from "react-router-dom";
import NavbarFloatingPill from "@/components/navbars/NavbarFloatingPill";
import FooterTrayWordmark from "@/components/sections/footer/FooterTrayWordmark";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="chip" data-card="white" data-pattern="none">
      <header data-webild-section="Header">
        <NavbarFloatingPill
          brand="YAGO SCHOOL"
          navItems={[
            {
              name: "Accueil",
              href: "#home"
            },
            {
              name: "Plateforme",
              href: "#about"
            },
            {
              name: "Modules",
              href: "#services"
            },
            {
              name: "Programmes",
              href: "#pricing"
            },
            {
              name: "FAQ",
              href: "#faq-tray-accordion-1"
            }
          ]}
          cta={{
            text: "Contactez-nous",
            href: "#contact-dark-form-card"
          }}
          introDelay={1.2}
        />
      </header>
      <main className="flex-grow" data-button="chip" data-card="white" data-pattern="none">
        <Outlet />
      </main>
      <footer data-webild-section="Footer" data-section="footer">
        <FooterTrayWordmark
          brand="YAGO SCHOOL"
          wordmark="YAGO SCHOOL"
          columns={[
            {
              title: "Formations",
              links: [
                {
                  text: "Italien A1 - C2",
                  href: "#pricing"
                },
                {
                  text: "Programmes certifiants",
                  href: "#pricing"
                },
                {
                  text: "Cours de soutien",
                  href: "#services"
                },
                {
                  text: "Attestation officielle",
                  href: "#about"
                }
              ]
            },
            {
              title: "Centre",
              links: [
                {
                  text: "À propos",
                  href: "#about"
                },
                {
                  text: "Gestion académique",
                  href: "#services"
                },
                {
                  text: "Aperçu des certificats",
                  href: "#gallery-tilt-cards"
                }
              ]
            },
            {
              title: "Support & FAQ",
              links: [
                {
                  text: "Vérification QR",
                  href: "#services"
                },
                {
                  text: "Foire aux questions",
                  href: "#faq-tray-accordion-1"
                },
                {
                  text: "Assistance administrative",
                  href: "#contact-dark-form-card"
                }
              ]
            },
            {
              title: "Contact",
              links: [
                {
                  text: "contact@yagoschool.ma",
                  href: "mailto:contact@yagoschool.ma"
                },
                {
                  text: "Beni Mellal, Maroc",
                  href: "#contact-dark-form-card"
                },
                {
                  text: "Nous contacter",
                  href: "#contact-dark-form-card"
                }
              ]
            }
          ]}
          copyright="© 2026 YAGO SCHOOL. Tous droits réservés."
          topText="Haut de page"
        />
      </footer>
    </div>
  );
}

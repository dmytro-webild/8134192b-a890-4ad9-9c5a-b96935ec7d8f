import HeroBoardFrame from "@/components/sections/hero/HeroBoardFrame";
import AboutStatementIconRow from "@/components/sections/about/AboutStatementIconRow";
import FeaturesBentoWidgets from "@/components/sections/features/FeaturesBentoWidgets";
import GalleryTiltCards from "@/components/sections/gallery/GalleryTiltCards";
import PricingTrayPlans from "@/components/sections/pricing/PricingTrayPlans";
import FaqTrayAccordion from "@/components/sections/faq/FaqTrayAccordion";
import ContactDarkFormCard from "@/components/sections/contact/ContactDarkFormCard";
import ScrollToneBackdrop from "@/components/kit/ScrollToneBackdrop";
import LoaderChipFill from "@/components/loaders/LoaderChipFill";

export default function HomePage() {
  return (
    <>
      <ScrollToneBackdrop

      />

      <LoaderChipFill
        label="YAGO SCHOOL"
      />

      <div id="home" data-webild-section="HeroBoardFrame" data-webild-section-id="HeroBoardFrame-1" data-section="home">
        <HeroBoardFrame
          className="bg-transparent"
          tag="Gestion académique YAGO"
          title="Certifiez les compétences de vos étudiants"
          description="Plateforme intégrée de YAGO SCHOOL pour gérer les cursus, émettre des attestations officielles et vérifier leur authenticité."
          primaryButton={{
            text: "Créer une attestation",
            href: "#about"
          }}
          imageSrc="https://img.b2bpic.net/free-photo/top-view-red-apple-mouse-laptop-pen-eyeglasses-blank-white-paper-wooden-desk_23-2148042072.jpg"
          imageAlt="desk with laptop and apple"
          introDelay={1.2}
          kpis={[
            {
              label: "Étudiants inscrits",
              value: "1 200",
              delta: "+15%",
              trend: [
                1000,
                1050,
                1100,
                1140,
                1180,
                1200
              ]
            },
            {
              label: "Certificats émis",
              value: "5 000",
              delta: "+24%"
            },
            {
              label: "Traçabilité QR",
              value: "100%",
              trend: [
                99,
                100,
                100,
                100,
                100,
                100
              ]
            }
          ]}
        />
      </div>

      <div id="about" data-webild-section="AboutStatementIconRow" data-webild-section-id="AboutStatementIconRow-1" data-section="about" data-tone="card">
        <AboutStatementIconRow
          className="bg-transparent"
          title="Une gestion académique rigoureuse et sécurisée pour centraliser les données de vos étudiants et vos programmes."
          items={[
            {
              icon: "graduation-cap",
              title: "Fichiers étudiants",
              description: "Centralisation des CIN, coordonnées et historiques d'apprentissage de chaque élève."
            },
            {
              icon: "award",
              title: "Attestations A4",
              description: "Génération d'attestations certifiées selon le modèle officiel YAGO SCHOOL."
            },
            {
              icon: "qr-code",
              title: "Vérification QR",
              description: "Contrôle immédiat de la validité d'un diplôme par simple scan du code."
            }
          ]}
        />
      </div>

      <div id="services" data-webild-section="FeaturesBentoWidgets" data-webild-section-id="FeaturesBentoWidgets-1" data-section="services" data-tone="deep" data-gallery>
        <FeaturesBentoWidgets
          className="bg-transparent"
          tag="Modules principaux"
          title="Conçu pour la gestion quotidienne de vos formations"
          description="Pilotez vos programmes et vos étudiants avec des outils adaptés aux exigences académiques."
          backgroundImageSrc="https://img.b2bpic.net/free-photo/close-up-view-notebook-desk_23-2148304861.jpg"
          items={[
            {
              tag: "Langues & Cursus",
              title: "Niveaux et cursus",
              description: "Suivez les parcours en italien, anglais, français ou allemand du niveau A1 à C2.",
              tags: [
                "Italien A1-C2",
                "Anglais B1-B2",
                "Français",
                "Allemand"
              ]
            },
            {
              title: "Certificats émis",
              description: "Attestations de formation délivrées et authentifiées avec succès.",
              value: "5000+",
              valueLabel: "attestations générées"
            },
            {
              title: "Validation par QR Code",
              description: "Vérification instantanée de l'authenticité de l'attestation en ligne.",
              imageSrc: "https://img.b2bpic.net/free-photo/cyber-crime-unfolds-as-spy-is-targeting-network-systems-with-code_482257-126436.jpg",
              imageAlt: "Cyber crime unfolds as a spy is targeting network systems with code"
            },
            {
              title: "Dossiers d'inscriptions",
              description: "Gestion complète du profil et des informations de chaque étudiant.",
              rows: [
                {
                  label: "Identifiant unique",
                  value: "Automatique"
                },
                {
                  label: "Suivi des heures",
                  value: "En direct"
                },
                {
                  label: "Historique documents",
                  value: "Archivé"
                }
              ]
            },
            {
              title: "Support pédagogique",
              description: "Suivi personnalisé pour les centres de formation et de soutien.",
              imageSrc: "https://img.b2bpic.net/free-photo/woman-attending-online-class_23-2148854916.jpg",
              imageAlt: "Woman attending online class"
            },
            {
              title: "Traçabilité",
              description: "Contrôle d'authenticité garanti sur chaque document produit.",
              value: "100%",
              valueLabel: "authenticité vérifiée"
            }
          ]}
        />
      </div>

      <div id="gallery-tilt-cards" data-webild-section="GalleryTiltCards" data-webild-section-id="GalleryTiltCards-1" data-section="gallery-tilt-cards">
        <GalleryTiltCards
          tag="Nos modèles"
          title="Aperçu des attestations et certificats certifiés"
          description="Visualisez les formats officiels délivrés par YAGO SCHOOL avec vérification par QR code."
          items={[
            {
              title: "Attestato di Formazione Italiano",
              tag: "Langue Italienne",
              date: "Février 2026",
              description: "Document officiel A4 avec bordure double bleue et informations de formation complètes.",
              href: "#pricing",
              imageSrc: "https://img.b2bpic.net/free-photo/empty-modern-office-business-entrepreneur-with-laptop_482257-91248.jpg",
              imageAlt: "yellow award ribbon icon"
            },
            {
              title: "Certificat de Formation Anglaise",
              tag: "Langue Anglaise",
              date: "Janvier 2026",
              description: "Attestation certifiant les heures de cours et le niveau académique atteint selon le CECRL.",
              href: "#pricing",
              imageSrc: "https://img.b2bpic.net/free-photo/close-up-man-suit-holding-contract_23-2148230735.jpg",
              imageAlt: "laptop displaying data on a desk"
            },
            {
              title: "Attestation de Niveau Allemand",
              tag: "Langue Allemande",
              date: "Mars 2026",
              description: "Document sécurisé comportant le sceau officiel et le code QR d'authenticité.",
              href: "#pricing",
              imageSrc: "https://img.b2bpic.net/free-photo/top-view-laptop-with-diploma_23-2148756550.jpg",
              imageAlt: "diploma on laptop"
            },
            {
              title: "Certificat de Soutien Scolaire",
              tag: "Soutien Scolaire",
              date: "Mars 2026",
              description: "Bilan complet des compétences acquises durant le parcours d'accompagnement à Beni Mellal.",
              href: "#pricing",
              imageSrc: "https://img.b2bpic.net/free-photo/workplace-with-books-stationery-tablet_23-2147852035.jpg",
              imageAlt: "Workplace with books stationery and tablet"
            }
          ]}
          linkLabel="Voir nos programmes"
          ariaLabel="Galerie des attestations certifiées YAGO SCHOOL"
        />
      </div>

      <div id="pricing" data-webild-section="PricingTrayPlans" data-webild-section-id="PricingTrayPlans-1" data-section="pricing">
        <PricingTrayPlans
          tag="Offre de formation"
          title="Cursus certifiants"
          highlight="par niveau"
          description="Un apprentissage structuré adapté au Cadre européen commun de référence pour les langues."
          items={[
            {
              name: "Débutant",
              description: "Acquisition des bases et de la communication élémentaire.",
              price: "A1-A2",
              period: "200h de formation",
              features: [
                "200 heures de cours",
                "Attestation certifiée QR",
                "Support de cours inclus"
              ],
              cta: {
                text: "En savoir plus",
                href: "#contact-dark-form-card"
              }
            },
            {
              name: "Intermédiaire",
              description: "Consolidation de l'expression orale et écrite professionnelle.",
              price: "B1-B2",
              period: "300h de formation",
              highlighted: true,
              includesPrevious: true,
              features: [
                "Inclus le niveau Débutant",
                "300 heures de cours",
                "Attestation certifiée QR",
                "Examens blancs"
              ],
              cta: {
                text: "S'inscrire",
                href: "#contact-dark-form-card"
              }
            },
            {
              name: "Avancé",
              description: "Maîtrise courante pour les études et le travail.",
              price: "C1-C2",
              period: "400h de formation",
              includesPrevious: true,
              features: [
                "Inclus le niveau Intermédiaire",
                "400 heures de cours",
                "Attestation certifiée QR",
                "Entraînement individuel"
              ],
              cta: {
                text: "En savoir plus",
                href: "#contact-dark-form-card"
              }
            }
          ]}
          enterprise={{
            label: "Sur mesure",
            title: "Besoin d'un programme d'entreprise ?",
            description: "Formation personnalisée pour vos équipes avec suivi rigoureux et attestations certifiées.",
            cta: {
              text: "Nous contacter",
              href: "#contact-dark-form-card"
            }
          }}
        />
      </div>

      <div id="faq-tray-accordion-1" data-webild-section="FaqTrayAccordion" data-webild-section-id="FaqTrayAccordion-1" data-section="faq-tray-accordion-1">
        <FaqTrayAccordion
          tag="Questions fréquentes"
          title="Tout savoir sur"
          highlight="YAGO SCHOOL"
          items={[
            {
              title: "Comment s'effectue la vérification d'une attestation ?",
              description: "Il suffit de scanner le QR code au bas du document avec un téléphone pour afficher la fiche de confirmation officielle et vérifier son authenticité en ligne."
            },
            {
              title: "Quelles langues sont enseignées dans le centre ?",
              description: "Nous proposons des programmes complets en italien, anglais, français et allemand pour tous les niveaux allant de A1 jusqu'à C2."
            },
            {
              title: "L'interface prend-elle en compte l'arabe ?",
              description: "Oui, la plateforme supporte une navigation bilingue français et arabe avec un affichage adapté de droite à gauche."
            },
            {
              title: "Comment est attribué l'identifiant de l'étudiant ?",
              description: "L'identifiant étudiant est généré automatiquement dès son inscription dans le système de gestion de l'école."
            },
            {
              title: "Quel est le format d'impression des attestations ?",
              description: "Les attestations sont générées au format A4 portrait, intégrant les bordures de sécurité, le sceau officiel et le QR code de vérification."
            }
          ]}
          help={{
            label: "Assistance",
            title: "Une question sur nos formations ?",
            description: "Sarah Fournier, responsable administrative, répond à toutes vos questions.",
            cta: {
              text: "Contactez-nous",
              href: "#contact-dark-form-card"
            },
            imageSrc: "https://img.b2bpic.net/free-photo/portrait-female-work-having-video-call_23-2148902305.jpg",
            imageAlt: "Portrait female at work having video call"
          }}
        />
      </div>

      <div id="contact-dark-form-card" data-webild-section="ContactDarkFormCard" data-webild-section-id="ContactDarkFormCard-1" data-section="contact-dark-form-card">
        <ContactDarkFormCard
          title="Contactez l'administration de YAGO SCHOOL"
          formTitle="Formulaire de contact"
          fields={{
            name: "Nom et prénom",
            email: "Adresse email",
            company: "Établissement",
            message: "Message ou question"
          }}
          placeholders={{
            name: "Ex. Nicolas Moreau",
            email: "contact@yagoschool.ma",
            company: "Nom de votre entreprise",
            message: "Inscriptions, attestations ou vérification de certificats..."
          }}
          submitText="Envoyer le message"
          successText="Votre message a été transmis à l'équipe YAGO SCHOOL."
          imageSrc="https://img.b2bpic.net/free-photo/high-angle-children-s-desk-setting_23-2149025170.jpg"
          imageAlt="High angle of children's desk setting"
          ariaLabel="Formulaire de contact de YAGO SCHOOL"
        />
      </div>
    </>
  );
}

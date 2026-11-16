import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { label: "Sobre a Empresa", href: "/sobre" },
  { label: "Nossa História", href: "/#nossa-historia" },
  { label: "Tecnologias", href: "/#showcase" },
  { label: "Medical San", href: "/tecnologias/medical-san" },
  { label: "Contato", href: "/#contato" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <Image
              src="/logo-transparente.png"
              alt="AUREN Equipamentos Médicos"
              width={200}
              height={160}
              className={styles.logoImg}
            />
            <p className={styles.tagline}>
              Confiança, excelência e compromisso — em cada tecnologia que entregamos.
            </p>
          </div>

          {/* Nav */}
          <nav className={styles.nav} aria-label="Links do rodapé">
            <ul role="list">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={styles.navLink}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact info */}
          <div className={styles.contact}>
            <p className={styles.contactLabel}>Fale conosco</p>
            <a href="mailto:contato@auren.com.br" className={styles.contactLink} id="footer-email">
              contato@auren.com.br
            </a>
            <a href="https://wa.me/556193322477" className={styles.contactLink} id="footer-phone" target="_blank" rel="noopener noreferrer">
              (61) 9332-2477
            </a>
            <a
              href="https://www.instagram.com/aurenmed/"
              className={styles.contactLink}
              id="footer-instagram"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da AUREN (@aurenmed)"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              @aurenmed
            </a>
          </div>
        </div>

        <div className={styles.divider} aria-hidden="true" />

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {year} AUREN. Todos os direitos reservados.
          </p>
          {/* <p className={styles.legal}>
            CNPJ: 00.000.000/0001-00 &nbsp;|&nbsp; Brasília, DF — Brasil
          </p> */}
        </div>
      </div>
    </footer>
  );
}

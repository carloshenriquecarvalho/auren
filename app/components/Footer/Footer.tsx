import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { label: "Sobre a Empresa", href: "/sobre" },
  { label: "Valores", href: "#valores" },
  { label: "Tecnologias", href: "#tecnologias-medical-san" },
  { label: "Nossa História", href: "#nossa-historia" },
  { label: "Contato", href: "#contato" },
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
              saraseixas1121@gmail.com
            </a>
            <a href="https://wa.me/556193322477" className={styles.contactLink} id="footer-phone">
              (61) 9332-2477
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

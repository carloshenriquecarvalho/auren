"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Sobre a Empresa", href: "/sobre" },
  { label: "Nossa História", href: "#nossa-historia" },
  { label: "Tecnologias", href: "/#showcase" },
  { label: "Medical San", href: "/#marcas" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <nav className={styles.nav} aria-label="Navegação principal">
          <div className={styles.container}>
            {/* Logo */}
            <Link href="/#hero" className={styles.logo} onClick={closeMenu} aria-label="AUREN — início">
              <Image
                src="/logo-fundo-removido-sem-texto.png"
                alt="AUREN Equipamentos Médicos"
                width={300}
                height={240}
                className={styles.logoImg}
                priority
              />
            </Link>

            {/* Desktop links */}
            <ul className={styles.links} role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Actions: Instagram + CTA */}
            <div className={styles.navActions}>
              <a
                href="https://www.instagram.com/aurenmed/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.instagramLink}
                aria-label="Instagram da AUREN (@aurenmed)"
                title="Siga @aurenmed no Instagram"
                id="navbar-instagram"
              >
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* CTA */}
              <Link href="#contato" className={styles.cta} id="navbar-cta">
                Contato
              </Link>
            </div>

            {/* Hamburger */}
            <button
              className={styles.hamburger}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              id="hamburger-btn"
            >
              <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ""}`} />
              <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ""}`} />
              <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ""}`} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-label="Menu de navegação"
      >
        <ul className={styles.drawerLinks} role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={styles.drawerLink} onClick={closeMenu}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="#contato" className={styles.drawerCta} onClick={closeMenu} id="drawer-cta">
              Iniciar uma conversa
            </Link>
          </li>
          <li>
            <a
              href="https://www.instagram.com/aurenmed/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.drawerSocial}
              onClick={closeMenu}
              id="drawer-instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              Instagram @aurenmed
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div className={styles.overlay} onClick={closeMenu} aria-hidden="true" />
      )}
    </>
  );
}

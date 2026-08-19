"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Sobre a Empresa", href: "/sobre" },
  { label: "Nossa História", href: "#historia" },
  { label: "Tecnologias", href: "#showcase" },
  { label: "Nossas Marcas", href: "#marcas" },
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
            <Link href="#hero" className={styles.logo} onClick={closeMenu} aria-label="AUREN — início">
              <Image
                src="/logo-fundo-removido-sem-texto.png"
                alt="AUREN Equipamentos Médicos"
                width={200}
                height={160}
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

            {/* CTA */}
            <Link href="#contato" className={styles.cta} id="navbar-cta">
              Contato
            </Link>

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
        </ul>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div className={styles.overlay} onClick={closeMenu} aria-hidden="true" />
      )}
    </>
  );
}

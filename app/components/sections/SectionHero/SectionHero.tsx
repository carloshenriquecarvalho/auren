"use client";

import { useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import styles from "./SectionHero.module.css";

export default function SectionHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Respeita prefers-reduced-motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf: number;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const COUNT = prefersReduced ? 20 : 55;
    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.3,
      vx: prefersReduced ? 0 : (Math.random() - 0.5) * 0.18,
      vy: prefersReduced ? 0 : (Math.random() - 0.5) * 0.18,
      a: Math.random() * 0.35 + 0.05,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(184, 150, 46, ${p.a})`;
        ctx.fill();
      });
      if (!prefersReduced) raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.13, delayChildren: 0.18 } },
  };
  const up = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.82, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section id="hero" className={styles.hero} aria-label="Proposta de valor AUREN">
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
      <div className={styles.lineTop} aria-hidden="true" />
      <div className={styles.lineBottom} aria-hidden="true" />

      {/* Watermark symbol */}
      <div className={styles.watermark} aria-hidden="true">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80"  cy="100" r="52" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="120" cy="100" r="52" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <line x1="100" y1="72"  x2="100" y2="86"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="100" y1="97"  x2="100" y2="103" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="100" y1="114" x2="100" y2="128" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.span className={`${styles.label} section-label`} variants={up}>
            Tecnologia Médica Premium
          </motion.span>

          {/* Task 2.1 — headline baseada em "equipamentos podem ser encontrados
              em muitos lugares; confiança, não" */}
          <motion.h1 className={styles.headline} variants={up}>
            Equipamentos existem <br />
            em muitos lugares. <br />
            <em>Confiança, não.</em>
          </motion.h1>

          <motion.p className={styles.sub} variants={up}>
            A AUREN opera na interseção entre tecnologia médica de alto padrão
            e parceria de longo prazo. Cada solução que entregamos carrega
            responsabilidade técnica, presença e continuidade — do primeiro
            contato ao suporte continuado.
          </motion.p>

          <motion.div className={styles.goldLine} variants={up} aria-hidden="true" />

          <motion.div className={styles.actions} variants={up}>
            <Link href="#contato" className={styles.ctaPrimary} id="hero-cta-primary">
              Fale com um consultor AUREN
              <span className={styles.ctaArrow} aria-hidden="true">→</span>
            </Link>
            <Link href="#quem-somos" className={styles.ctaSecondary} id="hero-cta-secondary">
              Conhecer a AUREN
            </Link>
          </motion.div>

          <motion.div className={styles.statLine} variants={up} aria-label="Setores atendidos">
            {["Clínicas", "Hospitais", "Redes de Saúde"].map((item, i) => (
              <span key={item} className={styles.statItem}>
                {i > 0 && <span className={styles.statDot} aria-hidden="true" />}
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}

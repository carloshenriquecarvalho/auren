"use client";

import { useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
          <circle cx="80" cy="100" r="52" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="120" cy="100" r="52" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <line x1="100" y1="72" x2="100" y2="86" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="100" y1="97" x2="100" y2="103" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="100" y1="114" x2="100" y2="128" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      <div className={styles.container}>
        {/* Logo — esquerda */}
        <motion.div
          className={styles.heroLogoSide}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <Image
            src="/logo-principal.png"
            alt="Símbolo AUREN"
            width={700}
            height={700}
            className={styles.heroLogo}
            priority
          />
          {/* Logos circulares dos parceiros */}
          <div className={styles.partnerRow} aria-label="Parceiros AUREN">
            <div className={styles.partnerItem} id="hero-parceiro-medical-san">
              <div className={styles.partnerCircle}>
                <Image
                  src="/logo-medical-san.png"
                  alt="Medical San"
                  width={48}
                  height={48}
                  className={styles.partnerImg}
                />
              </div>
              <span className={styles.partnerLabel}>Medical San</span>
            </div>
            <div className={styles.partnerDivider} aria-hidden="true" />
            <div className={styles.partnerItem} id="hero-parceiro-cromatic">
              <div className={styles.partnerCircle}>
                <Image
                  src="/logo-cromatic-1.png"
                  alt="Cromatic"
                  width={48}
                  height={48}
                  className={styles.partnerImg}
                />
              </div>
              <span className={styles.partnerLabel}>Cromatic</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.content}
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className={styles.headline} variants={up}>
            Tecnologias premium para estética
            existem em muitos lugares,
            <em> confiança não.</em>
          </motion.h1>

          <motion.p className={styles.sub} variants={up}>
            A AUREN é especializada na comercialização consultiva de tecnologias
            para estética profissional — com atendimento personalizado, suporte
            técnico e presença contínua, do primeiro contato ao acompanhamento
            de longo prazo.
          </motion.p>

          <motion.div className={styles.goldLine} variants={up} aria-hidden="true" />

          <motion.div className={styles.actions} variants={up}>
            <Link href="#contato" className={styles.ctaPrimary} id="hero-cta-primary">
              Fale com um consultor AUREN
              <span className={styles.ctaArrow} aria-hidden="true">→</span>
            </Link>
            <Link href="#nossa-historia" className={styles.ctaSecondary} id="hero-cta-secondary">
              Nossa história
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}

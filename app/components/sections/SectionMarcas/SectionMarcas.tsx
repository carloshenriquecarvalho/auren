"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import styles from "./SectionMarcas.module.css";

const marcas = [
  {
    id: "medical-san-medica",
    slug: "medical-san",
    nome: "Linha Médica & Alta Performance",
    label: "Laser & Procedimentos Médicos",
    descricao:
      "Plataformas consagradas em precisão cirúrgica, ginecologia e regeneração tecidual profunda. Equipamentos padrão ouro para procedimentos médicos e dermatológicos de alto impacto.",
    tecnologias: ["Hegon — Laser CO₂ Fracionado 10.600nm", "Ptolomeu — RF Robótica Microagulhada", "Velaryan — Laser Diodo Terapêutico Multi-Aplicador"],
    cta: "Conhecer linha médica",
    accent: "linear-gradient(135deg, rgba(184,150,46,0.08) 0%, rgba(184,150,46,0.03) 100%)",
  },
  {
    id: "medical-san-estetica",
    slug: "medical-san",
    nome: "Linha Estética & Corporal Avançada",
    label: "Epilação, Remodelamento & Harmonização",
    descricao:
      "Soluções completas para clínicas estéticas que buscam máxima rentabilidade, versatilidade e segurança clínica em todos os fototipos de pele.",
    tecnologias: ["Hakon — Laser de Epilação 4D (4 Comprimentos de Onda)", "Criodermis 2.0 — Criolipólise de Placas de Grande Área", "Ultramed — Plataformas HIFU e MPT de Alta Precisão"],
    cta: "Conhecer linha estética",
    accent: "linear-gradient(135deg, rgba(184,150,46,0.05) 0%, rgba(184,150,46,0.02) 100%)",
  },
];

const cardV = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.15 },
  }),
};

export default function SectionMarcas() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section id="marcas" ref={ref} className={styles.section} aria-labelledby="marcas-title">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.labelRow}>
            <span className={styles.divider} aria-hidden="true" />
            <span className="section-label">Marca Exclusiva</span>
          </div>
          <h2 id="marcas-title" className={styles.title}>
            Medical San.<br />
            <em>Padrão absoluto de excelência.</em>
          </h2>
          <p className={styles.subtitle}>
            A AUREN é parceira comercial exclusiva da Medical San — fabricante líder
            que une inovação científica, rigor produtivo e documentação ANVISA em
            todas as suas plataformas.
          </p>
        </motion.div>

        <div className={styles.grid} role="list">
          {marcas.map((m, i) => (
            <motion.div
              key={m.id}
              className={styles.card}
              custom={i}
              variants={cardV}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              role="listitem"
              style={{ background: m.accent }}
            >
              <div className={styles.cardTop}>
                <span className={styles.cardLabel}>{m.label}</span>
                <h3 className={styles.cardName}>{m.nome}</h3>
                <p className={styles.cardDesc}>{m.descricao}</p>
              </div>

              <ul className={styles.techList} aria-label={`Tecnologias ${m.nome}`}>
                {m.tecnologias.map((t) => (
                  <li key={t} className={styles.techItem}>
                    <span className={styles.techDot} aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>

              <Link
                href={`/tecnologias/${m.slug}`}
                className={styles.cardCta}
                id={`marca-link-${m.id}`}
                aria-label={m.cta}
              >
                {m.cta}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

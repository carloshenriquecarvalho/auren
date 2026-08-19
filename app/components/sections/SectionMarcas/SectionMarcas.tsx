"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import styles from "./SectionMarcas.module.css";

const marcas = [
  {
    id: "medical-san",
    slug: "medical-san",
    nome: "Medical San",
    label: "Laser & Procedimentos Estéticos",
    descricao:
      "Plataformas de laser com 4 comprimentos de onda, CO₂ fracionado padrão ouro e radiofrequência microagulhada. Tecnologias de alta performance para clínicas que buscam resultados visíveis e consistentes.",
    tecnologias: ["Hakon — Laser 4 Comprimentos de Onda", "Hegon — CO₂ Fracionado", "Ptolomeu — RF Microagulhada"],
    cta: "Ver portfólio Medical San",
    accent: "linear-gradient(135deg, rgba(184,150,46,0.08) 0%, rgba(184,150,46,0.03) 100%)",
  },
  {
    id: "cromatic",
    slug: "cromatic",
    nome: "Cromatic",
    label: "Laser & Plataformas Multitecnologia",
    descricao:
      "Laser para remoção de pigmentos com 3 comprimentos de onda, CO₂ fracionado de alta versatilidade e plataforma HIFU + RF + EMS para face e corpo. Inovação e rentabilidade para clínicas de alto padrão.",
    tecnologias: ["Neo One — Laser 3 Comprimentos de Onda", "Fusion — CO₂ Fracionado", "Trinity Go — HIFU + RF + EMS"],
    cta: "Ver portfólio Cromatic",
    accent: "linear-gradient(135deg, rgba(92,90,85,0.06) 0%, rgba(92,90,85,0.02) 100%)",
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
            <span className="section-label">Nossas Marcas</span>
          </div>
          <h2 id="marcas-title" className={styles.title}>
            Duas marcas.<br />
            <em>Um padrão de excelência.</em>
          </h2>
          <p className={styles.subtitle}>
            Representamos com exclusividade Medical San e Cromatic — cada uma com
            um portfólio dedicado, documentação ANVISA e suporte consultivo da AUREN.
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

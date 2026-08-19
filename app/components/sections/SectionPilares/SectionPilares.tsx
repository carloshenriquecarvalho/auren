"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./SectionPilares.module.css";

const pilares = [
  {
    id: "confianca",
    num: "01",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="1.2" />
        <path d="M13 20l5 5 9-10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Confiança",
    body: "Não buscamos apenas a satisfação do cliente — buscamos sua tranquilidade absoluta. Cada contrato assinado é sustentado por transparência e compromisso de longo prazo.",
  },
  {
    id: "excelencia",
    num: "02",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <polygon points="20,5 24,14 34,15 27,22 29,32 20,27 11,32 13,22 6,15 16,14" stroke="currentColor" strokeWidth="1.2" fill="none" />
      </svg>
    ),
    title: "Excelência",
    body: "Do primeiro contato ao pós-venda, cada interação é desenhada para superar expectativas. Excelência não é um padrão de chegada — é uma escolha que fazemos a cada atendimento.",
  },
  {
    id: "parceria",
    num: "03",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="13" cy="20" r="8" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="27" cy="20" r="8" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
    title: "Parceria",
    body: "A venda é o início, não o fim. Permanecemos presentes com suporte técnico, orientação e acompanhamento — porque sua clínica crescer é o nosso maior resultado.",
  },
];

const cardV = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.12 },
  }),
};

export default function SectionPilares() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section id="pilares" ref={ref} className={styles.section} aria-labelledby="pilares-title">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.labelRow}>
            <span className={styles.divider} aria-hidden="true" />
            <span className="section-label">Por que a AUREN</span>
          </div>
          <h2 id="pilares-title" className={styles.title}>
            Três pilares que orientam<br />
            <em>cada decisão que tomamos.</em>
          </h2>
        </motion.div>

        <div className={styles.grid} role="list">
          {pilares.map((p, i) => (
            <motion.article
              key={p.id}
              id={`pilar-${p.id}`}
              className={styles.card}
              custom={i}
              variants={cardV}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              role="listitem"
            >
              <div className={styles.cardTop}>
                <span className={styles.num} aria-hidden="true">{p.num}</span>
                <div className={styles.icon}>{p.icon}</div>
              </div>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardBody}>{p.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

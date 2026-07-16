/* Task 2.2 — Bloco de Confiança / Prova de Credibilidade */
"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import styles from "./SectionConfianca.module.css";

const pilares = [
  {
    id: "padroes",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M10 16l4 4 8-8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Padrões Técnicos Internacionais",
    body: "Cada equipamento do portfólio AUREN atende às exigências regulatórias da ANVISA e está alinhado às referências técnicas internacionais do setor de medicina estética.",
  },
  {
    id: "consultivo",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M6 10h20M6 16h14M6 22h10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    title: "Postura Consultiva",
    body: "Não existe proposta padrão na AUREN. Cada atendimento começa pela escuta do contexto clínico — volume, perfil e objetivos — antes de qualquer recomendação.",
  },
  {
    id: "premium",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <polygon points="16,4 20,12 29,13 22,20 24,29 16,25 8,29 10,20 3,13 12,12" stroke="currentColor" strokeWidth="1.2" fill="none"/>
      </svg>
    ),
    title: "Atuação no Mercado Premium",
    body: "A AUREN posiciona-se no segmento de alta performance, onde o critério de decisão não é o preço do equipamento, mas o retorno clínico, a confiabilidade e a suporte técnico que o acompanha.",
  },
  {
    id: "continuidade",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M6 16c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M20 22l6 4-4-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Continuidade de Relacionamento",
    body: "O encerramento da venda é apenas o início do contrato de parceria. O suporte técnico, o acompanhamento e a disponibilidade da equipe AUREN permanecem por toda a vida útil do equipamento.",
  },
];

const containerV: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const cardV: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function SectionConfianca() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section id="confianca" ref={ref} className={styles.section} aria-labelledby="conf-title">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.labelRow}>
            <span className={styles.divider} aria-hidden="true" />
            <span className="section-label">Por que a AUREN</span>
          </div>
          <h2 id="conf-title" className={styles.title}>
            Credibilidade construída<br />em cada decisão
          </h2>
          <p className={styles.sub}>
            Confiança não se afirma com declarações. Ela se verifica na
            consistência técnica, na transparência do processo e na presença
            após a entrega.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerV}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          role="list"
        >
          {pilares.map((p) => (
            <motion.article
              key={p.id}
              id={`conf-${p.id}`}
              className={styles.card}
              variants={cardV}
              role="listitem"
              aria-labelledby={`conf-title-${p.id}`}
            >
              <div className={styles.iconWrap} aria-hidden="true">
                {p.icon}
              </div>
              <h3 id={`conf-title-${p.id}`} className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardBody}>{p.body}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

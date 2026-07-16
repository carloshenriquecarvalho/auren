/* Task 2.3 — Essência / Propósito / Missão / Visão */
"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import styles from "./SectionEssencia.module.css";

const blocos = [
  {
    id: "essencia",
    num: "01",
    label: "Essência",
    headline: "Confiança como ativo central.",
    body: "A AUREN existe para ser a constante confiável em um mercado marcado pela incerteza. Não buscamos ocupar todos os segmentos — buscamos ser a escolha inquestionável nos segmentos em que atuamos, reconhecida pela integridade do processo tanto quanto pela qualidade do equipamento.",
  },
  {
    id: "proposito",
    num: "02",
    label: "Propósito",
    headline: "Segurança, tranquilidade e parceria.",
    body: "Existimos para que médicos, clínicas e redes hospitalares possam investir em tecnologia médica com a segurança de quem tem um parceiro real ao lado — antes, durante e muito depois da entrega.",
  },
  {
    id: "missao",
    num: "03",
    label: "Missão",
    headline: "Tecnologia com responsabilidade, presença com propósito.",
    body: "Oferecer equipamentos médicos de alto padrão com atendimento consultivo, suporte técnico continuado e relacionamento de longo prazo — de forma que cada instituição atendida perceba na AUREN mais do que um fornecedor: um compromisso.",
  },
  {
    id: "visao",
    num: "04",
    label: "Visão",
    headline: "Ser a referência de confiança no mercado brasileiro.",
    body: "Tornar-se a marca de equipamentos médicos de alta performance mais respeitada no Brasil — não pelo volume de vendas, mas pela profundidade dos relacionamentos, pela excelência técnica e pela consistência do que entregamos ao longo do tempo.",
  },
];

export default function SectionEssencia() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  const [active, setActive] = useState("essencia");

  const current = blocos.find((b) => b.id === active)!;

  return (
    <section id="essencia" ref={ref} className={styles.section} aria-labelledby="essencia-title">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.labelRow}>
            <span className={styles.divider} aria-hidden="true" />
            <span className="section-label" style={{ color: "var(--gold-light)" }}>
              Identidade Institucional
            </span>
          </div>
          <h2 id="essencia-title" className={styles.title}>
            O que nos define e orienta
          </h2>
        </motion.div>

        <motion.div
          className={styles.layout}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.8 }}
        >
          {/* Tab selector */}
          <nav className={styles.tabs} role="tablist" aria-label="Essência, Propósito, Missão e Visão">
            {blocos.map((b) => (
              <button
                key={b.id}
                role="tab"
                id={`tab-${b.id}`}
                aria-selected={active === b.id}
                aria-controls={`panel-${b.id}`}
                className={`${styles.tab} ${active === b.id ? styles.tabActive : ""}`}
                onClick={() => setActive(b.id)}
              >
                <span className={styles.tabNum}>{b.num}</span>
                <span className={styles.tabLabel}>{b.label}</span>
              </button>
            ))}
          </nav>

          {/* Content panel */}
          <div
            className={styles.panel}
            role="tabpanel"
            id={`panel-${current.id}`}
            aria-labelledby={`tab-${current.id}`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className={styles.panelNum} aria-hidden="true">{current.num}</p>
                <h3 className={styles.panelHeadline}>{current.headline}</h3>
                <div className={styles.panelAccent} aria-hidden="true" />
                <p className={styles.panelBody}>{current.body}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

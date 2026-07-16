"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./SectionSolucoes.module.css";

const solucoes = [
  {
    id: "hakon",
    tag: "Laser & RF",
    name: "Hakon",
    desc: "Plataforma de radiofrequência fracionada de última geração. Alta eficácia clínica para rejuvenescimento dérmico profundo com mínimo tempo de downtime.",
    specs: ["RF Fracionado", "Tripolar", "Aprovado ANVISA"],
  },
  {
    id: "hegon",
    tag: "Ultrassom",
    name: "Hegon",
    desc: "Tecnologia de ultrassom microfocado para lifting não-cirúrgico. Protocolo preciso, resultado progressivo — sem incisões, sem interrupção da rotina do paciente.",
    specs: ["HIFU", "Multi-depth", "Imagem em tempo real"],
  },
  {
    id: "co2",
    tag: "Laser CO₂",
    name: "CO₂ Fracionado",
    desc: "Laser de dióxido de carbono fracionado para resurfacing avançado. Padrão-ouro em tratamentos de cicatrizes, poros, linhas finas e textura irregular.",
    specs: ["CO₂ 10.600nm", "Modo ablativo e não-ablativo", "Controle de profundidade"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function SectionSolucoes() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section id="solucoes" ref={ref} className={styles.section} aria-labelledby="solucoes-title">
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.labelRow}>
            <span className={styles.divider} aria-hidden="true" />
            <span className="section-label" style={{ color: "var(--gold-light)" }}>Soluções</span>
          </div>
          <h2 id="solucoes-title" className={styles.title}>
            Equipamentos de referência clínica
          </h2>
          <p className={styles.subtitle}>
            Cada linha foi selecionada por evidência clínica, solidez técnica
            e compatibilidade com a rotina dos profissionais que atendem.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          role="list"
        >
          {solucoes.map((s) => (
            <motion.article
              key={s.id}
              id={`solucao-${s.id}`}
              className={styles.card}
              variants={cardVariants}
              role="listitem"
              aria-labelledby={`solucao-name-${s.id}`}
            >
              <div className={styles.cardTop}>
                <span className={styles.cardTag}>{s.tag}</span>
                <h3 id={`solucao-name-${s.id}`} className={styles.cardName}>{s.name}</h3>
                <p className={styles.cardDesc}>{s.desc}</p>
              </div>

              <div className={styles.cardBottom}>
                <ul className={styles.specs} aria-label="Especificações">
                  {s.specs.map((spec) => (
                    <li key={spec} className={styles.spec}>
                      <span className={styles.specDot} aria-hidden="true" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contato"
                  className={styles.cardCta}
                  id={`solucao-cta-${s.id}`}
                  aria-label={`Conhecer mais sobre ${s.name}`}
                >
                  Conhecer este equipamento →
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          className={styles.note}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Todas as linhas possuem registro ANVISA e suporte técnico especializado em território nacional.
        </motion.p>
      </div>
    </section>
  );
}

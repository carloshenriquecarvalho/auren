"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./SectionSolucoes.module.css";

const solucoes = [
  {
    id: "hakon",
    tag: "Laser",
    name: "Hakon",
    desc: "O Hakon combina potência, segurança e conforto para proporcionar uma depilação a laser eficiente em diferentes tipos de pele, oferecendo resultados duradouros e uma experiência mais confortável ao paciente.",
    specs: ["Tripolar", "Aprovado ANVISA"],
  },
  {
    id: "hegon",
    tag: "CO₂ Fracionado",
    name: "Hegon",
    desc: "O Hegon utiliza a tecnologia de laser de CO₂ fracionado para promover a renovação da pele com precisão e segurança. É indicado para tratamentos de rejuvenescimento, cicatrizes, estrias e linhas de expressão, estimulando a produção natural de colágeno e proporcionando resultados eficazes.",
    specs: ["CO₂", "Multi-depth"],
  },
  {
    id: "hifu",
    tag: "HiFu",
    name: "Ptolomeu",
    desc: "O Ptolomeu utiliza a tecnologia de ultrassom microfocado para estimular a produção de colágeno em diferentes camadas da pele. Indicado para tratamentos de flacidez e rejuvenescimento facial e corporal, promove efeito lifting de forma não invasiva, com segurança e resultados naturais.",
    specs: ["Ultrassom Microfocado"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
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
            Tecnologias reconhecidas pelo mercado
          </h2>
          <p className={styles.subtitle}>
            Portfólio selecionado de equipamentos originais da Medical San,
            comercializados pela AUREN com suporte técnico e acompanhamento
            consultivo dedicado para clínicas de estética.
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
                  aria-label={`Solicitar informações sobre ${s.name}`}
                >
                  Solicitar informações →
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
          Todas as linhas possuem registro ANVISA.
        </motion.p>
      </div>
    </section>
  );
}

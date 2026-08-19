/* Task 2.4 — 5 Valores */
"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence, Variants } from "framer-motion";
import styles from "./SectionValores.module.css";

const valores = [
  {
    id: "fe",
    num: "01",
    title: "Convicção",
    tag: "Fé",
    short: "Agimos com certeza interior sobre o que fazemos e para que fazemos.",
    full: "Não nos movemos por tendência de mercado ou pressão de volume. Cada decisão da AUREN — de produto, de parceria, de atendimento — é sustentada pela convicção profunda de que propósito e resultado constroem-se juntos, ao longo do tempo.",
  },
  {
    id: "integridade",
    num: "02",
    title: "Integridade",
    tag: "Integridade",
    short: "Nossas decisões resistem ao escrutínio. Dentro e fora da empresa.",
    full: "Integridade é o que permanece quando ninguém está observando. É o padrão de entrega que não cede por prazo, por margem ou por conveniência. É o que faz um cliente indicar a AUREN antes mesmo de ser solicitado.",
  },
  {
    id: "excelencia",
    num: "03",
    title: "Excelência",
    tag: "Excelência",
    short: "Padrão técnico elevado, sem concessões, do equipamento ao atendimento.",
    full: "Excelência não é perfeição — é a recusa em naturalizar o suficiente. É o detalhe no protocolo de pós-venda, a clareza do treinamento técnico, a agilidade de resposta diante de cada demanda da clínica. É a marca que a equipe AUREN deixa em cada interação.",
  },
  {
    id: "relacionamentos",
    num: "04",
    title: "Relacionamentos",
    tag: "Relacionamentos",
    short: "Parcerias duradouras importam mais que contratos pontuais.",
    full: "Preferimos profundidade à escala. Uma clínica que renova o contrato por três anos e indica a AUREN a colegas é mais valiosa do que dez contratos esporádicos. Relacionamento é ativo — e tratamos assim: com atenção, com presença e com consistência.",
  },
  {
    id: "responsabilidade",
    num: "05",
    title: "Responsabilidade",
    tag: "Responsabilidade",
    short: "Assumimos, integralmente, as consequências de cada decisão.",
    full: "Cada tecnologia do nosso portfólio é selecionada e comercializada com a consciência de que ela impacta diretamente o resultado da clínica e a experiência dos seus clientes. Essa consciência não nos paralisa — nos responsabiliza. E é exatamente esse nível de comprometimento que diferencia a AUREN.",
  },
];

const containerV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const cardV = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function SectionValores() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (id: string) => setExpanded((prev) => (prev === id ? null : id));

  return (
    <section id="valores" ref={ref} className={styles.section} aria-labelledby="valores-title">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.labelRow}>
            <span className={styles.divider} aria-hidden="true" />
            <span className="section-label">Nossos Valores</span>
          </div>
          <h2 id="valores-title" className={styles.title}>
            O que sustenta cada decisão
          </h2>
          <p className={styles.sub}>
            Cinco princípios que orientam a conduta da AUREN — internamente e
            na relação com cada cliente, parceiro e colaborador.
          </p>
        </motion.div>

        <motion.div
          className={styles.list}
          variants={containerV}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          role="list"
        >
          {valores.map((v) => {
            const isOpen = expanded === v.id;
            return (
              <motion.div
                key={v.id}
                id={`valor-${v.id}`}
                className={`${styles.card} ${isOpen ? styles.cardOpen : ""}`}
                variants={cardV}
                role="listitem"
              >
                <button
                  className={styles.cardToggle}
                  onClick={() => toggle(v.id)}
                  aria-expanded={isOpen}
                  aria-controls={`valor-body-${v.id}`}
                  id={`valor-btn-${v.id}`}
                >
                  <span className={styles.cardNum} aria-hidden="true">{v.num}</span>
                  {/* Desktop: separate titles column */}
                  <span className={styles.cardTitles} aria-hidden="true">
                    <span className={styles.cardTag}>{v.tag}</span>
                    <span className={styles.cardTitle}>{v.title}</span>
                  </span>
                  {/* Mobile: inline title block */}
                  <span className={styles.cardMain}>
                    <span className={styles.cardMainTag}>{v.tag}</span>
                    <span className={styles.cardMainTitle}>{v.title}</span>
                  </span>
                  <span className={styles.cardShort}>{v.short}</span>
                  <span className={styles.cardIcon} aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`valor-body-${v.id}`}
                      className={styles.cardBody}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] as const }}
                      role="region"
                      aria-label={`Texto completo de ${v.title}`}
                    >
                      <p className={styles.cardFull}>{v.full}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

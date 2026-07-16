/* Task 2.8 — A Experiência AUREN: timeline da jornada do cliente */
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./SectionExperiencia.module.css";

const etapas = [
  {
    id: "contato",
    num: "01",
    label: "Primeiro Contato",
    headline: "Escuta antes de proposta",
    desc: "O processo AUREN começa por compreender o contexto clínico, o volume de atendimentos e os objetivos da instituição — antes de apresentar qualquer equipamento.",
  },
  {
    id: "diagnostico",
    num: "02",
    label: "Diagnóstico",
    headline: "Análise da realidade clínica",
    desc: "Mapeamos o perfil de pacientes, as tecnologias disponíveis e as lacunas de resultado. A proposta emerge desse mapeamento — não de um catálogo.",
  },
  {
    id: "proposta",
    num: "03",
    label: "Proposta Personalizada",
    headline: "Sem padronização",
    desc: "Cada proposta é desenhada para o caso específico. Especificações técnicas, cronograma de implantação e condições de parceria alinhadas à realidade do cliente.",
  },
  {
    id: "implantacao",
    num: "04",
    label: "Implantação Assistida",
    headline: "Presença técnica na entrega",
    desc: "A instalação e o treinamento são conduzidos pela equipe AUREN, com validação técnica presencial e protocolo de ativação que assegura a performance clínica desde o primeiro uso.",
  },
  {
    id: "parceria",
    num: "05",
    label: "Parceria Continuada",
    headline: "O contrato não termina na entrega",
    desc: "Suporte técnico ativo, atualizações de protocolo e presença da equipe ao longo de toda a vida útil do equipamento. Este é o critério pelo qual medimos nosso sucesso.",
  },
];

export default function SectionExperiencia() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section id="experiencia" ref={ref} className={styles.section} aria-labelledby="exp-title">
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
            <span className="section-label">A Experiência AUREN</span>
          </div>
          <h2 id="exp-title" className={styles.title}>
            Uma jornada de continuidade,<br />não um ciclo de venda
          </h2>
          <p className={styles.sub}>
            Do primeiro contato ao suporte de longo prazo, cada etapa é
            desenhada para eliminar a incerteza e fortalecer a parceria.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className={styles.timeline} role="list" aria-label="Etapas da jornada AUREN">
          {etapas.map((e, i) => (
            <motion.div
              key={e.id}
              id={`etapa-${e.id}`}
              className={styles.etapa}
              role="listitem"
              initial={{ opacity: 0, x: i % 2 === 0 ? -32 : 32 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1 + i * 0.12,
              }}
            >
              {/* Connector line */}
              <div className={styles.etapaConnector} aria-hidden="true">
                <div className={styles.etapaNode}>
                  <span>{e.num}</span>
                </div>
                {i < etapas.length - 1 && <div className={styles.etapaLine} />}
              </div>

              {/* Content */}
              <div className={styles.etapaContent} aria-labelledby={`etapa-label-${e.id}`}>
                <span
                  id={`etapa-label-${e.id}`}
                  className={styles.etapaLabel}
                >
                  {e.label}
                </span>
                <h3 className={styles.etapaHeadline}>{e.headline}</h3>
                <p className={styles.etapaDesc}>{e.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

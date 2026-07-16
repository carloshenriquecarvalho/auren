/* Task 2.6 — Quem Somos: personalidade e cultura humanizada */
"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import styles from "./SectionSobre.module.css";

const atributos = [
  {
    id: "sofisticacao",
    label: "Sofisticação discreta",
    desc: "A AUREN não precisa anunciar o que é. Quem convive com ela percebe.",
  },
  {
    id: "autoridade",
    label: "Autoridade serena",
    desc: "Falamos com segurança técnica sem arrogância. Sabemos o que entregamos e por quê.",
  },
  {
    id: "consultiva",
    label: "Postura consultiva",
    desc: "Cada conversa começa pela escuta. A recomendação vem depois do entendimento.",
  },
  {
    id: "consistencia",
    label: "Consistência",
    desc: "O que a AUREN promete no primeiro contato, ainda está presente no décimo atendimento.",
  },
];

const fadeUp = (i: number) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.1 },
  },
});

export default function SectionSobre() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section id="quem-somos" ref={ref} className={styles.section} aria-labelledby="sobre-title">
      <div className={styles.container}>
        {/* Top grid */}
        <div className={styles.grid}>
          <div className={styles.left}>
            <motion.div
              className={styles.labelWrap}
              variants={fadeUp(0)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <span className={styles.divider} aria-hidden="true" />
              <span className="section-label">Quem Somos</span>
            </motion.div>

            <motion.h2
              id="sobre-title"
              className={styles.title}
              variants={fadeUp(1)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              Uma empresa que prefere <br />
              <em>profundidade à escala.</em>
            </motion.h2>

            <motion.div
              className={styles.accent}
              variants={fadeUp(2)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              aria-hidden="true"
            />
          </div>

          <div className={styles.right}>
            <motion.p
              className={styles.body}
              variants={fadeUp(2)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              A AUREN é uma empresa de tecnologia médica que atua no segmento
              de medicina estética de alta performance. Nossa cultura é
              construída sobre a crença de que o relacionamento com o cliente
              é o produto mais importante que entregamos.
            </motion.p>

            <motion.p
              className={styles.body}
              variants={fadeUp(3)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              Não somos a empresa com o maior portfólio. Somos a empresa
              que conhece profundamente o que oferece, que conhece as
              implicações clínicas de cada decisão e que permanece presente
              muito além da assinatura do contrato.
            </motion.p>

            <motion.p
              className={styles.body}
              variants={fadeUp(4)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              Nossa equipe é formada por profissionais com trajetória técnica
              no setor de saúde. A linguagem que usamos com nossos clientes
              é a linguagem de quem compreende a realidade clínica — não apenas
              as especificações do equipamento.
            </motion.p>
          </div>
        </div>

        {/* Atributos */}
        <motion.div
          className={styles.atributos}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.8 }}
          aria-label="Traços da cultura AUREN"
          role="list"
        >
          {atributos.map((a) => (
            <div key={a.id} id={`atributo-${a.id}`} className={styles.atributo} role="listitem">
              <span className={styles.atributoLabel}>{a.label}</span>
              <p className={styles.atributoDesc}>{a.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

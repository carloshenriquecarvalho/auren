/* Task 2.7 — Nossa Identidade: significado da marca */
"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Image from "next/image";
import styles from "./SectionIdentidade.module.css";

const significados = [
  {
    id: "aliancas",
    label: "As alianças",
    desc: "Duas forças que se entrelaçam — a AUREN e seus clientes — em compromisso mútuo. Não há hierarquia nessa relação: há co-responsabilidade.",
  },
  {
    id: "tracos",
    label: "Os três traços",
    desc: "Compromisso, direção e propósito. Os três pilares que orientam cada decisão — do modelo de atendimento ao critério de seleção de equipamentos.",
  },
  {
    id: "forma",
    label: "A forma",
    desc: "Simples, precisa, sem ornamento desnecessário. O símbolo reflete a empresa: elegância pela essência, não pelo excesso.",
  },
];

export default function SectionIdentidade() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section id="identidade" ref={ref} className={styles.section} aria-labelledby="ident-title">
      <div className={styles.container}>
        <div className={styles.layout}>
          {/* Symbol side */}
          <motion.div
            className={styles.symbolSide}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
            aria-hidden="true"
          >
            <div className={styles.symbolFrame}>
              <Image
                src="/logo-transparente.png"
                alt="Símbolo da AUREN"
                width={200}
                height={200}
                className={styles.symbol}
                aria-hidden="true"
              />
            </div>
            <p className={styles.symbolCaption}>Marca AUREN</p>
          </motion.div>

          {/* Text side */}
          <div className={styles.textSide}>
            <motion.div
              className={styles.labelRow}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className={styles.divider} aria-hidden="true" />
              <span className="section-label" style={{ color: "var(--gold-light)" }}>
                Nossa Identidade
              </span>
            </motion.div>

            <motion.h2
              id="ident-title"
              className={styles.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              Um símbolo com<br />significado estrutural
            </motion.h2>

            <motion.p
              className={styles.intro}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              A identidade visual da AUREN foi concebida para comunicar,
              sem apelos decorativos, aquilo que a empresa representa na prática.
              Cada elemento tem uma razão precisa de existir.
            </motion.p>

            <motion.ul
              className={styles.meanings}
              role="list"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {significados.map((s) => (
                <li key={s.id} id={`ident-${s.id}`} className={styles.meaningItem} role="listitem">
                  <span className={styles.meaningLabel}>{s.label}</span>
                  <p className={styles.meaningDesc}>{s.desc}</p>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}

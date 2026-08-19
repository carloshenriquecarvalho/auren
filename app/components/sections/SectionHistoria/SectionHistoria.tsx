"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./SectionHistoria.module.css";

const fadeUp = (i: number) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.12 },
  },
});

export default function SectionHistoria() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-6%" });

  return (
    <section
      id="nossa-historia"
      ref={ref}
      className={styles.section}
      aria-labelledby="historia-title"
    >
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className={styles.labelRow}>
            <span className={styles.divider} aria-hidden="true" />
            <span className="section-label">Nossa História</span>
          </div>
          <h2 id="historia-title" className={styles.title}>
            Nascemos de um propósito,<br />
            <em>não de um produto.</em>
          </h2>
        </motion.div>

        {/* Texto principal */}
        <div className={styles.body}>
          <motion.p
            className={styles.para}
            variants={fadeUp(1)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            Nós nascemos da convicção de que grandes empresas nascem quando duas
            pessoas caminham na mesma direção, compartilhando o mesmo propósito.
            Nosso símbolo reúne duas alianças que representam compromisso: entre
            seus fundadores, entre a empresa e cada cliente que deposita sua
            confiança em nós.
          </motion.p>

          <motion.p
            className={styles.para}
            variants={fadeUp(2)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            No centro, três traços apontam para o alto, lembrando que nossa
            maior referência é a Trindade: Pai, Filho e Espírito Santo. Eles
            representam direção, amor e sabedoria. Nada no símbolo está por
            acaso. As alianças protegem a Trindade, e a Trindade sustenta as
            alianças. Essa é a nossa essência: relacionamentos duradouros,
            decisões guiadas por princípios e um propósito maior do que
            simplesmente vender tecnologias.
          </motion.p>

          <motion.p
            className={styles.para}
            variants={fadeUp(3)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            O dourado representa aquilo que é precioso: integridade, qualidade e
            legado. Sabemos que escolher uma tecnologia representa uma decisão
            importante para uma clínica. Por isso, nosso intuito vai muito além
            de promover a mesma — buscamos compreender as necessidades de cada
            cliente, e ajudá-lo a encontrar soluções que façam sentido para o
            crescimento do seu negócio.
          </motion.p>

          <motion.p
            className={styles.paraHighlight}
            variants={fadeUp(4)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            Nossa missão é levar tecnologia que transforma vidas, sempre guiados
            pela fé, pela excelência e pelo compromisso com as pessoas.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

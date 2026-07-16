/* Task 2.5 — Como Enxergamos o Mercado */
"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import styles from "./SectionMercado.module.css";

const contrastes = [
  {
    id: "preco",
    lado: "O mercado comum",
    desc: "Compete por preço. Reduz especificações para caber em tabelas. Trata equipamento médico como commodity e o pós-venda como custo.",
  },
  {
    id: "confianca",
    lado: "A perspectiva AUREN",
    desc: "Compete por confiança. Eleva o critério de decisão para valor clínico, suporte técnico e duração do relacionamento. Trata o pós-venda como a parte mais importante do contrato.",
    highlight: true,
  },
];

export default function SectionMercado() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section id="mercado" ref={ref} className={styles.section} aria-labelledby="mercado-title">
      <div className={styles.container}>
        {/* Editorial block */}
        <div className={styles.layout}>
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <div className={styles.labelRow}>
              <span className={styles.divider} aria-hidden="true" />
              <span className="section-label" style={{ color: "var(--gold-light)" }}>
                Nossa Visão de Mercado
              </span>
            </div>
            <h2 id="mercado-title" className={styles.title}>
              Confiança não é um argumento de vendas. É um ecossistema.
            </h2>
            <p className={styles.body}>
              Em mercados maduros, a guerra de preços é um sintoma de
              proposta de valor mal definida. A AUREN optou por outro caminho:
              construir um ecossistema onde o cliente percebe, em cada ponto de
              contato, que a decisão de compra foi apenas o início de uma parceria.
            </p>
            <p className={styles.body}>
              Isso significa eliminar a incerteza pós-contrato. Significa que um
              gestor de clínica não precisa se perguntar se terá suporte quando
              precisar — porque a resposta é estrutural, não eventual.
            </p>
            <div className={styles.pullquote} aria-label="Citação institucional">
              <span className={styles.pullquoteBar} aria-hidden="true" />
              <p>
                "Reduzir o risco do cliente não é estratégia de marketing.
                É a razão pela qual a AUREN existe."
              </p>
            </div>
          </motion.div>

          {/* Contrast cards */}
          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            aria-label="Contraste de abordagens"
          >
            {contrastes.map((c) => (
              <div
                key={c.id}
                id={`mercado-${c.id}`}
                className={`${styles.contrasteCard} ${c.highlight ? styles.contrasteHighlight : ""}`}
              >
                <span className={styles.contrasteLabel}>{c.lado}</span>
                <p className={styles.contrasteDesc}>{c.desc}</p>
              </div>
            ))}

            {/* Setores */}
            <div className={styles.setores} aria-label="Setores atendidos">
              <p className={styles.setoresLabel}>Setores atendidos</p>
              <ul className={styles.setoresList} role="list">
                {[
                  "Clínicas de Medicina Estética",
                  "Hospitais Privados",
                  "Redes de Saúde",
                  "Centros de Dermatologia",
                ].map((s) => (
                  <li key={s} className={styles.setoresItem}>
                    <span className={styles.setoresDot} aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

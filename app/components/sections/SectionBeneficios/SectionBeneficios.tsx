"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./SectionBeneficios.module.css";

const beneficios = [
  {
    id: "portfolio-curado",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="6" y="8" width="28" height="24" rx="2" stroke="currentColor" strokeWidth="1.2" />
        <path d="M12 16h16M12 21h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="30" cy="28" r="6" fill="var(--off-white)" stroke="currentColor" strokeWidth="1.2" />
        <path d="M27.5 28l1.5 1.5 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Portfólio curado, sem ruído",
    body: "Tecnologias selecionadas a dedo — cada uma com indicação clínica clara e retorno comprovado. Você não precisa garimpar: nós já fizemos isso.",
  },
  {
    id: "suporte-consultivo",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="14" r="6" stroke="currentColor" strokeWidth="1.2" />
        <path d="M8 34c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M28 22l2 2 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Suporte consultivo dedicado",
    body: "Do primeiro atendimento ao pós-venda, você tem um parceiro especializado ao lado — não um SAC. Orientação técnica, treinamento e acompanhamento contínuo.",
  },
  {
    id: "anvisa",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M20 4l14 6v10c0 8-6 14-14 16C12 34 6 28 6 20V10l14-6z" stroke="currentColor" strokeWidth="1.2" />
        <path d="M14 20l4 4 8-8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Registro ANVISA garantido",
    body: "Todas as tecnologias do nosso portfólio têm registro ANVISA em dia. Sua clínica opera com segurança jurídica e respaldo técnico desde o primeiro dia.",
  },
  {
    id: "marcas-referencia",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <polygon points="20,5 24,14 34,15 27,22 29,32 20,27 11,32 13,22 6,15 16,14" stroke="currentColor" strokeWidth="1.2" fill="none" />
      </svg>
    ),
    title: "Marcas de referência mundial",
    body: "Representamos Medical San e Cromatic — fabricantes com histórico de excelência e tecnologia validada em mercados exigentes. Credibilidade que você oferece à sua clientela.",
  },
];

const itemV = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.1 },
  }),
};

export default function SectionBeneficios() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section id="beneficios" ref={ref} className={styles.section} aria-labelledby="beneficios-title">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.labelRow}>
            <span className={styles.divider} aria-hidden="true" />
            <span className="section-label">Por que a AUREN</span>
          </div>
          <h2 id="beneficios-title" className={styles.title}>
            O que sua clínica ganha<br />
            <em>ao escolher a AUREN.</em>
          </h2>
        </motion.div>

        <div className={styles.list} role="list">
          {beneficios.map((b, i) => (
            <motion.div
              key={b.id}
              id={`beneficio-${b.id}`}
              className={styles.item}
              custom={i}
              variants={itemV}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              role="listitem"
            >
              <div className={styles.iconWrap} aria-hidden="true">
                {b.icon}
              </div>
              <div className={styles.content}>
                <h3 className={styles.itemTitle}>{b.title}</h3>
                <p className={styles.itemBody}>{b.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

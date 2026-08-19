"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { produtosPorMarca } from "@/app/lib/produtos";
import styles from "./SectionTecnologiasCromatic.module.css";

const containerV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const cardV = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function SectionTecnologiasCromatic() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  const tecnologias = produtosPorMarca["cromatic"];

  return (
    <section id="tecnologias-cromatic" ref={ref} className={styles.section} aria-labelledby="cromatic-title">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.labelRow}>
            <span className={styles.divider} aria-hidden="true" />
            <span className="section-label" style={{ color: "var(--gold-signature)" }}>Portfólio Cromatic</span>
          </div>
          <h2 id="cromatic-title" className={styles.title}>Tecnologias Cromatic</h2>
          <p className={styles.subtitle}>
            Soluções de estética avançada da Cromatic, selecionadas para clínicas
            que buscam tecnologia de ponta com o suporte consultivo da AUREN.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerV}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          role="list"
        >
          {tecnologias.map((t) => (
            <motion.article
              key={t.slug}
              id={`cromatic-tec-${t.slug}`}
              className={styles.card}
              variants={cardV}
              role="listitem"
            >
              <Link href={`/tecnologias/${t.slug}`} className={styles.cardLink}>
                <div className={styles.cardImage}>
                  <Image
                    src={t.imagem}
                    alt={t.nome}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                    className={styles.img}
                  />
                  <span className={styles.cardBadge}>{t.badge}</span>
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.cardTag}>{t.tag}</span>
                  <h3 className={styles.cardName}>{t.nome}</h3>
                  <p className={styles.cardDesc}>{t.descricaoCurta}</p>
                  <ul className={styles.specs}>
                    {t.specs.slice(0, 2).map((s) => (
                      <li key={s.label} className={styles.spec}>
                        <span className={styles.specDot} aria-hidden="true" />
                        {s.label}: <strong>{s.valor}</strong>
                      </li>
                    ))}
                  </ul>
                  <span className={styles.cardCta}>Ver detalhes completos →</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className={styles.footer}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className={styles.note}>Todas as tecnologias possuem registro ANVISA.</p>
          <Link href="/tecnologias/cromatic" className={styles.viewAll} id="cromatic-view-all">
            Ver portfólio completo Cromatic →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

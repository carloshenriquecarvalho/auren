"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { produtos } from "@/app/lib/produtos";
import styles from "./SectionShowcase.module.css";

const cardV = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.08 },
  }),
};

export default function SectionShowcase() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-6%" });

  const featuredSlugs = [
    "velaryan",
    "hegon",
    "ptolomeu",
    "hakon",
    "criodermis",
    "sonofrax",
  ];

  const featured = featuredSlugs
    .map((slug) => produtos.find((p) => p.slug === slug))
    .filter((p): p is (typeof produtos)[0] => p !== undefined);

  return (
    <section id="showcase" ref={ref} className={styles.section} aria-labelledby="showcase-title">
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.labelRow}>
            <span className={styles.divider} aria-hidden="true" />
            <span className="section-label" style={{ color: "var(--gold-signature)" }}>Portfólio Medical San</span>
          </div>
          <h2 id="showcase-title" className={styles.title}>
            Tecnologias selecionadas.<br />
            <em>Uma escolha guiada.</em>
          </h2>
          <p className={styles.subtitle}>
            Representamos com exclusividade a Medical San com um portfólio de alta
            performance para clínicas de estética e saúde de alto padrão.
            Cada tecnologia é comercializada com suporte consultivo dedicado.
          </p>
        </motion.div>

        {/* Medical San group */}
        <div className={styles.group}>
          <div className={styles.groupHeader}>
            <span className={styles.groupLabel}>Destaques do Portfólio</span>
            <Link href="/tecnologias/medical-san" className={styles.groupLink} id="showcase-link-medical-san">
              Ver todas as tecnologias Medical San →
            </Link>
          </div>
          <div className={styles.grid} role="list">
            {featured.map((p, i) => (
              <motion.article
                key={p.slug}
                id={`showcase-${p.slug}`}
                className={styles.card}
                custom={i}
                variants={cardV}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                role="listitem"
                aria-labelledby={`showcase-name-${p.slug}`}
              >
                <Link href={`/tecnologias/${p.slug}`} className={styles.cardLink}>
                  <div className={styles.cardImage}>
                    <Image
                      src={p.imagem}
                      alt={p.nome}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={styles.img}
                      style={{ objectFit: "cover" }}
                    />
                    <div className={styles.cardOverlay} />
                    <span className={styles.cardBadge}>{p.badge}</span>
                  </div>
                  <div className={styles.cardBody}>
                    <span className={styles.cardTag}>{p.tag}</span>
                    <h3 id={`showcase-name-${p.slug}`} className={styles.cardName}>{p.nome}</h3>
                    <p className={styles.cardDesc}>{p.descricaoCurta}</p>
                    <span className={styles.cardCta}>
                      Ver tecnologia →
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

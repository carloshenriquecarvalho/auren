import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import WhatsAppFloat from "@/app/components/WhatsAppFloat/WhatsAppFloat";
import { produtosPorMarca } from "@/app/lib/produtos";
import styles from "../marca.module.css";

export const metadata: Metadata = {
  title: "Tecnologias Medical San — Portfólio AUREN",
  description:
    "Conheça o portfólio completo de tecnologias Medical San comercializadas pela AUREN: Hakon (laser 4 comprimentos de onda), Hegon (CO₂ fracionado) e Ptolomeu (RF Microagulhada). Suporte consultivo dedicado.",
};

export default function MedicalSanPage() {
  const produtos = produtosPorMarca["medical-san"];

  return (
    <>
      <Navbar />
      <main id="medical-san-main">

        {/* Hero */}
        <section className={styles.hero} aria-labelledby="ms-hero-title">
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className="section-label">Medical San</span>
            </div>
            <h1 id="ms-hero-title" className={styles.heroTitle}>
              Tecnologia de ponta para<br />
              <em>resultados que transformam.</em>
            </h1>
            <p className={styles.heroSub}>
              A Medical San é uma das principais indústrias de tecnologias para
              estética premium do Brasil. A AUREN é parceira comercial,
              levando suporte consultivo e presença contínua
              a cada clínica atendida.
            </p>
            <div className={styles.heroActions}>
              <Link href="#ms-produtos" className={styles.ctaPrimary} id="ms-hero-cta">
                Ver tecnologias →
              </Link>
              <Link href="/#contato" className={styles.ctaSecondary}>
                Falar com consultor
              </Link>
            </div>
          </div>
          <div className={styles.heroImageWrap} aria-hidden="true">
            <Image
              src="/logo-fundo-removido-sem-texto.png"
              alt="Medical San — AUREN"
              width={440}
              height={440}
              className={styles.heroLogo}
              priority
            />
          </div>
        </section>

        {/* Sobre a Marca */}
        <section className={styles.sobreMarca} aria-labelledby="ms-sobre-title">
          <div className={styles.container}>
            <div className={styles.sobreGrid}>
              <div>
                <div className={styles.labelRow}>
                  <span className={styles.divider} aria-hidden="true" />
                  <span className="section-label" style={{ color: "var(--gold-signature)" }}>Sobre a Marca</span>
                </div>
                <h2 id="ms-sobre-title" className={styles.sobreTitle}>
                  Referência nacional em<br />tecnologias estéticas premium.
                </h2>
              </div>
              <div className={styles.sobreTexto}>
                <p className={styles.body}>
                  A Medical San desenvolve tecnologias de alta performance para o
                  mercado de estética profissional, com rigoroso
                  controle de qualidade em toda a cadeia produtiva.
                </p>
                <p className={styles.body}>
                  Cada tecnologia do portfólio Medical San é concebida para
                  oferecer máxima eficácia clínica, segurança ao paciente e
                  retorno consistente ao profissional — tornando-se um ativo
                  estratégico para clínicas de alto padrão.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Produtos */}
        <section id="ms-produtos" className={styles.produtos} aria-labelledby="ms-produtos-title">
          <div className={styles.container}>
            <div className={styles.produtosHeader}>
              <div className={styles.labelRow}>
                <span className={styles.divider} aria-hidden="true" />
                <span className="section-label">Portfólio</span>
              </div>
              <h2 id="ms-produtos-title" className={styles.produtosTitle}>
                Três tecnologias,<br /><em>um padrão de excelência.</em>
              </h2>
            </div>

            <div className={styles.produtosGrid}>
              {produtos.map((p) => (
                <article key={p.slug} id={`ms-card-${p.slug}`} className={styles.produtoCard}>
                  <div className={styles.produtoImage}>
                    <Image
                      src={p.imagem}
                      alt={p.nome}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: "cover" }}
                      className={styles.produtoImg}
                    />
                  </div>
                  <div className={styles.produtoBody}>
                    <span className={styles.produtoTag}>{p.tag}</span>
                    <h3 className={styles.produtoNome}>{p.nome}</h3>
                    <p className={styles.produtoDesc}>{p.descricaoCurta}</p>
                    <ul className={styles.produtoSpecs}>
                      {p.specs.map((s) => (
                        <li key={s.label} className={styles.specItem}>
                          <span className={styles.specLabel}>{s.label}</span>
                          <span className={styles.specValor}>{s.valor}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/tecnologias/${p.slug}`}
                      className={styles.produtoCta}
                      id={`ms-cta-${p.slug}`}
                    >
                      Ver detalhes completos →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaBox}>
              <h2 className={styles.ctaTitle}>Pronto para investir com segurança?</h2>
              <p className={styles.ctaSub}>
                Um consultor AUREN está disponível para apresentar as tecnologias
                Medical San, entender o perfil da sua clínica e propor o protocolo
                mais adequado para o seu negócio.
              </p>
              <div className={styles.ctaActions}>
                <Link href="/#contato" className={styles.ctaPrimary} id="ms-cta-contato">
                  Falar com um consultor
                </Link>
                <a
                  href="https://wa.me/556193322477"
                  className={styles.ctaWa}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="ms-cta-whatsapp"
                >
                  WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

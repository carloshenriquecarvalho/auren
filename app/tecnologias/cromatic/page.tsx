import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import WhatsAppFloat from "@/app/components/WhatsAppFloat/WhatsAppFloat";
import { produtosPorMarca } from "@/app/lib/produtos";
import styles from "../marca.module.css";

export const metadata: Metadata = {
  title: "Tecnologias Cromatic — Portfólio AUREN",
  description:
    "Conheça o portfólio completo de tecnologias Cromatic comercializadas pela AUREN: Neo One (laser pigmentos), Fusion (CO₂ fracionado) e Trinity Go (HIFU + RF + EMS). Suporte consultivo dedicado para sua clínica.",
};

export default function CromaticPage() {
  const produtos = produtosPorMarca["cromatic"];

  return (
    <>
      <Navbar />
      <main id="cromatic-main">

        {/* Hero */}
        <section className={styles.hero} aria-labelledby="cromatic-hero-title">
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className="section-label">Cromatic</span>
            </div>
            <h1 id="cromatic-hero-title" className={styles.heroTitle}>
              Inovação estética para<br />
              <em>clínicas que exigem mais.</em>
            </h1>
            <p className={styles.heroSub}>
              A Cromatic desenvolve plataformas de estética avançada para
              profissionais que buscam versatilidade, eficácia e resultados
              consistentes. A AUREN comercializa o portfólio Cromatic com
              suporte técnico completo e presença consultiva contínua.
            </p>
            <div className={styles.heroActions}>
              <Link href="#cromatic-produtos" className={styles.ctaPrimary} id="cromatic-hero-cta">
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
              alt="Cromatic — AUREN"
              width={440}
              height={440}
              className={styles.heroLogo}
              priority
            />
          </div>
        </section>

        {/* Sobre a Marca */}
        <section className={styles.sobreMarca} aria-labelledby="cromatic-sobre-title">
          <div className={styles.container}>
            <div className={styles.sobreGrid}>
              <div>
                <div className={styles.labelRow}>
                  <span className={styles.divider} aria-hidden="true" />
                  <span className="section-label" style={{ color: "var(--gold-signature)" }}>Sobre a Marca</span>
                </div>
                <h2 id="cromatic-sobre-title" className={styles.sobreTitle}>
                  Plataformas modulares para<br />alta performance clínica.
                </h2>
              </div>
              <div className={styles.sobreTexto}>
                <p className={styles.body}>
                  A Cromatic é reconhecida no mercado de estética profissional
                  por desenvolver plataformas modulares que combinam múltiplas
                  tecnologias em sistemas compactos e de alta eficácia clínica.
                </p>
                <p className={styles.body}>
                  Com registro ANVISA e protocolos validados, as tecnologias
                  Cromatic ampliam o portfólio de tratamentos da clínica sem
                  exigir grandes investimentos em espaço físico — maximizando
                  o retorno por metro quadrado e por sessão.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Produtos */}
        <section id="cromatic-produtos" className={styles.produtos} aria-labelledby="cromatic-produtos-title">
          <div className={styles.container}>
            <div className={styles.produtosHeader}>
              <div className={styles.labelRow}>
                <span className={styles.divider} aria-hidden="true" />
                <span className="section-label">Portfólio</span>
              </div>
              <h2 id="cromatic-produtos-title" className={styles.produtosTitle}>
                Três plataformas,<br /><em>infinitas possibilidades.</em>
              </h2>
            </div>

            <div className={styles.produtosGrid}>
              {produtos.map((p) => (
                <article key={p.slug} id={`cromatic-card-${p.slug}`} className={styles.produtoCard}>
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
                      id={`cromatic-cta-${p.slug}`}
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
              <h2 className={styles.ctaTitle}>Interessado no portfólio Cromatic?</h2>
              <p className={styles.ctaSub}>
                Um consultor AUREN pode apresentar as tecnologias Cromatic,
                avaliar o perfil da sua clínica e propor o conjunto de soluções
                que melhor se adapta ao seu fluxo de atendimento e objetivos.
              </p>
              <div className={styles.ctaActions}>
                <Link href="/#contato" className={styles.ctaPrimary} id="cromatic-cta-contato">
                  Falar com um consultor
                </Link>
                <a
                  href="https://wa.me/556193322477"
                  className={styles.ctaWa}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cromatic-cta-whatsapp"
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

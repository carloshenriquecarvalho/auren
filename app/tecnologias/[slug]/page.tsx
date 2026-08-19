import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import WhatsAppFloat from "@/app/components/WhatsAppFloat/WhatsAppFloat";
import { getProduto, produtos } from "@/app/lib/produtos";
import styles from "./produto.module.css";

// Static params for all products
export function generateStaticParams() {
  return produtos.map((p) => ({ slug: p.slug }));
}

// Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const produto = getProduto(slug);
  if (!produto) return { title: "Tecnologia não encontrada" };
  return {
    title: `${produto.nome} — ${produto.marca} | AUREN`,
    description: produto.descricaoCurta,
  };
}

export default async function ProdutoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const produto = getProduto(slug);
  if (!produto) notFound();

  return (
    <>
      <Navbar />
      <main id="produto-main">

        {/* Breadcrumb */}
        <nav className={styles.breadcrumb} aria-label="Navegação">
          <div className={styles.breadcrumbInner}>
            <Link href="/" className={styles.breadLink}>Home</Link>
            <span className={styles.breadSep} aria-hidden="true">/</span>
            <Link
              href={`/tecnologias/${produto.marcaSlug}`}
              className={styles.breadLink}
            >
              {produto.marca}
            </Link>
            <span className={styles.breadSep} aria-hidden="true">/</span>
            <span className={styles.breadCurrent}>{produto.nome}</span>
          </div>
        </nav>

        {/* Hero do Produto */}
        <section className={styles.hero} aria-labelledby="produto-title">
          <div className={styles.heroImage}>
            <Image
              src={produto.imagem}
              alt={produto.nome}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 55vw"
              style={{ objectFit: "cover" }}
              className={styles.heroImg}
            />
            <div className={styles.heroOverlay} />
          </div>
          <div className={styles.heroContent}>
            <div className={styles.heroMeta}>
              <span className={styles.heroTag}>{produto.tag}</span>
              <span className={styles.heroBadge}>{produto.badge}</span>
            </div>
            <h1 id="produto-title" className={styles.heroTitle}>{produto.nome}</h1>
            <p className={styles.heroBrand}>{produto.marca}</p>
            <p className={styles.heroDesc}>{produto.descricaoCurta}</p>
            <div className={styles.heroActions}>
              <a
                href={`https://wa.me/556193322477?text=Olá! Tenho interesse na tecnologia ${produto.nome}. Poderia me passar mais informações?`}
                className={styles.ctaWa}
                target="_blank"
                rel="noopener noreferrer"
                id={`produto-cta-wa-${produto.slug}`}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Solicitar informações
              </a>
              <Link href="/#contato" className={styles.ctaContato} id={`produto-cta-form-${produto.slug}`}>
                Formulário de contato
              </Link>
            </div>
          </div>
        </section>

        {/* Detalhes */}
        <section className={styles.detalhes}>
          <div className={styles.container}>
            <div className={styles.detalhesGrid}>

              {/* Descrição longa */}
              <div className={styles.descricao}>
                <div className={styles.labelRow}>
                  <span className={styles.divider} aria-hidden="true" />
                  <span className="section-label">Sobre a Tecnologia</span>
                </div>
                <h2 className={styles.descricaoTitle}>
                  {produto.nome} —<br /><em>Conheça em profundidade.</em>
                </h2>
                <p className={styles.descricaoTexto}>{produto.descricaoLonga}</p>
              </div>

              {/* Specs table */}
              <aside className={styles.specs} aria-labelledby="specs-title">
                <h2 id="specs-title" className={styles.specsTitle}>Especificações Técnicas</h2>
                <table className={styles.specsTable}>
                  <tbody>
                    {produto.specs.map((s) => (
                      <tr key={s.label} className={styles.specRow}>
                        <th className={styles.specLabel} scope="row">{s.label}</th>
                        <td className={styles.specValor}>{s.valor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </aside>
            </div>
          </div>
        </section>

        {/* Indicações e Benefícios */}
        <section className={styles.indicacoes} aria-label="Indicações e benefícios">
          <div className={styles.container}>
            <div className={styles.ibGrid}>

              <div className={styles.ibCol} id={`produto-indicacoes-${produto.slug}`}>
                <div className={styles.labelRow}>
                  <span className={styles.divider} aria-hidden="true" />
                  <span className="section-label">Indicações</span>
                </div>
                <h2 className={styles.ibTitle}>Para quem é indicado?</h2>
                <ul className={styles.ibList}>
                  {produto.indicacoes.map((ind) => (
                    <li key={ind} className={styles.ibItem}>
                      <span className={styles.ibDot} aria-hidden="true" />
                      {ind}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.ibCol} id={`produto-beneficios-${produto.slug}`}>
                <div className={styles.labelRow}>
                  <span className={styles.divider} aria-hidden="true" />
                  <span className="section-label" style={{ color: "var(--gold-signature)" }}>Diferenciais</span>
                </div>
                <h2 className={styles.ibTitle}>Por que escolher o {produto.nome}?</h2>
                <ul className={styles.ibList}>
                  {produto.beneficios.map((ben) => (
                    <li key={ben} className={`${styles.ibItem} ${styles.ibItemGold}`}>
                      <span className={`${styles.ibDot} ${styles.ibDotGold}`} aria-hidden="true" />
                      {ben}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className={styles.ctaSection} aria-label="Call to action">
          <div className={styles.container}>
            <div className={styles.ctaBox}>
              <div className={styles.ctaImageWrap} aria-hidden="true">
                <Image
                  src={produto.imagem}
                  alt=""
                  width={280}
                  height={280}
                  style={{ objectFit: "contain" }}
                  className={styles.ctaImage}
                />
              </div>
              <div className={styles.ctaContent}>
                <h2 className={styles.ctaTitle}>
                  Interesse no {produto.nome}?
                </h2>
                <p className={styles.ctaSub}>
                  Um consultor AUREN pode apresentar a tecnologia, detalhar
                  protocolos de uso e ajudar a avaliar o retorno esperado
                  para a realidade da sua clínica.
                </p>
                <div className={styles.ctaActions}>
                  <a
                    href={`https://wa.me/556193322477?text=Olá! Tenho interesse na tecnologia ${produto.nome}. Poderia me passar mais informações?`}
                    className={styles.ctaBtnPrimary}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`produto-final-cta-wa-${produto.slug}`}
                  >
                    Falar pelo WhatsApp
                  </a>
                  <Link
                    href={`/tecnologias/${produto.marcaSlug}`}
                    className={styles.ctaBtnSec}
                    id={`produto-back-${produto.slug}`}
                  >
                    ← Ver outros produtos {produto.marca}
                  </Link>
                </div>
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

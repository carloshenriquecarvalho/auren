import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import WhatsAppFloat from "@/app/components/WhatsAppFloat/WhatsAppFloat";
import styles from "./sobre.module.css";

export const metadata: Metadata = {
  title: "Sobre a AUREN — Quem Somos, Nossa Essência e Propósito",
  description:
    "Conheça a história da AUREN: uma empresa nascida da convicção de que confiança é o ativo mais precioso. Nossa essência, propósito, visão e valores.",
};

export default function SobrePage() {
  return (
    <>
      <Navbar />
      <main id="sobre-main" className={styles.page}>

        {/* Hero */}
        <section className={styles.hero} aria-labelledby="sobre-hero-title">
          <div className={styles.heroInner}>
            <div className={styles.heroBadge}>
              <span className="section-label">Sobre a AUREN</span>
            </div>
            <h1 id="sobre-hero-title" className={styles.heroTitle}>
              Uma empresa construída sobre<br />
              <em>confiança, fé e propósito.</em>
            </h1>
            <p className={styles.heroSub}>
              Não somos apenas representantes de tecnologias. Somos parceiros
              comprometidos com o crescimento de cada clínica que deposita sua
              confiança em nós.
            </p>
            <div className={styles.heroAccent} aria-hidden="true" />
          </div>
          <div className={styles.heroLogoWrap} aria-hidden="true">
            <Image
              src="/logo-fundo-removido-sem-texto.png"
              alt="Símbolo AUREN"
              width={480}
              height={480}
              className={styles.heroLogo}
              priority
            />
          </div>
        </section>

        {/* Nossa História */}
        <section className={styles.section} aria-labelledby="historia-title">
          <div className={styles.container}>
            <div className={styles.sectionLabel}>
              <span className={styles.divider} aria-hidden="true" />
              <span className="section-label">Nossa História</span>
            </div>
            <div className={styles.twoCol}>
              <div className={styles.colLeft}>
                <h2 id="historia-title" className={styles.sectionTitle}>
                  Nascemos da convicção de que<br />
                  <em>grandes empresas têm propósito.</em>
                </h2>
              </div>
              <div className={styles.colRight}>
                <p className={styles.body}>
                  Nós nascemos da convicção de que grandes empresas nascem quando
                  duas pessoas caminham na mesma direção, compartilhando o mesmo
                  propósito. Nosso símbolo reúne duas alianças que representam
                  compromisso: entre seus fundadores, entre a empresa e cada
                  cliente que deposita sua confiança em nós.
                </p>
                <p className={styles.body}>
                  No centro, três traços apontam para o alto, lembrando que nossa
                  maior referência é a Trindade: Pai, Filho e Espírito Santo. Eles
                  representam direção, amor e sabedoria. As alianças protegem a
                  Trindade, e a Trindade sustenta as alianças. Essa é a nossa
                  essência: relacionamentos duradouros, decisões guiadas por
                  princípios e um propósito maior do que simplesmente vender
                  tecnologias.
                </p>
                <p className={styles.body}>
                  O dourado representa aquilo que é precioso: integridade,
                  qualidade e legado. Nossa missão é levar tecnologia que
                  transforma vidas, sempre guiados pela fé, pela excelência e
                  pelo compromisso com as pessoas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nossa Essência */}
        <section className={styles.sectionAlt} aria-labelledby="essencia-title">
          <div className={styles.container}>
            <div className={styles.sectionLabel}>
              <span className={styles.divider} aria-hidden="true" />
              <span className="section-label" style={{ color: "var(--gold-signature)" }}>Nossa Essência</span>
            </div>
            <h2 id="essencia-title" className={styles.sectionTitle}>
              Confiança como ativo inegociável.
            </h2>
            <div className={styles.essenciaGrid}>
              <div className={styles.essenciaQuote}>
                <p className={styles.quote}>
                  "Em um ecossistema onde a variedade de tecnologias é uma
                  realidade constante, o que diferencia uma marca de sucesso
                  de uma comodidade é a densidade da reputação."
                </p>
              </div>
              <div className={styles.colRight}>
                <p className={styles.body}>
                  A nossa essência é sintetizada em um único pilar inegociável:
                  a confiança. Para nós, confiança é um ativo que permeia cada
                  contrato assinado e cada suporte consultivo realizado.
                  Manifestamos essa essência através de transparência nas negociações.
                </p>
                <p className={styles.body}>
                  No final do dia, não buscamos apenas a satisfação do cliente,
                  mas a sua tranquilidade absoluta — sabendo que somos o parceiro
                  que estará presente para sustentar sua jornada de crescimento,
                  independentemente das oscilações do mercado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Propósito e Visão */}
        <section className={styles.section} aria-labelledby="proposito-title">
          <div className={styles.container}>
            <div className={styles.pvGrid}>
              <article className={styles.pvCard} id="sobre-proposito">
                <div className={styles.sectionLabel}>
                  <span className={styles.divider} aria-hidden="true" />
                  <span className="section-label">Propósito</span>
                </div>
                <h2 id="proposito-title" className={styles.pvTitle}>
                  Construir relações sólidas de confiança com cada cliente.
                </h2>
                <p className={styles.body}>
                  Tecnologia, quando combinada com qualidade, conhecimento e
                  suporte especializado, tem o poder de transformar negócios e
                  impulsionar resultados. Ajudamos profissionais de estética a
                  crescerem com inovação, segurança, excelência e parceria.
                </p>
              </article>
              <article className={styles.pvCard} id="sobre-visao">
                <div className={styles.sectionLabel}>
                  <span className={styles.divider} aria-hidden="true" />
                  <span className="section-label">Visão</span>
                </div>
                <h2 className={styles.pvTitle}>
                  Ser referência nacional na representação de tecnologias estéticas premium.
                </h2>
                <p className={styles.body}>
                  Ser lembrada pela alta qualidade das tecnologias oferecidas e
                  pela confiança conquistada junto aos clientes. Destacar-se pela
                  excelência no atendimento em todas as etapas da jornada e
                  construir parcerias sólidas, duradouras e fundamentadas em
                  compromisso, transparência e resultados.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className={styles.sectionAlt} aria-labelledby="valores-brand-title">
          <div className={styles.container}>
            <div className={styles.sectionLabel}>
              <span className={styles.divider} aria-hidden="true" />
              <span className="section-label" style={{ color: "var(--gold-signature)" }}>Nossos Valores</span>
            </div>
            <h2 id="valores-brand-title" className={styles.sectionTitle}>
              Os princípios que nos orientam.
            </h2>
            <div className={styles.valoresGrid}>
              {[
                {
                  id: "integridade",
                  title: "Integridade",
                  body: "Confiança começa com transparência. Conduzimos negociações com honestidade e responsabilidade, buscando a melhor solução para o cliente. Preferimos construir relações baseadas na verdade, mesmo que isso signifique abrir mão de uma oportunidade.",
                },
                {
                  id: "excelencia",
                  title: "Excelência",
                  body: "Melhoramos continuamente nossos processos para garantir um suporte profissional, eficiente e alinhado às expectativas dos profissionais que confiam na empresa.",
                },
                {
                  id: "responsabilidade",
                  title: "Responsabilidade",
                  body: "O suporte não termina com a venda. Reconhecemos que cada tecnologia representa um investimento significativo e nos comprometemos a estar presentes em toda a jornada — com suporte, orientação e acompanhamento.",
                },
                {
                  id: "fe",
                  title: "Fé",
                  body: "Cada decisão da AUREN é sustentada pela convicção profunda de que propósito e resultado constroem-se juntos, ao longo do tempo. Não nos movemos por tendência de mercado ou pressão de volume.",
                },
                {
                  id: "relacionamentos",
                  title: "Relacionamentos",
                  body: "Preferimos profundidade à escala. Uma clínica que renova o contrato por anos e nos indica a colegas é mais valiosa do que contratos esporádicos. Relacionamento é ativo — tratamos assim.",
                },
              ].map((v) => (
                <article key={v.id} id={`sobre-valor-${v.id}`} className={styles.valorCard}>
                  <h3 className={styles.valorTitle}>{v.title}</h3>
                  <p className={styles.body}>{v.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Quem Somos — Personalidade */}
        <section className={styles.section} aria-labelledby="personalidade-title">
          <div className={styles.container}>
            <div className={styles.twoCol}>
              <div className={styles.colLeft}>
                <div className={styles.sectionLabel}>
                  <span className={styles.divider} aria-hidden="true" />
                  <span className="section-label">Quem Somos</span>
                </div>
                <h2 id="personalidade-title" className={styles.sectionTitle}>
                  Sofisticação discreta.<br />
                  <em>Autoridade serena.</em>
                </h2>
              </div>
              <div className={styles.colRight}>
                <p className={styles.body}>
                  A nossa personalidade é definida por uma sofisticação discreta
                  e uma autoridade serena. Somos profissionais que valorizam a
                  inteligência estratégica e o preparo técnico. Nossa cultura
                  reflete uma busca constante pela consistência.
                </p>
                <p className={styles.body}>
                  Adotamos uma postura essencialmente consultiva, preferindo o
                  diálogo construtivo ao discurso agressivo de vendas. Nossa
                  competência é a nossa principal ferramenta de convencimento.
                </p>
                <p className={styles.body}>
                  Somos sinônimo de uma elite profissional que entende que o
                  verdadeiro luxo no mercado de saúde é a combinação de um
                  atendimento humano, ético e altamente competente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nossa Experiência */}
        <section className={styles.sectionAlt} aria-labelledby="experiencia-brand-title">
          <div className={styles.container}>
            <div className={styles.sectionLabel}>
              <span className={styles.divider} aria-hidden="true" />
              <span className="section-label" style={{ color: "var(--gold-signature)" }}>A Experiência AUREN</span>
            </div>
            <h2 id="experiencia-brand-title" className={styles.sectionTitle}>
              Um ecossistema planejado de excelência.
            </h2>
            <div className={styles.experienciaGrid}>
              <p className={styles.bodyLarge}>
                A experiência AUREN é um ecossistema planejado de excelência,
                onde cada etapa da jornada do cliente é desenhada para reforçar
                nossa representatividade. Não acreditamos em momentos isolados
                de qualidade, mas sim em uma contínua entrega de valor.
              </p>
              <p className={styles.bodyLarge}>
                Desde o primeiro acesso ao site até o pós-venda, queremos que
                nossos clientes percebam organização e segurança. Cada interação,
                seja uma proposta comercial executada com precisão, é uma
                oportunidade de comunicar nossa essência.
              </p>
              <p className={styles.bodyLarge}>
                Nossa comunicação é elegante, objetiva e, acima de tudo, útil.
                Escolher a AUREN significa escolher tranquilidade para investir
                com segurança.
              </p>
            </div>
          </div>
        </section>

        {/* Nosso Compromisso */}
        <section className={styles.section} aria-labelledby="compromisso-title">
          <div className={styles.container}>
            <div className={styles.compromissoInner}>
              <div className={styles.sectionLabel}>
                <span className={styles.divider} aria-hidden="true" />
                <span className="section-label">Nosso Compromisso</span>
              </div>
              <h2 id="compromisso-title" className={styles.sectionTitle}>
                Impacto positivo, legado duradouro.
              </h2>
              <blockquote className={styles.compromissoQuote}>
                "Construímos nossa dedicação em ser muito mais que uma ponte
                entre você e a tecnologia — somos um alicerce para o
                desenvolvimento da sua clínica."
              </blockquote>
              <p className={styles.body}>
                Nosso compromisso é com o impacto positivo. Não almejamos apenas
                o crescimento métrico, mas a construção de uma reputação que
                resiste a décadas. O verdadeiro sucesso de uma empresa é medido
                pelas vidas transformadas e pelas carreiras impulsionadas.
              </p>
              <p className={styles.body}>
                Nos comprometemos a manter a integridade absoluta como nosso
                norte, garantindo que a excelência seja sempre acompanhada por
                uma conduta ética impecável, servindo como um modelo de
                governança e humanidade.
              </p>
              <Link href="/#contato" className={styles.ctaBtn} id="sobre-cta">
                Inicie uma conversa consultiva
                <span aria-hidden="true"> →</span>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

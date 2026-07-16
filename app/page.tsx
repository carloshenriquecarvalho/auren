import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import SectionHero from "@/app/components/sections/SectionHero/SectionHero";
import SectionConfianca from "@/app/components/sections/SectionConfianca/SectionConfianca";
import SectionSobre from "@/app/components/sections/SectionSobre/SectionSobre";
import SectionEssencia from "@/app/components/sections/SectionEssencia/SectionEssencia";
import SectionValores from "@/app/components/sections/SectionValores/SectionValores";
import SectionMercado from "@/app/components/sections/SectionMercado/SectionMercado";
import SectionSolucoes from "@/app/components/sections/SectionSolucoes/SectionSolucoes";
import SectionIdentidade from "@/app/components/sections/SectionIdentidade/SectionIdentidade";
import SectionExperiencia from "@/app/components/sections/SectionExperiencia/SectionExperiencia";
import SectionContato from "@/app/components/sections/SectionContato/SectionContato";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Task 2.1 — Hero com novo posicionamento */}
        <SectionHero />

        {/* Task 2.2 — Credibilidade / prova sem dados inventados */}
        <SectionConfianca />

        {/* Task 2.6 — Quem Somos: personalidade e cultura humanizada */}
        <SectionSobre />

        {/* Task 2.3 — Essência / Propósito / Missão / Visão */}
        <SectionEssencia />

        {/* Task 2.4 — 5 Valores: Fé, Integridade, Excelência, Relacionamentos, Responsabilidade */}
        <SectionValores />

        {/* Task 2.5 — Como enxergamos o mercado: ecossistema de confiança */}
        <SectionMercado />

        {/* Soluções — Hakon, Hegon, CO2 */}
        <SectionSolucoes />

        {/* Task 2.7 — Nossa Identidade: significado da marca */}
        <SectionIdentidade />

        {/* Task 2.8 — A Experiência AUREN: timeline da jornada */}
        <SectionExperiencia />

        {/* Task 2.9 — Contato: formulário consultivo */}
        <SectionContato />
      </main>
      <Footer />
    </>
  );
}

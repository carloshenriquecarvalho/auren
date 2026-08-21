export type Produto = {
  slug: string;
  nome: string;
  marca: "Medical San" | "Cromatic";
  marcaSlug: "medical-san" | "cromatic";
  tag: string;
  badge: string;
  imagem: string;
  descricaoCurta: string;
  descricaoLonga: string;
  specs: { label: string; valor: string }[];
  indicacoes: string[];
  beneficios: string[];
};

export const produtos: Produto[] = [
  {
    slug: "hakon",
    nome: "Hakon",
    marca: "Medical San",
    marcaSlug: "medical-san",
    tag: "Laser",
    badge: "Epilação",
    imagem: "/products/hakon-photo.png",
    descricaoCurta:
      "O Hakon é o laser de depilação da Medical San com 4 comprimentos de onda — Rubi, Alexandrite, Diodo e Nd:YAG — para atuar em diferentes profundidades de folículos pilosos e todos os fototipos de pele.",
    descricaoLonga:
      "O Hakon é a plataforma de depilação a laser da Medical San que combina quatro comprimentos de onda em um único equipamento: Rubi (694nm) para fototipos I a III e pelos castanho claro; Alexandrite (755nm) para fototipos mais altos; Diodo (808nm) com segurança para fototipos I a V; e Nd:YAG (1064nm), ideal para fototipos IV a VI com menor risco de intercorrências. Essa combinação permite atuar em diferentes profundidades dos folículos pilosos, tornando o Hakon eficaz para qualquer perfil de paciente. A ponteira resfriada atinge -12°C, garantindo máximo conforto durante a aplicação, e o software intuitivo com 3 modos de aplicação (Pontual, Sequencial e Varredura) facilita a personalização dos protocolos. Com 40 milhões de disparos disponíveis, o Hakon é um investimento de longa durabilidade para a clínica.",
    specs: [
      { label: "Comprimentos de Onda", valor: "Rubi 694nm / Alexandrite 755nm / Diodo 808nm / Nd:YAG 1064nm" },
      { label: "Energia", valor: "1 J/cm² a 70 J/cm²" },
      { label: "Frequência", valor: "1 a 10 Hz" },
      { label: "Resfriamento da Ponteira", valor: "Até -12°C" },
      { label: "Handpiece", valor: "12 × 15mm" },
      { label: "Disparos Totais", valor: "40 milhões de disparos" },
      { label: "Potência", valor: "1500 VA" },
      { label: "Volume de Água", valor: "1200ml de água destilada/deionizada a cada 30 dias" },
      { label: "Modos de Aplicação", valor: "Pontual (1Hz) / Sequencial (3Hz) / Varredura (5Hz)" },
    ],
    indicacoes: [
      "Fototipos I a III — Rubi e Alexandrite (pelos castanho claro)",
      "Fototipos I a V — Diodo (808nm)",
      "Fototipos IV a VI — Nd:YAG 1064nm (menor risco de intercorrências)",
      "Face, corpo e áreas íntimas",
      "Pelos finos e grossos em diferentes profundidades",
    ],
    beneficios: [
      "4 comprimentos de onda para qualquer fototipo",
      "Ponteira resfriada a -12°C — máximo conforto",
      "40 milhões de disparos — alta durabilidade",
      "3 modos de aplicação para protocolos personalizados",
      "Software intuitivo e fácil operação",
    ],
  },
  {
    slug: "hegon",
    nome: "Hegon",
    marca: "Medical San",
    marcaSlug: "medical-san",
    tag: "CO₂ Fracionado",
    badge: "CO₂ Fracionado",
    imagem: "/products/hegon-photo2.png",
    descricaoCurta:
      "O Hegon é o laser CO₂ fracionado de referência para resurfacing — padrão ouro com resultados em uma única sessão, disparos ilimitados e ultravelozes, e o maior número de ponteiras do mercado.",
    descricaoLonga:
      "O Hegon da Medical San é uma plataforma de laser CO₂ fracionado de alta performance, desenvolvida para o mercado médico com potência de 60W e voltagem bivolt (110–230V). Com disparos ilimitados e ultravelozes, o Hegon é o tratamento padrão ouro de escolha para resurfacing, entregando resultados expressivos em apenas uma sessão. O equipamento conta com o maior número de ponteiras do mercado, tela interativa ultra tecnológica, até 20 stakes configuráveis e ajuste da área de emissão de 1×1 a 20×20mm — além de múltiplos formatos geométricos e a maior diversidade de protocolos disponível. Operando nos modos Fracionado, Cirúrgico e Íntimo, o Hegon atende desde tratamentos dermatológicos e ginecológicos até cirurgias de tecidos moles com máxima precisão e segurança.",
    specs: [
      { label: "Tecnologia", valor: "Laser CO₂ Fracionado — 10.600nm" },
      { label: "Potência", valor: "60W" },
      { label: "Tensão", valor: "Bivolt — 110 a 230V" },
      { label: "Disparos", valor: "Ilimitados e ultravelozes" },
      { label: "Stakes", valor: "Até 20 stakes configuráveis" },
      { label: "Área de Emissão", valor: "1×1mm a 20×20mm ajustável" },
      { label: "Modos de Operação", valor: "Fracionado / Cirúrgico / Íntimo" },
      { label: "Ponteiras", valor: "Maior número de ponteiras do mercado" },
    ],
    indicacoes: [
      "Cicatrizes de acne e cicatrizes após queimaduras",
      "Cicatrizes hipertróficas",
      "Manchas e lesões pigmentadas",
      "Corte cirúrgico de tecidos moles",
      "Tratamentos ginecológicos",
      "Região íntima interna e externa",
    ],
    beneficios: [
      "Padrão ouro para resurfacing — resultados em 1 sessão",
      "Disparos ilimitados e de alta velocidade",
      "Maior versatilidade de configurações do mercado",
      "Tela interativa com múltiplos protocolos",
      "Bivolt — sem restrição de instalação",
    ],
  },
  {
    slug: "ptolomeu",
    nome: "Ptolomeu",
    marca: "Medical San",
    marcaSlug: "medical-san",
    tag: "Radiofrequência Microagulhada",
    badge: "Radiofrequência Robótica",
    imagem: "/products/ptolomeu-photo.png",
    descricaoCurta:
      "O Ptolomeu utiliza radiofrequência microagulhada para estimular colágeno em diferentes camadas da pele, com efeito lifting não invasivo e resultados naturais.",
    descricaoLonga:
      "O Ptolomeu representa o estado da arte em lifting não invasivo. Utilizando a tecnologia de radiofrequência microagulhada, o equipamento direciona energia com precisão milimétrica para as camadas profundas da pele — derme e subcutâneo — sem comprometer a superfície cutânea. O efeito é a contração imediata das fibras de colágeno e a estimulação da neocolagênese ao longo de meses.",
    specs: [
      { label: "Tecnologia", valor: "Radiofrequência Microagulhada" },
      { label: "Profundidades", valor: "0,2 a 7mm (Facial: 0,2–3,5mm / Corporal: 0,5–7mm)" },
      { label: "Cartuchos", valor: "4 cartuchos" },
      { label: "Potência Facial", valor: "5 a 200W" },
      { label: "Potência Corporal", valor: "5 a 300W" },
    ],
    indicacoes: [
      "Flacidez facial e cervical",
      "Lifting de sobrancelha e pálpebra",
      "Definição do contorno facial",
      "Flacidez corporal",
      "Gordura localizada (corporal)",
    ],
    beneficios: [
      "Sem cirurgia, sem tempo de recuperação",
      "Resultado imediato e progressivo",
      "Estimulação profunda do SMAS",
      "Efeito lifting natural e duradouro",
    ],
  },
  {
    slug: "neo-one",
    nome: "Neo One",
    marca: "Cromatic",
    marcaSlug: "cromatic",
    tag: "Laser",
    badge: "Laser",
    imagem: "/products/neo-one-photo.png",
    descricaoCurta:
      "O Neo One é um equipamento de epilação a laser de última geração, com tecnologia de diodo que garante resultados duradouros com conforto e segurança em todos os fototipos de pele.",
    descricaoLonga:
      "O Neo One da Cromatic é um equipamento de epilação a laser desenvolvido para oferecer máxima eficácia e conforto em todos os fototipos de pele. Baseado na tecnologia de laser de diodo, o Neo One entrega energia diretamente ao folículo piloso, promovendo a destruição seletiva do pelo sem agredir a pele ao redor. Seu sistema de resfriamento integrado reduz significativamente o desconforto durante o procedimento, tornando a experiência do paciente consideravelmente mais agradável. Compacto e de alta performance, o Neo One é a escolha ideal para clínicas que desejam oferecer epilação definitiva com segurança, resultado e agilidade em cada sessão.",
    specs: [
      { label: "Comprimentos de Onda", valor: "1320nm / 1064nm / 532nm" },
      { label: "Efeito", valor: "Maior efeito mecânico, menor efeito térmico" },
      { label: "Indicação Principal", valor: "Remoção otimizada de pigmentos" },
      { label: "Aplicabilidade", valor: "Diferentes condições e cores de pele" },
      { label: "Diferencial", valor: "Foco no pigmento — maior integridade da pele" },
    ],
    indicacoes: [
      "Epilação definitiva em todos os fototipos",
      "Pelos finos e grossos em face e corpo",
      "Áreas sensíveis como axilas e virilha",
      "Buço, barba e nuca",
      "Pernas, costas e braços",
    ],
    beneficios: [
      "Resultados duradouros desde as primeiras sessões",
      "Sistema de resfriamento para máximo conforto",
      "Seguro para diferentes fototipos de pele",
      "Sessões rápidas e alta produtividade para a clínica",
    ],
  },
  {
    slug: "fusion",
    nome: "Fusion",
    marca: "Cromatic",
    marcaSlug: "cromatic",
    tag: "CO₂ Fracionado",
    badge: "CO₂",
    imagem: "/products/fusion-photo1.png",
    descricaoCurta:
      "O Fusion é um laser CO₂ fracionado de 10.600nm com múltiplos modos de operação — fracionado, cirúrgico e íntimo — para rejuvenescimento, resurfacing e tratamentos íntimos femininos.",
    descricaoLonga:
      "O Fusion da Cromatic é uma tecnologia de laser CO₂ fracionado com comprimento de onda de 10.600nm, cujo cromóforo-alvo é a água presente nos tecidos. Atua pelo princípio da fototermólise seletiva, promovendo a vaporização precisa do tecido em microcolunas com mínimo dano térmico às estruturas adjacentes. O equipamento dispõe de seis modos de aplicação distintos — Laser Frio, Modo Fusion (Disparo Duplo), Fracionado Coring, Fracionado Clássico, Modo Cirúrgico e Modo Íntimo — permitindo personalizar cada protocolo de acordo com a indicação e a necessidade do paciente. Com aplicador fracionado leve e ergonômico, configurações avançadas de DOTZ, figuras geométricas e saída de feixe, o Fusion é indicado para rejuvenescimento facial e corporal, cicatrizes de acne, estrias, melasma, drug delivery, cirurgias de tecidos moles e saúde íntima feminina.",
    specs: [
      { label: "Tecnologia", valor: "Laser CO₂ Fracionado — 10.600nm" },
      { label: "Potência", valor: "60W" },
      { label: "Energia", valor: "1 a 300 mJ" },
      { label: "Largura de Pulso", valor: "0,5 a 10ms" },
      { label: "Modos de Operação", valor: "Laser Frio, Fusion (Disparo Duplo), Coring, Clássico, Cirúrgico, Íntimo" },
      { label: "Distância dos DOTZ", valor: "0,5 a 2,5mm (até 10 Overlap)" },
      { label: "Figuras Geométricas", valor: "Quadrado, Círculo, Triângulo e Hexágono" },
      { label: "Saída do Feixe", valor: "Ordenado, Central e Aleatório" },
      { label: "Resfriamento", valor: "Ventilação forçada" },
    ],
    indicacoes: [
      "Rejuvenescimento facial leve, moderado e intensivo",
      "Cicatrizes de acne e estrias",
      "Melasma e discromias",
      "Tratamentos peri-oral e peri-orbitário",
      "Cirurgias de tecidos moles",
      "Saúde íntima feminina (laser intravaginal)",
      "Drug Delivery",
    ],
    beneficios: [
      "6 modos de operação para máxima versatilidade",
      "Fototermólise seletiva com mínimo dano adjacente",
      "Renovação celular e estímulo de colágeno progressivo",
      "Aplicador leve, ergonômico e seguro",
      "Resultados visíveis a partir do 1º mês",
    ],
  },
  {
    slug: "trinity-go",
    nome: "Trinity Go",
    marca: "Cromatic",
    marcaSlug: "cromatic",
    tag: "HIFU + RF + EMS",
    badge: "HIFU",
    imagem: "/products/trinity-go-photo.jpeg",
    descricaoCurta:
      "O Trinity Go é uma plataforma eletromédica não invasiva que combina HIFU Micro e Macrofocado, Radiofrequência e Estimulação Muscular Eletromagnética em um único equipamento.",
    descricaoLonga:
      "O Trinity Go da Cromatic é uma plataforma eletromédica não invasiva que reúne quatro tecnologias em um único equipamento: Ultrassom Micro e Macrofocado (HIFU), Emissão Micropulsada (MPT), Radiofrequência (RF) e Estimulação Muscular Eletromagnética (EMS). Essa integração permite estímulos térmicos, mecânicos e bioelétricos de forma sinérgica, atuando simultaneamente na pele, na gordura e na musculatura. O Trinity Go conta com três transdutores estratégicos — Linear Microfocado para tratamentos faciais de precisão, Booster com design anatômico para maior acoplamento e melhor entrega de energia, e Corporal Macrofocado para protocolos de compactação de gordura e melhora da flacidez em regiões amplas — tornando-o uma das plataformas mais completas e versáteis do mercado estético.",
    specs: [
      { label: "Tecnologia", valor: "HIFU + MPT + Radiofrequência + EMS" },
      { label: "Transdutor Linear Microfocado", valor: "1,5mm / 2,0mm / 3,0mm / 4,5mm (facial)" },
      { label: "Transdutor Booster", valor: "1,5mm / 3mm / 4,5mm (facial — acoplamento anatômico)" },
      { label: "Transdutor Corporal Macrofocado", valor: "8mm / 13mm (corporal profundo)" },
    ],
    indicacoes: [
      "Lifting facial não invasivo",
      "Neocolagênese e firmeza da pele",
      "Compactação de gordura localizada",
      "Redução de flacidez facial e corporal",
      "Definição de contorno facial",
      "Tonificação muscular (EMS)",
    ],
    beneficios: [
      "4 tecnologias em um único equipamento",
      "Ação simultânea em pele, gordura e musculatura",
      "3 transdutores para face e corpo",
      "Estímulos térmicos, mecânicos e bioelétricos sinérgicos",
    ],
  },
];

export const produtosPorMarca = {
  "medical-san": produtos.filter((p) => p.marcaSlug === "medical-san"),
  cromatic: produtos.filter((p) => p.marcaSlug === "cromatic"),
};

export function getProduto(slug: string): Produto | undefined {
  return produtos.find((p) => p.slug === slug);
}

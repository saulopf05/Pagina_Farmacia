export type Course = {
  slug: string;
  title: string;
  category: string;
  audience: string;
  description: string;
  highlights: string[];
  duration: string;
  lessons: string;
  image: string;
  featured?: boolean;
  checkoutUrl: string;
  buttonText?: string;
  infoTitle?: string;
  infoDescription?: string;
};

export const COURSES: Course[] = [
  {
    slug: "farmacologia-no-esporte",
    title: "Farmacologia no Esporte",
    category: "Farmacologia",
    audience: "Farmacêuticos, Educadores Físicos, Nutricionistas e Médicos do Esporte",
    description:
      "Do mecanismo de ação à prática: ergogênicos, hormônios, suplementação e recursos farmacológicos aplicados à performance — com leitura crítica de evidência e responsabilidade profissional.",
    highlights: [
      "Ergogênicos e recursos farmacológicos",
      "Hormônios e moduladores no esporte",
      "Interações, riscos e doping",
    ],
    duration: "16h",
    lessons: "34 aulas",
    image: "/images/curso-farmacologia-esporte.jpg",
    featured: true,
    checkoutUrl: "https://pay.hotmart.com/L92540251K?checkoutMode=10&ref=L93736040J&bid=1792525715438",
  },
  {
    slug: "portaria-344-98",
    title: "Portaria 344/98",
    category: "Regulatório",
    audience: "Farmacêuticos e Estudantes de Farmácia",
    description:
      "Domine o regulamento de substâncias sob controle especial: listas, receituários, escrituração, SNGPC e fiscalização — sem medo da ANVISA e sem risco de autuação.",
    highlights: [
      "Listas A, B, C e retenção de receita",
      "Escrituração, SNGPC e balanços",
      "Fiscalização e responsabilidade técnica",
    ],
    duration: "7h",
    lessons: "20 aulas",
    image: "/images/curso-portaria-344.jpg",
    featured: true,
    checkoutUrl: "https://go.hotmart.com/C85513387A?ap=c54b",
  },
  {
    slug: "pericia-judicial-farmaceuticos",
    title: "Perícia Judicial para Farmacêuticos",
    category: "E-Book",
    audience: "Farmacêuticos que querem atuar como peritos e assistentes técnicos",
    description:
      "A nova fronteira da profissão: como se cadastrar nos tribunais, aceitar nomeações, estruturar o laudo e construir uma renda paralela atuando como perito judicial.",
    highlights: [
      "Cadastro em tribunais e nomeações",
      "Laudo pericial passo a passo",
      "Honorários, prazos e quesitos",
    ],
    duration: "16h",
    lessons: "36 aulas",
    image: "/images/curso-pericia-farmaceuticos.jpg",
    featured: true,
    checkoutUrl: "https://pay.hotmart.com/O95898307D?checkoutMode=10",
    buttonText: "Quero adquirir meu e-book",
    infoTitle: "Material de consulta",
    infoDescription: "Análise de prontuários e laudos periciais",
  },
  {
    slug: "farmacologia-obesidade",
    title: "Farmacologia no Tratamento da Obesidade",
    category: "Farmacologia",
    audience: "Farmacêuticos, Médicos, Nutricionistas e Enfermeiros",
    description:
      "Análogos de GLP-1, termogênicos, sacietógenos e off-label: entenda cada classe, o que a evidência sustenta e como orientar com segurança no cenário atual.",
    highlights: [
      "Análogos de GLP-1 e duplos agonistas",
      "Classes clássicas e uso off-label",
      "Efeitos adversos e acompanhamento",
    ],
    duration: "3h",
    lessons: "7 aulas",
    image: "/images/curso-obesidade.jpg",
    checkoutUrl: "https://pay.hotmart.com/D92481213R?checkoutMode=10",
  },
  {
    slug: "pericia-judicial-odontologia",
    title: "Perícia Judicial em Odontologia",
    category: "E-Book",
    audience: "Cirurgiões-dentistas de todas as especialidades",
    description:
      "Erro odontológico, dano estético, nexo causal e quantificação: a metodologia completa para atuar em processos judiciais com laudos tecnicamente inatacáveis.",
    highlights: [
      "Erro profissional e nexo causal",
      "Documentação e prova técnica",
      "Modelos de laudo e quesitos",
    ],
    duration: "15h",
    lessons: "34 aulas",
    image: "/images/curso-pericia-odontologia.jpg",
    checkoutUrl: "https://go.hotmart.com/I107160592E?ap=ea62",
    buttonText: "Quero adquirir meu e-book",
    infoTitle: "Material de consulta",
    infoDescription: "Análise de prontuários e laudos periciais",
  },
  {
    slug: "pericia-judicial-enfermagem",
    title: "Perícia Judicial em Enfermagem",
    category: "E-Book",
    audience: "Enfermeiros assistenciais, gestores e docentes",
    description:
      "Da anotação de enfermagem ao laudo: como analisar prontuários, identificar falhas assistenciais e responder quesitos judiciais como perito ou assistente técnico.",
    highlights: [
      "Análise de prontuário e SAE",
      "Responsabilidade civil em enfermagem",
      "Estrutura do laudo pericial",
    ],
    duration: "15h",
    lessons: "33 aulas",
    image: "/images/curso-pericia-enfermagem.jpg",
    checkoutUrl: "https://go.hotmart.com/V107160845C?ap=85d1",
    buttonText: "Quero adquirir meu e-book",
    infoTitle: "Material de consulta",
    infoDescription: "Análise de prontuários e laudos periciais",    
  },
];

export const STATS = [
  { value: 12000, suffix: "+", label: "Alunos formados", hint: "em todo o Brasil" },
  { value: 27, suffix: " anos", label: "De prática", hint: "farmácia, perícia e docência" },
  { value: 3, suffix: "", label: "Cursos completos", hint: "certificado incluso" },
  { value: 3, suffix: "", label: "E-books", hint: "certificado incluso" },
  { value: 4.9, suffix: "/5", label: "Nota média", hint: "avaliação dos alunos", decimals: 1 },
];

export const MARQUEE_ITEMS = [
  "Farmacologia Aplicada",
  "Portaria 344/98",
  "Perícia Judicial",
  "ANVISA",
  "Doping & Performance",
  "GLP-1",
  "Laudo Pericial",
  "SNGPC",
  "Responsabilidade Técnica",
  "Evidência Científica",
];

export const CREDENTIALS = [
  "[2018] Vice-presidente da Fundação Ezequiel Dias (Funed)",
  "[2012 - 2015] Vice-presidente do CRF/MG",
  "[2012 - 2019] Conselheiro Regional do CRF/MG",
  "Mais de 20 anos de experiência no Ensino Superior",
  "Professor nas faculdades PUC Minas, Faminas-BH e Anhanguera",
];

export type Testimonial = {
  name: string;
  role: string;
  course: string;
  quote: string;
  initials: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mariana Alves",
    role: "Farmacêutica responsável técnica",
    course: "Portaria 344/98",
    quote:
      "Eu vivia com medo de fiscalização. Depois do curso, reorganizei toda a escrituração da drogaria e passei pela visita da vigilância sem uma única inconformidade.",
    initials: "MA",
  },
  {
    name: "Rafael Monteiro",
    role: "Farmacêutico e treinador",
    course: "Farmacologia no Esporte",
    quote:
      "Conteúdo denso, mas explicado de um jeito que dá pra aplicar. Mudou completamente como eu conduzo as orientações dos meus atletas.",
    initials: "RM",
  },
  {
    name: "Dra. Camila Prado",
    role: "Cirurgiã-dentista",
    course: "Perícia Judicial em Odontologia",
    quote:
      "Fiz meu cadastro no tribunal seguindo o passo a passo das aulas e recebi a primeira nomeação em menos de três meses. Retorno absurdo pro valor investido.",
    initials: "CP",
  },
  {
    name: "Juliana Ribeiro",
    role: "Enfermeira coordenadora",
    course: "Perícia Judicial em Enfermagem",
    quote:
      "A parte de análise de prontuário é ouro. Hoje enxergo falhas assistenciais que antes passavam batido — e sei documentar tecnicamente.",
    initials: "JR",
  },
  {
    name: "Anderson Lima",
    role: "Farmacêutico clínico",
    course: "Farmacologia no Tratamento da Obesidade",
    quote:
      "Chegou na hora certa. Com a explosão dos análogos de GLP-1, virei a referência da equipe pra tirar dúvidas sobre segurança e acompanhamento.",
    initials: "AL",
  },
  {
    name: "Patrícia Gomes",
    role: "Farmacêutica perita",
    course: "Perícia Judicial para Farmacêuticos",
    quote:
      "O professor entrega modelos de laudo e responde dúvidas de verdade. Sai do curso com material pronto pra usar, não só com teoria.",
    initials: "PG",
  },
];

export const FAQS = [
  {
    q: "Os cursos são online e gravados?",
    a: "Sim. Todas as aulas são gravadas e ficam disponíveis na plataforma para você assistir quando e quantas vezes quiser, no computador ou no celular.",
  },
  {
    q: "Recebo certificado no final?",
    a: "Sim. Ao concluir as aulas você emite o certificado de conclusão com a carga horária do curso, válido para comprovação de horas complementares e titulação.",
  },
  {
    q: "Por quanto tempo tenho acesso ao conteúdo?",
    a: "O acesso é liberado imediatamente após a confirmação do pagamento e permanece disponível pelo período informado na página de checkout, incluindo as atualizações do curso.",
  },
  {
    q: "Preciso ser farmacêutico para fazer os cursos?",
    a: "Não necessariamente. Cada curso indica o público-alvo: os de farmacologia atendem farmacêuticos, médicos, nutricionistas, enfermeiros e educadores físicos, e os de perícia são direcionados a cada categoria profissional específica.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "A compra é processada pela Hotmart, com opção de cartão de crédito (com parcelamento), Pix ou boleto. O ambiente é seguro e o acesso é liberado automaticamente.",
  },
  {
    q: "E se o curso não for o que eu esperava?",
    a: "Você conta com a garantia de 7 dias prevista no Código de Defesa do Consumidor. Se não fizer sentido para você, basta solicitar o reembolso integral dentro desse prazo.",
  },
  {
    q: "Consigo tirar dúvidas com o professor?",
    a: "Sim. Cada curso tem canal de dúvidas com o Prof. Claudiney e sua equipe, além de materiais complementares e modelos de documentos para download.",
  },
];

export const CONTACT = {
  whatsapp: "+55 31 99590-3404",
  whatsappUrl: "https://wa.me/5531995903404",
  instagram: "prof.claudiney.ferreira",
  instagramUrl: "https://instagram.com/prof.claudiney.ferreira",
  youtube: "Prof. Claudiney Ferreira",
  youtubeUrl: "https://www.youtube.com/@prof.claudiney.ferreira",
  facebook: "Prof. Claudiney Ferreira",
  facebookUrl: "https://www.facebook.com/prof.claudineyferreira",
};

export const NAV_LINKS = [
  { label: "Cursos", href: "#cursos" },
  { label: "Professor", href: "#professor" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Dúvidas", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

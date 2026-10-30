import { ArrowDown, ArrowRight, Check, Clock3, GraduationCap, MessageCircle, PlayCircle, ShieldCheck, Sparkles, Users, Microscope, Dumbbell, Scale } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { COURSES } from "../lib/site-data";
import { Reveal, ScrollProgress } from "../components/ui/motion-primitives";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { CourseIntroduction } from "../components/course-introduction";
import { Faq } from "../components/faq";

const course = COURSES.find(({ slug }) => slug === "farmacologia-no-esporte")!;
const purchase = course.checkoutUrl;
const faqItems = [{"q":"Como funciona o Certificado de Conclusão digital?","a":"Alunos podem emitir esse certificado ao final do curso ou entrando em contato com o Autor ou Autora. Esses certificados podem ser compartilhados em redes sociais como o LinkedIn e inseridos em informações curriculares."},
                  {"q":"Como acesso meu produto?","a":"Você receberá o acesso a Farmacologia no Esporte por email. Pode ser um curso online, um ebook, uma série de videoaulas, um serviço, evento, etc. O conteúdo será acessado ou baixado através de um computador, celular, tablet ou outro dispositivo digital. Você também pode acessar o produto comprado na hotmart: 01 - Faça login clicando em Entrar 02 - Acesse o menu lateral, clique em Minha conta 03 - Clique em Minhas compras"},
                  {"q":"Quais são as formas de pagamento?","a":"O pagamento pode ser feito por cartão de crédito em até 12 vezes, PIX, boleto, e PayPal."},
                  {"q":"Após a compra, quanto tempo leva para eu receber o acesso?","a":"Assim que você efetua o pagamento você consegue acesso imediato ao curso."},
                  {"q":"Como funciona o Prazo de Garantia?","a":"O Prazo de Garantia é o período que você tem para pedir o reembolso integral do valor pago pela sua compra, caso o produto não seja satisfatório. Assim que solicitado, seu reembolso é processado automaticamente pela Hotmart em até 5 dias"},
                  {"q":"Preciso ter formação na área da saúde para fazer o curso?","a":"Você não precisa ter formação na área da saude, o intuito do curso é fazer com que qualquer pessoa interessada consiga obter o conhecimento sobre esse assunto."}];
const audience = ["Farmacêuticos", "Educadores físicos", "Nutricionistas", "Médicos do esporte"];
const navLinks = [{ label: "O Curso", href: "#sobre" }, { label: "Conteúdo", href: "#conteudo" }, { label: "Professor", href: "#professor" }, { label: "Dúvidas", href: "#duvidas" }];
const topics = [
  { n: "01", title: "Introdução à farmacologia esportiva", text: "Compreenda os fundamentos da farmacologia aplicada ao esporte, as formas farmacêuticas, as vias de administração e a relação entre medicamentos, exercício e desempenho." },
  { n: "02", title: "Farmacocinética e farmacodinâmica", text: "Estude absorção, distribuição, metabolismo e excreção dos fármacos, além dos mecanismos de ação, receptores e respostas farmacológicas no organismo." },
  { n: "03", title: "Esteroides anabolizantes", text: "Conheça a fisiologia da testosterona, os tipos de esteroides anabolizantes, seus mecanismos de ação, aplicações, efeitos adversos e riscos do uso não terapêutico." },
  { n: "04", title: "Moduladores seletivos de receptores androgênicos (SARMs)", text: "Entenda o mecanismo de ação dos SARMs, os principais compostos, suas aplicações investigacionais, vantagens propostas e riscos associados ao uso." },
  { n: "05", title: "EPO, GH, IGF-1 e insulina", text: "Explore a fisiologia hormonal, os mecanismos de ação, os efeitos metabólicos, as aplicações terapêuticas e os riscos relacionados ao uso dessas substâncias no esporte." },
  { n: "06", title: "Agonistas e antagonistas beta-adrenérgicos", text: "Compreenda o sistema nervoso simpático, os receptores adrenérgicos e a farmacologia de substâncias como salbutamol, clembuterol e propranolol." },
  { n: "07", title: "Dor e inflamação no esporte", text: "Estude a fisiologia da dor, os processos inflamatórios, analgésicos, anti-inflamatórios e corticosteroides, com foco no manejo farmacológico do atleta." },
  { n: "08", title: "Farmacologia da obesidade", text: "Conheça os aspectos fisiológicos da obesidade, sua relação com a atividade física e os principais medicamentos utilizados no tratamento e controle do peso corporal." },
  { n: "09", title: "Doping e antidopagem", text: "Entenda as regras da WADA, a lista de substâncias proibidas, os tipos de violações, as autorizações de uso terapêutico e o passaporte biológico." },
];

export default function PharmacologySport() {
  const reduce = useReducedMotion();

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#070a0f] font-sans text-white">
      <ScrollProgress />
      <SiteHeader navLinks={navLinks} homeHref="/" primaryHref={purchase} primaryLabel="Inscreva-se" />

      <main>
        <section id="topo" className="noise relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
          <div className="bg-grid absolute inset-0 opacity-50" />
          <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_75%_20%,rgba(56,189,248,0.15),transparent_65%)]" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              
              <div className="border-primary/25 bg-primary/[0.07] text-primary inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-medium tracking-[0.15em] uppercase"><Sparkles className="size-3.5" /> Formação online a certificado</div>
              <h1 className="font-display mt-6 max-w-2xl text-[clamp(2.5rem,6vw,4.6rem)] leading-[0.98] font-extrabold">Farmacologia <span className="text-gradient">no Esporte</span></h1>
              <p className="mt-6 max-w-xl text-[15px] leading-[1.8] text-white/60 sm:text-base">Entenda os recursos farmacológicos ligados a performance esportiva com base científica, visão prática e responsabilidade profissional.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={purchase} data-hotmart={course.slug} className="group bg-primary text-primary-foreground inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-xl">Quero fazer o curso <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></a>
                <a href="#conteudo" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm text-white/80 transition hover:bg-white/5">Ver o conteúdo <ArrowDown className="size-4" /></a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[12px] text-white/50">
                <span className="inline-flex items-center gap-2"><Clock3 className="text-primary size-4" /> 16 horas</span>
                <span className="inline-flex items-center gap-2"><PlayCircle className="text-primary size-4" /> 34 aulas</span>
                <span className="inline-flex items-center gap-2"><GraduationCap className="text-primary size-4" /> Certificado</span>
              </div>
            </motion.div>
            <Reveal delay={0.15}>
              <div className="relative mx-auto max-w-lg">
                <div className="bg-primary/15 absolute -inset-5 rounded-[2rem] blur-3xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
                  <img src="/images/curso-farmacoesporte.png" alt="Curso de Farmacologia no Esporte" className="aspect-[4/3] w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070a0f]/90 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8"><p className="eyebrow">Conhecimento para a prática</p><p className="font-display mt-2 text-xl font-semibold sm:text-2xl">Ciência, performance e segurança.</p></div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <CourseIntroduction id="sobre" eyebrow="Sobre a formação" title="Uma formação para ampliar a compreensão da farmacologia esportiva." description="O curso percorre recursos farmacológicos ligados ao exercício e à performance, conectando mecanismos de ação, evidências, segurança e responsabilidade profissional. A proposta é organizar conceitos importantes para que profissionais da saúde e do esporte analisem o tema com mais contexto e critério." points={["Farmacologia aplicada ao esporte","Leitura crítica das evidências","Segurança e responsabilidade"]} texture="grid" />

        <section id="conteudo" className="relative py-20 sm:py-28">
          <div className="bg-grid absolute inset-0 opacity-25" />
          <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
            <Reveal><p className="eyebrow">O que você vai estudar</p><h2 className="font-display mt-4 max-w-2xl text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.04] font-bold">Uma visão conectada da farmacologia esportiva</h2><p className="mt-4 max-w-xl text-sm leading-relaxed text-white/50">Uma jornada de 34 aulas e 16 horas para aprofundar conceitos e levar mais critério a prática.</p></Reveal>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {topics.map((topic, index) => <Reveal key={topic.n} delay={index * 0.08}><article className="card-surface h-full rounded-3xl p-6 sm:p-8"><span className="text-primary font-display text-sm font-bold tracking-widest">{topic.n}</span><h3 className="font-display mt-5 text-xl font-semibold text-white">{topic.title}</h3><p className="mt-3 text-[13.5px] leading-[1.8] text-white/50">{topic.text}</p></article></Reveal>)}
            </div>
            <Reveal delay={0.15}><div className="mt-9 flex flex-col items-start justify-between gap-5 rounded-3xl border border-primary/20 bg-primary/[0.05] p-6 sm:flex-row sm:items-center sm:p-8"><div><p className="font-display text-lg font-semibold">Comece a estudar no seu ritmo</p><p className="mt-1 text-[13px] text-white/50">Aulas gravadas, acesso online e certificado de conclusão.</p></div><a href={purchase} data-hotmart={course.slug} className="bg-primary text-primary-foreground inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5">Acessar a inscrição <ArrowRight className="size-4" /></a></div></Reveal>
          </div>
        </section>

        <section id="para-quem" className="bg-[#0b111a] py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 md:grid-cols-2 md:items-center">
            <Reveal><p className="eyebrow">Para quem é</p><h2 className="font-display mt-4 text-3xl leading-tight font-bold sm:text-4xl">Profissionais que querem aprofundar o tema com critério.</h2><p className="mt-5 text-sm leading-[1.8] text-white/50">O curso foi pensado para quem trabalha com saúde, exercício ou performance e quer compreender melhor a farmacologia relacionada ao esporte.</p><div className="mt-7 grid gap-3 sm:grid-cols-2">{audience.map((role) => <div key={role} className="flex items-center gap-2.5 text-[13px] text-white/70"><span className="bg-primary/10 text-primary grid size-6 place-items-center rounded-full"><Check className="size-3.5" /></span>{role}</div>)}</div></Reveal>
            <Reveal delay={0.12}><div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-9"><div className="bg-primary/10 text-primary grid size-12 place-items-center rounded-2xl"><Users className="size-5" /></div><h3 className="font-display mt-5 text-xl font-semibold">Aprenda para atuar com mais segurança</h3><p className="mt-3 text-[13.5px] leading-[1.8] text-white/50">Conteúdo estruturado para ampliar seu repertório e apoiar conversas profissionais informadas, respeitando os limites de atuação de cada categoria.</p><a href={purchase} data-hotmart={course.slug} className="text-primary mt-6 inline-flex items-center gap-2 text-sm font-semibold hover:gap-3">Quero me inscrever <ArrowRight className="size-4" /></a></div></Reveal>
          </div>
        </section>

        <section id="beneficios" className="bg-dots relative overflow-hidden py-20 sm:py-24"><div className="mx-auto max-w-6xl px-5 sm:px-6">
          <Reveal><p className="eyebrow">Benefícios educacionais</p><h2 className="font-display mt-4 max-w-3xl text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.05] font-bold">Mais repertório para avaliar evidências e conversar sobre performance.</h2>
          <p className="mt-5 max-w-2xl text-base leading-[1.85] text-white/55">Ao relacionar mecanismos, aplicações e riscos, o curso ajuda a construir uma visão organizada do tema e a reconhecer limites importantes na orientação profissional.</p></Reveal><div className="mt-10 grid gap-7 border-t border-white/10 pt-8 sm:grid-cols-3">{[{icon:Microscope,title:"Leitura crítica",text:"Conecte conceitos farmacológicos à análise das evidências disponíveis."},{icon:Dumbbell,title:"Contexto esportivo",text:"Compreenda os temas de performance dentro das particularidades do esporte."},{icon:Scale,title:"Responsabilidade",text:"Considere riscos, interações e limites profissionais ao abordar o tema."}].map(({icon:Icon,title,text},i)=><Reveal key={title} delay={i*.08}><div className="flex gap-4"><Icon className="mt-1 size-5 shrink-0 text-primary"/><div><h3 className="font-display text-lg font-semibold">{title}</h3><p className="mt-2 text-[14px] leading-relaxed text-white/50">{text}</p></div></div></Reveal>)}</div><Reveal delay={.16}><a href={purchase} data-hotmart={course.slug} className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5">Quero aprofundar meus conhecimentos <ArrowRight className="size-4"/></a></Reveal></div></section>
        <section id="professor" className="bg-dots relative overflow-hidden bg-[#0b111a] py-20 sm:py-24"><div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-6 md:grid-cols-[0.65fr_1.35fr]"><Reveal><div className="mx-auto max-w-xs overflow-hidden rounded-[1.6rem] border border-white/10 md:max-w-none"><img src="/images/claudiney-foto.png" alt="Prof. Claudiney Ferreira" loading="lazy" className="aspect-[3/4] w-full object-cover"/></div></Reveal><Reveal delay={.1}><p className="eyebrow">Quem ensina</p><h2 className="font-display mt-4 text-3xl font-bold sm:text-4xl">Claudiney Ferreira</h2><p className="mt-3 text-sm tracking-[0.12em] text-white/40 uppercase">Farmacêutico · Perito Judicial · Professor</p><p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-white/60">Sua trajetória reúne mais de 20 anos de experiência na Farmácia, na docência e na gestão. Atuou na prática farmacêutica, na perícia judicial e na formação de profissionais da saúde, conectando conhecimento técnico, evidência científica e realidade profissional. Como professor, transforma experiência e ciência em aprendizado claro, aplicável e relevante para a prática.</p><div className="mt-6 space-y-3">{["Vice-presidente da Fundação Ezequiel Dias (Funed), em 2018", "Vice-presidente do CRF/MG entre 2012 e 2015", "Conselheiro Regional do CRF/MG entre 2012 e 2019", "Professor nas faculdades PUC Minas, Faminas-BH e Anhanguera"].map((item)=><p key={item} className="flex items-start gap-3 text-[14px] leading-relaxed text-white/65"><Check className="mt-0.5 size-4 shrink-0 text-primary"/>{item}</p>)}</div></Reveal></div></section>
        <Faq id="duvidas" items={faqItems} />

        <section className="relative isolate overflow-hidden bg-[#0b111a] py-20 sm:py-24 lg:py-28">
          <div className="bg-grid absolute inset-0 opacity-35"/>
          <div className="absolute inset-0 bg-[radial-gradient(70%_85%_at_15%_50%,rgba(47,227,196,0.13),transparent_68%)]"/><div className="relative mx-auto max-w-6xl px-5 sm:px-6"><div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-[#101a24]/75 md:grid-cols-[0.85fr_1.15fr]">
          <div className="relative min-h-64 md:min-h-[25rem]"><img src="/images/anatomia.png" alt="Curso online de Farmacologia no Esporte" loading="lazy" className="absolute inset-0 size-full object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-t from-[#070a0f]/70 via-[#070a0f]/10 to-transparent md:bg-gradient-to-r md:from-transparent md:via-[#101a24]/10 md:to-[#101a24]"/>
          <span className="eyebrow absolute bottom-5 left-6 sm:bottom-7 sm:left-8">Prof. Claudiney Ferreira</span></div><div className="flex flex-col items-start justify-center p-7 sm:p-10 lg:p-14">
            <p className="eyebrow">Seu próximo passo</p><h2 className="font-display mt-4 max-w-xl text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] font-bold">Aprofunde sua atuação em farmacologia esportiva.</h2>
            <p className="mt-5 max-w-xl text-base leading-[1.8] text-white/55">Estude no seu ritmo e amplie seu repertório com o Prof. Claudiney Ferreira.</p><a href={purchase} data-hotmart={course.slug} className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-xl">Quero fazer o curso <ArrowRight className="size-4 transition-transform group-hover:translate-x-1"/></a><p className="mt-4 text-xs text-white/35">Acesso e condições apresentados no checkout Hotmart.</p></div></div></div></section>
      </main>

      <SiteFooter coursePage />    </div>
  );
}

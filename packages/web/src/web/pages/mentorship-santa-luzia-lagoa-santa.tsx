import { ArrowDown, ArrowRight, BookOpenCheck, Check, ClipboardList, FlaskConical, GraduationCap, MapPin, Users } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { Faq } from "../components/faq";
import { CourseIntroduction } from "../components/course-introduction";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { Reveal, ScrollProgress } from "../components/ui/motion-primitives";
import { MENTORSHIP_CHECKOUT_URL, getMentorshipCheckoutUrl } from "../lib/mentorship-config";

const route = "/mentoria-santa-luzia-lagoa-santa.html";
const navLinks = [
  { label: "A Mentoria", href: `${route}#proposta` },
  { label: "Conteúdo", href: `${route}#conteudo` },
  { label: "Professor", href: `${route}#professor` },
  { label: "Dúvidas", href: `${route}#duvidas` },
];

const modules = [
  "Comece por aqui",
  "Planejamento Estratégico de Estudos",
  "Conhecimentos Específicos de Farmácia",
  "Saúde Pública e SUS",
  "Disciplinas Gerais: Apostilas e Exercícios",
  "Questões e Simulados",
  "Foco no Concurso de Santa Luzia",
  "Foco no Concurso de Lagoa Santa",
  "Bônus: Aulas ao Vivo e Simulados Estratégicos",
];

const faqItems = [
  { q: "Como funciona a mentoria?", a: "A mentoria organiza uma preparação integrada para os concursos de Farmacêutico das Prefeituras de Santa Luzia e Lagoa Santa, com conteúdos comuns e módulos dedicados a cada concurso." },
  { q: "As aulas são gravadas?", a: "A mentoria inclui aulas gravadas de Farmácia e de Saúde Pública e SUS. Também estão previstas aulas ao vivo de resolução de exercícios como bônus." },
  { q: "Como funciona o acesso?", a: "As informações e instruções de acesso serão apresentadas no checkout oficial da Hotmart após a configuração da oferta." },
  { q: "Existe suporte?", a: "Sim. A mentoria inclui suporte em grupo." },
  { q: "Há simulados e exercícios?", a: "Sim. O conteúdo inclui questões e simulados, além de simulados estratégicos com gabarito comentado como bônus." },
  { q: "Como funciona a inscrição?", a: "A inscrição será feita pelo checkout oficial da Hotmart. O endereço será conectado a todos os botões desta página." },
  { q: "Como acesso o material após a compra?", a: "As instruções de acesso aos materiais serão apresentadas após a confirmação da oferta no checkout." },
];

const studyChallenges = [
  "Falta de planejamento para distribuir o tempo de estudo.",
  "Dificuldade para organizar disciplinas diferentes.",
  "Excesso de materiais sem uma ordem clara de prioridade.",
  "Pouca prática com questões e simulados.",
  "Dificuldade para acompanhar a própria evolução.",
];

const included = [
  "Aulas gravadas de Farmácia",
  "Aulas gravadas de Saúde Pública e SUS",
  "Apostilas das disciplinas gerais",
  "Questões e simulados",
  "Planejamento estratégico de estudos",
  "Suporte em grupo",
];

function EnrollmentLink({ children, className }: { children: ReactNode; className: string }) {
  const checkoutHref = getMentorshipCheckoutUrl(MENTORSHIP_CHECKOUT_URL, window.location.search);
  const configured = Boolean(MENTORSHIP_CHECKOUT_URL);
  return (
    <a
      href={checkoutHref}
      aria-disabled={!configured}
      onClick={(event) => { if (!configured) event.preventDefault(); }}
      data-hotmart="mentoria-farmaceuticos-santa-luzia-lagoa-santa"
      data-gtm-event="begin_checkout"
      data-meta-event="InitiateCheckout"
      className={`${className} ${configured ? "" : "pointer-events-none cursor-not-allowed opacity-60"}`}
      title={configured ? undefined : "Checkout Hotmart pendente de configuração"}
    >
      {children}
    </a>
  );
}

export default function MentorshipSantaLuziaLagoaSanta() {
  const reduce = useReducedMotion();
  const checkoutConfigured = Boolean(MENTORSHIP_CHECKOUT_URL);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#070a0f] font-sans text-white">
      <ScrollProgress />
      <SiteHeader navLinks={navLinks} homeHref="/" primaryHref="#investimento" primaryLabel="Ver investimento" />

      <main>
        <section id="topo" className="noise relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
          <div className="bg-grid absolute inset-0 opacity-50" />
          <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_75%_20%,rgba(56,189,248,0.15),transparent_65%)]" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="border-primary/25 bg-primary/[0.07] text-primary inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-medium tracking-[0.15em] uppercase"><GraduationCap className="size-3.5" /> Mentoria preparatória para farmacêuticos</div>
              <h1 className="font-display mt-6 max-w-2xl text-[clamp(2.5rem,6vw,4.2rem)] leading-[0.98] font-extrabold">Dois concursos.<br /><span className="text-gradient">Uma estratégia.</span></h1>
              <p className="mt-6 max-w-xl text-[15px] leading-[1.8] text-white/60 sm:text-base">Preparação integrada para os concursos de Farmacêutico das Prefeituras de Santa Luzia e Lagoa Santa, com organização de conteúdos comuns e atenção ao foco de cada edital.</p>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {["Santa Luzia", "Lagoa Santa"].map((city) => <span key={city} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-2 text-[12px] text-white/70"><MapPin className="size-3.5 text-primary" /> Prefeitura de {city}</span>)}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <EnrollmentLink className="group bg-primary text-primary-foreground inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-xl aria-disabled:opacity-60">Quero garantir minha vaga <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></EnrollmentLink>
                <a href="#proposta" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm text-white/80 transition hover:bg-white/5">Conhecer a proposta <ArrowDown className="size-4" /></a>
              </div>
              {!checkoutConfigured && <p className="mt-3 text-xs text-accent-warm/80">O checkout da Hotmart será ativado assim que o link oficial for configurado.</p>}
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[12px] text-white/50"><span className="inline-flex items-center gap-2"><BookOpenCheck className="size-4 text-primary" /> Conteúdos comuns e específicos</span><span className="inline-flex items-center gap-2"><Users className="size-4 text-primary" /> Suporte em grupo</span></div>
            </motion.div>
            <Reveal delay={0.15}>
              <div className="relative mx-auto max-w-lg">
                <div className="bg-primary/15 absolute -inset-5 rounded-[2rem] blur-3xl" />
                <div className="card-surface relative overflow-hidden rounded-[2rem] p-7 sm:p-9">
                  <div className="bg-grid absolute inset-0 opacity-50" />
                  <div className="relative">
                    <div className="border-primary/20 bg-primary/[0.08] text-primary grid size-14 place-items-center rounded-2xl border"><FlaskConical className="size-7" /></div>
                    <p className="eyebrow mt-7">Farmácia · Saúde pública · Editais</p>
                    <p className="font-display mt-3 text-2xl leading-tight font-semibold sm:text-3xl">Organize a preparação com clareza e direção.</p>
                    <div className="mt-7 space-y-3 border-t border-white/10 pt-6">
                      {["Planejamento estratégico", "Questões e simulados", "Foco em cada concurso"].map((item) => <p key={item} className="flex items-center gap-3 text-[13px] text-white/65"><span className="bg-primary/10 text-primary grid size-6 place-items-center rounded-full"><Check className="size-3.5" /></span>{item}</p>)}
                    </div>
                    <p className="mt-7 text-[11px] leading-relaxed text-white/35">A preparação é organizada de acordo com os conteúdos comuns e com as particularidades de cada edital.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <CourseIntroduction
          id="proposta"
          eyebrow="Uma oportunidade de preparação integrada"
          title="Dois editais, uma organização mais estratégica."
          description="A mentoria organiza os conteúdos que podem ser estudados em comum e reserva atenção específica às particularidades de Santa Luzia e Lagoa Santa. O planejamento conecta as disciplinas e ajuda a orientar a rotina de preparação com foco em cada edital."
          points={["Aproveitamento dos conteúdos comuns", "Organização estratégica das disciplinas", "Foco nas particularidades de cada edital"]}
          texture="grid"
        />

        <section className="relative py-20 sm:py-28">
          <div className="bg-grid absolute inset-0 opacity-25" />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal><p className="eyebrow">O desafio da preparação</p><h2 className="font-display mt-4 max-w-md text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.04] font-bold">Estudar com direção faz <span className="text-gradient">diferença</span> na rotina.</h2><p className="mt-5 max-w-md text-sm leading-[1.8] text-white/50">Conciliar disciplinas e materiais pode tornar a preparação difícil de acompanhar. A mentoria foi organizada para dar estrutura ao processo.</p></Reveal>
            <Reveal delay={0.1}><ul className="divide-y divide-white/[0.08] border-y border-white/[0.08]">{studyChallenges.map((challenge, index) => <li key={challenge} className="flex items-start gap-4 py-4 text-[14px] leading-relaxed text-white/65"><span className="font-display text-primary/70 text-xs font-semibold">0{index + 1}</span>{challenge}</li>)}</ul></Reveal>
          </div>
        </section>

        <section className="bg-[#0b111a] py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <Reveal><p className="eyebrow">A proposta da mentoria</p><h2 className="font-display mt-4 max-w-3xl text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.04] font-bold">Uma rota de estudos construída em etapas.</h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-[1.85] text-white/55">A sequência parte do planejamento, percorre os conhecimentos de Farmácia e Saúde Pública, inclui disciplinas gerais e prática com questões e simulados, e conclui com foco específico em cada concurso.</p></Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">{[{ icon: ClipboardList, title: "Planejar", text: "Organizar a rotina e os conteúdos de estudo." }, 
              { icon: FlaskConical, title: "Estudar", text: "Percorrer conhecimentos específicos e disciplinas gerais." }, 
              { icon: BookOpenCheck, title: "Praticar", text: "Revisar com questões, exercícios e simulados." }].map(({ icon: Icon, title, text }, index) => <Reveal key={title} delay={index * 0.08}>
              <article className="card-surface h-full rounded-3xl p-6 sm:p-7"><span className="bg-primary/10 text-primary grid size-11 place-items-center rounded-2xl"><Icon className="size-5" /></span><h3 className="font-display mt-5 text-lg font-semibold">{title}</h3><p className="mt-2 text-[13.5px] leading-[1.75] text-white/50">{text}</p></article></Reveal>)}</div>
            <Reveal delay={0.15}><div className="mt-9 flex flex-col items-start justify-between gap-5 rounded-3xl border border-primary/20 bg-primary/[0.05] p-6 sm:flex-row sm:items-center sm:p-8"><div>
              <p className="font-display text-lg font-semibold">Conheça a preparação completa</p><p className="mt-1 text-[13px] text-white/50">Conteúdo organizado para os concursos de Santa Luzia e Lagoa Santa.</p>
              </div><EnrollmentLink className="bg-primary text-primary-foreground inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 aria-disabled:opacity-60">Quero garantir minha vaga <ArrowRight className="size-4" /></EnrollmentLink></div></Reveal>
          </div>
        </section>

        <section id="conteudo" className="relative py-20 sm:py-28">
          <div className="bg-dots absolute inset-0 opacity-40" />
          <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
            <Reveal><p className="eyebrow">Conteúdo programático</p><h2 className="font-display mt-4 max-w-3xl text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.04] font-bold">Uma trilha de preparação em <span className="text-gradient">nove módulos.</span></h2><p className="mt-4 max-w-xl text-sm leading-relaxed text-white/50">Conheça a estrutura prevista para a mentoria.</p></Reveal>
            <div className="mt-10 grid gap-x-10 md:grid-cols-2">{modules.map((module, index) => <Reveal key={module} delay={(index % 2) * 0.06}><article className="flex gap-4 border-t border-white/[0.09] py-5 sm:py-6"><span className="font-display text-primary shrink-0 text-sm font-bold tracking-widest">{String(index).padStart(2, "0")}</span><div><h3 className="font-display text-[15px] leading-snug font-semibold text-white sm:text-base">{module}</h3>{index === 8 && <p className="mt-2 text-[13px] leading-relaxed text-white/45">Aulas ao vivo de resolução de exercícios e simulados estratégicos com gabarito comentado.</p>}</div></article></Reveal>)}</div>
            <Reveal delay={0.1}><EnrollmentLink className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 aria-disabled:opacity-60">Quero conhecer a mentoria <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></EnrollmentLink></Reveal>
          </div>
        </section>

        <section className="bg-[#0b111a] py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal><p className="eyebrow">O que está incluído</p><h2 className="font-display mt-4 text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.04] font-bold">Materiais para acompanhar cada etapa.</h2><p className="mt-5 text-sm leading-[1.8] text-white/50">A mentoria reúne aulas, materiais de apoio, prática e orientação em grupo.</p></Reveal>
            <Reveal delay={0.1}><ul className="grid gap-x-8 sm:grid-cols-2">{included.map((item) => <li key={item} className="flex items-start gap-3 border-t border-white/[0.08] py-4 text-[13.5px] leading-relaxed text-white/70"><span className="bg-primary/10 text-primary mt-0.5 grid size-5 shrink-0 place-items-center rounded-full"><Check className="size-3" /></span>{item}</li>)}</ul></Reveal>
          </div>
          <div className="mx-auto mt-10 max-w-6xl px-5 sm:px-6"><Reveal><div className="flex flex-col items-start gap-6 rounded-3xl border border-primary/20 bg-primary/[0.05] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"><div><p className="eyebrow">Bônus da mentoria</p><h3 className="font-display mt-2 text-xl font-semibold">Mais oportunidades de praticar com orientação.</h3><p className="mt-2 max-w-2xl text-[13.5px] leading-relaxed text-white/55">Aulas ao vivo de resolução de exercícios e simulados estratégicos com gabarito comentado.</p></div><span className="border-primary/25 text-primary inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium"><GraduationCap className="size-4" /> Bônus incluídos</span></div></Reveal></div>
          <div className="mx-auto max-w-6xl px-5 sm:px-6"><Reveal delay={0.1}><EnrollmentLink className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 aria-disabled:opacity-60">Quero garantir minha vaga <ArrowRight className="size-4" /></EnrollmentLink></Reveal></div>
        </section>

        <section id="professor" className="bg-dots relative overflow-hidden bg-[#0b111a] py-20 sm:py-24"><div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-6 md:grid-cols-[0.65fr_1.35fr]"><Reveal><div className="mx-auto max-w-xs overflow-hidden rounded-[1.6rem] border border-white/10 md:max-w-none"><img src="/images/claudiney-foto.png" alt="Prof. Claudiney Ferreira" loading="lazy" className="aspect-[3/4] w-full object-cover" /></div></Reveal><Reveal delay={0.1}><p className="eyebrow">Quem ensina</p><h2 className="font-display mt-4 text-3xl font-bold sm:text-4xl">Claudiney Ferreira</h2><p className="mt-3 text-sm tracking-[0.12em] text-white/40 uppercase">Farmacêutico · Perito Judicial · Professor</p><p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-white/60">Sua trajetória reúne mais de 20 anos de experiência na Farmácia, na docência e na gestão. Atuou na prática farmacêutica, na perícia judicial e na formação de profissionais da saúde, conectando conhecimento técnico, evidência científica e realidade profissional. Como professor, transforma experiência e ciência em aprendizado claro, aplicável e relevante para a prática.</p><div className="mt-6 space-y-3">{["Vice-presidente da Fundação Ezequiel Dias (Funed), em 2018", "Vice-presidente do CRF/MG entre 2012 e 2015", "Conselheiro Regional do CRF/MG entre 2012 e 2019", "Professor nas faculdades PUC Minas, Faminas-BH e Anhanguera"].map((item) => <p key={item} className="flex items-start gap-3 text-[14px] leading-relaxed text-white/65"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{item}</p>)}</div></Reveal></div></section>

        <section id="investimento" className="relative overflow-hidden bg-[#0b111a] py-20 sm:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(60%_75%_at_50%_50%,rgba(47,227,196,0.11),transparent_70%)]" />
          <div className="relative mx-auto max-w-6xl px-5 sm:px-6"><Reveal><div className="mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-primary/20 bg-[#101a24]/85 p-7 text-center shadow-[0_30px_100px_-55px_rgba(47,227,196,0.45)] sm:p-10 lg:p-14"><p className="eyebrow">Investimento</p><h2 className="font-display mt-4 text-[clamp(2rem,4.5vw,3.3rem)] leading-tight font-bold">Uma preparação para dois concursos.</h2><p className="mt-6 text-sm text-white/50">Acesso à mentoria, aulas, materiais, questões, simulados e suporte em grupo.</p><p className="font-display mt-7 text-5xl font-bold tracking-tight text-white sm:text-6xl">R$ 360,00</p><EnrollmentLink className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-xl sm:w-auto sm:min-w-72 aria-disabled:opacity-60">QUERO GARANTIR MINHA VAGA <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></EnrollmentLink>{!checkoutConfigured && <p className="mt-4 text-xs text-accent-warm/80">O botão será conectado ao checkout oficial após o recebimento do link da Hotmart.</p>}<p className="mt-4 text-xs leading-relaxed text-white/35">Condições de pagamento e detalhes da oferta serão apresentados no checkout oficial.</p></div></Reveal></div>
        </section>

        <Faq id="duvidas" items={faqItems} />

        <section className="relative isolate overflow-hidden bg-[#0b111a] py-20 sm:py-24 lg:py-28">
          <div className="bg-grid absolute inset-0 opacity-35" /><div className="absolute inset-0 bg-[radial-gradient(70%_85%_at_15%_50%,rgba(47,227,196,0.13),transparent_68%)]" />
          <div className="relative mx-auto max-w-6xl px-5 sm:px-6"><div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-[#101a24]/75 md:grid-cols-[0.85fr_1.15fr]">
            <div className="relative min-h-64 md:min-h-[25rem]"><img src="/images/claudiney-retrato.jpg" alt="Prof. Claudiney Ferreira" loading="lazy" className="absolute inset-0 size-full object-cover object-top" /><div className="absolute inset-0 bg-gradient-to-t from-[#070a0f]/70 via-[#070a0f]/10 to-transparent md:bg-gradient-to-r md:from-transparent md:via-[#101a24]/10 md:to-[#101a24]" /><span className="eyebrow absolute bottom-5 left-6 sm:bottom-7 sm:left-8">Santa Luzia · Lagoa Santa</span></div>
            <div className="flex flex-col items-start justify-center p-7 sm:p-10 lg:p-14"><p className="eyebrow">Seu próximo passo</p><h2 className="font-display mt-4 max-w-xl text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] font-bold">Dois concursos. Uma estratégia de preparação.</h2><p className="mt-5 max-w-xl text-base leading-[1.8] text-white/55">Organize os estudos com uma proposta integrada para Farmácia, Saúde Pública e os conteúdos específicos de cada concurso.</p><EnrollmentLink className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-xl aria-disabled:opacity-60">QUERO GARANTIR MINHA VAGA <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></EnrollmentLink></div>
          </div></div>
        </section>
      </main>
      <SiteFooter coursePage />
    </div>
  );
}

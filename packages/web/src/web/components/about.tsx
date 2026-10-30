import { Award, BookOpen, Check, Gavel, Microscope } from "lucide-react";
import { Parallax, Reveal } from "./ui/motion-primitives";
import { CREDENTIALS } from "../lib/site-data";

const PILLARS = [
  { icon: Microscope, label: "Farmacologia aplicada", hint: "Evidência traduzida em conduta" },
  { icon: Gavel, label: "Perícia judicial", hint: "Do cadastro no tribunal ao laudo" },
  { icon: BookOpen, label: "Docência", hint: "Didática de quem ensina há anos" },
  { icon: Award, label: "Regulatório", hint: "ANVISA sem sustos" },
];

export function About() {
  return (
    <section id="professor" className="relative overflow-hidden bg-[#0b111a] py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(65%_55%_at_18%_25%,rgba(47,227,196,0.1),transparent_65%)]" />
      <img
        src="/images/anatomia-muscular.jpg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 w-[46rem] max-w-none opacity-[0.045] mix-blend-screen select-none"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Parallax distance={44} className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div className="border-primary/25 absolute -inset-3 rounded-[2rem] border" />
            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10">
              <img
                src="/images/claudiney-foto.png"
                alt="Prof. Claudiney Ferreira"
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b111a]/85 via-transparent to-transparent" />
            </div>
            <div className="card-surface absolute -bottom-6 -right-4 rounded-2xl px-5 py-4 lg:-right-10">
              <p className="font-display text-primary text-2xl leading-none font-bold">27</p>
              <p className="mt-1.5 text-[11px] leading-tight text-white/50">
                anos entre farmácia
                <br />
                e sala de aula
              </p>
            </div>
          </div>
        </Parallax>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="eyebrow">Quem ensina</p>
            <h2 className="font-display mt-4 text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.04] font-bold text-white">
              Claudiney Ferreira
            </h2>
            <p className="mt-3 text-[13px] tracking-[0.14em] text-white/40 uppercase">
              Farmacêutico · Perito Judicial · Professor
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-7 space-y-4 text-[15px] leading-[1.8] text-white/60">
              <p>
                Minha trajetória reúne mais de 20 anos de experiência na Farmácia, na docência e na gestão.
                 Ao longo desse caminho, atuei na prática farmacêutica, na perícia judicial e na formação 
                de profissionais da saúde, conectando conhecimento técnico, evidência científica e 
                realidade profissional.
              </p>
              <p>
                Acredito que o conhecimento precisa ir além da teoria. Por isso, meu trabalho como professor 
                é transformar experiência e ciência em aprendizado claro,{" "}
                <span className="text-white/90">aplicável e relevante</span>. para quem busca mais segurança na prática, 
                atualização profissional e novas possibilidades de atuação.
              </p>
            </div>
          </Reveal>

          <div className="mt-9 space-y-3">
            {CREDENTIALS.map((c, i) => (
              <Reveal key={c} delay={0.18 + i * 0.08}>
                <div className="flex items-start gap-3">
                  <span className="bg-primary/12 mt-0.5 grid size-5 shrink-0 place-items-center rounded-full">
                    <Check className="text-primary size-3" strokeWidth={3} />
                  </span>
                  <p className="text-[14px] leading-relaxed text-white/70">{c}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-11 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {PILLARS.map((p, i) => (
              <Reveal key={p.label} delay={0.3 + i * 0.09}>
                <div className="card-surface hover:border-primary/25 group h-full rounded-2xl p-4 transition-colors">
                  <p.icon className="text-primary size-5 transition-transform duration-500 group-hover:scale-110" />
                  <p className="font-display mt-3 text-[12.5px] leading-tight font-semibold text-white">
                    {p.label}
                  </p>
                  <p className="mt-1.5 text-[11px] leading-snug text-white/40">{p.hint}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

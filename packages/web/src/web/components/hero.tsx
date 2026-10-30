import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, GraduationCap, Play, ShieldCheck, Sparkles } from "lucide-react";
import { Marquee, Reveal, SplitWords } from "./ui/motion-primitives";
import { MARQUEE_ITEMS } from "../lib/site-data";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="topo" ref={ref} className="noise relative min-h-[100svh] overflow-hidden">
      {}
      <div className="absolute inset-0 bg-[#070a0f]" />
      <div className="bg-grid absolute inset-0 opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_75%_10%,rgba(56,189,248,0.16),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_15%_85%,rgba(47,227,196,0.13),transparent_60%)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#070a0f] via-[#070a0f]/80 to-transparent" />

      {}
      {!reduce && (
        <>
          <MoleculeSVG className="absolute top-[18%] left-[6%] w-32 opacity-25 [animation:float-slow_11s_ease-in-out_infinite]" />
          <MoleculeSVG className="absolute top-[62%] left-[46%] w-20 opacity-[0.18] [animation:float-slow_9s_ease-in-out_infinite_1.5s]" />
          <MoleculeSVG className="absolute top-[10%] right-[38%] w-24 opacity-20 [animation:float-slow_13s_ease-in-out_infinite_0.8s]" />
        </>
      )}

      <motion.div
        style={reduce ? undefined : { opacity: fade }}
        className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 pt-32 pb-24 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:pt-36 lg:pb-32"
      >
        {}
        <motion.div style={reduce ? undefined : { y: textY }} className="relative">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="border-primary/25 bg-primary/[0.07] inline-flex items-center gap-2 rounded-full border px-3 py-1.5"
          >
            <Sparkles className="text-primary size-3.5" />
            <span className="text-[11px] font-medium tracking-[0.16em] text-white/70 uppercase">
              Cursos online com certificado
            </span>
          </motion.div>

          <h1 className="font-display mt-6 text-[clamp(2.1rem,5vw,3.9rem)] leading-[1.02] font-extrabold text-white">
            <span className="block">
              <SplitWords text="Ciência que vira" delay={0.2} />
            </span>
            <span className="block">
              <SplitWords text="autoridade na sua" delay={0.42} />
            </span>
            <span className="block">
              <SplitWords text="prática profissional." delay={0.66} highlight={[0, 1]} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-lg text-[15px] leading-[1.75] text-white/55 sm:text-base"
          >
            Farmacologia aplicada, Portaria 344/98 e perícia judicial ensinados por quem vive a
            profissão. Conteúdo direto ao ponto, com base em evidência e pronto para aplicar no seu
            dia a dia — do balcão ao laudo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.22, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#cursos"
              className="group bg-primary text-primary-foreground hover:shadow-primary/35 relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-2xl"
            >
              <span className="relative z-10">Conhecer os cursos</span>
              <ArrowRight className="relative z-10 size-4 transition-transform group-hover:translate-x-1" />
              <span className="absolute inset-0 -translate-x-full bg-white/25 transition-transform duration-500 group-hover:translate-x-0" />
            </a>
            <a
              href="#professor"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 px-6 py-3.5 text-sm font-medium text-white/80 transition-all hover:border-white/25 hover:bg-white/5"
            >
              <Play className="size-3.5" /> Quem é o professor
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-[12.5px] text-white/45"
          >
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="text-primary size-4" /> Garantia de 7 dias
            </span>
            <span className="inline-flex items-center gap-2">
              <GraduationCap className="text-primary size-4" /> Certificado incluso
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="bg-primary size-1.5 animate-pulse rounded-full" /> Acesso imediato
            </span>
          </motion.div>
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, filter: "blur(16px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.4, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="bg-primary/20 absolute -inset-6 rounded-[2.5rem] blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
            <motion.img
              src="/images/claudiney-retrato.jpg"
              alt="Prof. Claudiney Ferreira em laboratório"
              style={reduce ? undefined : { y: imgY, scale: imgScale }}
              className="aspect-[4/5] w-full object-cover object-[center_18%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070a0f] via-[#070a0f]/15 to-transparent" />
            <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(47,227,196,0.1),transparent_45%)]" />

            <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 rounded-2xl border border-white/10 bg-[#0b111a]/75 p-4 backdrop-blur-md">
              <div>
                <p className="font-display text-[15px] font-semibold text-white">
                  Prof. Claudiney Ferreira
                </p>
                <p className="mt-0.5 text-[11.5px] text-white/50">
                  Farmacêutico · Perito Judicial · Docente
                </p>
              </div>
              <div className="text-right">
                <p className="font-display text-primary text-xl font-bold leading-none">+12 mil</p>
                <p className="mt-1 text-[10px] tracking-wider text-white/40 uppercase">alunos</p>
              </div>
            </div>
          </div>

          {}
          <motion.div
            initial={{ opacity: 0, x: 24, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
            className="card-surface absolute -left-3 top-10 hidden rounded-2xl px-4 py-3 sm:block lg:-left-8"
          >
            <p className="text-[10px] tracking-[0.18em] text-white/40 uppercase">Nota dos alunos</p>
            <p className="font-display mt-1 flex items-baseline gap-1 text-white">
              <span className="text-2xl font-bold">5</span>
              <span className="text-accent-warm text-sm">★★★★★</span>
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 z-10 border-y border-white/[0.06] bg-[#070a0f]/60 py-4 backdrop-blur-sm">
        <Reveal delay={0.1}>
          <Marquee items={MARQUEE_ITEMS} />
        </Reveal>
      </div>
    </section>
  );
}

function MoleculeSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" aria-hidden>
      <g stroke="#2FE3C4" strokeWidth="1" opacity="0.9">
        <path d="M60 12 L102 36 L102 84 L60 108 L18 84 L18 36 Z" />
        <path d="M60 12 L60 40 M102 36 L78 52 M102 84 L78 68 M60 108 L60 80 M18 84 L42 68 M18 36 L42 52" />
        <path d="M60 40 L78 52 L78 68 L60 80 L42 68 L42 52 Z" opacity="0.55" />
      </g>
      {[
        [60, 12],
        [102, 36],
        [102, 84],
        [60, 108],
        [18, 84],
        [18, 36],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.6" fill="#2FE3C4" />
      ))}
    </svg>
  );
}

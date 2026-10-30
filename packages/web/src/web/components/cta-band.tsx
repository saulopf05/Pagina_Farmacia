import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Reveal } from "./ui/motion-primitives";
import { CONTACT } from "../lib/site-data";

export function CtaBand() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.05, 1.15]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#070a0f] py-24 sm:py-28">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
          <motion.img
            src="/images/curso-farmacologia-esporte.jpg"
            alt=""
            aria-hidden
            loading="lazy"
            style={reduce ? undefined : { y, scale }}
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-[#070a0f]/82" />
          <div className="absolute inset-0 bg-[radial-gradient(70%_100%_at_15%_50%,rgba(47,227,196,0.22),transparent_65%)]" />
          <div className="bg-grid absolute inset-0 opacity-40" />

          <div className="relative px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
            <Reveal>
              <p className="eyebrow">Comece agora</p>
              <h2 className="font-display mt-4 max-w-2xl text-[clamp(1.9rem,4.4vw,3.2rem)] leading-[1.04] font-bold text-white">
                O próximo nível da sua carreira começa com{" "}
                <span className="text-gradient">uma decisão</span>
              </h2>
              <p className="mt-5 max-w-lg text-[14.5px] leading-relaxed text-white/55">
                Acesso imediato, aulas gravadas para assistir no seu ritmo, certificado no final e 7
                dias de garantia. Se não for pra você, devolvemos cada centavo.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#cursos"
                  className="group bg-primary text-primary-foreground hover:shadow-primary/35 inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-2xl"
                >
                  Escolher meu curso
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-sm font-medium text-white/85 backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/[0.08]"
                >
                  Tirar uma dúvida antes
                </a>
                <span className="ml-1 inline-flex items-center gap-2 text-[12.5px] text-white/40">
                  <ShieldCheck className="text-primary size-4" /> Compra segura via Hotmart
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

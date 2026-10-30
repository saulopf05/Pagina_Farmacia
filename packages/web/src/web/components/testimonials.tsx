import { motion, useReducedMotion } from "motion/react";
import { Quote, Star } from "lucide-react";
import { Reveal, SpotlightCard } from "./ui/motion-primitives";
import { TESTIMONIALS } from "../lib/site-data";

export function Testimonials() {
  const reduce = useReducedMotion();

  return (
    <section id="depoimentos" className="relative overflow-hidden bg-[#070a0f] py-24 sm:py-32">
      <div className="bg-dots absolute inset-0 opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_100%,rgba(56,189,248,0.09),transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Quem já fez</p>
          <h2 className="font-display mt-4 text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.04] font-bold text-white">
            Resultado que aparece <span className="text-gradient">na prática</span>
          </h2>
          <p className="mt-5 text-[14.5px] leading-relaxed text-white/50">
            Mais de 12 mil profissionais já passaram pelas aulas. Alguns contaram o que mudou depois.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40, rotate: i % 2 ? 1.2 : -1.2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <SpotlightCard className="h-full rounded-3xl" tilt={3}>
                <figure className="card-surface hover:border-primary/25 relative flex h-full flex-col rounded-3xl p-6 transition-colors duration-500">
                  <Quote className="text-primary/25 absolute top-5 right-5 size-8" />

                  <div className="text-accent-warm flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="size-3.5 fill-current" />
                    ))}
                  </div>

                  <blockquote className="mt-5 flex-1 text-[14px] leading-[1.75] text-white/70">
                    “{t.quote}”
                  </blockquote>

                  <figcaption className="mt-6 flex items-center gap-3 border-t border-white/[0.07] pt-5">
                    <span className="from-primary/25 to-accent-2/20 font-display grid size-10 shrink-0 place-items-center rounded-full bg-gradient-to-br text-[12.5px] font-bold text-white">
                      {t.initials}
                    </span>
                    <span className="min-w-0">
                      <span className="font-display block truncate text-[13.5px] font-semibold text-white">
                        {t.name}
                      </span>
                      <span className="block truncate text-[11.5px] text-white/40">{t.role}</span>
                    </span>
                  </figcaption>

                  <p className="text-primary/70 mt-3 text-[10.5px] tracking-[0.14em] uppercase">
                    {t.course}
                  </p>
                </figure>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

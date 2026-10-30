import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "./ui/motion-primitives";

type CourseIntroductionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  texture?: "grid" | "dots";
  backgroundImage?: string;
};

export function CourseIntroduction({
  id,
  eyebrow,
  title,
  description,
  points,
  texture = "grid",
  backgroundImage = "/images/anatomia-muscular.jpg",
}: CourseIntroductionProps) {
  const reduce = useReducedMotion();

  return (
    <section id={id} className="relative isolate overflow-hidden border-y border-white/[0.06] bg-[#0b111a] py-24 sm:py-28 lg:py-32">
      <div className={`absolute inset-0 ${texture === "grid" ? "bg-grid" : "bg-dots"} opacity-35`} />
      <div className="absolute inset-0 bg-[radial-gradient(60%_70%_at_15%_35%,rgba(47,227,196,0.08),transparent_70%)]" />
      <img src={backgroundImage} alt="" aria-hidden="true" className="pointer-events-none absolute -right-32 bottom-0 w-[44rem] max-w-none opacity-[0.045] mix-blend-screen select-none" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="font-display mt-4 max-w-4xl text-[clamp(2.2rem,4.8vw,3.8rem)] leading-[1.04] font-bold text-white">{title}</h2>
          <p className="mt-7 max-w-3xl text-base leading-[1.9] text-white/60 sm:text-lg">{description}</p>
        </Reveal>
        <div className="mt-12 grid border-y border-white/10 sm:grid-cols-3">
          {points.map((point, index) => (
            <Reveal key={point} delay={index * 0.08} y={18}>
              <motion.article
                whileHover={reduce ? undefined : { y: -4 }}
                transition={{ duration: 0.25 }}
                className="group flex h-full items-center justify-between gap-5 border-b border-white/10 px-1 py-6 sm:border-r sm:border-b-0 sm:px-5 sm:py-8 last:border-r-0"
              >
                <div className="flex items-start gap-4">
                  <span className="font-display pt-0.5 text-sm font-semibold tracking-[0.14em] text-primary/70">0{index + 1}</span>
                  <h3 className="font-display max-w-xs text-lg font-semibold leading-snug text-white/85 transition-colors group-hover:text-primary sm:text-xl">{point}</h3>
                </div>
                <ArrowUpRight className="size-4 shrink-0 text-white/25 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

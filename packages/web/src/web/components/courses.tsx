import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, BookOpen, Check, Clock, MapPin, PlayCircle, Users } from "lucide-react";
import { Reveal, SpotlightCard } from "./ui/motion-primitives";
import { COURSES, type Course } from "../lib/site-data";
import { cn } from "../lib/utils";

export function Courses() {
  return (
    <section id="cursos" className="relative overflow-hidden bg-[#070a0f] py-24 sm:py-32">
      <div className="bg-grid absolute inset-0 opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_50%_at_80%_20%,rgba(56,189,248,0.09),transparent_65%)]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="eyebrow">Formações disponíveis</p>
            <h2 className="font-display mt-4 max-w-xl text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.02] font-bold text-white">
              3 cursos e 3 e-books para <span className="text-gradient">destravar</span> sua próxima fase
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-[14.5px] leading-relaxed text-white/50">
              Cada formação nasceu de uma dor real do consultório, do balcão ou do fórum. Escolha a
              sua e comece hoje mesmo — o acesso é liberado na hora.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {COURSES.map((course, i) => (
            <CourseCard key={course.slug} course={course} index={i} />
          ))}
          <MentorshipCard />
        </div>
      </div>
    </section>
  );
}

function MentorshipCard() {
  const highlights = [
    "Preparação integrada para Santa Luzia e Lagoa Santa",
    "Farmácia, Saúde Pública e disciplinas gerais",
    "Questões, simulados e suporte em grupo",
  ];

  return (
    <Reveal delay={0.1}>
      <SpotlightCard className="h-full rounded-3xl" tilt={4}>
        <article className="card-surface relative flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-500 hover:border-primary/30 hover:shadow-[0_30px_80px_-40px_rgba(47,227,196,0.5)]">
          <div className="relative overflow-hidden">
            <img src="/images/claudiney-retrato.jpg" alt="Mentoria preparatória para farmacêuticos" loading="lazy" className="h-52 w-full object-cover object-[center_30%] transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1520] via-[#0d1520]/25 to-transparent" />
            <span className="border-primary/30 bg-[#070a0f]/80 text-primary absolute top-4 left-4 rounded-full border px-3 py-1 text-[10.5px] font-medium tracking-[0.14em] uppercase backdrop-blur-md">Mentoria</span>
          </div>

          <div className="relative flex flex-1 flex-col p-6 sm:p-7">
            <h3 className="font-display text-[1.35rem] leading-tight font-bold text-white sm:text-[1.55rem]">Mentoria Preparatória para Farmacêuticos</h3>
            <p className="mt-2 flex items-start gap-1.5 text-[12px] leading-relaxed text-white/40"><Users className="mt-0.5 size-3.5 shrink-0" /> Farmacêuticos que se preparam para os concursos de Santa Luzia e Lagoa Santa</p>
            <p className="mt-4 text-[14px] leading-[1.72] text-white/55">Organize a preparação para os dois concursos com conteúdos comuns e foco nas particularidades de cada edital.</p>

            <ul className="mt-5 space-y-2">
              {highlights.map((highlight) => <li key={highlight} className="flex items-start gap-2.5 text-[13px] text-white/65"><span className="bg-primary/12 mt-0.5 grid size-4 shrink-0 place-items-center rounded-full"><Check className="text-primary size-2.5" strokeWidth={3.5} /></span>{highlight}</li>)}
            </ul>

            <div className="mt-auto mb-5 flex items-center gap-5 border-t border-white/[0.07] pt-5 text-[12px] text-white/45">
              <span className="inline-flex items-center gap-1.5"><MapPin className="size-3.5" /> 2 concursos</span>
              <span className="inline-flex items-center gap-1.5"><BookOpen className="size-3.5" /> 9 módulos</span>
              <span className="ml-auto text-white/30">Suporte em grupo</span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <a href="/mentoria-santa-luzia-lagoa-santa.html" className="flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3.5 text-[13.5px] font-semibold text-white/80 transition-all hover:border-primary/40 hover:bg-white/[0.04]">
                Conhecer a mentoria <ArrowUpRight className="size-4" />
              </a>
              <a href="/mentoria-santa-luzia-lagoa-santa.html#investimento" className="group/btn bg-primary text-primary-foreground hover:shadow-primary/30 flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[13.5px] font-semibold transition-all hover:-translate-y-0.5 hover:shadow-xl">
                Quero me inscrever <ArrowUpRight className="size-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </article>
      </SpotlightCard>
    </Reveal>
  );
}

function CourseCard({ course, index }: { course: Course; index: number }) {
  const reduce = useReducedMotion();
  const wide = index === 0;

  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 44, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.85, delay: (index % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={cn(wide && "lg:col-span-2")}
    >
      <SpotlightCard className="h-full rounded-3xl" tilt={wide ? 2 : 4}>
        <article
          className={cn(
            "card-surface relative flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-500",
            "hover:border-primary/30 hover:shadow-[0_30px_80px_-40px_rgba(47,227,196,0.5)]",
            wide && "lg:flex-row",
          )}
        >
          <div
            className={cn(
              "relative overflow-hidden",
              wide ? "lg:w-[46%] lg:shrink-0" : "",
            )}
          >
            <img
              src={course.image}
              alt={course.title}
              loading="lazy"
              className={cn(
                "w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]",
                wide ? "h-56 lg:h-full lg:min-h-[340px]" : "h-52",
              )}
            />
            <div
              className={cn(
                "absolute inset-0",
                wide
                  ? "bg-gradient-to-t from-[#0d1520] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#0d1520]"
                  : "bg-gradient-to-t from-[#0d1520] via-[#0d1520]/25 to-transparent",
              )}
            />
            <span className="border-primary/30 bg-[#070a0f]/80 text-primary absolute top-4 left-4 rounded-full border px-3 py-1 text-[10.5px] font-medium tracking-[0.14em] uppercase backdrop-blur-md">
              {course.category}
            </span>
            {course.featured && (
              <span className="bg-accent-warm absolute top-4 right-4 rounded-full px-3 py-1 text-[10.5px] font-semibold tracking-wide text-[#241a00] uppercase">
                Mais procurado
              </span>
            )}
          </div>

          <div className="relative flex flex-1 flex-col p-6 sm:p-7">
            <h3 className="font-display text-[1.35rem] leading-tight font-bold text-white sm:text-[1.55rem]">
              {course.title}
            </h3>

            <p className="mt-2 flex items-start gap-1.5 text-[12px] leading-relaxed text-white/40">
              <Users className="mt-0.5 size-3.5 shrink-0" />
              {course.audience}
            </p>

            <p className="mt-4 text-[14px] leading-[1.72] text-white/55">{course.description}</p>

            <ul className="mt-5 space-y-2">
              {course.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-[13px] text-white/65">
                  <span className="bg-primary/12 mt-0.5 grid size-4 shrink-0 place-items-center rounded-full">
                    <Check className="text-primary size-2.5" strokeWidth={3.5} />
                  </span>
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-7">
              {course.category.toLowerCase() === "e-book" ? (
                <div className="mb-5 border-t border-white/[0.07] pt-5">
                  <div className="flex items-start gap-2.5">
                    <span className="bg-primary/10 text-primary mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg">
                      <BookOpen className="size-4" />
                    </span>

                    <div className="min-w-0">
                      <p className="text-[12px] font-semibold text-white/80">
                        {course.infoTitle ?? "Material de consulta"}
                      </p>

                      <p className="mt-1 text-[11px] leading-relaxed text-white/40">
                        {course.infoDescription}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mb-5 flex items-center gap-5 border-t border-white/[0.07] pt-5 text-[12px] text-white/45">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="size-3.5" /> {course.duration}
                  </span>

                  <span className="inline-flex items-center gap-1.5">
                    <PlayCircle className="size-3.5" /> {course.lessons}
                  </span>

                  <span className="ml-auto text-white/30">
                    Certificado incluso
                  </span>
                </div>
              )}



              <div className={cn("grid gap-3", ["farmacologia-no-esporte", "portaria-344-98"].includes(course.slug) && "sm:grid-cols-2")}>
                {["farmacologia-no-esporte", "portaria-344-98"].includes(course.slug) && (
                  <a
                    href={course.slug === "farmacologia-no-esporte" ? "/farmacologia-no-esporte.html" : "/portaria-344-98.html"}
                    className="flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3.5 text-[13.5px] font-semibold text-white/80 transition-all hover:border-primary/40 hover:bg-white/[0.04]"
                  >
                    Conhecer o curso
                    <ArrowUpRight className="size-4" />
                  </a>
                )}
                <a
                  href={course.checkoutUrl}
                  data-hotmart={course.slug}
                  className="group/btn bg-primary text-primary-foreground hover:shadow-primary/30 flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[13.5px] font-semibold transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  {course.buttonText ?? "Quero me inscrever"}
                  <ArrowUpRight className="size-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        </article>
      </SpotlightCard>
    </motion.div>
  );
}

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { HelpCircle, Minus, Plus } from "lucide-react";
import { Reveal } from "./ui/motion-primitives";
import { CONTACT, FAQS } from "../lib/site-data";
import { cn } from "../lib/utils";

type FaqItem = { q: string; a: string };
type FaqProps = { id?: string; items?: FaqItem[] };

export function Faq({ id = "faq", items = FAQS }: FaqProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id={id} className="relative overflow-hidden bg-[#0b111a] py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(55%_45%_at_15%_10%,rgba(47,227,196,0.08),transparent_65%)]" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-14 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="eyebrow">Dúvidas frequentes</p>
            <h2 className="font-display mt-4 text-[clamp(2rem,4.2vw,3rem)] leading-[1.05] font-bold text-white">
              Antes de <span className="text-gradient">se inscrever</span>
            </h2>
            <p className="mt-5 max-w-sm text-[14.5px] leading-relaxed text-white/50">
              As perguntas que mais chegam no direct. Se a sua não estiver aqui, fala com a gente no
              WhatsApp — respondemos rápido.
            </p>
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="text-primary mt-7 inline-flex items-center gap-2 text-[13.5px] font-medium transition-opacity hover:opacity-75"
            >
              <HelpCircle className="size-4" /> Tenho outra dúvida
            </a>
          </Reveal>
        </div>

        <div className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.05} y={18}>
                <div>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-start justify-between gap-6 py-5 text-left"
                  >
                    <span
                      className={cn(
                        "font-display text-[15px] leading-snug font-semibold transition-colors sm:text-[16.5px]",
                        isOpen ? "text-primary" : "text-white group-hover:text-white/75",
                      )}
                    >
                      {item.q}
                    </span>
                    <span
                      className={cn(
                        "mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border transition-all duration-300",
                        isOpen
                          ? "border-primary/40 bg-primary/12 text-primary rotate-180"
                          : "border-white/12 text-white/50 group-hover:border-white/25",
                      )}
                    >
                      {isOpen ? <Minus className="size-3.5" /> : <Plus className="size-3.5" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-xl pr-12 pb-6 text-[14px] leading-[1.8] text-white/55">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

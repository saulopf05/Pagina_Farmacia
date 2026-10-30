import { Facebook, Instagram, MessageCircle, Youtube } from "lucide-react";
import { Marquee, Reveal } from "./ui/motion-primitives";
import { CONTACT, COURSES, NAV_LINKS } from "../lib/site-data";

const SOCIALS = [
  { icon: Instagram, label: "Instagram", href: CONTACT.instagramUrl },
  { icon: Youtube, label: "YouTube", href: CONTACT.youtubeUrl },
  { icon: Facebook, label: "Facebook", href: CONTACT.facebookUrl },
  { icon: MessageCircle, label: "WhatsApp", href: CONTACT.whatsappUrl },
];

export function SiteFooter({ coursePage = false }: { coursePage?: boolean }) {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-[#0b111a]">
      <div className="border-b border-white/[0.06] py-5">
        <Marquee
          items={["Farmacologia", "Perícia Judicial", "Portaria 344/98", "Obesidade", "Esporte"]}
          reverse
          renderItem={(item) => (
            <span className="font-display text-[clamp(1.5rem,4vw,2.6rem)] font-bold text-white/[0.06] uppercase">
              {item}
            </span>
          )}
        />
      </div>

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <Reveal>
            <div className="flex items-center gap-2.5">
              <span className="border-primary/40 grid size-9 shrink-0 place-items-center overflow-hidden rounded-full border">
                <img
                  src="/images/logo.png"
                  alt="Logo Claudiney Ferreira"
                  className="size-full object-contain"
                />
              </span>
              <span className="leading-tight">
                <span className="font-display block text-[14px] font-semibold text-white">
                  Prof. Claudiney Ferreira
                </span>
                <span className="block text-[10.5px] tracking-[0.16em] text-white/40 uppercase">
                  Farmacologia &amp; Perícia
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-[13.5px] leading-[1.75] text-white/45">
              Cursos online para profissionais da saúde e do direito que querem aplicar ciência de
              verdade no dia a dia da profissão.
            </p>
            <div className="mt-6 flex gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="hover:border-primary/40 hover:text-primary grid size-9 place-items-center rounded-full border border-white/10 text-white/55 transition-all hover:-translate-y-0.5"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-display text-[12px] font-semibold tracking-[0.16em] text-white/85 uppercase">
              Cursos
            </p>
            <ul className="mt-5 space-y-2.5">
              {COURSES.map((c) => (
                <li key={c.slug}>                  
                  <a
                    href={
                      c.slug === "farmacologia-no-esporte"
                        ? "/farmacologia-no-esporte.html"
                        : c.slug === "portaria-344-98"
                          ? "/portaria-344-98.html"
                          : coursePage
                            ? "/#cursos"
                            : "#cursos"
                    }
                    className="text-[13.5px] text-white/45 transition-colors hover:text-white"
                  >

                  {c.title}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="font-display text-[12px] font-semibold tracking-[0.16em] text-white/85 uppercase">
              Navegação
            </p>
            <ul className="mt-5 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={coursePage ? `/${l.href}` : l.href}
                    className="text-[13.5px] text-white/45 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-[12px] tracking-[0.14em] text-white/30 uppercase">Contato</p>
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="font-display mt-2 block text-[14px] font-medium text-white transition-colors hover:text-primary"
            >
              {CONTACT.whatsapp}
            </a>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/[0.07] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11.5px] text-white/30">
            © {new Date().getFullYear()} Prof. Claudiney Ferreira. Todos os direitos reservados.
          </p>
          <p className="max-w-md text-[11px] leading-relaxed text-white/25">
            Conteúdo educacional. Os cursos não substituem avaliação clínica individual nem
            constituem prescrição ou parecer jurídico.
          </p>
        </div>
      </div>
    </footer>
  );
}

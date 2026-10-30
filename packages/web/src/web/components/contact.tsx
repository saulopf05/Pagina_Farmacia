
import {
  ArrowRight,
  Instagram,
  Mail,
  MessageCircle,
  Youtube,
} from "lucide-react";
import { Reveal } from "./ui/motion-primitives";
import { CONTACT } from "../lib/site-data";

export function Contact() {
  const channels = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: CONTACT.whatsapp,
      href: CONTACT.whatsappUrl,
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: `@${CONTACT.instagram}`,
      href: CONTACT.instagramUrl,
    },
    {
      icon: Youtube,
      label: "YouTube",
      value: CONTACT.youtube,
      href: CONTACT.youtubeUrl,
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "claudineylf@yahoo.com.br",
      href: "mailto:claudineylf@yahoo.com.br",
    },
  ];

  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-[#070a0f] py-24 sm:py-32"
    >
      <div className="bg-grid absolute inset-0 opacity-30" />

      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_20%,rgba(56,189,248,0.1),transparent_65%)]" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-6">
        <Reveal>
          <div className="text-center">
            <p className="eyebrow">Fale com a gente</p>

            <h2 className="font-display mt-4 text-[clamp(2rem,4.2vw,3rem)] leading-[1.05] font-bold text-white">
              Ficou alguma{" "}
              <span className="text-gradient">dúvida?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-[14.5px] leading-relaxed text-white/50">
              Conta qual é o seu momento profissional e a gente indica o curso
              que faz mais sentido pra você. Sem enrolação e sem compromisso.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((item, i) => (
            <Reveal key={item.label} delay={0.1 + i * 0.09} y={18}>
              <a
                href={item.href}
                target={item.label === "E-mail" ? undefined : "_blank"}
                rel={item.label === "E-mail" ? undefined : "noreferrer"}
                className="card-surface hover:border-primary/30 group flex h-full min-w-0 items-center gap-3 rounded-2xl px-4 py-5 transition-all hover:-translate-y-0.5 xl:gap-4 xl:px-5"
              >
                <span className="bg-primary/10 text-primary grid size-10 shrink-0 place-items-center rounded-xl transition-transform duration-500 group-hover:scale-110">
                  <item.icon className="size-4.5" />
                </span>

                <span className="min-w-0 flex-1 text-left">
                  <span className="block text-[10.5px] tracking-[0.16em] text-white/35 uppercase">
                    {item.label}
                  </span>

                  <span className="font-display block truncate text-[14px] font-medium text-white">
                    {item.value}
                  </span>
                </span>

                <ArrowRight className="size-4 shrink-0 text-white/25 transition-all group-hover:translate-x-1 group-hover:text-white/60" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

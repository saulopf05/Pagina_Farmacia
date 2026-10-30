import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { CONTACT, NAV_LINKS } from "../lib/site-data";
import { cn } from "../lib/utils";

type SiteHeaderProps = {
  navLinks?: typeof NAV_LINKS;
  homeHref?: string;
  primaryHref?: string;
  primaryLabel?: string;
};

export function SiteHeader({
  navLinks = NAV_LINKS,
  homeHref = "#topo",
  primaryHref = "#cursos",
  primaryLabel = "Ver cursos",
}: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 40);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="fixed inset-x-0 top-0 z-90 px-4 pt-3 sm:px-6"
      >
        <div
          className={cn(
            "mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-5",
            scrolled
              ? "border border-white/10 bg-[#070a0f]/80 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl"
              : "border border-transparent bg-transparent",
          )}
        >
          <a href={homeHref} className="group flex items-center gap-2.5">
            <span className="relative grid size-8 shrink-0 place-items-center">
              <span className="border-primary/40 absolute inset-0 rounded-full border" />
              <span className="bg-primary/70 absolute inset-0 animate-[pulse-ring_3s_ease-out_infinite] rounded-full" />

              <img
                src="/images/logo.png"
                alt="Logo Claudiney Ferreira"
                className="relative z-10 size-7 object-contain"
              />
            </span>
            <span className="leading-none">
              <span className="font-display block text-[13px] font-semibold tracking-tight text-white">
                Prof. Claudiney Ferreira
              </span>
              <span className="block text-[10px] tracking-[0.18em] text-white/40 uppercase">
                Farmacologia &amp; Perícia
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative rounded-full px-3.5 py-2 text-[13px] font-normal text-white/65 transition-colors hover:text-white"
              >
                {link.label}
                <span className="bg-primary absolute inset-x-3.5 -bottom-0.5 h-px origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={primaryHref}
              className="bg-primary text-primary-foreground hover:shadow-primary/30 hidden rounded-full px-4 py-2 text-[13px] font-medium transition-all hover:-translate-y-0.5 hover:shadow-lg sm:block"
            >
              {primaryLabel}
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Abrir menu"
              className="grid size-9 place-items-center rounded-full border border-white/10 text-white/80 transition-colors hover:bg-white/5 lg:hidden"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-20 z-90 rounded-3xl border border-white/10 bg-[#070a0f]/95 p-3 backdrop-blur-xl lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.06 * i }}
                className="block rounded-2xl px-4 py-3 text-sm text-white/75 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-primary text-primary-foreground mt-2 flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium"
            >
              <MessageCircle className="size-4" /> Falar no WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

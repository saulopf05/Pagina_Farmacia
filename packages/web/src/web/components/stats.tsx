import { Counter, DrawLine, Reveal } from "./ui/motion-primitives";
import { STATS } from "../lib/site-data";

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#0b111a] py-20 sm:py-28">
      <div className="bg-dots absolute inset-0 opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(47,227,196,0.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <DrawLine className="mx-auto mb-14 h-16 w-full max-w-4xl opacity-70" />

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-5">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.12}>
              <div className="group relative">
                <div className="from-primary/60 absolute -top-3 left-0 h-px w-10 bg-gradient-to-r to-transparent transition-all duration-500 group-hover:w-full" />
                <p className="font-display text-[clamp(1.7rem,2.8vw,2.7rem)] leading-none font-bold text-white tracking-tight">
                  <Counter
                    to={stat.value}
                    suffix={stat.suffix}
                    decimals={"decimals" in stat ? (stat.decimals as number) : 0}
                  />
                </p>
                <p className="font-display mt-3 text-[13.5px] font-medium text-white/85">
                  {stat.label}
                </p>
                <p className="mt-1 text-[12px] text-white/40">{stat.hint}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

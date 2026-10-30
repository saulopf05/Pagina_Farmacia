import {
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  animate,
  type MotionValue,
} from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "../../lib/utils";





type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  blur?: boolean;
  as?: "div" | "span" | "li" | "section";
};

export function Reveal({ children, className, delay = 0, y = 30, blur = true }: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y, filter: blur ? "blur(8px)" : "none" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}





export function SplitWords({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.055,
  highlight = [],
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  highlight?: number[];
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  return (
    <span className={cn("inline-flex flex-wrap", className)}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="overflow-hidden py-[0.06em] pr-[0.28em]">
          <motion.span
            className={cn(
              "inline-block",
              highlight.includes(i) && "text-gradient",
              wordClassName,
            )}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: "0.9em", filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.9,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}





export function Counter({
  to,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 2,
  className,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true});
  const [value, setValue] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setValue(latest),
    });
    return () => controls.stop();
  }, [inView, to, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString("pt-BR", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}





export function useParallax(distance = 80) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const raw = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const y = useSpring(raw, { stiffness: 90, damping: 24, mass: 0.4 });
  return { ref, y };
}

export function Parallax({
  children,
  distance = 70,
  className,
}: {
  children: ReactNode;
  distance?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const { ref, y } = useParallax(distance);

  return (
    <div ref={ref} className={className}>
      <motion.div style={reduce ? undefined : { y }}>{children}</motion.div>
    </div>
  );
}





export function SpotlightCard({
  children,
  className,
  tilt = 5,
}: {
  children: ReactNode;
  className?: string;
  tilt?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const rx = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const ry = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const reduce = useReducedMotion();

  const background = useMotionTemplate`radial-gradient(420px circle at ${mx}% ${my}%, rgba(47,227,196,0.16), transparent 70%)`;

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || reduce) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    mx.set(px * 100);
    my.set(py * 100);
    ry.set((px - 0.5) * tilt * 2);
    rx.set(-(py - 0.5) * tilt * 2);
  }

  function handleLeave() {
    rx.set(0);
    ry.set(0);
    mx.set(50);
    my.set(50);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
      className={cn("group relative", className)}
    >
      <motion.div
        aria-hidden
        style={{ background }}
        className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      {children}
    </motion.div>
  );
}





export function Marquee({
  items,
  reverse = false,
  className,
  renderItem,
}: {
  items: string[];
  reverse?: boolean;
  className?: string;
  renderItem?: (item: string, index: number) => ReactNode;
}) {
  const doubled = [...items, ...items];

  return (
    <div className={cn("mask-fade-x overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max items-center gap-14",
          reverse ? "marquee-track-rev" : "marquee-track",
        )}
      >
        {doubled.map((item, i) =>
          renderItem ? (
            <div key={`${item}-${i}`}>{renderItem(item, i)}</div>
          ) : (
            <span
              key={`${item}-${i}`}
              className="font-display flex items-center gap-4 text-sm font-medium tracking-wide text-white/45 uppercase"
            >
              <span className="bg-primary/70 size-1.5 rotate-45" />
              {item}
            </span>
          ),
        )}
      </div>
    </div>
  );
}





export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX }}
      className="from-primary via-accent-2 fixed inset-x-0 top-0 z-100 h-[2px] origin-left bg-gradient-to-r to-transparent"
    />
  );
}





export function DrawLine({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <div ref={ref} className={className} aria-hidden>
      <svg viewBox="0 0 1200 80" fill="none" className="h-full w-full">
        <motion.path
          d="M0 60 L180 60 L215 20 L280 20 L315 60 L520 60 L560 14 L640 14 L680 60 L900 60 L935 26 L1010 26 L1045 60 L1200 60"
          stroke="url(#lineGrad)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 2.4, ease: "easeInOut" }}
        />
        {[215, 560, 935].map((cx, i) => (
          <motion.circle
            key={cx}
            cx={cx}
            cy={i === 1 ? 14 : i === 0 ? 20 : 26}
            r="4"
            fill="#2FE3C4"
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.9 + i * 0.35 }}
          />
        ))}
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2FE3C4" stopOpacity="0" />
            <stop offset="0.25" stopColor="#2FE3C4" stopOpacity="0.7" />
            <stop offset="0.75" stopColor="#38BDF8" stopOpacity="0.7" />
            <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export type { MotionValue };

import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import {
  ArrowUpRight,
  Sparkles,
  Code2,
  PenTool,
  BrainCircuit,
  Mail,
  MapPin,
  Linkedin,
  Github,
  Send,
  Building2,
  GraduationCap,
  ShieldCheck,
  BarChart3,
  Rocket,
  Zap,
  Layers,
  ExternalLink,
  Phone,
  Menu,
  X,
  FileSpreadsheet,
  Users,

} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import heroAsset from "@/assets/hero-portrait.jpg";
import madridAsset from "@/assets/madrid-portrait.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Vincenzo Teriaca — AI-Driven Product Engineer & UI/UX Designer" },
      {
        name: "description",
        content:
          "Vincenzo Teriaca — AI-Driven Product Engineer. Sviluppo web premium in React/Next.js, UI/UX di conversione e gestione dell'ecosistema digitale con AI.",
      },
      { property: "og:title", content: "Vincenzo Teriaca — AI-Driven Product Engineer" },
      {
        property: "og:description",
        content: "Codice, design e strategia aziendale. Prodotti digitali che fanno crescere il business.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const PHONE = "+39 320 907 8071";
const PHONE_HREF = "tel:+393209078071";
const EMAIL = "vincenzoteriac@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/vincenzoteriaca";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BackgroundFX />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <Stats />
        <Services />
        <Portfolio />
        <About />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- Background ---------------- */
function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[oklch(0.63_0.19_275/0.25)] blur-3xl animate-float-slow" />
      <div className="absolute top-1/3 -right-40 h-[560px] w-[560px] rounded-full bg-[oklch(0.87_0.16_205/0.18)] blur-3xl animate-float-slow" />
      <div className="absolute bottom-0 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[oklch(0.63_0.19_275/0.15)] blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0 / 0.5) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
    </div>
  );
}

/* ---------------- Nav ---------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const links = [
    { href: "#servizi", label: "Servizi" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#profilo", label: "Profilo" },
    { href: "#contatti", label: "Contatti" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4">
          <div
            className={`glass-panel flex items-center justify-between rounded-full px-3 py-2 transition-all ${
              scrolled ? "shadow-[0_10px_40px_-15px_oklch(0_0_0/0.6)]" : ""
            }`}
          >
            <a href="#top" className="flex items-center gap-2 pl-3 pr-3">
              <span className="grid size-8 place-items-center rounded-full bg-[image:var(--gradient-brand)] font-display text-[13px] font-bold text-[oklch(0.14_0.02_265)]">
                VT
              </span>
              <span className="hidden font-display text-sm font-semibold tracking-tight sm:inline">
                Vincenzo Teriaca
              </span>
            </a>
            <nav className="hidden items-center gap-1 md:flex">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <a
                href="#contatti"
                className="group hidden items-center gap-1.5 rounded-full bg-[image:var(--gradient-brand)] px-4 py-2 text-xs font-semibold text-[oklch(0.14_0.02_265)] shadow-[0_10px_30px_-10px_oklch(0.63_0.19_275/0.6)] transition-transform hover:scale-[1.03] md:inline-flex"
              >
                Analisi Gratuita
                <ArrowUpRight className="!size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <button
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Chiudi menu" : "Apri menu"}
                className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/5 text-foreground md:hidden"
              >
                {open ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-xl"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute inset-x-4 top-24 rounded-3xl border border-white/10 bg-surface p-6 transition-transform duration-300 ${
            open ? "translate-y-0" : "-translate-y-6"
          }`}
        >
          <ul className="grid gap-1">
            {links.map((l, i) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-4 text-lg font-display font-semibold transition-colors hover:bg-white/5"
                >
                  <span>
                    <span className="mr-3 text-xs text-muted-foreground">0{i + 1}</span>
                    {l.label}
                  </span>
                  <ArrowUpRight className="size-5 text-muted-foreground" />
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 grid gap-2 border-t border-white/10 pt-4">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
            >
              <Phone className="size-4 text-[var(--tech)]" />
              <span className="text-sm font-medium">{PHONE}</span>
            </a>
            <a
              href="#contatti"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-2xl bg-[image:var(--gradient-brand)] px-4 py-3 text-sm font-semibold text-[oklch(0.14_0.02_265)]"
            >
              Analisi Gratuita <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-16 md:pt-44 md:pb-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-7">
          {/* Big availability CTA */}
          <a
            href="#contatti"
            className="group inline-flex items-center gap-3 rounded-full border border-[var(--tech)]/30 bg-[oklch(0.87_0.16_205/0.08)] px-5 py-3 text-sm font-semibold text-foreground backdrop-blur transition-all hover:border-[var(--tech)]/60 hover:bg-[oklch(0.87_0.16_205/0.14)] hover:scale-[1.02] md:text-base"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--tech)] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--tech)]" />
            </span>
            Disponibile per nuovi progetti
            <span className="hidden text-xs font-normal text-muted-foreground sm:inline">
              · Palermo, IT
            </span>
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <h1 className="mt-6 font-display text-[clamp(2.4rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight">
            Vincenzo Teriaca
            <span className="block text-gradient-brand">AI-Driven Product Engineer</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Unisco codice, design e strategia aziendale. Costruisco esperienze web ad alte
            prestazioni e ne gestisco l'ecosistema con assoluta maestria per far crescere il tuo
            business.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#servizi"
              className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-6 py-3 text-sm font-semibold text-[oklch(0.14_0.02_265)] shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
            >
              Esplora i Servizi
              <ArrowUpRight className="!size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-white/10"
            >
              Vedi Progetti
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-foreground/90 backdrop-blur transition-colors hover:bg-white/10"
            >
              <Phone className="size-4 text-[var(--tech)]" />
              <span className="hidden sm:inline">{PHONE}</span>
              <span className="sm:hidden">Chiamami</span>
            </a>
          </div>
        </div>

     <div className="md:col-span-5">
  {/* HERO = Madrid portrait (per user swap) */}
  <PortraitFrame
    src={madridAsset} // 👈 Sostituito madridAsset.url con madridAsset
    alt="Vincenzo Teriaca a Madrid"
    tone="cool"
    objectPosition="center 25%"
  />
</div>
      </div>
    </section>
  );
}

function PortraitFrame({
  src,
  alt,
  tone = "cool",
  objectPosition = "center",
}: {
  src: string;
  alt: string;
  tone?: "warm" | "cool";
  objectPosition?: string;
}) {
  return (
    <div className="relative">
      <div
        className={`absolute -inset-6 rounded-[2rem] blur-2xl ${
          tone === "warm"
            ? "bg-[oklch(0.75_0.17_45/0.25)]"
            : "bg-[oklch(0.63_0.19_275/0.3)]"
        }`}
      />
      <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-surface p-2 shadow-2xl">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem]">
          <img
            src={src}
            alt={alt}
            style={{ objectPosition }}
            className="h-full w-full scale-[1.15] object-cover transition-transform duration-[1200ms] hover:scale-[1.22]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
        </div>
      </div>
      <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/10 bg-surface-2/80 px-4 py-3 backdrop-blur-md md:block">
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Focus</div>
        <div className="mt-0.5 font-display text-sm font-semibold">React · AI · Business</div>
      </div>
    </div>
  );
}

/* ---------------- Marquee ---------------- */
function Marquee() {
  const items = [
    "React", "Next.js", "TypeScript", "TailwindCSS", "HTML5", "CSS3",
    "JavaScript", "AI Gateway", "Node.js", "Figma", "Excel Advanced",
    "UI/UX", "Edge Runtime", "Design Systems",
  ];
  const row = [...items, ...items];
  return (
    <div className="relative border-y border-white/8 bg-white/[0.02] py-5">
      <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex shrink-0 animate-marquee gap-10 pr-10">
          {row.map((t, i) => (
            <div key={i} className="flex items-center gap-3 whitespace-nowrap">
              <span className="size-1.5 rounded-full bg-[var(--tech)]" />
              <span className="font-display text-sm font-medium text-muted-foreground">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Stats ---------------- */
function Stats() {
  const stats = [
    { k: "4+", v: "anni di esperienza", d: "Excel avanzato", icon: FileSpreadsheet },
    { k: "3+", v: "anni di sviluppo web", d: "HTML · CSS · JS · React", icon: Code2 },
    { k: "3+", v: "clienti soddisfatti", d: "Siti online e performanti", icon: Users },
    { k: "95/100", v: "diploma SIA", d: "Sistemi Informativi Aziendali", icon: GraduationCap },
  ];
  return (
    <section className="relative py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {stats.map((s) => (
            <div
              key={s.v}
              className="bento-card bento-card-hover group relative overflow-hidden p-5 md:p-6"
              data-cursor="hover"
            >
              <s.icon className="absolute -right-3 -bottom-3 size-20 text-white/[0.03] transition-transform duration-500 group-hover:scale-110 group-hover:text-[var(--tech)]/10" strokeWidth={1.25} />
              <div className="font-display text-3xl font-bold text-gradient-brand md:text-5xl">
                {s.k}
              </div>
              <div className="mt-2 text-sm font-semibold text-foreground md:text-base">{s.v}</div>
              <div className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">
                {s.d}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
function Services() {
  const services = [
    {
      n: "01",
      icon: Code2,
      title: "Sviluppo Web di Alto Livello",
      desc: "Architetture su misura in React/Next.js, veloci, sicure e ottimizzate per la scalabilità.",
      tags: ["React", "Next.js", "TypeScript", "Edge"],
      accent: "premium",
    },
    {
      n: "02",
      icon: PenTool,
      title: "UI/UX & Design di Conversione",
      desc: "Interfacce progettate per catturare gli utenti e trasformare i visitatori in clienti reali.",
      tags: ["Figma", "Design System", "A/B Test"],
      accent: "tech",
    },
    {
      n: "03",
      icon: BrainCircuit,
      title: "Gestione Ecosistema Digitale & AI",
      desc: "Gestione tecnica completa e automazione con AI. Ottimizzo la piattaforma allineandola ai costi e alla strategia aziendale.",
      tags: ["AI Ops", "Automazione", "Analytics"],
      accent: "premium",
    },
  ];

  return (
    <section id="servizi" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Servizi Premium"
          title={
            <>
              Un partner tecnico che parla{" "}
              <span className="text-gradient-brand">la lingua del business</span>.
            </>
          }
          sub="Tre linee di servizio pensate per aziende che vogliono un prodotto digitale performante, elegante e realmente misurabile."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.n}
              data-cursor="hover"
              className="bento-card bento-card-hover grid-radial group tilt-card p-7"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`font-display text-xs font-semibold tracking-widest ${
                    s.accent === "tech" ? "text-[var(--tech)]" : "text-[oklch(0.75_0.16_275)]"
                  }`}
                >
                  {s.n}
                </span>
                <div
                  className={`grid size-11 place-items-center rounded-xl border border-white/10 bg-white/5 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 ${
                    s.accent === "tech" ? "text-[var(--tech)]" : "text-[oklch(0.78_0.16_275)]"
                  }`}
                >
                  <s.icon className="size-5" />
                </div>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold leading-snug">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a href="#contatti" className="mt-8 inline-flex items-center gap-2 text-sm text-foreground/90">
                Richiedi info
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        <Sparkles className="size-3 text-[var(--tech)]" />
        {eyebrow}
      </div>
      <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
        {title}
      </h2>
      {sub && <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">{sub}</p>}
    </div>
  );
}

/* ---------------- Portfolio (interactive) ---------------- */
function Portfolio() {
  const projects = [
    {
      title: "Gym Website",
      role: "Fitness · Landing ad alta conversione",
      url: "https://gymwebsite-vt.vercel.app/",
      tag: "Live",
      grad: "linear-gradient(135deg, oklch(0.55 0.2 25), oklch(0.4 0.18 30))",
      icon: Zap,
      stack: ["React", "Tailwind", "Motion"],
    },
    {
      title: "Route 66 Diner",
      role: "Ristorazione · Brand experience americana",
      url: "https://route-66-diner-site.vercel.app/",
      tag: "Live",
      grad: "linear-gradient(135deg, oklch(0.65 0.19 55), oklch(0.45 0.14 30))",
      icon: Layers,
      stack: ["HTML", "CSS", "JS"],
    },
    {
      title: "Next-Gen AI Platform",
      role: "Piattaforma web con integrazione AI nativa",
      url: "#",
      tag: "In produzione",
      grad: "linear-gradient(135deg, oklch(0.5 0.2 275), oklch(0.55 0.17 205))",
      icon: Rocket,
      stack: ["Next.js", "AI Gateway", "Edge"],
    },
  ];

  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="portfolio" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Selected Work"
            title={
              <>
                Progetti che <span className="text-gradient-brand">performano</span>.
              </>
            }
            sub="Tocca o passa il mouse su un progetto per esplorarne lo stack e visitarlo dal vivo."
          />
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {projects.map((p, i) => {
            const isLive = p.url !== "#";
            const isActive = active === i;
            return (
              <article
                key={p.title}
                data-cursor="hover"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive((prev) => (prev === i ? null : i))}
                className="bento-card bento-card-hover group relative flex cursor-pointer flex-col overflow-hidden"
              >
                <div
                  className="relative aspect-[4/3] overflow-hidden"
                  style={{ background: p.grad }}
                >
                  <div className="absolute inset-0 opacity-20 mix-blend-overlay [background-image:radial-gradient(circle_at_20%_20%,white,transparent_50%)]" />
                  <div className="absolute inset-x-5 top-5 flex items-center justify-between">
                    <span className="rounded-full border border-white/25 bg-black/25 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-white/90 backdrop-blur">
                      {p.tag}
                    </span>
                    <span className="grid size-9 place-items-center rounded-full border border-white/25 bg-black/25 text-white backdrop-blur transition-transform group-hover:rotate-45">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                  <div className="absolute bottom-5 left-5">
                    <p.icon
                      className={`size-10 text-white/85 transition-transform duration-500 ${
                        isActive ? "scale-110 -rotate-6" : ""
                      }`}
                      strokeWidth={1.5}
                    />
                  </div>
                  {/* Overlay stack */}
                  <div
                    className={`absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/60 to-transparent p-5 transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="mb-2 text-[10px] uppercase tracking-widest text-white/70">
                      Stack
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-white/30 bg-white/10 px-2 py-0.5 text-[11px] text-white backdrop-blur"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.role}</p>
                  {isLive ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="mt-4 inline-flex items-center gap-1.5 self-start rounded-full border border-[var(--tech)]/40 bg-[var(--tech)]/10 px-3 py-1.5 text-xs font-semibold text-[var(--tech)] transition-colors hover:bg-[var(--tech)]/20"
                    >
                      Visita il sito <ExternalLink className="size-3" />
                    </a>
                  ) : (
                    <span className="mt-4 inline-flex items-center gap-1.5 self-start rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-muted-foreground">
                      Presto disponibile
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */
function About() {
  return (
    <section id="profilo" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Il Profilo Ibrido"
          title={
            <>
              Metà <span className="text-gradient-brand">engineer</span>, metà{" "}
              <span className="text-gradient-brand">stratega</span>.
            </>
          }
          sub="Un mix raro tra formazione economica solida, sensibilità estetica e padronanza dell'AI applicata."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-6 md:grid-rows-[auto_auto_auto]">
          <div className="bento-card bento-card-hover grid-radial p-7 md:col-span-3 md:row-span-1">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-[oklch(0.87_0.16_205/0.15)] text-[var(--tech)]">
                <BrainCircuit className="size-5" />
              </span>
              <h3 className="font-display text-lg font-semibold">Mente Tech & AI</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Passione per il software engineering e l'uso avanzato dell'AI per creare soluzioni
              rapide, intelligenti e scalabili. Prototipo in ore, spedisco in giorni.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-[11px]">
              {["React", "TypeScript", "HTML", "CSS", "JavaScript", "AI Gateway", "Automazione", "Edge Runtime"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[var(--tech)]/25 bg-[var(--tech)]/8 px-2.5 py-0.5 text-[var(--tech)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

{/* Second portrait = SUNSET (per user swap) */}
<div className="bento-card md:col-span-3 md:row-span-2">
  <div className="relative h-full min-h-[380px] overflow-hidden">
    <img
      src={heroAsset} // 👈 Cambiato da heroAsset.url a heroAsset
      alt="Vincenzo Teriaca al tramonto"
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
    <div className="absolute inset-x-6 bottom-6">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-widest text-white/80 backdrop-blur">
        <Sparkles className="size-3" /> Vision · Golden Hour
      </div>
      <h3 className="mt-3 font-display text-2xl font-semibold text-white">
        Estetica, precisione, visione.
      </h3>
      <p className="mt-1 max-w-sm text-sm text-white/70">
        Ogni pixel al posto giusto. Ogni interazione con un motivo.
      </p>
    </div>
  </div>
</div>

          <div className="bento-card bento-card-hover p-7 md:col-span-3">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-[oklch(0.63_0.19_275/0.18)] text-[oklch(0.78_0.16_275)]">
                <GraduationCap className="size-5" />
              </span>
              <h3 className="font-display text-lg font-semibold">Background Economico & Aziendale</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Diplomato <span className="font-semibold text-foreground">95/100</span> in Sistemi
              Informativi Aziendali (SIA) e futuro studente di Economia e Amministrazione
              Aziendale (L-18) a <span className="text-foreground">UniPa</span>. Competenze in
              contabilità, analisi dati (Excel avanzato) e gestione aziendale.{" "}
              <span className="text-foreground">Parlo la lingua del business.</span>
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                { k: "95/100", v: "Diploma SIA" },
                { k: "L-18", v: "Economia UniPa" },
                { k: "Excel", v: "4+ anni" },
              ].map((s) => (
                <div key={s.v} className="rounded-xl border border-white/10 bg-white/5 py-3">
                  <div className="font-display text-sm font-bold text-gradient-brand">{s.k}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bento-card bento-card-hover p-7 md:col-span-3">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-[oklch(0.87_0.16_205/0.15)] text-[var(--tech)]">
                <ShieldCheck className="size-5" />
              </span>
              <h3 className="font-display text-lg font-semibold">Certificazione IVASS</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Corso FAD di Prima Formazione IVASS (60 ore) in corso — conclusione prevista{" "}
              <span className="text-foreground">Agosto 2026</span>. Competenze su contrattualistica,
              conformità, normativa e tecniche di bancassicurazione: profilo ideale per contesti{" "}
              <span className="text-foreground">bancari e finanziari</span>.
            </p>
            <div className="mt-6 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="grid size-9 place-items-center rounded-lg bg-[image:var(--gradient-brand)] text-[oklch(0.14_0.02_265)]">
                <Building2 className="size-4" />
              </div>
              <div>
                <div className="text-sm font-semibold">RUI · Sezione E</div>
                <div className="text-[11px] text-muted-foreground">
                  Requisiti in acquisizione · RB Intermediari
                </div>
              </div>
            </div>
          </div>

          <div className="bento-card bento-card-hover grid-radial p-7 md:col-span-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-[oklch(0.63_0.19_275/0.18)] text-[oklch(0.78_0.16_275)]">
                  <BarChart3 className="size-5" />
                </span>
                <h3 className="font-display text-lg font-semibold">Timeline Professionale</h3>
              </div>
              <span className="hidden text-[11px] uppercase tracking-widest text-muted-foreground md:inline">
                2025 → 2026
              </span>
            </div>

            <ol className="relative mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  when: "Maggio 2025",
                  where: "Agenzia delle Entrate — Palermo",
                  role: "Tirocinante Amministrativo · PCTO",
                  desc: "Gestione flussi documentali, data entry avanzato e categorizzazione anagrafiche aziendali in Microsoft Excel. Precisione su database complessi e rispetto della riservatezza.",
                },
                {
                  when: "Marzo 2025",
                  where: "CAF — Palermo",
                  role: "Assistente Fiscale Junior · PCTO",
                  desc: "Raccolta, verifica e archiviazione documentazione fiscale per modelli 730. Primo contatto con l'utente in ambito di servizi finanziari.",
                },
                {
                  when: "Maggio 2026",
                  where: "Madrid, Spagna",
                  role: "Erasmus PCTO · Inglese & Mundo Laboral",
                  desc: "Corso intensivo di 40 ore presso il Centro de Lenguas Carlos V. Business English e mercato del lavoro internazionale.",
                },
              ].map((step, i) => (
                <li key={i} className="relative rounded-2xl border border-white/8 bg-white/[0.02] p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest text-[var(--tech)]">
                      {step.when}
                    </span>
                    <span className="font-display text-xs font-semibold text-muted-foreground">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="mt-2 font-display text-base font-semibold">{step.role}</div>
                  <div className="mt-0.5 text-xs text-muted-foreground">{step.where}</div>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{step.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */
function FinalCTA() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[oklch(0.63_0.19_275/0.25)] via-surface to-[oklch(0.87_0.16_205/0.15)] p-8 md:p-14 noise-overlay">
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                <Rocket className="size-3 text-[var(--tech)]" /> Prossimo passo
              </div>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight md:text-5xl">
                Trasformiamo la tua idea in un prodotto che{" "}
                <span className="text-gradient-brand">vende</span>.
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Analisi gratuita in 30 minuti. Insieme definiamo obiettivi, scope e roadmap tecnica.
                Rispondo entro 24 ore.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="#contatti"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[image:var(--gradient-brand)] px-6 py-4 text-base font-semibold text-[oklch(0.14_0.02_265)] shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
              >
                Prenota una call
                <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-base font-medium text-foreground backdrop-blur transition-colors hover:bg-white/10"
              >
                <Phone className="size-4 text-[var(--tech)]" /> {PHONE}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  const [sending, setSending] = useState(false);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !email || !message) {
      toast.error("Compila nome, email e messaggio.");
      return;
    }
    setSending(true);
    const subject = encodeURIComponent(`Nuova richiesta da ${name}`);
    const body = encodeURIComponent(
      `Nome: ${name}\nEmail: ${email}\nAzienda: ${data.get("company")}\nTelefono: ${data.get("phone")}\n\n${message}`,
    );
    // Small delay for feedback then open mail client
    await new Promise((r) => setTimeout(r, 350));
    toast.success("Messaggio pronto — apro la tua app email.");
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    form.reset();
    setSending(false);
  };

  return (
    <section id="contatti" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[image:var(--gradient-brand-soft)] p-6 md:p-14 noise-overlay">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                <Sparkles className="size-3 text-[var(--tech)]" />
                Contatti
              </div>
              <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                Pronto a far crescere la tua attività{" "}
                <span className="text-gradient-brand">o a discutere una posizione in azienda?</span>
              </h2>
              <p className="mt-5 max-w-md text-muted-foreground">
                Rispondo entro 24 ore. Che tu sia un imprenditore o un recruiter, parliamone.
              </p>

              <ul className="mt-8 space-y-4">
                <li>
                  <a href={PHONE_HREF} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-3 transition-colors hover:bg-white/10">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-[oklch(0.14_0.02_265)]">
                      <Phone className="size-4" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                        Telefono
                      </div>
                      <div className="truncate text-sm font-semibold">{PHONE}</div>
                    </div>
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5">
                    <Mail className="size-4 text-[var(--tech)]" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      Email
                    </div>
                    <a href={`mailto:${EMAIL}`} className="truncate text-sm font-medium hover:text-[var(--tech)]">
                      {EMAIL}
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5">
                    <MapPin className="size-4 text-[var(--tech)]" />
                  </span>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      Base
                    </div>
                    <div className="text-sm font-medium">Palermo, Italia</div>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5">
                    <Linkedin className="size-4 text-[var(--tech)]" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      LinkedIn
                    </div>
                    <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="truncate text-sm font-medium hover:text-[var(--tech)]">
                      /in/vincenzoteriaca
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <form onSubmit={onSubmit} className="glass-panel rounded-2xl p-6 md:p-8">
              <div className="grid gap-4">
                <Field label="Nome">
                  <Input name="name" required placeholder="Il tuo nome" className="h-11 border-white/10 bg-white/5" />
                </Field>
                <Field label="Email">
                  <Input name="email" type="email" required placeholder="tu@azienda.com" className="h-11 border-white/10 bg-white/5" />
                </Field>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Azienda (opzionale)">
                    <Input name="company" placeholder="Nome azienda" className="h-11 border-white/10 bg-white/5" />
                  </Field>
                  <Field label="Telefono (opzionale)">
                    <Input name="phone" type="tel" placeholder="+39 ..." className="h-11 border-white/10 bg-white/5" />
                  </Field>
                </div>
                <Field label="Messaggio">
                  <Textarea name="message" required rows={4} placeholder="Raccontami il progetto o la posizione." className="border-white/10 bg-white/5" />
                </Field>
                <label className="flex items-start gap-2 text-[11px] text-muted-foreground">
                  <input type="checkbox" required className="mt-0.5 accent-[var(--tech)]" />
                  <span>
                    Ho letto l'informativa e acconsento al trattamento dei dati per essere ricontattato.
                  </span>
                </label>
                <Button
                  type="submit"
                  disabled={sending}
                  className="mt-2 h-12 rounded-xl bg-[image:var(--gradient-brand)] text-[oklch(0.14_0.02_265)] hover:opacity-95"
                >
                  <Send className="!size-4" />
                  {sending ? "Invio..." : "Invia richiesta"}
                </Button>
                <p className="text-center text-[11px] text-muted-foreground">
                  I dati vengono inviati via email e non archiviati sul sito.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/8 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="grid size-8 place-items-center rounded-full bg-[image:var(--gradient-brand)] font-display text-[13px] font-bold text-[oklch(0.14_0.02_265)]">
            VT
          </span>
          <span className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Vincenzo Teriaca — Tutti i diritti riservati.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Link
            to="/privacy"
            className="mr-2 text-xs text-muted-foreground transition-colors hover:text-[var(--tech)]"
          >
            Privacy
          </Link>
          <a href={PHONE_HREF} aria-label="Telefono" className="grid size-9 place-items-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-white/25 hover:text-foreground">
            <Phone className="size-4" />
          </a>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid size-9 place-items-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-white/25 hover:text-foreground">
            <Linkedin className="size-4" />
          </a>
          <a href={`mailto:${EMAIL}`} aria-label="Email" className="grid size-9 place-items-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-white/25 hover:text-foreground">
            <Mail className="size-4" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid size-9 place-items-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-white/25 hover:text-foreground">
            <Github className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}



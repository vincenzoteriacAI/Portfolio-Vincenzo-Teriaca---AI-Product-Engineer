import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { Cookie, Check } from "lucide-react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const t = window.setTimeout(() => {
      try {
        if (!localStorage.getItem("vt-cookie-consent")) setVisible(true);
      } catch {
        setVisible(true);
      }
    }, 800);
    return () => window.clearTimeout(t);
  }, []);

  const decide = (choice: "all" | "essential") => {
    try {
      localStorage.setItem("vt-cookie-consent", choice);
    } catch {
      /* noop */
    }
    setVisible(false);
    toast.success(
      choice === "all" ? "Preferenze salvate. Grazie!" : "Solo cookie essenziali attivi.",
    );
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-3 md:p-5">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-surface/95 shadow-[0_20px_60px_-20px_oklch(0_0_0/0.8)]">
        <div className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:gap-6 md:p-6">
          <div className="flex items-start gap-3 md:items-center">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[oklch(0.87_0.16_205/0.15)] text-[var(--tech)]">
              <Cookie className="size-5" />
            </span>
            <div className="min-w-0">
              <div className="font-display text-sm font-semibold text-foreground">
                Cookie & trattamento dati
              </div>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Uso cookie tecnici essenziali e, con il tuo consenso, cookie di analisi per migliorare
                l'esperienza. I tuoi dati non vengono venduti.{" "}
                <Link
                  to="/privacy"
                  className="text-[var(--tech)] underline hover:text-[var(--tech)]/80"
                >
                  Scopri di più
                </Link>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row md:shrink-0">
            <button
              onClick={() => decide("essential")}
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-semibold text-foreground/90 transition-colors hover:bg-white/10"
            >
              Solo essenziali
            </button>
            <button
              onClick={() => decide("all")}
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[image:var(--gradient-brand)] px-4 py-2.5 text-xs font-semibold text-[oklch(0.14_0.02_265)] transition-transform hover:scale-[1.02]"
            >
              <Check className="size-3.5" /> Accetta tutti
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

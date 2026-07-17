import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Shield, Cookie, Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy & Cookie Policy — Vincenzo Teriaca" },
      {
        name: "description",
        content:
          "Informativa privacy e cookie del portfolio di Vincenzo Teriaca. Come trattiamo i dati, quali cookie usiamo e come esercitare i tuoi diritti.",
      },
      { property: "og:title", content: "Privacy & Cookie Policy — Vincenzo Teriaca" },
      {
        property: "og:description",
        content:
          "Informativa privacy e cookie del portfolio di Vincenzo Teriaca.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

const EMAIL = "vincenzoteriac@gmail.com";
const PHONE = "+39 320 907 8071";
const PHONE_HREF = "tel:+393209078071";

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[oklch(0.63_0.19_275/0.25)] blur-3xl animate-float-slow" />
        <div className="absolute top-1/3 -right-40 h-[560px] w-[560px] rounded-full bg-[oklch(0.87_0.16_205/0.18)] blur-3xl animate-float-slow" />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(oklch(1 0 0 / 0.5) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.5) 1px, transparent 1px)", backgroundSize: "60px 60px", maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)" }} />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 py-5">
        <div className="mx-auto max-w-6xl px-4">
          <div className="glass-panel flex items-center justify-between rounded-full px-3 py-2">
            <Link to="/" className="flex items-center gap-2 pl-3 pr-3">
              <span className="grid size-8 place-items-center rounded-full bg-[image:var(--gradient-brand)] font-display text-[13px] font-bold text-[oklch(0.14_0.02_265)]">
                VT
              </span>
              <span className="font-display text-sm font-semibold tracking-tight">
                Vincenzo Teriaca
              </span>
            </Link>
            <Link
              to="/"
              className="group mr-2 inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
              Torna al sito
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10 pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="mx-auto max-w-3xl px-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <Shield className="size-3 text-[var(--tech)]" /> Trasparenza
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Privacy & Cookie Policy
          </h1>
          <p className="mt-4 text-muted-foreground">
            Questa pagina spiega come vengono trattati i dati personali e i cookie sul portfolio di Vincenzo Teriaca.
            Ultimo aggiornamento: luglio 2026.
          </p>

          <div className="mt-12 space-y-10">
            <section>
              <h2 className="font-display text-2xl font-semibold">1. Titolare del trattamento</h2>
              <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-brand)] text-[oklch(0.14_0.02_265)]">
                      <Shield className="size-4" />
                    </span>
                    <span className="font-semibold text-foreground">Vincenzo Teriaca</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5">
                      <MapPin className="size-4 text-[var(--tech)]" />
                    </span>
                    <span>Palermo, Italia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5">
                      <Mail className="size-4 text-[var(--tech)]" />
                    </span>
                    <a href={`mailto:${EMAIL}`} className="hover:text-[var(--tech)]">{EMAIL}</a>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5">
                      <Phone className="size-4 text-[var(--tech)]" />
                    </span>
                    <a href={PHONE_HREF} className="hover:text-[var(--tech)]">{PHONE}</a>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold">2. Dati raccolti</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Quando utilizzi il form contatti, ci comunichi volontariamente: nome, indirizzo email,
                azienda (opzionale), telefono (opzionale) e il contenuto del messaggio. Non raccogliamo
                dati in modo nascosto né tramite profilazione automatica.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold">3. Finalità e base giuridica</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                I dati sono utilizzati esclusivamente per rispondere alle tue richieste e, ove possibile,
                per instaurare un rapporto pre-contrattuale o commerciale. La base giuridica è il consenso
                esplicito che dai inviando il form e l'interesse legittimo a rispondere alla tua richiesta.
                Non inviamo newsletter o comunicazioni promozionali automatiche.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold">4. Come vengono trasmessi i dati</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                I dati del form non vengono salvati su alcun server né archiviati in un database.
                Al clic su "Invia richiesta" il tuo dispositivo apre il client email predefinito con i
                campi precompilati. Il messaggio viaggia quindi via email direttamente al titolare.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold">5. Conservazione</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                I messaggi ricevuti via email vengono conservati fino a che non sia stata data una risposta
                completa e, comunque, non oltre 12 mesi, salvo obblighi di legge o la prosecuzione di un
                rapporto commerciale.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold">6. Cookie</h2>
              <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-[oklch(0.87_0.16_205/0.15)] text-[var(--tech)]">
                    <Cookie className="size-5" />
                  </span>
                  <div>
                    <div className="font-display text-sm font-semibold text-foreground">Cookie tecnici essenziali</div>
                    <div className="text-xs text-muted-foreground">Memorizzano la tua preferenza sui cookie.</div>
                  </div>
                </div>
                <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-white/5 text-xs uppercase tracking-wider text-muted-foreground">
                      <tr>
                        <th className="px-4 py-3">Nome</th>
                        <th className="px-4 py-3">Tipologia</th>
                        <th className="px-4 py-3">Scopo</th>
                        <th className="px-4 py-3">Durata</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 text-muted-foreground">
                      <tr>
                        <td className="px-4 py-3 font-mono text-xs">vt-cookie-consent</td>
                        <td className="px-4 py-3">Tecnico</td>
                        <td className="px-4 py-3">Ricorda la scelta sul consenso cookie</td>
                        <td className="px-4 py-3">1 anno</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Con il tuo consenso potremmo attivare in futuro cookie di analisi (es. per contare le visite
                  e migliorare l'esperienza). Fino ad allora, nessun cookie analitico o di terze parti viene installato.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold">7. Diritti dell'interessato</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Puoi esercitare i diritti di accesso, retifica, cancellazione, limitazione, opposizione e
                portabilità scrivendo a{" "}
                <a href={`mailto:${EMAIL}`} className="text-foreground hover:text-[var(--tech)]">{EMAIL}</a>.
                Risponderemo entro 30 giorni dalla ricezione della richiesta.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold">8. Modifiche</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Questa informativa può essere aggiornata in qualsiasi momento. Ti invitiamo a consultarla
                periodicamente per essere sempre informato sulle modalità di trattamento dei tuoi dati.
              </p>
            </section>
          </div>

          <div className="mt-14 flex justify-center">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-6 py-3 text-sm font-semibold text-[oklch(0.14_0.02_265)] shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
              Torna alla home
            </Link>
          </div>
        </div>
      </main>

      <footer className="relative z-10 border-t border-white/8 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <span className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Vincenzo Teriaca — Tutti i diritti riservati.
          </span>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-[var(--tech)]">Privacy</Link>
            <Link to="/" className="hover:text-[var(--tech)]">Home</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { CheckCircle2, Award, Briefcase, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePublicHero } from "@/hooks/usePublicHero";

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const renderTitle = (title: string) => {
  const parts = title.split(/(<highlight>.*?<\/highlight>)/g);
  return parts.map((p, i) => {
    const m = p.match(/^<highlight>(.*?)<\/highlight>$/);
    if (m)
      return (
        <span key={i} style={{ color: "#a667e4" }}>
          {m[1]}
        </span>
      );
    return <span key={i}>{p}</span>;
  });
};

const Hero = () => {
  const { data } = usePublicHero();

  const badge = data?.badge ?? "Diploma reconhecido nacionalmente";
  const titleRaw =
    data?.title ?? "Conquiste seu diploma mais rápido <highlight>do que você imagina</highlight>";
  const subtitle =
    data?.subtitle ?? "Cursos reconhecidos, 100% online e com foco no mercado de trabalho.";
  const primaryLabel = data?.primary_button_label ?? "Ver cursos disponíveis";
  const primaryTarget = data?.primary_button_target ?? "cursos";
  const secondaryLabel = data?.secondary_button_label ?? "Saiba mais";
  const secondaryTarget = data?.secondary_button_target ?? "beneficios";

  const checks = [
    "Certificação válida em todo Brasil",
    "Estude no seu ritmo",
    "Suporte especializado",
  ];

  const trustItems = [
    { icon: Award, label: "Certificado Técnico Autorizado pelo MEC" },
    { icon: ShieldCheck, label: "Registro Profissional no conselho de classe responsável" },
    { icon: Briefcase, label: "Melhores oportunidades no mercado de trabalho" },
  ];

  return (
    <section
      id="topo"
      className="relative bg-[hsl(var(--hero-bg))] text-primary-foreground overflow-hidden"
      style={
        data?.background_image_url
          ? {
              backgroundImage: `linear-gradient(hsl(var(--hero-bg) / 0.45), hsl(var(--hero-bg) / 0.85)), url(${data.background_image_url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {/* subtle radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(closest-side, hsl(var(--primary-glow)), transparent)" }}
      />

      <div className="container relative grid gap-10 pt-12 pb-28 md:grid-cols-2 md:pt-20 md:pb-36">
        <div className="space-y-6">
          {badge && (
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground/80 ring-1 ring-white/10">
              {badge}
            </span>
          )}

          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            {renderTitle(titleRaw)}
          </h1>

          <p className="max-w-md text-base text-primary-foreground/80 md:text-lg">{subtitle}</p>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Button
              size="lg"
              onClick={() => scrollToSection(primaryTarget)}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md font-semibold shadow-cta"
            >
              {primaryLabel}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection(secondaryTarget)}
              className="border-primary/70 bg-transparent text-primary-foreground hover:bg-primary/10 hover:text-primary-foreground rounded-md font-semibold"
            >
              {secondaryLabel}
            </Button>
          </div>
        </div>

        <ul className="flex flex-col justify-center gap-4 md:items-end md:pt-24">
          {checks.map((c) => (
            <li key={c} className="flex items-center gap-3 text-base font-medium md:text-lg">
              <CheckCircle2 className="h-6 w-6 text-accent shrink-0" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Trust card overlapping bottom */}
      <div className="container relative">
        <div className="absolute inset-x-0 -bottom-10 mx-auto max-w-5xl rounded-2xl bg-card text-card-foreground shadow-card-hover ring-1 ring-border">
          <div className="grid divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
            {trustItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 px-5 py-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold leading-snug">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* spacer for the floating card */}
      <div className="h-16 bg-background" />
    </section>
  );
};

export default Hero;

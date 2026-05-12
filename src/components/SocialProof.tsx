import { Star, Quote, ShieldCheck, Award, Users, ThumbsUp } from "lucide-react";

const testimonials = [
  {
    name: "Ana Carolina Souza",
    role: "Técnica em Enfermagem",
    city: "Salvador, BA",
    text: "Conseguir o diploma mudou minha vida. Hoje trabalho em hospital e meu salário praticamente dobrou. O suporte foi excelente do começo ao fim.",
    rating: 5,
  },
  {
    name: "Roberto Ferreira",
    role: "Técnico em Segurança do Trabalho",
    city: "Belo Horizonte, MG",
    text: "Aos 42 anos achei que não conseguiria voltar a estudar. As aulas online me permitiram conciliar com o trabalho e a família. Recomendo de olhos fechados.",
    rating: 5,
  },
  {
    name: "Marcia Oliveira",
    role: "Técnica em Administração",
    city: "Curitiba, PR",
    text: "Atendimento profissional, material completo e tutores muito atenciosos. Fui promovida na empresa logo após apresentar o certificado.",
    rating: 5,
  },
];

const trustItems = [
  { icon: Users, value: "+15.000", label: "Alunos formados" },
  { icon: ShieldCheck, value: "100%", label: "Diploma reconhecido" },
  { icon: Award, value: "12 anos", label: "De experiência em EAD" },
  { icon: ThumbsUp, value: "4.9/5", label: "Avaliação dos alunos" },
];

const SocialProof = () => {
  return (
    <section id="depoimentos" className="bg-secondary py-20 md:py-28">
      <div className="container">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map(({ icon: Icon, value, label }) => (
            <div key={label} className="rounded-xl border border-border bg-card p-6 text-center shadow-soft">
              <Icon className="mx-auto h-8 w-8 text-primary" strokeWidth={1.75} />
              <p className="mt-3 font-display text-2xl font-bold text-primary md:text-3xl">{value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Quem já transformou a carreira</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            Histórias reais de quem conquistou um novo futuro
          </h2>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="relative flex flex-col rounded-xl border border-border bg-card p-7 shadow-card"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/10" />
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mt-4 flex-1 leading-relaxed text-foreground">"{t.text}"</p>
              <div className="mt-6 border-t border-border pt-5">
                <p className="font-display font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role} • {t.city}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

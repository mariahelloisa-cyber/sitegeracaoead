import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import { usePublicContact, DEFAULT_CONTACT } from "@/hooks/usePublicContact";

const Footer = () => {
  const { data } = usePublicContact();
  const contact = data ?? DEFAULT_CONTACT;
  return (
    <footer className="bg-primary py-14 text-primary-foreground">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-foreground/10">
                <GraduationCap className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="font-display text-lg font-bold">Instituto Técnico</p>
                <p className="text-xs text-primary-foreground/70">Educação Profissional EAD</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">
              Há mais de 12 anos transformando vidas por meio da educação técnica
              a distância em todo o Brasil.
            </p>
          </div>

          <div>
            <h3 className="font-display text-base font-semibold">Contato</h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-accent" />
                <span>{contact.phone_display}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-accent" />
                <span>{contact.email}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-accent" />
                <span>{contact.location}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base font-semibold">Navegação</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#beneficios" className="text-primary-foreground/80 hover:text-accent transition-colors">Benefícios</a></li>
              <li><a href="#cursos" className="text-primary-foreground/80 hover:text-accent transition-colors">Cursos</a></li>
              <li><a href="#depoimentos" className="text-primary-foreground/80 hover:text-accent transition-colors">Depoimentos</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/15 pt-6 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Instituto Técnico EAD. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

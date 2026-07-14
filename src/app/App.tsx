import { useState } from "react";
import {
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  ArrowRight,
  Terminal,
} from "lucide-react";

type Page = "home" | "projects" | "contact";

const NAV: { id: Page; label: string }[] = [
  { id: "home", label: "início" },
  { id: "projects", label: "projetos" },
  { id: "contact", label: "contato" },
];

const SKILLS = [
  { category: "Linguagens", items: ["JavaScript", "Python", "CSS", "HTML", "Node.js"] },
  { category: "Banco de Dados", items: ["PostgreSQL"] },
  { category: "Infraestrutura", items: ["Linux", "Windows Server", "AWS", "Zambbix", "VPS"] },
];

const PROJECTS = [
  {
    title: "Eye Tracking Car Control",
    description:
      "Este projeto implementa um sistema de controle inovador onde um carrinho com motor é comandado através do movimento dos olhos do usuário.",
    tags: ["Python", "Arduino", "C++"],
    github: "https://github.com/fireone-Ops/eye-tracking-car-control",
    demo: null,
    year: "2025",
  },
  {
    title: "AgroCore",
    description:
      "AgroCore é uma plataforma web de gestão agrícola desenvolvida para produtores rurais que precisam centralizar o controle de suas operações em um só lugar. Com ela é possível gerenciar múltiplas fazendas, acompanhar plantios e colheitas, controlar o estoque de insumos, monitorar o maquinário em tempo real e receber alertas automáticos sobre pragas, clima adverso e estoques críticos — tudo via navegador, sem instalar nada. O sistema é multiusuário, com perfis distintos para o produtor, engenheiro agrônomo, gerente e operador de máquina, cada um com acesso e responsabilidades específicas dentro da plataforma.",
    tags: ["Python", "Oracle", "PostgreSQL", "HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "#",
    year: "2026",
  },
  {
    title: "pdf organizer automation",
    description:
      "Sistema automatizado para organização de arquivos PDF baixados",
    tags: ["Python", "Flask"],
    github: "https://github.com/fireone-Ops/pdf-organizer-automation",
    demo: null,
    year: "2026",
  },
  {
    title: "User Registration CLI System",
    description:
      "Sistema de cadastro de usuários via linha de comando (CLI)",
    tags: ["Python", "JSON"],
    github: "https://github.com/fireone-Ops/User-Registration-CLI-System",
    demo: null,
    year: "2026",
  },
  {
    title: "Scan Port",
    description:
      "Mini Port Scanner + Dashboard Scanner de portas TCP com interface web em Flask, feito para portfólio. Escaneia portas (IPv4/IPv6), usa ThreadPoolExecutor para paralelizar I/O e tenta capturar banners simples.",
    tags: ["Python", "JSON", "Flask"],
    github: "https://github.com/fireone-Ops/Scanner-Port",
    demo: null,
    year: "2025",
  },
];

function Nav({ page, setPage }: { page: Page; setPage: (p: Page) => void }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 h-14 flex items-center justify-between">
        <button
          onClick={() => setPage("home")}
          className="font-mono text-sm text-foreground hover:text-primary transition-colors tracking-tight"
          style={{ fontFamily: "var(--font-mono-family)" }}
        >
          <span className="text-primary">~/</span>Davi
        </button>
        <div className="flex items-center gap-1">
          {NAV.map((link) => (
            <button
              key={link.id}
              onClick={() => setPage(link.id)}
              className={`font-mono text-xs px-4 py-2 transition-colors ${
                page === link.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              style={{ fontFamily: "var(--font-mono-family)" }}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function HomePage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="min-h-[92vh] flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-20 pb-12">
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1fr_300px] gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span
                className="font-mono text-xs text-primary tracking-widest uppercase"
                style={{ fontFamily: "var(--font-mono-family)" }}
              >
                Davi Sousa
              </span>
              <span className="h-px w-8 bg-primary/40" />
              <span
                className="font-mono text-xs text-muted-foreground tracking-widest"
                style={{ fontFamily: "var(--font-mono-family)" }}
              >
                disponível
              </span>
              <span className="size-1.5 rounded-full bg-green-400 animate-pulse" />
            </div>

            <h1
              className="text-[clamp(3rem,9vw,7rem)] font-bold leading-[0.9] tracking-tight mb-8"
              style={{ fontFamily: "var(--font-display-family)" }}
            >
              Desenvolvedor
              <br />
              <span className="text-primary">Fullstack</span>
              <br />
            </h1>

            <p className="text-muted-foreground text-lg max-w-lg mb-10 leading-relaxed">
             Estudante de Engenharia de Software, apaixonado por desenvolvimento de sistemas, inteligência artificial e tecnologia. Construindo soluções que unem código e tecnologia para resolver problemas do mundo real, e sem abrir mão de uma boa pamonha goiana
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <button
                onClick={() => onNavigate("projects")}
                className="group flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors"
              >
                Ver projetos
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate("contact")}
                className="flex items-center gap-2 border border-border text-foreground/60 px-6 py-3 text-sm font-medium tracking-wide hover:border-primary/40 hover:text-foreground transition-all"
              >
                Entrar em contato
              </button>
            </div>
          </div>

          {/* Terminal card */}
          <div
            className="hidden lg:block font-mono text-xs"
            style={{ fontFamily: "var(--font-mono-family)" }}
          >
            <div className="bg-card border border-border">
              <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border">
                <span className="size-2 rounded-full bg-red-500/60" />
                <span className="size-2 rounded-full bg-yellow-400/60" />
                <span className="size-2 rounded-full bg-green-500/60" />
                <span className="ml-auto text-muted-foreground text-[10px]">
                  bash — 80×24
                </span>
              </div>
              <div className="p-5 space-y-2 text-[11px] leading-relaxed">
                <div>
                  <span className="text-primary">❯</span>
                  <span className="text-foreground/60"> whoami</span>
                </div>
                <div className="text-green-400/80 pl-3">Davi Sousa</div>

                <div className="pt-1">
                  <span className="text-primary">❯</span>
                  <span className="text-foreground/60"> cat stack.txt</span>
                </div>
                <div className="pl-3 text-cyan-300/70">JS · Python · Node.JS</div>
                <div className="pl-3 text-cyan-300/70">PostgreSQL</div>
                <div className="pl-3 text-cyan-300/70">Windowns Server · Linux · AWS</div>

                <div className="pt-1">
                  <span className="text-primary">❯</span>
                  <span className="text-foreground/60"> git log --oneline -3</span>
                </div>
                <div className="pl-3 text-foreground/50">
                  a3f1c2d feat: eye tracking calibration
                </div>
                <div className="pl-3 text-foreground/50">
                  b7e4a1f feat: agrocore multi-farm
                </div>
                <div className="pl-3 text-foreground/50">
                  c9d2b3e feat: port scanner dashboard
                </div>

                <div className="pt-1 flex items-center gap-1">
                  <span className="text-primary">❯</span>
                  <span className="inline-block w-1.5 h-3.5 bg-primary/80 animate-pulse ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <span
              className="font-mono text-xs text-primary tracking-widest uppercase"
              style={{ fontFamily: "var(--font-mono-family)" }}
            >
              Stack técnico
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {SKILLS.map((group) => (
              <div key={group.category} className="bg-background p-6 space-y-3">
                <div
                  className="text-[10px] text-muted-foreground tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-mono-family)" }}
                >
                  {group.category}
                </div>
                <div className="space-y-2">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-foreground/75"
                    >
                      <span className="size-1 rounded-full bg-primary/50 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className="px-6 md:px-12 lg:px-20 pb-24">
        <div className="max-w-6xl mx-auto border border-border">
          <div className="grid md:grid-cols-[auto_1fr] gap-0">
            <div className="border-b md:border-b-0 md:border-r border-border px-8 py-10 flex items-center justify-center">
              <Terminal className="size-10 text-primary/50" />
            </div>
            <div className="px-10 py-10">
              <h3
                className="text-2xl font-semibold text-foreground mb-4"
                style={{ fontFamily: "var(--font-display-family)" }}
              >
                Sobre mim
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                Meu interesse em programação começou tentando entender a lógica de um
                sistema enquanto aprendia a fazer sites. Desde então venho
                mergulhando principalmente em Python, bancos de dados, JS e como sistemas se comunicam.
                Ainda estou construindo minha trajetória, mas já tenho projetos que
                mostram onde estou chegando.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectsPage() {
  return (
    <div className="min-h-screen pt-28 px-6 md:px-12 lg:px-20 pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <div
            className="font-mono text-xs text-primary tracking-widest uppercase mb-4"
            style={{ fontFamily: "var(--font-mono-family)" }}
          >
            /projetos
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-display-family)" }}
          >
            O que construí
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="group bg-background p-8 flex flex-col gap-5 hover:bg-card transition-colors duration-200"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <span
                    className="font-mono text-[10px] text-muted-foreground"
                    style={{ fontFamily: "var(--font-mono-family)" }}
                  >
                    {project.year}
                  </span>
                  <h3
                    className="text-lg font-semibold text-foreground mt-1 group-hover:text-primary transition-colors"
                    style={{ fontFamily: "var(--font-display-family)" }}
                  >
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center gap-3 pt-1 shrink-0">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="size-4" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Demo"
                    >
                      <ExternalLink className="size-4" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] border border-border text-muted-foreground px-2 py-0.5 hover:border-primary/30 hover:text-primary/70 transition-colors"
                    style={{ fontFamily: "var(--font-mono-family)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center gap-4">
          <span className="h-px flex-1 bg-border" />
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
            style={{ fontFamily: "var(--font-mono-family)" }}
          >
            <Github className="size-3.5" />
            Ver mais no GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen pt-28 px-6 md:px-12 lg:px-20 pb-24">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-16 items-start">
        {/* Left */}
        <div>
          <div
            className="font-mono text-xs text-primary tracking-widest uppercase mb-4"
            style={{ fontFamily: "var(--font-mono-family)" }}
          >
            /contato
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display-family)" }}
          >
            Vamos construir
            <br />
            algo juntos
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-12 max-w-sm">
            Aberto a conversas sobre estágios, projetos colaborativos ou
            qualquer coisa relacionada a backend e desenvolvimento. Respondo
            sempre que puder.
          </p>

          <div className="space-y-5">
            {[
              {
                Icon: Mail,
                label: "desousavileladavi@gmail.com",
                sub: "E-mail",
                href: "mailto:desousavileladavi@gmail.com",
              },
              {
                Icon: Github,
                label: "github.com/fireone-Ops",
                sub: "GitHub",
                href: "https://github.com/fireone-Ops",
              },
              {
                Icon: Linkedin,
                label: "in/davisousavilela",
                sub: "LinkedIn",
                href: "https://www.linkedin.com/in/davisousavilela/",
              },
            ].map(({ Icon, label, sub, href }) => (
              <a key={label} href={href} className="flex items-center gap-4 group">
                <div className="size-10 border border-border flex items-center justify-center text-muted-foreground group-hover:border-primary/50 group-hover:text-primary transition-all shrink-0">
                  <Icon className="size-4" />
                </div>
                <div>
                  <div
                    className="font-mono text-xs text-muted-foreground mb-0.5"
                    style={{ fontFamily: "var(--font-mono-family)" }}
                  >
                    {sub}
                  </div>
                  <div className="text-sm text-foreground/70 group-hover:text-foreground transition-colors">
                    {label}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="bg-card border border-border p-8">
          {sent ? (
            <div className="flex flex-col items-center justify-center h-72 gap-4">
              <div
                className="font-mono text-primary text-sm"
                style={{ fontFamily: "var(--font-mono-family)" }}
              >
                ✓ mensagem enviada
              </div>
              <p className="text-muted-foreground text-sm text-center max-w-xs">
                Obrigado pelo contato! Retorno em breve.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-6"
            >
              {[
                { id: "name", label: "Nome", type: "text", placeholder: "Seu nome completo" },
                { id: "email", label: "E-mail", type: "email", placeholder: "seu@email.com" },
                { id: "subject", label: "Assunto", type: "text", placeholder: "Sobre o projeto..." },
              ].map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block font-mono text-[10px] text-muted-foreground tracking-widest uppercase mb-2"
                    style={{ fontFamily: "var(--font-mono-family)" }}
                  >
                    {field.label}
                  </label>
                  <input
                    required
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 transition-colors"
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  className="block font-mono text-[10px] text-muted-foreground tracking-widest uppercase mb-2"
                  style={{ fontFamily: "var(--font-mono-family)" }}
                >
                  Mensagem
                </label>
                <textarea
                  required
                  id="message"
                  rows={5}
                  placeholder="Descreva o projeto ou a oportunidade..."
                  className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors"
              >
                Enviar mensagem
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("home");

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Nav page={page} setPage={setPage} />

      <main>
        {page === "home" && <HomePage onNavigate={setPage} />}
        {page === "projects" && <ProjectsPage />}
        {page === "contact" && <ContactPage />}
      </main>

      <footer className="border-t border-border px-6 md:px-12 lg:px-20 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span
            className="font-mono text-xs text-muted-foreground"
            style={{ fontFamily: "var(--font-mono-family)" }}
          >
            © 2026 Davi Sousa
          </span>
          <span
            className="font-mono text-xs text-muted-foreground"
            style={{ fontFamily: "var(--font-mono-family)" }}
          >
            feito com café e curiosidade ♥
          </span>
        </div>
      </footer>
    </div>
  );
}

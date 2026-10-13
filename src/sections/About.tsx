import { Container } from '@/components/Container'
import Reveal from '@/components/Reveal'

const STACK = [
  { name: 'React', note: 'Interfaces' },
  { name: 'TypeScript', note: 'Código seguro' },
  { name: 'Tailwind CSS', note: 'Estilização' },
  { name: 'Vite', note: 'Build rápido' },
  { name: 'Supabase', note: 'Banco e autenticação' },
  { name: 'HTML + CSS + JS', note: 'Base sólida' },
]

export default function About() {
  return (
    <section id="sobre" className="scroll-mt-20 border-t border-white/5 py-24 md:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <Reveal>
            <div className="relative mx-auto w-fit">
              <div className="absolute -inset-3 rounded-full bg-accent/15 blur-2xl" aria-hidden="true" />
              <div className="relative h-44 w-44 overflow-hidden rounded-full border border-accent/30 bg-surface md:h-56 md:w-56">
                <img
                  src="/foto.png"
                  alt="Raul, desenvolvedor de sites"
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <span
                className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full border border-accent/40 bg-bg text-accent md:h-10 md:w-10"
                aria-hidden="true"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m16 18 6-6-6-6" />
                  <path d="m8 6-6 6 6 6" />
                </svg>
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">Sobre mim</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Raul, desenvolvedor de sites
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted md:text-base">
              Crio sites para pequenos negócios que precisam de presença na internet — da vitrine
              institucional à loja online com pedidos direto no WhatsApp e pagamento por Pix. Cuido
              de tudo: design, desenvolvimento, painel de gerenciamento e publicação com domínio
              próprio, para que você fique com um site que funciona e que você mesmo consegue
              atualizar.
            </p>

            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
              Ferramentas que uso no dia a dia
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {STACK.map((tech) => (
                <span
                  key={tech.name}
                  className="inline-flex items-baseline gap-2 rounded-full border border-white/10 bg-surface px-4 py-2 text-sm font-medium transition-colors hover:border-accent/40"
                >
                  {tech.name}
                  <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
                    {tech.note}
                  </span>
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

import { Container } from '@/components/Container'
import Reveal from '@/components/Reveal'
import { ArrowRight, Check, ExternalLink } from '@/icons'

const PROJECTS = [
  {
    title: 'Dudavi Doces',
    description:
      'Loja de brownies em Santa Catarina, no ar com domínio próprio. O cliente monta o pedido no site e a lojista gerencia tudo sozinha pelo painel.',
    features: [
      'Pedido montado no site e enviado pronto para o WhatsApp',
      'Pagamento por Pix com as chaves da loja',
      'Painel próprio para trocar fotos, sabores e preços sem programar',
      'Catálogo sempre atualizado, direto do celular',
    ],
    tags: ['Loja online', 'WhatsApp', 'Pix', 'Painel admin'],
    image: '/prints/dudavi.png',
    href: 'https://dudavidoces.com.br',
    cta: 'Visitar site',
    meta: 'dudavidoces.com.br',
  },
]

export default function Projects() {
  return (
    <section id="projetos" className="scroll-mt-20 py-24 md:py-32">
      <Container>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">Projetos</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Projeto em destaque
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-2xl gap-6">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.1}>
              <article className="card-glow group h-full overflow-hidden rounded-2xl border border-white/8 bg-surface">
                <div className="relative aspect-[16/10] overflow-hidden border-b border-white/8 bg-black/20">
                  <img
                    src={project.image}
                    alt={`Prévia do projeto ${project.title}`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-accent/25 bg-accent/8 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
                  <ul className="mt-4 space-y-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-[13px] text-muted">
                        <span className="mt-0.5 text-accent">
                          <Check width={14} height={14} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                    <a
                      href={project.href}
                      target={project.href.startsWith('http') ? '_blank' : undefined}
                      rel={project.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="btn-glow inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-display text-xs font-semibold text-bg"
                    >
                      {project.cta}
                      <ExternalLink width={14} height={14} />
                    </a>
                    <span className="text-right font-mono text-[10px] text-muted">{project.meta}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mx-auto mt-6 max-w-2xl">
          <a
            href="#contato"
            className="group flex min-h-[140px] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-white/12 p-8 text-center transition-colors hover:border-accent/40"
          >
            <p className="font-display text-lg font-semibold text-muted transition-colors group-hover:text-fg">
              O próximo projeto pode ser o seu
            </p>
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Começar um projeto
              <ArrowRight width={16} height={16} />
            </span>
          </a>
        </Reveal>
      </Container>
    </section>
  )
}

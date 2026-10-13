import { Container } from '@/components/Container'
import Reveal from '@/components/Reveal'

const TESTIMONIALS = [
  {
    quote:
      'Mano, teu projeto ficou muito bom! Visual bonito, tudo organizado e um cuidado nos detalhes que faz diferença. Dá pra ver que você dedicou tempo pra fazer bem feito. Parabéns pelo trabalho!',
    name: 'Davi Pereira',
    role: 'Dudavi Doces — loja de brownies',
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="scroll-mt-20 border-t border-white/5 py-24 md:py-32">
      <Container>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">Depoimentos</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            O que dizem os clientes
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]">
          {TESTIMONIALS.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.1}>
              <figure className="card-glow flex h-full flex-col rounded-2xl border border-white/8 bg-surface p-7">
                <span aria-hidden="true" className="font-display text-4xl leading-none text-accent">
                  &ldquo;
                </span>
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-white/8 pt-4">
                  <p className="font-display text-sm font-semibold">{item.name}</p>
                  <p className="mt-1 font-mono text-[11px] text-muted">{item.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

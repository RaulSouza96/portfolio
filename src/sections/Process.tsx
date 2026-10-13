import { Container } from '@/components/Container'
import Reveal from '@/components/Reveal'
import { Code, FileText, MessageCircle, Rocket } from '@/icons'
import { WHATSAPP_URL } from '@/lib/constants'

const STEPS = [
  {
    icon: MessageCircle,
    number: '01',
    title: 'Conversa',
    description:
      'Você me chama no WhatsApp e conta o que precisa. Entendo o seu negócio e o que faz sentido fazer — sem compromisso.',
  },
  {
    icon: FileText,
    number: '02',
    title: 'Proposta por escrito',
    description:
      'Escopo, prazo e valor combinados antes de qualquer linha de código. Sem surpresa no final.',
  },
  {
    icon: Code,
    number: '03',
    title: 'Desenvolvimento',
    description:
      'Você acompanha cada etapa e testa tudo ainda durante o desenvolvimento, com ajustes pelo caminho.',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Site no ar',
    description:
      'Publicação com domínio próprio e suporte depois da entrega para o que você precisar.',
  },
]

export default function Process() {
  return (
    <section id="como-funciona" className="scroll-mt-20 border-t border-white/5 py-24 md:py-32">
      <Container>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">
            Como funciona
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Do primeiro oi ao site no ar
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
            Um caminho simples e transparente — você sabe o que acontece em cada etapa e
            o que vem depois.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.1}>
              <article className="card-glow relative h-full rounded-2xl border border-white/8 bg-surface p-7">
                <span className="font-mono text-xs tracking-[0.25em] text-accent">
                  {step.number}
                </span>
                <span className="mt-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent/25 bg-accent/8 text-accent">
                  <step.icon width={22} height={22} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25} className="mt-10 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-display text-sm font-semibold text-bg"
          >
            <MessageCircle width={18} height={18} />
            Começar pela conversa
          </a>
        </Reveal>
      </Container>
    </section>
  )
}

import { Container } from '@/components/Container'
import Reveal from '@/components/Reveal'
import { Cart, Code, Layout } from '@/icons'

const SERVICES = [
  {
    icon: Layout,
    title: 'Sites institucionais',
    description:
      'Presença profissional para o seu negócio na internet, com design próprio e informações claras.',
  },
  {
    icon: Code,
    title: 'Landing pages',
    description:
      'Páginas objetivas e rápidas, pensadas para converter visitantes em clientes.',
  },
  {
    icon: Cart,
    title: 'Lojas online',
    description:
      'Venda pela internet com vitrine, pedidos direto no WhatsApp e pagamento por Pix.',
  },
]

export default function Services() {
  return (
    <section id="servicos" className="scroll-mt-20 py-24 md:py-32">
      <Container>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">Serviços</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            O que eu faço
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.12}>
              <article className="card-glow h-full rounded-2xl border border-white/8 bg-surface p-8">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-accent/25 bg-accent/8 text-accent">
                  <service.icon width={24} height={24} />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

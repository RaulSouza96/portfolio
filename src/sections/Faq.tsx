import { Container } from '@/components/Container'
import Reveal from '@/components/Reveal'

const FAQ_ITEMS = [
  {
    question: 'Quanto tempo demora para o site ficar pronto?',
    answer:
      'Depende do projeto. Uma landing page ou site institucional fica pronto em poucos dias; lojas online com painel de gerenciamento levam um pouco mais. O prazo fica combinado por escrito antes de começar.',
  },
  {
    question: 'O site fica no meu nome?',
    answer:
      'Sim. O domínio e os dados da hospedagem são registrados no seu nome. O site é seu, sem dependência de quem fez.',
  },
  {
    question: 'Consigo atualizar o site sozinho?',
    answer:
      'Sim. Projetos com painel, como o da Dudavi Doces, permitem trocar fotos, preços e produtos sem programar nada. E se preferir, eu mesmo faço as alterações.',
  },
  {
    question: 'Quanto custa?',
    answer:
      'Cada projeto é único — um site institucional sai bem mais em conta que uma loja online completa. Me chama no WhatsApp contando o que você precisa e eu envio o orçamento sem compromisso.',
  },
  {
    question: 'Como funciona o pagamento?',
    answer:
      'Tudo combinado por escrito antes de começar: 50% na entrada e 50% na entrega, via Pix ou link de pagamento com cartão em até 12x.',
  },
]

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 border-t border-white/5 py-24 md:py-32">
      <Container>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">Dúvidas</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Perguntas frequentes
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <Reveal key={item.question} delay={i * 0.06}>
              <details className="card-glow group rounded-2xl border border-white/8 bg-surface">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 [&::-webkit-details-marker]:hidden">
                  <span className="font-display text-base font-semibold">{item.question}</span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-lg text-accent transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="px-6 pb-6 text-sm leading-relaxed text-muted">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

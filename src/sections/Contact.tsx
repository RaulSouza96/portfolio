import { Container } from '@/components/Container'
import Reveal from '@/components/Reveal'
import { Github, Mail, WhatsApp } from '@/icons'
import { WHATSAPP_URL } from '@/lib/constants'

export default function Contact() {
  return (
    <section id="contato" className="scroll-mt-20 py-24 md:py-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-accent/15 bg-surface px-8 py-16 text-center md:px-16 md:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
            />
            <p className="relative font-mono text-xs uppercase tracking-[0.35em] text-accent">
              Contato
            </p>
            <h2 className="relative mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Vamos criar algo juntos?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted">
              Me conte sobre a sua ideia — respondo rápido e temos um caminho claro do
              briefing ao site no ar.
            </p>
            <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 font-display text-sm font-semibold text-bg"
              >
                <WhatsApp width={18} height={18} />
                Chamar no WhatsApp
              </a>
              <a
                href="mailto:raulsouza9698@gmail.com"
                className="inline-flex items-center gap-2.5 rounded-full border border-fg/20 px-7 py-3.5 font-display text-sm font-semibold text-fg transition-colors hover:border-accent/60 hover:text-accent"
              >
                <Mail width={18} height={18} />
                raulsouza9698@gmail.com
              </a>
              <a
                href="https://github.com/RaulSouza96"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-fg/20 px-7 py-3.5 font-display text-sm font-semibold text-fg transition-colors hover:border-accent/60 hover:text-accent"
              >
                <Github width={18} height={18} />
                GitHub
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

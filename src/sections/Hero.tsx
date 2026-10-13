import { motion } from 'framer-motion'
import { Container } from '@/components/Container'
import ParticleField from '@/components/ParticleField'
import Typed from '@/components/Typed'
import { ArrowRight } from '@/icons'
import { WHATSAPP_URL } from '@/lib/constants'

const PHRASES = [
  'lojas online.',
  'landing pages.',
  'sites institucionais.',
] as const

const enter = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
})

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[640px] items-center overflow-hidden pt-16 lg:min-h-[78vh]"
    >
      <img
        src="/hero-orb-background.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-[66%_center] opacity-90 sm:object-[62%_center]"
        fetchPriority="high"
        width={1600}
        height={912}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/55 to-transparent" />
      <div className="hero-grid absolute inset-0" />
      <ParticleField className="absolute inset-0 h-full w-full" />

      {/* Cantos estilo HUD */}
      <div aria-hidden="true" className="absolute left-5 top-24 hidden h-10 w-10 border-l-2 border-t-2 border-accent/25 lg:block" />
      <div aria-hidden="true" className="absolute right-5 top-24 hidden h-10 w-10 border-r-2 border-t-2 border-accent/25 lg:block" />
      <div aria-hidden="true" className="absolute bottom-6 left-5 hidden h-10 w-10 border-b-2 border-l-2 border-accent/25 lg:block" />
      <div aria-hidden="true" className="absolute bottom-6 right-5 hidden h-10 w-10 border-b-2 border-r-2 border-accent/25 lg:block" />

      <Container className="relative z-10 py-24">
        <motion.p
          {...enter(0.05)}
          className="font-mono text-xs uppercase tracking-[0.35em] text-accent"
        >
          Raul Souza · Desenvolvedor de sites
        </motion.p>

        <motion.h1
          {...enter(0.15)}
          className="mt-5 max-w-3xl font-display text-5xl font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl"
        >
          Sites que transformam visitantes em{' '}
          <span className="text-glow text-accent">clientes</span>.
        </motion.h1>

        <motion.p
          {...enter(0.3)}
          className="mt-5 min-h-[2.2em] font-mono text-lg text-fg/85 sm:text-xl"
        >
          Especialista em <Typed phrases={PHRASES} />
        </motion.p>

        <motion.p {...enter(0.42)} className="mt-4 max-w-xl text-base leading-relaxed text-muted">
          Desenvolvimento sob medida: rápido, responsivo e pronto para o seu
          cliente encontrar você em qualquer tela.
        </motion.p>

        <motion.div {...enter(0.55)} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projetos"
            className="btn-glow inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 font-display text-sm font-semibold text-bg"
          >
            Ver projetos
            <ArrowRight width={18} height={18} />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-fg/20 px-7 py-3.5 font-display text-sm font-semibold text-fg transition-colors hover:border-accent/60 hover:text-accent"
          >
            Pedir orçamento
          </a>
        </motion.div>
      </Container>
    </section>
  )
}

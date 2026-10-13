import { Container } from '@/components/Container'
import Reveal from '@/components/Reveal'
import { ExternalLink } from '@/icons'

type Certificate = {
  title: string
  issuer: string
  description: string
  stats: readonly string[]
  skills: readonly string[]
  url: string
}

const CERTIFICATES: readonly Certificate[] = [
  {
    title: 'Autoridade em Programação',
    issuer: 'DevMedia',
    description:
      'Certificação em programação comprovada através de conteúdos e exercícios realizados na plataforma.',
    stats: ['70 exercícios resolvidos', '3 cursos concluídos', '20 horas de estudo'],
    skills: ['Front-End', 'Back-End', 'Plataforma DevMedia'],
    url: 'https://www.devmedia.com.br/certificado/tecnologia/programacao/raul-souza-1',
  },
  {
    title: 'Autoridade em React',
    issuer: 'DevMedia',
    description:
      'Certificação de conhecimento em React, comprovada através de conteúdos e exercícios realizados na plataforma.',
    stats: ['60 exercícios resolvidos', '2 cursos e conteúdos concluídos', '19 horas de estudo'],
    skills: ['React', 'Introdução', 'Componentes'],
    url: 'https://www.devmedia.com.br/certificado/tecnologia/react/raul-souza-1',
  },
  {
    title: 'Java — Certificado Unificado',
    issuer: 'DevMedia',
    description:
      'Formação em Java na plataforma DevMedia, com cursos e conteúdos concluídos na linguagem.',
    stats: ['Cursos concluídos na plataforma', 'Formação Java'],
    skills: ['Java', 'Lógica de programação', 'Back-End'],
    url: 'https://www.devmedia.com.br/certificado/unificado/java/raul-souza-1',
  },
]

export default function Certificates() {
  return (
    <section id="certificados" className="scroll-mt-20 py-24 md:py-32">
      <Container>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">
            Certificados
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Conhecimento comprovado
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATES.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.12}>
              <article className="card-glow flex h-full flex-col rounded-2xl border border-white/8 bg-surface p-8">
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-accent/25 bg-accent/8 font-mono text-lg font-semibold text-accent">
                    ✓
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                    {cert.issuer}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-xl font-semibold">{cert.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{cert.description}</p>

                <ul className="mt-5 space-y-2">
                  {cert.stats.map((stat) => (
                    <li key={stat} className="flex items-center gap-2.5 text-sm text-fg/85">
                      <span aria-hidden="true" className="h-1 w-1 rounded-full bg-accent" />
                      {stat}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-accent/25 bg-accent/8 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 pt-6 font-mono text-xs uppercase tracking-[0.18em] text-accent transition-opacity hover:opacity-80"
                >
                  Ver credencial
                  <ExternalLink width={14} height={14} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.24} className="mt-8">
          <p className="text-center font-mono text-xs text-muted">
            Formação contínua — novos certificados entram aqui conforme são conquistados.
          </p>
        </Reveal>
      </Container>
    </section>
  )
}

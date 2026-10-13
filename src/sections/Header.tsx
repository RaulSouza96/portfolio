import { useEffect, useState } from 'react'
import { Container } from '@/components/Container'
import { Close, Menu } from '@/icons'

const LINKS = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#faq', label: 'Dúvidas' },
  { href: '#contato', label: 'Contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? 'border-white/5 bg-bg/85 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-[0.22em] text-fg"
          aria-label="Voltar ao topo"
        >
          RAUL
          <span className="text-accent">.</span>
          <span className="sr-only"> — início</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[13px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="btn-glow rounded-full bg-accent px-5 py-2 font-display text-sm font-semibold text-bg"
          >
            Orçamento
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-fg md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <Close width={22} height={22} /> : <Menu width={22} height={22} />}
        </button>
      </Container>

      {open && (
        <nav
          className="border-t border-white/5 bg-bg/95 backdrop-blur-md md:hidden"
          aria-label="Navegação móvel"
        >
          <Container className="flex flex-col gap-1 py-4">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 font-mono text-sm uppercase tracking-[0.18em] text-muted hover:bg-white/5 hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-accent px-5 py-3 text-center font-display text-sm font-semibold text-bg"
            >
              Orçamento
            </a>
          </Container>
        </nav>
      )}
    </header>
  )
}

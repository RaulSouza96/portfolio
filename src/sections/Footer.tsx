import { Container } from '@/components/Container'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <Container className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="font-display text-sm font-semibold tracking-wide">
          © {new Date().getFullYear()} Raul — desenvolvedor de sites
        </p>
        <p className="font-mono text-xs text-muted">feito à mão, linha por linha.</p>
      </Container>
    </footer>
  )
}

import About from '@/sections/About'
import Contact from '@/sections/Contact'
import Faq from '@/sections/Faq'
import Footer from '@/sections/Footer'
import Header from '@/sections/Header'
import Hero from '@/sections/Hero'
import Process from '@/sections/Process'
import Projects from '@/sections/Projects'
import Services from '@/sections/Services'
import Testimonials from '@/sections/Testimonials'
import { WhatsApp } from '@/icons'
import { WHATSAPP_URL } from '@/lib/constants'

export default function App() {
  return (
    <div className="bg-bg font-body text-fg antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Projects />
        <Testimonials />
        <About />
        <Faq />
        <Contact />
      </main>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-surface/90 px-4 py-3 font-mono text-xs font-semibold text-accent shadow-[0_0_24px_rgba(0,229,255,0.18)] backdrop-blur transition-transform hover:-translate-y-1"
      >
        Falar sobre um projeto
        <WhatsApp width={16} height={16} />
      </a>
      <Footer />
    </div>
  )
}

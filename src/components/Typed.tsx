import { useEffect, useRef, useState } from 'react'

type TypedProps = {
  phrases: readonly string[]
  className?: string
  typeSpeed?: number
  deleteSpeed?: number
  pause?: number
}

export default function Typed({
  phrases,
  className,
  typeSpeed = 70,
  deleteSpeed = 35,
  pause = 2200,
}: TypedProps) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const reduced = useRef(false)

  useEffect(() => {
    reduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced.current) setText(phrases[0])
  }, [phrases])

  useEffect(() => {
    if (reduced.current) return
    const current = phrases[index % phrases.length]
    let delay = deleting ? deleteSpeed : typeSpeed
    if (!deleting && text === current) delay = pause
    if (deleting && text === '') delay = 380

    const timer = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true)
      } else if (deleting && text === '') {
        setDeleting(false)
        setIndex((i) => (i + 1) % phrases.length)
      } else {
        setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1))
      }
    }, delay)
    return () => clearTimeout(timer)
  }, [text, deleting, index, phrases, typeSpeed, deleteSpeed, pause])

  return (
    <span className={className} aria-label={phrases[0]}>
      <span aria-hidden="true">{text}</span>
      <span aria-hidden="true" className="typed-cursor" />
    </span>
  )
}

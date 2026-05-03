import { useState, useEffect } from 'react'

export default function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [showFloat, setShowFloat] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      const pct = Math.min((scrollTop / Math.max(docHeight, 1)) * 100, 100)
      setProgress(pct)
      setScrolled(scrollTop > 20)
      setShowFloat(scrollTop > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { progress, scrolled, showFloat }
}
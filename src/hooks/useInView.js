import { useEffect, useRef, useState } from 'react'

/**
 * useInView
 * Returns [ref, isVisible].
 * Once the element enters the viewport it stays visible (one-shot).
 *
 * @param {number} threshold  - 0–1, fraction of element visible before firing
 * @param {string} rootMargin - CSS margin string e.g. "0px 0px -80px 0px"
 */
export default function useInView(threshold = 0.15, rootMargin = '0px') {
  const ref     = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)   // fire only once
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return [ref, visible]
}

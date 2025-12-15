"use client"

import { useEffect, useLayoutEffect, useState } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

export default function HeroAlternate({ subheadline }) {
  const [stage, setStage] = useState('intro')
  const [hasScrolled, setHasScrolled] = useState(false)

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return

    const { scrollRestoration } = window.history
    window.history.scrollRestoration = 'manual'
    window.scrollTo({ top: 0, behavior: 'auto' })

    return () => {
      window.history.scrollRestoration = scrollRestoration
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 20) {
        setHasScrolled(true)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasScrolled])

  useEffect(() => {
    const introTimer = setTimeout(() => {
      setStage((prev) => (prev === 'intro' ? 'logo' : prev))
    }, 1800)

    return () => clearTimeout(introTimer)
  }, [])

  useEffect(() => {
    if (stage !== 'ready') {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [stage])

  return (
    <section id="hero-alt" className="hero-section hero-section--video">
      <div className="hero-video-wrapper">
        <video
          className="hero-video"
          src="/herovideo.mp4"
          autoPlay
          muted
          playsInline
          loop={false}
          preload="auto"
          aria-hidden="true"
          onEnded={() => setStage('ready')}
        />
        <div className="hero-video-overlay" aria-hidden="true" />
      </div>

      <div className="hero-scroller">
        <div className="hero-panel hero-panel--logo">
          <div className="container-custom hero-panel-inner hero-panel-stack">
            <div className={`hero-intro ${stage !== 'intro' ? 'hero-intro--hidden' : ''}`}>
              <span>Introducing</span>
            </div>
            <div className={`hero-logo-block ${stage !== 'intro' ? 'hero-logo-block--visible' : ''}`}>
              <Image
                src="/Speedrun.png"
                alt="Speedrun logo"
                width={568}
                height={178}
                priority
                className="h-40 w-auto"
              />
            </div>
          </div>

        </div>

        <div className="hero-panel hero-panel--copy">
          <div className="container-custom hero-panel-inner">
            <div className="hero-copy text-center">
              <div className="hero-copy-icon mb-2 flex justify-center">
                <Image
                  src="/Logo-Main-Icon.png"
                  alt="Other Stuff icon"
                  width={48}
                  height={48}
                  priority
                  className="h-12 w-12"
                />
              </div>
              <h1 className="font-bold text-2xl md:text-4xl text-white">
                You’ve got highly capable people and enough work for a team twice its size.
              </h1>

              <p
                className={`${inter.className} mx-auto mt-4 text-white/80`}
                style={{ maxWidth: '620px', fontSize: '17px' }}
              >
                What if your existing team could create the leverage to close that gap?
              </p>
            </div>
          </div>
        </div>
      </div>
      {stage === 'ready' && (
        <div className="scroll-indicator scroll-indicator--pinned">
          <span>Scroll to Explore</span>
          <svg
            width="12"
            height="18"
            viewBox="0 0 12 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M6 1v13M1.5 9.5L6 14l4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
    </section>
  )
}

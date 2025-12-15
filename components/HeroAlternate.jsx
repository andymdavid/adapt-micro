"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

export default function HeroAlternate({ subheadline }) {
  const [stage, setStage] = useState('logo')
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 20) {
        setHasScrolled(true)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasScrolled])

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
          <div className="container-custom hero-panel-inner">
            <Image
              src="/Speedrun.png"
              alt="Speedrun logo"
              width={284}
              height={89}
              priority
              className="h-24 w-auto"
            />
          </div>

        </div>

        <div className="hero-panel hero-panel--copy">
          <div className="container-custom hero-panel-inner">
            <div className="hero-copy text-center">
              <h1 className="font-bold text-2xl md:text-4xl text-white">
                You’ve got capable developers and more demand than they can realistically take on.
              </h1>

              <p
                className={`${inter.className} mx-auto mt-4 text-white/80`}
                style={{ maxWidth: '550px' }}
              >
                Speedrun is a one-day, hands-on workshop where your team learns to use AI on the real work they already do.
              </p>
            </div>
          </div>
        </div>
      </div>
      {stage === 'ready' && !hasScrolled && (
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

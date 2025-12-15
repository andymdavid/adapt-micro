import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

export default function HeroAlternate({ subheadline }) {
  return (
    <section id="hero-alt" className="hero-section hero-section--video min-h-screen flex flex-col overflow-hidden">
      <video
        className="hero-video"
        src="/herovideo.mp4"
        autoPlay
        muted
        playsInline
        loop={false}
        preload="auto"
        aria-hidden="true"
      />
      <div className="hero-video-overlay" aria-hidden="true" />

      <div className="container-custom relative z-10 w-full min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 flex flex-col items-center justify-center text-center">
        <div className="flex justify-center mt-10 md:mt-16">
          <Image
            src="/Speedrun.png"
            alt="Speedrun logo"
            width={284}
            height={89}
            priority
            className="h-24 w-auto"
          />
        </div>

        <div className="w-full text-center" style={{ maxWidth: '650px' }}>
          {/* Headline */}
          <h1 className="font-bold text-2xl md:text-4xl text-white">
            You’ve got capable developers and more demand than they can realistically take on.
          </h1>

          {/* Subheadline */}
          <p
            className={`${inter.className} mx-auto mt-4 text-white/80`}
            style={{ maxWidth: '550px', marginLeft: 'auto', marginRight: 'auto' }}
          >
            Speedrun is a one-day, hands-on workshop where your team learns to use AI on the real work they already do.
          </p>
        </div>

        <div className="scroll-indicator">
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
      </div>
    </section>
  )
}

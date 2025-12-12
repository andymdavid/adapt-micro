import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

export default function Hero({ subheadline }) {
  return (
    <section className="hero-section min-h-screen flex flex-col">
      <div className="container-custom w-full min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 flex flex-col">
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

        <div className="max-w-[950px] mx-auto text-center mt-auto">
          {/* Headline */}
          <h1 className="font-bold text-2xl md:text-4xl text-white">
            You’ve got capable developers and more demand than they can realistically take on.
          </h1>

          {/* Subheadline */}
          <p className={`${inter.className} max-w-[950px] mx-auto mt-4 text-white/80`}>
            Speedrun is a one-day build designed to help teams like yours commit to more work safely — without burning people out or lowering standards.
          </p>
        </div>
      </div>
    </section>
  )
}

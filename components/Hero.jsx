import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

export default function Hero({ subheadline }) {
  return (
    <section id="hero" className="hero-section min-h-screen flex flex-col">
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

        <div
          className="w-full text-center mt-auto"
          style={{ maxWidth: '650px', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className="flex justify-center mb-2">
            <Image
              src="/Logo-Main-Icon.png"
              alt="Other Stuff icon"
              width={64}
              height={64}
              className="h-16 w-auto"
              priority
            />
          </div>
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
      </div>
    </section>
  )
}

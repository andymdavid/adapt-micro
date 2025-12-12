import Header from '@/components/Header'
import Hero from '@/components/Hero'
import GapSection from '@/components/GapSection'
import PhilosophySection from '@/components/PhilosophySection'
import SpeedrunSection from '@/components/SpeedrunSection'
import WingmanSection from '@/components/WingmanSection'
import CustomWorkSection from '@/components/CustomWorkSection'
import QuickWinsSection from '@/components/QuickWinsSection'
import DualCTASection from '@/components/DualCTASection'
import Footer from '@/components/Footer'
import { content } from '@/lib/content'

export default function Home() {
  return (
    <main>
      <Header {...content.header} />

      <Hero {...content.hero} />

      <GapSection {...content.gap} />

      <PhilosophySection {...content.philosophy} />

      <SpeedrunSection {...content.speedrun} />

      <WingmanSection {...content.wingman} />

      <CustomWorkSection {...content.custom} />

      <QuickWinsSection {...content.quickWins} />

      <DualCTASection {...content.dualCTA} />

      <Footer {...content.footer} />
    </main>
  )
}

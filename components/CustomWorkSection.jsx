import Section from './Section'
import Card from './Card'
import FeatureGrid from './FeatureGrid'
import Button from './Button'
import { Network, Lightbulb, Target } from 'lucide-react'

const iconMap = {
  Network: Network,
  Lightbulb: Lightbulb,
  Target: Target,
}

export default function CustomWorkSection({ headline, intro, cards, process, cta }) {
  return (
    <Section id="custom" bgColor="light">
      <div className="max-w-6xl mx-auto">
        {/* Headline & Intro */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-dark mb-6">
            {headline}
          </h2>
          <p className="text-lg md:text-xl text-slate max-w-4xl mx-auto leading-relaxed">
            {intro}
          </p>
        </div>

        {/* Cards */}
        <FeatureGrid columns={3}>
          {cards.map((card, index) => {
            const Icon = iconMap[card.icon]
            return (
              <Card key={index} variant="elevated">
                {/* Icon */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-background-blue flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary-blue" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-slate-dark mb-3">
                  {card.title}
                </h3>

                {/* Body */}
                <p className="text-base text-slate mb-4">
                  {card.body}
                </p>

                {/* Points */}
                <ul className="space-y-2">
                  {card.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="text-sm md:text-base text-slate flex items-start">
                      <span className="mr-2 text-primary-blue">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </FeatureGrid>

        {/* Process */}
        <div className="mt-12 text-center max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-slate leading-relaxed mb-8">
            {process}
          </p>

          {/* CTA */}
          <Button href={cta.href} variant="primary" className="text-lg px-10 py-5">
            {cta.label}
          </Button>
        </div>
      </div>
    </Section>
  )
}

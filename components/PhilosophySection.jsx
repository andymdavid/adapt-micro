import Section from './Section'
import Card from './Card'
import FeatureGrid from './FeatureGrid'
import { Zap, Users, TrendingUp } from 'lucide-react'

const iconMap = {
  Zap: Zap,
  Users: Users,
  TrendingUp: TrendingUp,
}

export default function PhilosophySection({ headline, intro, columns }) {
  return (
    <Section id="philosophy" bgColor="white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-dark mb-6">
          {headline}
        </h2>
        <p className="text-lg md:text-xl text-slate max-w-4xl mx-auto leading-relaxed">
          {intro}
        </p>
      </div>

      <FeatureGrid columns={3}>
        {columns.map((column, index) => {
          const Icon = iconMap[column.icon]
          return (
            <Card
              key={index}
              variant="elevated"
              icon={
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-background-blue flex items-center justify-center">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary-blue" strokeWidth={2} />
                </div>
              }
              title={column.title}
              body={column.body}
            />
          )
        })}
      </FeatureGrid>
    </Section>
  )
}

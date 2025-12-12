import Section from './Section'
import Card from './Card'
import FeatureGrid from './FeatureGrid'
import { Cog, Wrench, Users, GitBranch } from 'lucide-react'

const iconMap = {
  Cog: Cog,
  Wrench: Wrench,
  Users: Users,
  GitBranch: GitBranch,
}

export default function WingmanSection({ headline, intro, leftColumn, rightColumn, capabilities }) {
  // Format markdown-style bold (**text**) to spans
  const formatText = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g)
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={index} className="font-bold text-slate-dark">
            {part.slice(2, -2)}
          </strong>
        )
      }
      return part
    })
  }

  return (
    <Section id="wingman" bgColor="white">
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

        {/* Two-Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left Column */}
          <div>
            <h3 className="text-2xl font-bold text-slate-dark mb-4">
              {leftColumn.title}
            </h3>
            {leftColumn.body.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-base md:text-lg text-slate leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-2xl font-bold text-slate-dark mb-4">
              {rightColumn.title}
            </h3>
            <ul className="space-y-3">
              {rightColumn.points.map((point, index) => (
                <li key={index} className="text-base md:text-lg text-slate leading-relaxed">
                  {formatText(point)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Capabilities Grid */}
        <FeatureGrid columns={4}>
          {capabilities.map((capability, index) => {
            const Icon = iconMap[capability.icon]
            return (
              <Card
                key={index}
                variant="flat"
                icon={
                  <Icon className="w-8 h-8 text-primary-blue" strokeWidth={2} />
                }
              >
                <h4 className="text-lg font-bold text-slate-dark mb-2">
                  {capability.title}
                </h4>
                <p className="text-sm md:text-base text-slate leading-relaxed">
                  {capability.body}
                </p>
              </Card>
            )
          })}
        </FeatureGrid>
      </div>
    </Section>
  )
}

import Section from './Section'
import Checklist from './Checklist'
import Button from './Button'

export default function SpeedrunSection({ badge, headline, intro, builds, whyItMatters, format, cta }) {
  return (
    <Section id="speedrun" bgColor="blue" paddingY="large">
      <div className="max-w-5xl mx-auto">
        {/* Badge */}
        {badge && (
          <div className="text-center mb-4">
            <span className="inline-block px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary-blue bg-white rounded-full">
              {badge}
            </span>
          </div>
        )}

        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-bold text-slate-dark mb-6 text-center">
          {headline}
        </h2>

        {/* Intro */}
        <p className="text-lg md:text-xl text-slate text-center mb-10 leading-relaxed max-w-4xl mx-auto">
          {intro}
        </p>

        {/* What You Build - Checklist */}
        <div className="bg-white rounded-xl p-8 md:p-10 mb-10">
          <h3 className="text-2xl font-bold text-slate-dark mb-6">What You Build:</h3>
          <Checklist items={builds} />
        </div>

        {/* Why This Matters */}
        <div className="mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-dark mb-8">
            {whyItMatters.title}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {whyItMatters.points.map((point, index) => (
              <div key={index} className="bg-white/80 backdrop-blur rounded-lg p-6">
                <h4 className="text-lg font-bold text-slate-dark mb-2">
                  {point.title}
                </h4>
                <p className="text-base text-slate leading-relaxed">
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Format Details */}
        <div className="bg-white/60 backdrop-blur rounded-xl p-8 md:p-10 mb-10">
          <h3 className="text-xl font-bold text-slate-dark mb-4">
            {format.title}
          </h3>
          <ul className="space-y-2">
            {format.details.map((detail, index) => (
              <li key={index} className="text-base md:text-lg text-slate">
                {detail}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button href={cta.href} variant="primary" className="text-lg px-10 py-5">
            {cta.label}
          </Button>
        </div>
      </div>
    </Section>
  )
}

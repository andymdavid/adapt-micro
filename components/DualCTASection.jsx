import Section from './Section'
import Button from './Button'

export default function DualCTASection({ headline, paths }) {
  return (
    <Section id="contact" bgColor="light" paddingY="large">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <h2 className="text-2xl md:text-4xl font-bold text-slate-dark mb-12 text-center">
          {headline}
        </h2>

        {/* Two Paths */}
        <div className="grid md:grid-cols-2 gap-8">
          {paths.map((path, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 md:p-10 shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-slate-dark mb-4">
                {path.title}
              </h3>

              {/* Body */}
              <p className="text-base md:text-lg text-slate mb-6 leading-relaxed">
                {path.body}
              </p>

              {/* Points */}
              <ul className="space-y-3 mb-8">
                {path.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="text-base text-slate flex items-start">
                    <span className="mr-3 text-primary-blue text-xl">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                href={path.cta.href}
                variant={index === 0 ? 'primary' : 'secondary'}
                className="w-full"
              >
                {path.cta.label}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

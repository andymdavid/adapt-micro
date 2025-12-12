import Section from './Section'

export default function QuickWinsSection({ headline, examples }) {
  return (
    <Section id="quick-wins" bgColor="white">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-bold text-slate-dark mb-12 text-center">
          {headline}
        </h2>

        {/* Timeline Examples */}
        <div className="grid md:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <div key={index} className="relative">
              {/* Time Badge */}
              <div className="mb-6">
                <span className="inline-block px-6 py-2 text-sm font-bold text-white bg-primary-blue rounded-lg">
                  {example.time}
                </span>
              </div>

              {/* Content */}
              <div className="border-l-4 border-primary-blue pl-6">
                <h3 className="text-2xl font-bold text-slate-dark mb-3">
                  {example.title}
                </h3>
                <p className="text-base md:text-lg text-slate leading-relaxed">
                  {example.body}
                </p>
              </div>

              {/* Connector Line (hidden on mobile, shown on desktop between items) */}
              {index < examples.length - 1 && (
                <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gray-200" style={{transform: 'translateY(-50%)'}} />
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

import Section from './Section'

export default function GapSection({ headline, body, pullQuote }) {
  // Convert markdown-style bold (**text**) to spans
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

  const paragraphs = body.split('\n\n')

  return (
    <Section id="gap" bgColor="light">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-dark mb-8 text-center">
          {headline}
        </h2>

        <div className="space-y-6">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg md:text-xl text-slate leading-relaxed">
              {formatText(paragraph)}
            </p>
          ))}
        </div>

        {/* Pull Quote */}
        {pullQuote && (
          <div className="mt-12 py-8 px-6 md:px-12 border-l-4 border-primary-blue bg-white rounded-r-lg">
            <p className="text-xl md:text-2xl font-semibold text-slate-dark italic">
              &ldquo;{pullQuote}&rdquo;
            </p>
          </div>
        )}
      </div>
    </Section>
  )
}

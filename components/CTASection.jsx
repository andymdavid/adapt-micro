export default function CTASection({
  headline,
  body,
  primaryCTA,
  secondaryCTA,
  children
}) {
  return (
    <div className="text-center">
      {headline && (
        <h2 className="text-2xl md:text-4xl font-bold text-slate-dark mb-6">
          {headline}
        </h2>
      )}

      {body && (
        <p className="text-lg md:text-xl text-slate max-w-3xl mx-auto mb-8 leading-relaxed">
          {body}
        </p>
      )}

      {children}

      {(primaryCTA || secondaryCTA) && (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          {primaryCTA && (
            <a
              href={primaryCTA.href}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-primary-blue rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md w-full sm:w-auto"
            >
              {primaryCTA.label}
            </a>
          )}

          {secondaryCTA && (
            <a
              href={secondaryCTA.href}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-dark bg-white border-2 border-gray-300 rounded-lg hover:border-primary-blue hover:text-primary-blue transition-all duration-200 w-full sm:w-auto"
            >
              {secondaryCTA.label}
            </a>
          )}
        </div>
      )}
    </div>
  )
}

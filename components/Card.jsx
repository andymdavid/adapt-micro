export default function Card({
  icon,
  title,
  body,
  children,
  className = '',
  variant = 'default'
}) {
  const variants = {
    default: 'bg-white border border-gray-200 shadow-sm',
    elevated: 'bg-white shadow-md',
    flat: 'bg-background-light',
  }

  return (
    <div className={`rounded-xl p-6 md:p-8 ${variants[variant]} ${className}`}>
      {icon && (
        <div className="mb-4">
          {icon}
        </div>
      )}

      {title && (
        <h3 className="text-xl md:text-2xl font-semibold text-slate-dark mb-3">
          {title}
        </h3>
      )}

      {body && (
        <p className="text-base md:text-lg text-slate leading-relaxed">
          {body}
        </p>
      )}

      {children}
    </div>
  )
}

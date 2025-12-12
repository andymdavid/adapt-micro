export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  ...props
}) {
  const variants = {
    primary: 'text-white bg-primary-blue hover:bg-blue-700 shadow-sm hover:shadow-md',
    secondary: 'text-slate-dark bg-white border-2 border-gray-300 hover:border-primary-blue hover:text-primary-blue',
    ghost: 'text-primary-blue hover:bg-blue-50',
  }

  const baseClasses = 'inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-base font-semibold rounded-lg transition-all duration-200'

  const Component = href ? 'a' : 'button'
  const componentProps = href ? { href } : props

  return (
    <Component
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...componentProps}
    >
      {children}
    </Component>
  )
}

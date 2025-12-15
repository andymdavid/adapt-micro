export default function Section({
  id,
  children,
  className = '',
  bgColor = 'white',
  paddingY = 'default'
}) {
  const bgColors = {
    white: 'bg-background-white',
    light: 'bg-background-light',
    blue: 'bg-background-blue',
  }

  const paddings = {
    small: 'py-12 md:py-16',
    default: 'py-16 md:py-20',
    large: 'py-20 md:py-28',
  }

  return (
    <section
      id={id}
      className={`min-h-screen ${bgColors[bgColor]} ${paddings[paddingY]} ${className}`}
    >
      <div className="container-custom">
        {children}
      </div>
    </section>
  )
}

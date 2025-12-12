export default function FeatureGrid({ children, columns = 3 }) {
  const columnClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <div className={`grid ${columnClasses[columns]} gap-6 md:gap-8`}>
      {children}
    </div>
  )
}

export default function Footer({ left, right }) {
  return (
    <footer className="bg-background-light border-t border-gray-200">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Left Side */}
          <div className="flex flex-col gap-2">
            <p className="text-base font-semibold text-slate-dark">
              {left.company}
            </p>
            <a
              href={`mailto:${left.email}`}
              className="text-sm text-slate hover:text-primary-blue transition-colors duration-200"
            >
              {left.email}
            </a>
            <a
              href={left.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate hover:text-primary-blue transition-colors duration-200"
            >
              {left.website}
            </a>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-1 text-left md:text-right">
            <p className="text-sm text-slate">
              {right.madeFor}
            </p>
            <p className="text-sm text-slate">
              {right.date}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

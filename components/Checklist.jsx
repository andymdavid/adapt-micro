import { Check } from 'lucide-react'

export default function Checklist({ items, className = '' }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-1">
            <Check className="w-5 h-5 md:w-6 md:h-6 text-accent-green" strokeWidth={3} />
          </div>
          <span className="text-base md:text-lg text-slate-dark leading-relaxed">
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
}

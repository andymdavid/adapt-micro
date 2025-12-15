"use client"

import { useEffect, useState } from 'react'

const navItems = [
  { label: 'The Gap', href: '#gap' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Speedrun', href: '#speedrun' },
  { label: 'Wingman', href: '#wingman' },
  { label: 'Custom', href: '#custom' },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/other-stuff/' },
]

export default function Header() {
  const [navVisible, setNavVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setNavVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`nav ${navVisible ? 'nav--visible' : ''}`}>
      <div className="nav-container nav-container--tabs">
        <div className="nav-left">
          <a href="#hero" className="nav-logo-link" aria-label="Other Stuff home">
            <img
              src="/Logo-Main-Icon.png"
              alt="Other Stuff logo"
              className="nav-logo-image"
              width="64"
              height="64"
              loading="eager"
            />
            <span className="visually-hidden">Other Stuff</span>
          </a>
        </div>

        <div className="nav-center">
          <div className="nav-menu nav-menu--tabs">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link nav-link-tab">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="nav-right nav-social">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="nav-social-link"
            >
              {social.label === 'LinkedIn' ? (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1 4.98 2.12 4.98 3.5zM.22 8.5H4.8V23H.22zM8.09 8.5h4.41v1.98h.06c.62-1.17 2.14-2.4 4.4-2.4 4.71 0 5.58 3.1 5.58 7.13V23h-4.58v-6.48c0-1.55-.03-3.55-2.17-3.55-2.17 0-2.5 1.7-2.5 3.44V23H8.09z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21.5 3l-7.09 7.6L22 21h-4.74l-5.2-6.9L6 21H1l7.6-8.15L2 3h4.73l4.7 6.18L18 3h3.5z" />
                </svg>
              )}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

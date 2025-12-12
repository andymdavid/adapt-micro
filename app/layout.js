import localFont from 'next/font/local'
import { Figtree } from 'next/font/google'
import './globals.css'

const alfabetBody = localFont({
  src: '../public/Alfabet_Regular.otf',
  weight: '400',
  style: 'normal',
  display: 'swap',
  variable: '--font-body',
})

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

export const metadata = {
  title: 'AI Infrastructure for Succession Thinking | otherstuff.ai x adapt by design',
  description: 'Building a business beyond you requires systems that scale without you. Discover how AI infrastructure complements Succession Thinking for SME leaders.',
  openGraph: {
    title: 'AI Infrastructure for Succession Thinking',
    description: 'Building a business beyond you requires systems that scale without you.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} ${alfabetBody.variable}`}>
        {children}
      </body>
    </html>
  )
}

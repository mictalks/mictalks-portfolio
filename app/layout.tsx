import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { Header } from './components/header'
import { ContactForm } from './components/contact-form'
import { Footer } from './components/footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: 'Milena Coyado | Desenvolvedora Full Stack',
  description: 'Portfólio de Milena Coyado, desenvolvedora Full Stack com projetos em React, Next.js, TypeScript, APIs e interfaces responsivas.',
  openGraph: {
    title: 'Milena Coyado | Desenvolvedora Full Stack',
    description: 'Projetos, tecnologias e formas de contato de Milena Coyado.',
    type: 'website',
  },
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Header />
        {children}
        <ContactForm />
        <Footer />
      </body>
    </html>
  )
}

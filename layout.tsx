import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Naidge — Customer Success, Dispute Recovery & AI Automation',
  description: 'Naidge helps businesses recover chargeback revenue, reduce customer churn, and automate operations with AI. Expert services + ready-made products.',
  keywords: 'chargeback management, dispute resolution, customer retention, AI voice agent, intake automation, customer support outsourcing',
  openGraph: {
    title: 'Naidge — Recover Revenue. Retain Customers. Automate Operations.',
    description: 'Expert dispute management, customer retention, and AI automation tools for modern businesses.',
    url: 'https://naidge.com',
    siteName: 'Naidge',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

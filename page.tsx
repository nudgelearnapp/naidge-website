'use client'

import { useState } from 'react'

// ── Modal data ──────────────────────────────────────────────────────────────
const products = [
  {
    id: 'voice-agent',
    icon: '🎙️',
    title: 'AI Voice Agent',
    tagline: 'Never miss a lead — 24/7 automated intake calls',
    description:
      'Our AI voice agent answers inbound calls, collects client information, qualifies leads, and books appointments — all automatically, any time of day or night.',
    features: [
      'Handles calls 24/7 without human staff',
      'Collects intake information accurately',
      'Books appointments directly to your calendar',
      'Works for law firms, clinics, real estate & more',
      'Setup in under 48 hours',
    ],
    price: 'From $199/month',
    cta: 'Get Started',
  },
  {
    id: 'intake-automation',
    icon: '📋',
    title: 'Intake Form Automation',
    tagline: 'Turn form submissions into instant actions',
    description:
      'Automate your entire client intake process. When a form is submitted, our system qualifies the lead, sends confirmations, notifies your team, and logs everything — zero manual work.',
    features: [
      'Instant lead qualification and routing',
      'Automated email/SMS confirmations',
      'CRM integration and data logging',
      'Custom workflows per business type',
      'Reduces intake time by up to 80%',
    ],
    price: 'From $149/month',
    cta: 'Get Started',
  },
  {
    id: 'dispute-tool',
    icon: '⚖️',
    title: 'Dispute Response Tool',
    tagline: 'AI-drafted chargeback responses in minutes',
    description:
      'Submit your dispute details and get a professionally drafted response letter ready to file — built by payments experts, optimised by AI.',
    features: [
      'AI-generated response letters',
      'Covers Shopify, Stripe, PayPal disputes',
      'Expert-reviewed templates',
      'Track all your disputes in one dashboard',
      'Pay only for disputes you fight',
    ],
    price: 'From $29/dispute',
    cta: 'Try Free',
  },
]

const services = [
  {
    id: 'support',
    icon: '💬',
    title: 'Customer Support Operations',
    description:
      'We manage your customer support end-to-end — email, chat, and ticket handling — so your team can focus on growth.',
    details: [
      'Dedicated support agents for your brand',
      'Response within agreed SLA windows',
      'Full handover and onboarding process',
      'Weekly performance reporting',
      'Scales up or down with your volume',
    ],
  },
  {
    id: 'dispute',
    icon: '🛡️',
    title: 'Dispute & Chargeback Management',
    description:
      'We handle your chargebacks from start to finish — reviewing evidence, drafting responses, and filing on your behalf.',
    details: [
      'End-to-end dispute handling',
      'Evidence collection and organisation',
      'Response drafting by payments experts',
      'Works with Shopify, Stripe, PayPal, Amazon',
      'Performance-based pricing available',
    ],
  },
  {
    id: 'retention',
    icon: '🔁',
    title: 'Customer Retention & Winback',
    description:
      'We reduce churn by handling cancel requests, refund negotiations, and winback campaigns that keep customers paying.',
    details: [
      'Cancel save scripts and live handling',
      'Refund negotiation to protect revenue',
      'Winback email and call campaigns',
      'Monthly retention reporting',
      'Proven scripts from 500+ interactions',
    ],
  },
]

// ── Sub-components ──────────────────────────────────────────────────────────
function ProductModal({ product, onClose }: { product: typeof products[0]; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div
        className="relative w-full max-w-lg bg-[#0f172a] border border-blue-500/30 rounded-2xl p-8 shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white text-2xl">✕</button>
        <div className="text-4xl mb-3">{product.icon}</div>
        <h3 className="text-2xl font-bold text-white mb-1">{product.title}</h3>
        <p className="text-blue-400 mb-4 text-sm">{product.tagline}</p>
        <p className="text-slate-300 mb-6 text-sm leading-relaxed">{product.description}</p>
        <ul className="space-y-2 mb-6">
          {product.features.map(f => (
            <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
              <span className="text-blue-400 mt-0.5">✓</span>{f}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between">
          <span className="text-white font-bold text-lg">{product.price}</span>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-2.5 rounded-full text-sm transition"
          >
            {product.cta} →
          </a>
        </div>
      </div>
    </div>
  )
}

function ServiceAccordion({ service }: { service: typeof services[0] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-slate-700 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/50 transition"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-4">
          <span className="text-2xl">{service.icon}</span>
          <div>
            <h3 className="text-white font-semibold text-lg">{service.title}</h3>
            <p className="text-slate-400 text-sm mt-0.5">{service.description}</p>
          </div>
        </div>
        <span className={`text-blue-400 text-xl transition-transform ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && (
        <div className="px-6 pb-6 border-t border-slate-700 pt-4">
          <ul className="space-y-2">
            {service.details.map(d => (
              <li key={d} className="flex items-start gap-2 text-sm text-slate-300">
                <span className="text-blue-400 mt-0.5">✓</span>{d}
              </li>
            ))}
          </ul>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2 rounded-full text-sm transition"
          >
            Enquire about this service →
          </a>
        </div>
      )}
    </div>
  )
}

// ── Main page ───────────────────────────────────────────────────────────────
export default function Home() {
  const [activeProduct, setActiveProduct] = useState<typeof products[0] | null>(null)

  return (
    <main className="bg-[#070d1a] text-white min-h-screen font-sans antialiased">

      {/* ── Nav ── */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#070d1a]/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight">
            naidge<span className="text-blue-400">.</span>
          </span>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2 rounded-full transition"
          >
            Book a Free Call
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="pt-40 pb-28 px-6 text-center relative overflow-hidden">
        {/* glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <span className="inline-block bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
            Customer Success · Dispute Recovery · AI Automation
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-6">
            Stop losing revenue to<br />
            <span className="text-blue-400">chargebacks, churn & poor support</span>
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            Naidge combines hands-on human expertise with AI-powered automation — so you recover more, retain more, and support better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-full text-base transition"
            >
              Book a Free Strategy Call →
            </a>
            <a
              href="mailto:contact@naidge.com"
              className="border border-slate-600 hover:border-blue-400 text-slate-300 hover:text-white font-semibold px-8 py-4 rounded-full text-base transition"
            >
              Send us an Email
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-14 border-y border-slate-800">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: '50+', label: 'Clients Served' },
            { value: '95%', label: 'Client Satisfaction' },
            { value: '$200K+', label: 'Revenue Recovered' },
            { value: 'Top Rated', label: 'on Upwork' },
          ].map(s => (
            <div key={s.label}>
              <div className="text-3xl font-extrabold text-blue-400">{s.value}</div>
              <div className="text-slate-400 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Founder video placeholder ── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 aspect-video bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700">
            <div className="text-center">
              <div className="text-5xl mb-3">▶</div>
              <p className="text-slate-400 text-sm">Founder video coming soon</p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">From the Founder</p>
            <h2 className="text-3xl font-bold mb-4">Hi, I'm Aliul Islam</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              I've spent years helping e-commerce businesses and service companies recover lost revenue, reduce churn, and build customer support systems that actually work. Naidge is the agency I wish existed when I started — combining real operational expertise with modern AI tools.
            </p>
            <a
              href="https://www.upwork.com/freelancers/aliuli"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-sm transition"
            >
              View my Upwork profile →
            </a>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">What we do</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Services</h2>
            <p className="text-slate-400 mt-3">Done-for-you operations so you can focus on building your business</p>
          </div>
          <div className="space-y-4">
            {services.map(s => <ServiceAccordion key={s.id} service={s} />)}
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Self-serve tools</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Products</h2>
            <p className="text-slate-400 mt-3">Buy a product and get results from day one — no ongoing contract needed</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {products.map(p => (
              <button
                key={p.id}
                onClick={() => setActiveProduct(p)}
                className="text-left bg-slate-900 border border-slate-700 hover:border-blue-500/50 rounded-2xl p-6 transition group"
              >
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-blue-400 transition">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{p.tagline}</p>
                <span className="text-blue-400 text-sm font-semibold">Learn more →</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Naidge ── */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Why us</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Unlike other agencies</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: '⚡', title: 'AI + Human', desc: 'We combine automation with real human expertise — not one or the other.' },
              { icon: '📊', title: 'Results-focused', desc: 'We report on outcomes — revenue recovered, churn reduced, tickets resolved.' },
              { icon: '🌍', title: 'Global experience', desc: 'We work with businesses across the US, Europe, and India.' },
            ].map(w => (
              <div key={w.title} className="bg-slate-900 border border-slate-700 rounded-2xl p-6">
                <div className="text-3xl mb-3">{w.icon}</div>
                <h3 className="text-white font-bold mb-2">{w.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-br from-blue-600/20 to-slate-900 border border-blue-500/20 rounded-3xl p-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to recover more revenue?</h2>
            <p className="text-slate-400 mb-8">Book a free 15-minute call or reach out directly. No commitment required.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-full transition"
              >
                📅 Book a Free Call
              </a>
              <a
                href="mailto:contact@naidge.com"
                className="border border-slate-600 hover:border-blue-400 text-slate-300 hover:text-white font-semibold px-8 py-4 rounded-full transition"
              >
                ✉️ contact@naidge.com
              </a>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-600 hover:border-green-400 text-slate-300 hover:text-green-400 font-semibold px-8 py-4 rounded-full transition"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-slate-800 py-8 px-6 text-center text-slate-500 text-sm">
        <p>© 2026 Naidge. All rights reserved.</p>
        <p className="mt-1">Founded by Aliul Islam · naidge.com</p>
      </footer>

      {/* ── Product Modal ── */}
      {activeProduct && <ProductModal product={activeProduct} onClose={() => setActiveProduct(null)} />}
    </main>
  )
}

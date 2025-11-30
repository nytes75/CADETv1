'use client'
import Link from 'next/link'

const quickLinks = [
  { label: 'About', href: '/about' },
  { label: 'Monitoring', href: '/monitor' },
  { label: 'Products', href: '/products' },
  { label: 'Projects', href: '/projects' },
]

 const Footer = () => {
   return (
    <footer className="border-t border-sky-100 bg-sky-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2 space-y-3">
            <div className="text-2xl font-bold">CADET</div>
            <p className="text-sky-100">
              Climate and Disaster Early-warning Tool delivering trusted data, rapid alerts, and partner-ready dashboards for Papua New Guinea.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-sky-100">
              <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15">24/7 monitoring</span>
              <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15">Impact-focused</span>
              <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15">Partner-led</span>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-200">Quick links</h3>
            <ul className="mt-3 space-y-2 text-sky-100">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-200">Stay connected</h3>
            <p className="text-sky-100">info@cadet.com</p>
            <p className="text-sky-100">+675 123 4567</p>
            <div className="flex gap-3 text-sm text-sky-100">
              <a href="https://twitter.com" className="rounded-full bg-white/10 px-3 py-2 ring-1 ring-white/15 transition hover:bg-white/20">Twitter</a>
              <a href="https://linkedin.com" className="rounded-full bg-white/10 px-3 py-2 ring-1 ring-white/15 transition hover:bg-white/20">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-sky-100">
           <p>&copy; 2024 CADET. All rights reserved.</p>
          <p className="text-sky-200">Built with partners across Papua New Guinea.</p>
         </div>
      </div>
    </footer>
  )
}
 
export default Footer

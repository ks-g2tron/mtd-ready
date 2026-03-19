import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "MTD Ready? Check if Making Tax Digital Affects You | MTDReady.co.uk",
  description:
    "Free Making Tax Digital checker. Find out if MTD for Income Tax affects you from April 2026. Get your personalised action plan in 60 seconds.",
  keywords:
    "Making Tax Digital, MTD, HMRC, self-employed, landlord, tax digital, MTD ITSA, April 2026",
};

function Header() {
  return (
    <header className="bg-navy-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold">
          MTD<span className="text-accent">Ready</span>
        </a>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="/check" className="hover:text-accent transition-colors">
            Check Now
          </a>
          <a href="/guides/what-is-mtd" className="hover:text-accent transition-colors">
            What is MTD?
          </a>
          <a href="/guides/mtd-april-2026-deadline" className="hover:text-accent transition-colors">
            April 2026 Deadline
          </a>
        </nav>
        <a
          href="/check"
          className="bg-accent text-navy-900 font-bold px-4 py-2 rounded-lg text-sm hover:bg-green-400 transition-colors"
        >
          Free Check
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">
              MTD<span className="text-accent">Ready</span>
            </h3>
            <p className="text-sm">
              Free Making Tax Digital compliance checker for UK self-employed
              people and landlords.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/guides/what-is-mtd" className="hover:text-white">What is MTD?</a></li>
              <li><a href="/guides/mtd-april-2026-deadline" className="hover:text-white">April 2026 Deadline</a></li>
              <li><a href="/check" className="hover:text-white">Free Compliance Check</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Recommended Software</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/go/freeagent" className="hover:text-white">FreeAgent</a></li>
              <li><a href="/go/xero" className="hover:text-white">Xero</a></li>
              <li><a href="/go/quickbooks" className="hover:text-white">QuickBooks</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} MTDReady. This site contains affiliate links. We may earn a commission at no extra cost to you.</p>
          <p className="mt-2">This tool provides general guidance only and is not a substitute for professional tax advice.</p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-navy-900 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Script src="https://analytics.buyandscrap.com/script.js" data-website-id="230edbe1-a1b1-47db-8ceb-f32df10c205e" strategy="afterInteractive" />
      </body>
    </html>
  );
}

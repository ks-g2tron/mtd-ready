import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | MTD Ready',
  description: 'How MTD Ready collects, uses and protects your personal data.',
  alternates: { canonical: 'https://mtd-ready.co.uk/privacy' },
}

export default function PrivacyPage() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: March 2026</p>

          <div className="prose prose-gray max-w-none space-y-6 text-gray-700">

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Who we are</h2>
              <p>MTD Ready (<strong>mtd-ready.co.uk</strong>) is a free tool helping UK self-employed people and landlords understand their obligations under Making Tax Digital for Income Tax (MTD ITSA).</p>
              <p className="mt-2"><strong>Data controller:</strong> MTD Ready, mtd-ready.co.uk<br />
              <strong>Contact:</strong> <a href="mailto:hello@mtd-ready.co.uk" className="text-green-600 hover:underline">hello@mtd-ready.co.uk</a></p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-2">What data we collect</h2>
              <p>When you use our MTD checker and sign up for reminders, we may collect:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong>Email address</strong> — to send you MTD reminders and compliance tips</li>
                <li><strong>MTD status</strong> — whether you are self-employed, a landlord, or both</li>
                <li><strong>Income band</strong> — e.g. under £30k, £30k–£50k, etc.</li>
                <li><strong>Accounting software</strong> — which software (if any) you currently use</li>
                <li><strong>Third-party consent flag</strong> — whether you have consented to be contacted by partner accounting firms or software providers</li>
              </ul>
              <p className="mt-2">We do not collect payment information, national insurance numbers, or sensitive personal data.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-2">How we use your data</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>MTD reminders & tips</strong> — we will email you relevant information about Making Tax Digital deadlines and compliance steps</li>
                <li><strong>Third-party contact (only with your explicit consent)</strong> — if you opted in, we may share your contact details with MTD-compatible software providers or accounting firms who may be able to help you comply. We will only do this if you ticked the relevant box when signing up.</li>
              </ul>
              <p className="mt-2">We will never sell your data to unrelated third parties or use it for unrelated marketing.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Legal basis</h2>
              <p>We process your data on the basis of <strong>consent</strong> (Article 6(1)(a) UK GDPR). You can withdraw your consent at any time by emailing <a href="mailto:hello@mtd-ready.co.uk" className="text-green-600 hover:underline">hello@mtd-ready.co.uk</a> or clicking unsubscribe in any email we send.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-2">How long we keep your data</h2>
              <p>We retain your data for up to <strong>2 years</strong> from the date of sign-up, or until you unsubscribe — whichever comes first. You may request deletion at any time.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Your rights</h2>
              <p>Under UK GDPR, you have the right to:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Access the personal data we hold about you</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent at any time</li>
                <li>Lodge a complaint with the ICO (ico.org.uk)</li>
              </ul>
              <p className="mt-2">To exercise any of these rights, contact us at <a href="mailto:hello@mtd-ready.co.uk" className="text-green-600 hover:underline">hello@mtd-ready.co.uk</a>.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Cookies</h2>
              <p>This site does not use tracking cookies. We use Umami Analytics, which is privacy-friendly and does not collect personally identifiable information.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-2">ICO Registration</h2>
              <p>MTD Ready is in the process of registering with the Information Commissioner&apos;s Office (ICO) as required for organisations processing personal data commercially in the UK.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Changes to this policy</h2>
              <p>We may update this policy from time to time. The date at the top of this page will reflect the latest version.</p>
            </section>

          </div>
        </div>
      </div>
    </section>
  )
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What is Making Tax Digital? A Complete Guide | MTDReady",
  description:
    "Everything you need to know about Making Tax Digital (MTD). How it works, who it affects, and what you need to do to comply.",
};

export default function WhatIsMTDPage() {
  return (
    <article className="py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-4 prose prose-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          What is Making Tax Digital?
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          Making Tax Digital (MTD) is HMRC&apos;s plan to modernise the UK tax system by
          requiring businesses and individuals to keep digital records and submit tax
          updates using compatible software.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">How Does MTD Work?</h2>
        <p className="text-gray-700 mb-4">
          Under MTD, instead of filing a single Self Assessment tax return at the end
          of the year, you&apos;ll need to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>Keep digital records of all your income and expenses</li>
          <li>Use HMRC-compatible software (not spreadsheets alone)</li>
          <li>Send quarterly updates to HMRC through your software</li>
          <li>Submit a final declaration at the end of the tax year</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">Who Does MTD Affect?</h2>
        <p className="text-gray-700 mb-4">
          MTD for Income Tax Self Assessment (MTD ITSA) affects:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>
            <strong>Self-employed individuals</strong> — sole traders, freelancers,
            contractors
          </li>
          <li>
            <strong>Landlords</strong> — anyone receiving rental income from property
          </li>
          <li>
            <strong>Partnerships</strong> — will be included in a later phase
          </li>
        </ul>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
          <h3 className="font-bold text-lg mb-2">MTD for VAT is Already Live</h3>
          <p className="text-sm text-gray-700">
            If you&apos;re VAT-registered, you should already be complying with MTD for
            VAT, which has been mandatory since April 2022 for all VAT-registered
            businesses.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">Key Dates</h2>
        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
            <span className="font-bold text-danger">April 2026</span>
            <span className="text-gray-700">
              MTD for Income Tax begins for those with income over &pound;50,000
            </span>
          </div>
          <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
            <span className="font-bold text-warning">April 2027</span>
            <span className="text-gray-700">
              Extended to those with income over &pound;30,000
            </span>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          What Software Do I Need?
        </h2>
        <p className="text-gray-700 mb-4">
          You&apos;ll need accounting software that is recognised by HMRC as
          MTD-compatible. The most popular options are:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>
            <a href="/go/freeagent" className="text-accent font-semibold hover:underline">
              FreeAgent
            </a>{" "}
            — best for freelancers and sole traders
          </li>
          <li>
            <a href="/go/xero" className="text-accent font-semibold hover:underline">
              Xero
            </a>{" "}
            — best for growing businesses
          </li>
          <li>
            <a href="/go/quickbooks" className="text-accent font-semibold hover:underline">
              QuickBooks
            </a>{" "}
            — best for mixed income (self-employment + rental)
          </li>
        </ul>

        <div className="bg-navy-900 text-white rounded-2xl p-8 my-10 text-center">
          <h3 className="text-2xl font-bold mb-3">
            Not Sure If MTD Affects You?
          </h3>
          <p className="text-gray-300 mb-6">
            Take our free 60-second quiz to find out.
          </p>
          <a
            href="/check"
            className="inline-block bg-accent text-navy-900 font-bold px-8 py-3 rounded-xl hover:bg-green-400 transition-colors"
          >
            Check Now &rarr;
          </a>
        </div>
      </div>
    </article>
  );
}

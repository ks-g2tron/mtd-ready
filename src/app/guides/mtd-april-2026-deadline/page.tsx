import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MTD April 2026 Deadline: What You Need to Know | MTDReady",
  description:
    "The Making Tax Digital for Income Tax deadline is April 2026. Find out who must comply, what to do, and how to prepare.",
};

export default function DeadlinePage() {
  return (
    <article className="py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-4 prose prose-lg">
        <div className="bg-red-100 border-2 border-red-300 rounded-2xl p-6 mb-8 text-center">
          <p className="text-sm font-semibold text-red-600 mb-1">DEADLINE</p>
          <h1 className="text-3xl md:text-4xl font-bold text-red-900 mb-2">
            6 April 2026
          </h1>
          <p className="text-red-800">
            MTD for Income Tax becomes mandatory for income over &pound;50,000
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          What Happens on 6 April 2026?
        </h2>
        <p className="text-gray-700 mb-4">
          From 6 April 2026, self-employed individuals and landlords with annual
          business or property income above &pound;50,000 must:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>Keep digital records using MTD-compatible software</li>
          <li>Send quarterly updates to HMRC via their software</li>
          <li>Submit a final declaration instead of a Self Assessment return</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          The Timeline
        </h2>
        <div className="space-y-4 mb-8">
          <div className="border-l-4 border-red-500 pl-4 py-2">
            <p className="font-bold text-lg">6 April 2026</p>
            <p className="text-gray-600">
              Mandatory for income over &pound;50,000. First quarterly update due by 5
              July 2026.
            </p>
          </div>
          <div className="border-l-4 border-orange-500 pl-4 py-2">
            <p className="font-bold text-lg">6 April 2027</p>
            <p className="text-gray-600">
              Extended to income over &pound;30,000. Same quarterly reporting requirements
              apply.
            </p>
          </div>
          <div className="border-l-4 border-gray-300 pl-4 py-2">
            <p className="font-bold text-lg">Future (TBC)</p>
            <p className="text-gray-600">
              HMRC may extend to income below &pound;30,000 and partnerships. No date
              confirmed yet.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          What Are the Penalties?
        </h2>
        <p className="text-gray-700 mb-4">
          HMRC is introducing a new points-based penalty system:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>Each late submission adds a penalty point</li>
          <li>
            At 4 points, you receive a &pound;200 penalty — and another &pound;200 for
            every subsequent late submission
          </li>
          <li>Points expire after 24 months of compliance</li>
          <li>Late payment penalties are charged at 2% after 15 days, rising to 4%</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          How to Prepare Now
        </h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
          <li>
            <strong>Choose MTD-compatible software</strong> — we recommend{" "}
            <a href="/go/freeagent" className="text-accent font-semibold hover:underline">
              FreeAgent
            </a>
            ,{" "}
            <a href="/go/xero" className="text-accent font-semibold hover:underline">
              Xero
            </a>
            , or{" "}
            <a href="/go/quickbooks" className="text-accent font-semibold hover:underline">
              QuickBooks
            </a>
          </li>
          <li>
            <strong>Start keeping digital records</strong> — import your existing records
            and begin tracking income/expenses digitally
          </li>
          <li>
            <strong>Register for MTD</strong> — sign up via your Government Gateway
            account before April 2026
          </li>
          <li>
            <strong>Talk to your accountant</strong> — they can help you set up and submit
            your first quarterly updates
          </li>
        </ol>

        <div className="bg-navy-900 text-white rounded-2xl p-8 my-10 text-center">
          <h3 className="text-2xl font-bold mb-3">
            Check Your MTD Status
          </h3>
          <p className="text-gray-300 mb-6">
            Find out if the April 2026 deadline affects you with our free 60-second quiz.
          </p>
          <a
            href="/check"
            className="inline-block bg-accent text-navy-900 font-bold px-8 py-3 rounded-xl hover:bg-green-400 transition-colors"
          >
            Take the Quiz &rarr;
          </a>
        </div>
      </div>
    </article>
  );
}

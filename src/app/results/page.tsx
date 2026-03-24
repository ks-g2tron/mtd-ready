"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

function EmailCapture({ status, income, software }: { status: string; income: string; software: string }) {
  const [email, setEmail] = useState("")
  const [reminderConsent, setReminderConsent] = useState(false)
  const [thirdPartyConsent, setThirdPartyConsent] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!reminderConsent) { setError("Please agree to receive reminders to continue."); return }
    setLoading(true)
    setError("")
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, status, income, software, third_party_consent: thirdPartyConsent }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError("Something went wrong. Please try again.")
      }
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 mb-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">You&apos;re on the list!</h3>
        <p className="text-green-700">We&apos;ll remind you before the April 2026 deadline. Check your inbox.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-lg">!</div>
        <div>
          <h2 className="text-xl font-bold">Get your deadline reminder</h2>
          <p className="text-sm text-gray-500">April 2026 is just weeks away — don&apos;t miss it.</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-base focus:border-accent focus:outline-none"
        />
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={reminderConsent}
            onChange={e => setReminderConsent(e.target.checked)}
            className="mt-1 w-4 h-4 accent-green-500"
          />
          <span className="text-sm text-gray-700">
            I agree to receive MTD deadline reminders and compliance tips from MTD Ready. Unsubscribe any time. <span className="text-red-500">*</span>
          </span>
        </label>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={thirdPartyConsent}
            onChange={e => setThirdPartyConsent(e.target.checked)}
            className="mt-1 w-4 h-4 accent-green-500"
          />
          <span className="text-sm text-gray-600">
            I&apos;m happy to be contacted by MTD-compatible software providers and accounting firms who can help me comply. <span className="text-gray-400">(optional)</span>
          </span>
        </label>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <p className="text-xs text-gray-400">By signing up you agree to our <a href="/privacy" className="underline hover:text-gray-600">Privacy Policy</a>.</p>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-accent text-white font-bold py-3 rounded-xl hover:bg-green-600 transition-colors disabled:opacity-50"
        >
          {loading ? "Saving..." : "Send me the reminder →"}
        </button>
      </form>
    </div>
  )
}

function ResultsContent() {
  const params = useSearchParams();
  const status = params.get("status") || "";
  const income = params.get("income") || "";
  const digital = params.get("digital") || "";
  const software = params.get("software") || "";
  const vat = params.get("vat") || "";

  const isAffected = status !== "neither";
  const isUrgent = isAffected && (income === "50k-150k" || income === "over-150k");
  const isSoon = isAffected && income === "30k-50k";
  const hasCompatibleSoftware = ["freeagent", "xero", "quickbooks"].includes(software);
  const hasDigitalRecords = digital === "yes";

  let bannerColor = "bg-green-100 border-green-300 text-green-900";
  let bannerIcon = "✓";
  let headline = "You're not yet affected by MTD for Income Tax";
  let subtitle = "But getting ready now will save you time and stress when the rules extend to you.";

  if (isUrgent) {
    bannerColor = "bg-red-100 border-red-300 text-red-900";
    bannerIcon = "!";
    headline = "You MUST comply with MTD from April 2026";
    subtitle = "As a " + (status === "both" ? "self-employed person and landlord" : status) +
      " earning over £50,000, you are in the first wave of MTD for Income Tax.";
  } else if (isSoon) {
    bannerColor = "bg-orange-100 border-orange-300 text-orange-900";
    bannerIcon = "!";
    headline = "You must comply with MTD from April 2027";
    subtitle = "You have a little more time, but preparing now is strongly recommended.";
  }

  const steps: { title: string; description: string; done: boolean }[] = [];

  if (!hasCompatibleSoftware) {
    steps.push({
      title: "Get MTD-compatible accounting software",
      description: "You need HMRC-recognised software to keep digital records and submit quarterly updates.",
      done: false,
    });
  } else {
    steps.push({
      title: "You already have compatible software",
      description: `You're using ${software.charAt(0).toUpperCase() + software.slice(1)}, which is MTD-compatible.`,
      done: true,
    });
  }

  if (!hasDigitalRecords) {
    steps.push({
      title: "Start keeping digital records",
      description: "Move your income and expense records into your accounting software as soon as possible.",
      done: false,
    });
  } else {
    steps.push({
      title: "You already keep digital records",
      description: "Great — you're ahead of many people. Make sure your software is MTD-compatible.",
      done: true,
    });
  }

  if (isUrgent || isSoon) {
    steps.push({
      title: "Sign up for MTD for Income Tax with HMRC",
      description: "You'll need to register through your Government Gateway account before your first quarterly update.",
      done: false,
    });
    steps.push({
      title: "Prepare for quarterly submissions",
      description: "Under MTD, you'll submit updates every 3 months instead of one annual tax return.",
      done: false,
    });
  }

  if (vat === "yes") {
    steps.push({
      title: "Ensure your VAT and Income Tax software work together",
      description: "If you're already MTD for VAT, check that your software also supports MTD for Income Tax.",
      done: false,
    });
  }

  const recommendedSoftware = [
    {
      name: "FreeAgent",
      tagline: "Best for freelancers and sole traders",
      description: "Simple, intuitive, and purpose-built for UK self-employed people. Handles invoicing, expenses, and tax returns.",
      href: "/go/freeagent",
      color: "bg-blue-600",
    },
    {
      name: "Xero",
      tagline: "Best for growing businesses",
      description: "Powerful cloud accounting with 1,000+ app integrations. Great if you plan to scale or hire.",
      href: "/go/xero",
      color: "bg-sky-500",
    },
    {
      name: "QuickBooks",
      tagline: "Best for mixed income",
      description: "Ideal if you have both self-employment and rental income. Strong reporting and multi-entity support.",
      href: "/go/quickbooks",
      color: "bg-green-700",
    },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-4">
        {/* Status banner */}
        <div className={`${bannerColor} border-2 rounded-2xl p-6 mb-8 text-center`}>
          <div className="text-4xl font-bold mb-2">{bannerIcon}</div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{headline}</h1>
          <p className="text-lg opacity-80">{subtitle}</p>
        </div>

        {/* Action plan */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          <h2 className="text-xl font-bold mb-6">Your Personalised Action Plan</h2>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold ${step.done ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                  {step.done ? "✓" : i + 1}
                </div>
                <div>
                  <h3 className={`font-semibold ${step.done ? "text-green-700" : ""}`}>{step.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Email capture */}
        <EmailCapture status={status} income={income} software={software} />

        {/* Software recommendations */}
        {!hasCompatibleSoftware && (
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-6">Recommended MTD-Compatible Software</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {recommendedSoftware.map((sw) => (
                <div key={sw.name} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className={`w-10 h-10 rounded-lg ${sw.color} flex items-center justify-center text-white font-bold mb-3`}>
                    {sw.name[0]}
                  </div>
                  <h3 className="font-bold mb-1">{sw.name}</h3>
                  <p className="text-xs text-accent font-semibold mb-2">{sw.tagline}</p>
                  <p className="text-sm text-gray-600 mb-4">{sw.description}</p>
                  <a
                    href={sw.href}
                    className="inline-block bg-accent text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm w-full text-center"
                  >
                    Try {sw.name} Free
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Retake / share */}
        <div className="text-center space-x-4">
          <a
            href="/check"
            className="inline-block bg-navy-900 text-white font-bold px-6 py-3 rounded-xl hover:bg-navy-800 transition-colors"
          >
            Retake Quiz
          </a>
          <a
            href="/"
            className="inline-block border-2 border-navy-900 text-navy-900 font-bold px-6 py-3 rounded-xl hover:bg-navy-900 hover:text-white transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    </section>
  );
}

export default function ResultsPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading your results...</div>}>
      <ResultsContent />
    </Suspense>
  );
}

"use client";

import { useEffect, useState } from "react";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date("2026-04-06T00:00:00Z").getTime();
    const update = () => {
      const now = Date.now();
      const diff = Math.max(0, target - now);
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex gap-4 justify-center">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="text-center">
          <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3 min-w-[70px]">
            <div className="text-3xl md:text-4xl font-bold text-white">{value}</div>
          </div>
          <div className="text-xs text-gray-300 mt-1 uppercase tracking-wide">{label}</div>
        </div>
      ))}
    </div>
  );
}

function SoftwareCard({ name, tagline, href, color }: { name: string; tagline: string; href: string; color: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center text-white font-bold text-xl mb-4`}>
        {name[0]}
      </div>
      <h3 className="font-bold text-lg mb-1">{name}</h3>
      <p className="text-gray-600 text-sm mb-4">{tagline}</p>
      <a
        href={href}
        className="inline-block bg-accent text-white font-semibold px-5 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm"
      >
        Try {name} Free &rarr;
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block bg-danger/20 text-danger font-semibold text-sm px-4 py-1 rounded-full mb-6">
            Deadline approaching — April 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Are You Ready for<br />Making Tax Digital?
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Find out if MTD for Income Tax affects you — and exactly what to do about it.
            <strong className="text-white"> Free check, 60 seconds.</strong>
          </p>
          <a
            href="/check"
            className="inline-block bg-accent text-navy-900 font-bold text-lg px-8 py-4 rounded-xl hover:bg-green-400 transition-colors shadow-lg shadow-accent/20"
          >
            Check If You&apos;re Affected &rarr;
          </a>
          <div className="mt-12">
            <p className="text-sm text-gray-400 mb-4">Time until MTD for Income Tax begins:</p>
            <CountdownTimer />
          </div>
        </div>
      </section>

      {/* What is MTD */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What is Making Tax Digital?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4">
                &#128221;
              </div>
              <h3 className="font-bold mb-2">Digital Records</h3>
              <p className="text-gray-600 text-sm">
                HMRC requires you to keep digital records of your income and expenses using compatible software.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4">
                &#128640;
              </div>
              <h3 className="font-bold mb-2">Quarterly Updates</h3>
              <p className="text-gray-600 text-sm">
                You must send quarterly updates to HMRC through your software — replacing the annual Self Assessment tax return.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4">
                &#9888;&#65039;
              </div>
              <h3 className="font-bold mb-2">Penalties for Non-Compliance</h3>
              <p className="text-gray-600 text-sm">
                Failure to comply can result in penalties. The new points-based penalty system means late submissions add up quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who is affected */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Who Needs to Comply?</h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border border-red-100">
              <div className="text-danger text-xl font-bold mt-0.5">!</div>
              <div>
                <p className="font-bold text-danger">April 2026 — Income over &pound;50,000</p>
                <p className="text-sm text-gray-700">Self-employed individuals and landlords with annual income over &pound;50,000 MUST comply from 6 April 2026.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg border border-orange-100">
              <div className="text-warning text-xl font-bold mt-0.5">!</div>
              <div>
                <p className="font-bold text-warning">April 2027 — Income over &pound;30,000</p>
                <p className="text-sm text-gray-700">Those earning between &pound;30,000 and &pound;50,000 must comply from April 2027.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border border-green-100">
              <div className="text-accent text-xl font-bold mt-0.5">&#10003;</div>
              <div>
                <p className="font-bold text-green-700">Under &pound;30,000 — Not yet affected</p>
                <p className="text-sm text-gray-700">You&apos;re not yet required to comply, but getting ready now will save you stress later.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <a
              href="/check"
              className="inline-block bg-navy-900 text-white font-bold px-8 py-4 rounded-xl hover:bg-navy-800 transition-colors"
            >
              Check Your Status Now &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Software */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">MTD-Compatible Software</h2>
          <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
            You&apos;ll need HMRC-recognised software to submit your quarterly updates. Here are the top choices:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <SoftwareCard
              name="FreeAgent"
              tagline="Best for freelancers and sole traders. Simple, intuitive, and built for UK tax."
              href="/go/freeagent"
              color="bg-blue-600"
            />
            <SoftwareCard
              name="Xero"
              tagline="Best for growing businesses. Powerful features and 1,000+ app integrations."
              href="/go/xero"
              color="bg-sky-500"
            />
            <SoftwareCard
              name="QuickBooks"
              tagline="Best for mixed income. Great for landlords with self-employment income too."
              href="/go/quickbooks"
              color="bg-green-700"
            />
          </div>
        </div>
      </section>
    </>
  );
}

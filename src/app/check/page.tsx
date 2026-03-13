"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const questions = [
  {
    id: "status",
    question: "Are you self-employed, a landlord, or both?",
    options: [
      { value: "self-employed", label: "Self-employed" },
      { value: "landlord", label: "Landlord" },
      { value: "both", label: "Both" },
      { value: "neither", label: "Neither" },
    ],
  },
  {
    id: "income",
    question: "What was your total income in 2024/25?",
    options: [
      { value: "under-30k", label: "Under £30,000" },
      { value: "30k-50k", label: "£30,000 – £50,000" },
      { value: "50k-150k", label: "£50,000 – £150,000" },
      { value: "over-150k", label: "Over £150,000" },
    ],
  },
  {
    id: "digital",
    question: "Do you currently keep digital records of your income and expenses?",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
      { value: "sometimes", label: "Sometimes" },
    ],
  },
  {
    id: "software",
    question: "Do you currently use accounting software?",
    options: [
      { value: "freeagent", label: "FreeAgent" },
      { value: "xero", label: "Xero" },
      { value: "quickbooks", label: "QuickBooks" },
      { value: "sage", label: "Sage" },
      { value: "spreadsheets", label: "Spreadsheets" },
      { value: "paper", label: "Paper records" },
      { value: "nothing", label: "Nothing" },
    ],
  },
  {
    id: "vat",
    question: "Do you have a VAT-registered business?",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
  },
];

export default function CheckPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const router = useRouter();

  const current = questions[step];
  const progress = ((step) / questions.length) * 100;

  function handleSelect(value: string) {
    const updated = { ...answers, [current.id]: value };
    setAnswers(updated);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      const params = new URLSearchParams(updated);
      router.push(`/results?${params.toString()}`);
    }
  }

  return (
    <section className="py-12 md:py-20">
      <div className="max-w-2xl mx-auto px-4">
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>Question {step + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-accent h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold mb-6">{current.question}</h2>
          <div className="space-y-3">
            {current.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className="w-full text-left p-4 rounded-xl border-2 border-gray-100 hover:border-accent hover:bg-green-50 transition-all font-medium"
              >
                {option.label}
              </button>
            ))}
          </div>
          {step > 0 && (
            <button
              onClick={() => setStep(step - 1)}
              className="mt-6 text-sm text-gray-500 hover:text-navy-900"
            >
              &larr; Back
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

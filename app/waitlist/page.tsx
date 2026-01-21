"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const selectOptions = {
  interests: [
    "Cosmetics",
    "Health & Wellness Products",
    "Beverages",
    "All of the above",
  ],
  purchaseFrequency: ["1-5", "6-10", "11-20", "20+"],
  concern: [
    "Authenticity",
    "Safety ingredients",
    "Health impact",
    "Brand transparency",
    "All of the above",
  ],
  counterfeit: ["Yes", "No", "Not sure"],
  scansPerMonth: ["1-10 scans", "11-20 scans", "21-50 scans", "50+ scans"],
  creditPackage: [
    "10 credits - ₦750",
    "20 credits - ₦1,500",
    "50 credits - ₦2,500",
    "Not sure yet",
  ],
  paymentPreference: [
    "Pay-as-you-go credit purchases",
    "Monthly subscription with credits included",
    "Both options available",
  ],
  verificationImportance: [
    "Extremely important",
    "Very important",
    "Somewhat important",
    "Not very important",
  ],
  fairPrice: ["₦50-₦75", "₦76-₦100", "₦101-₦150", "Other"],
  willingnessToPay: [
    "Definitely yes",
    "Probably yes",
    "Not sure",
    "Probably not",
    "Definitely not",
  ],
  research: [
    "Online reviews",
    "Brand websites",
    "Ask friends/family",
    "Don't research much",
    "Other",
  ],
  features: [
    "Barcode scanning",
    "Ingredient analysis",
    "Counterfeit detection",
    "Safety ratings",
    "Product recalls/alerts",
    "User reviews",
    "Other",
  ],
  category: [
    "Individual consumer",
    "Business owner/retailer",
    "Health professional",
    "Beauty professional",
    "Other",
  ],
  beta: ["Yes", "No", "Maybe"],
  referralInterest: ["Yes", "No", "Maybe"],
  referral: [
    "Social media (Instagram, TikTok, etc.)",
    "Friend or family",
    "Google search",
    "News article or blog",
    "Other",
  ],
};

type WaitlistFormState = {
  // Step 1: Essential Information
  fullName: string;
  email: string;
  phone: string;
  country: string;

  // Step 2: User Profile & Needs
  interests: string[];
  purchaseFrequency: string;
  concern: string[];
  counterfeit: string;

  // Step 3: Pain Points & Motivations
  challenges: string;
  research: string;
  researchOther: string;
  desiredFeatures: string[];
  desiredFeaturesOther: string;

  // Step 4: Usage & Credit System
  scansPerMonth: string;
  creditPackage: string;
  paymentPreference: string;
  verificationImportance: string;

  // Step 5: Value Perception
  fairPrice: string;
  fairPriceOther: string;
  willingnessToPay: string;

  // Step 6: User Category
  category: string;
  categoryOther: string;
  businessType: string;
  businessMonthlyVolume: string;

  // Step 7: Engagement & Incentives
  referralInterest: string;
  beta: string;
  referral: string;
  referralOther: string;
  wishlist: string;
};

const defaultState: WaitlistFormState = {
  // Step 1
  fullName: "",
  email: "",
  phone: "",
  country: "",

  // Step 2
  interests: [],
  purchaseFrequency: "",
  concern: [],
  counterfeit: "",

  // Step 3
  challenges: "",
  research: "",
  researchOther: "",
  desiredFeatures: [],
  desiredFeaturesOther: "",

  // Step 4
  scansPerMonth: "",
  creditPackage: "",
  paymentPreference: "",
  verificationImportance: "",

  // Step 5
  fairPrice: "",
  fairPriceOther: "",
  willingnessToPay: "",

  // Step 6
  category: "",
  categoryOther: "",
  businessType: "",
  businessMonthlyVolume: "",

  // Step 7
  referralInterest: "",
  beta: "",
  referral: "",
  referralOther: "",
  wishlist: "",
};

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
      {children}
    </p>
  );
}

function TextInput({
  showError,
  required,
  value,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  showError?: boolean;
}) {
  const hasError = required && showError && !value;
  return (
    <div className="space-y-1">
      <input
        {...props}
        value={value}
        className={[
          "w-full rounded-lg border px-4 py-3 text-white",
          "outline-none ring-lime-400/40 transition focus:ring-2",
          hasError
            ? "border-red-400 bg-white/5 focus:border-red-400"
            : "border-white/10 bg-white/5 focus:border-lime-300",
          props.className ?? "",
        ].join(" ")}
      />
      {hasError && (
        <p className="text-center text-xs text-red-400">This field is required</p>
      )}
    </div>
  );
}

function CardSelect({
  options,
  value,
  onChange,
  label,
  required,
  showError,
  otherValue,
  onOtherChange,
}: {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  required?: boolean;
  showError?: boolean;
  otherValue?: string;
  onOtherChange?: (value: string) => void;
}) {
  const showOtherInput = value === "Other" && onOtherChange !== undefined;
  return (
    <div className="space-y-2">
      {label && (
        <div className="flex flex-col items-center">
          <FieldLabel>{label}</FieldLabel>
        </div>
      )}
      <div className="grid gap-3">
        {options.map((option) => {
          const isSelected = value === option;
          const isOther = option === "Other";
          return (
            <div key={option} className="space-y-2">
              <button
                type="button"
                onClick={() => onChange(option)}
                className={[
                  "w-full rounded-lg border px-4 py-3 text-left transition",
                  isSelected
                    ? "border-lime-400 bg-lime-400/20 text-white shadow-[0_0_20px_rgba(163,255,0,0.2)]"
                    : "border-white/10 bg-white/5 text-white hover:border-lime-300/40",
                ].join(" ")}
              >
                <span className="font-medium">{option}</span>
              </button>
              {isOther && showOtherInput && (
                <div className="pl-1">
                  <TextArea
                    value={otherValue || ""}
                    onChange={(e) => onOtherChange?.(e.target.value)}
                    placeholder="Please specify..."
                    rows={2}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
      {required && showError && !value && (
        <p className="text-center text-xs text-red-400">Please select an option</p>
      )}
      {required && showError && value === "Other" && !otherValue && (
        <p className="text-center text-xs text-red-400">Please provide details</p>
      )}
    </div>
  );
}

function CardMultiSelect({
  options,
  value,
  onChange,
  label,
  maxSelections,
  required,
  showError,
  otherValue,
  onOtherChange,
}: {
  options: string[];
  value: string[];
  onChange: (value: string[]) => void;
  label?: string;
  maxSelections?: number;
  required?: boolean;
  showError?: boolean;
  otherValue?: string;
  onOtherChange?: (value: string) => void;
}) {
  const handleToggle = (option: string) => {
    if (value.includes(option)) {
      onChange(value.filter((v) => v !== option));
    } else {
      if (maxSelections && value.length >= maxSelections && option !== "Other") {
        return; // Don't allow more selections (except "Other")
      }
      onChange([...value, option]);
    }
  };

  const showOtherInput = value.includes("Other") && onOtherChange !== undefined;

  return (
    <div className="space-y-2">
      {label && (
        <div className="flex flex-col items-center gap-1">
          <FieldLabel>{label}</FieldLabel>
          {maxSelections && (
            <span className="text-xs text-white/50">
              Choose one or more (max {maxSelections})
            </span>
          )}
        </div>
      )}
      <div className="grid gap-3">
        {options.map((option) => {
          const isSelected = value.includes(option);
          const isOther = option === "Other";
          return (
            <div key={option} className="space-y-2">
              <button
                type="button"
                onClick={() => handleToggle(option)}
                disabled={
                  maxSelections
                    ? !isSelected && value.length >= maxSelections && option !== "Other"
                    : false
                }
                className={[
                  "w-full rounded-lg border px-4 py-3 text-left transition",
                  isSelected
                    ? "border-lime-400 bg-lime-400/20 text-white shadow-[0_0_20px_rgba(163,255,0,0.2)]"
                    : "border-white/10 bg-white/5 text-white hover:border-lime-300/40",
                  maxSelections &&
                  !isSelected &&
                  value.length >= maxSelections &&
                  option !== "Other" &&
                  "opacity-50 cursor-not-allowed",
                ].join(" ")}
              >
                <span className="font-medium">{option}</span>
              </button>
              {isOther && showOtherInput && (
                <div className="pl-1">
                  <TextArea
                    value={otherValue || ""}
                    onChange={(e) => onOtherChange?.(e.target.value)}
                    placeholder="Please specify..."
                    rows={2}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
      {required && showError && value.length === 0 && (
        <p className="text-center text-xs text-red-400">Please select at least one option</p>
      )}
      {required && showError && value.includes("Other") && !otherValue && (
        <p className="text-center text-xs text-red-400">Please provide details</p>
      )}
    </div>
  );
}

function TextArea({
  showError,
  required,
  value,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  showError?: boolean;
}) {
  const hasError = required && showError && !value;
  return (
    <div className="space-y-1">
      <textarea
        {...props}
        value={value}
        className={[
          "w-full rounded-lg border px-4 py-3 text-white",
          "outline-none transition focus:ring-2 focus:ring-lime-400/40",
          hasError
            ? "border-red-400 bg-[#0f172b]/70 focus:border-red-400"
            : "border-white/10 bg-[#0f172b]/70 focus:border-lime-300",
          props.className ?? "",
        ].join(" ")}
      />
      {hasError && (
        <p className="text-center text-xs text-red-400">This field is required</p>
      )}
    </div>
  );
}

export default function WaitlistPage() {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5 | 6 | 7>(1);
  const [state, setState] = useState<WaitlistFormState>(defaultState);
  const [submitted, setSubmitted] = useState(false);
  const [showValidationErrors, setShowValidationErrors] = useState(false);

  const totalSteps = 7;
  const progressPct = useMemo(
    () => Math.round((step / totalSteps) * 100),
    [step],
  );

  const nextDisabled =
    (step === 1 && (!state.fullName || !state.email || !state.country)) ||
    (step === 2 &&
      (state.interests.length === 0 ||
        !state.purchaseFrequency ||
        state.concern.length === 0 ||
        !state.counterfeit)) ||
    (step === 3 &&
      (!state.challenges ||
        !state.research ||
        (state.research === "Other" && !state.researchOther) ||
        state.desiredFeatures.length === 0 ||
        (state.desiredFeatures.includes("Other") && !state.desiredFeaturesOther))) ||
    (step === 4 &&
      (!state.scansPerMonth ||
        !state.creditPackage ||
        !state.paymentPreference ||
        !state.verificationImportance)) ||
    (step === 5 &&
      (!state.fairPrice ||
        (state.fairPrice === "Other" && !state.fairPriceOther) ||
        !state.willingnessToPay)) ||
    (step === 6 &&
      (!state.category ||
        (state.category === "Other" && !state.categoryOther))) ||
    (step === 7 &&
      (!state.referralInterest ||
        !state.beta ||
        !state.referral ||
        (state.referral === "Other" && !state.referralOther)));

  function onContinue() {
    // Check if current step is valid
    const isValid =
      (step === 1 && state.fullName && state.email && state.country) ||
      (step === 2 &&
        state.interests.length > 0 &&
        state.purchaseFrequency &&
        state.concern.length > 0 &&
        state.counterfeit) ||
      (step === 3 &&
        state.challenges &&
        state.research &&
        (state.research !== "Other" || state.researchOther) &&
        state.desiredFeatures.length > 0 &&
        (!state.desiredFeatures.includes("Other") || state.desiredFeaturesOther)) ||
      (step === 4 &&
        state.scansPerMonth &&
        state.creditPackage &&
        state.paymentPreference &&
        state.verificationImportance) ||
      (step === 5 &&
        state.fairPrice &&
        (state.fairPrice !== "Other" || state.fairPriceOther) &&
        state.willingnessToPay) ||
      (step === 6 &&
        state.category &&
        (state.category !== "Other" || state.categoryOther)) ||
      (step === 7 &&
        state.referralInterest &&
        state.beta &&
        state.referral &&
        (state.referral !== "Other" || state.referralOther));

    if (!isValid) {
      setShowValidationErrors(true);
      return;
    }

    setShowValidationErrors(false);
    if (step < 7) setStep((s) => (s + 1) as 2 | 3 | 4 | 5 | 6 | 7);
  }

  function onBack() {
    if (step > 1) {
      setShowValidationErrors(false);
      setStep((s) => (s - 1) as 1 | 2 | 3 | 4 | 5 | 6);
    }
  }

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [waitlistPosition, setWaitlistPosition] = useState<number | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Check if step 7 is valid
    const isValid =
      state.referralInterest &&
      state.beta &&
      state.referral &&
      (state.referral !== "Other" || state.referralOther);

    if (!isValid) {
      setShowValidationErrors(true);
      return;
    }

    setShowValidationErrors(false);
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      });

      const data = await res.json();

      if (!res.ok) {
        setSubmitError(data.error || "Failed to join waitlist");
        setIsSubmitting(false);
        return;
      }

      setWaitlistPosition(data.position);
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0f172b] text-white">
      {/* keep the background layer divs before content */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0f172b] via-[#11253f] to-[#0f172b]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(circle_at_50%_-20%,rgba(163,255,0,0.12),transparent_50%)]" />

      <div className="mx-auto flex max-w-3xl flex-col gap-8 px-4 pb-16 pt-10 md:px-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-lime-200"
          >
            <span aria-hidden>‹</span>
            Back
          </Link>
          <div className="text-xs text-white/60">
            Step <span className="text-white">{step}</span> of {totalSteps}
          </div>
        </div>

        <header className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-lime-300">
            MAVSCAN Waitlist
          </p>
          <h1 className="text-3xl font-semibold md:text-4xl">
            Get ready to scan smarter.
          </h1>
          <p className="text-white/70">
            Answer a few quick questions so we can tailor MAVSCAN to your needs.
          </p>
        </header>

        {/* progress bar */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
          <div className="flex items-center justify-between text-xs text-white/60">
            <span>Completion</span>
            <span className="text-lime-300">{progressPct}%</span>
          </div>
          <div className="mt-3 h-2 rounded-full bg-white/10">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-lime-400 via-emerald-400 to-cyan-300 shadow-[0_0_20px_rgba(163,255,0,0.45)] transition-all"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur"
        >
          {/* step pills */}
          <div className="mb-6 flex items-center justify-center gap-1.5">
            {[1, 2, 3, 4, 5, 6, 7].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setStep(n as 1 | 2 | 3 | 4 | 5 | 6 | 7)}
                className={[
                  "h-7 w-7 rounded-full border text-xs font-semibold transition",
                  n === step
                    ? "border-lime-300/60 bg-lime-400/20 text-lime-200"
                    : "border-white/10 bg-white/5 text-white/70 hover:border-lime-300/30",
                ].join(" ")}
                aria-current={n === step ? "step" : undefined}
              >
                {n}
              </button>
            ))}
          </div>

          {submitted ? (
            <div className="space-y-4 text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-lime-300">
                You&apos;re in!
              </p>
              <h2 className="text-2xl font-semibold">Thanks for joining.</h2>
              {waitlistPosition && (
                <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2">
                  <span className="text-white/70">Your position:</span>
                  <span className="text-xl font-bold text-lime-300">#{waitlistPosition}</span>
                </div>
              )}
              <p className="text-white/70">
                We&apos;ll notify you at <span className="text-lime-300">{state.email}</span> when MAVSCAN is ready.
              </p>
              <div className="pt-4">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-5 py-3 font-semibold text-white hover:text-lime-200"
                >
                  Back to home
                </Link>
              </div>
            </div>
          ) : (
            <>
              {/* Step 1 */}
              {step === 1 && (
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-lime-400/20 text-lime-200">
                        1
                      </span>
                      Essential Information
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2 md:col-span-2">
                      <FieldLabel>Full Name</FieldLabel>
                      <TextInput
                        value={state.fullName}
                        onChange={(e) =>
                          setState((s) => ({ ...s, fullName: e.target.value }))
                        }
                        placeholder="Your full name"
                        required
                        showError={showValidationErrors}
                        autoComplete="name"
                      />
                    </div>
                    <div className="space-y-2">
                      <FieldLabel>Email Address</FieldLabel>
                      <TextInput
                        value={state.email}
                        onChange={(e) =>
                          setState((s) => ({ ...s, email: e.target.value }))
                        }
                        placeholder="you@company.com"
                        type="email"
                        required
                        showError={showValidationErrors}
                        autoComplete="email"
                      />
                    </div>
                    <div className="space-y-2">
                      <FieldLabel>Phone Number (optional)</FieldLabel>
                      <TextInput
                        value={state.phone}
                        onChange={(e) =>
                          setState((s) => ({ ...s, phone: e.target.value }))
                        }
                        placeholder="+234..."
                        autoComplete="tel"
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <FieldLabel>Location / Country</FieldLabel>
                      <TextInput
                        value={state.country}
                        onChange={(e) =>
                          setState((s) => ({ ...s, country: e.target.value }))
                        }
                        placeholder="Nigeria"
                        required
                        showError={showValidationErrors}
                        autoComplete="country-name"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-lime-400/20 text-lime-200">
                        2
                      </span>
                      User Profile & Needs
                    </div>
                  </div>

                  <div className="space-y-6">
                    <CardMultiSelect
                      label="What type of products are you most interested in verifying?"
                      options={selectOptions.interests}
                      value={state.interests}
                      onChange={(value) =>
                        setState((s) => ({ ...s, interests: value }))
                      }
                      maxSelections={2}
                      required
                      showError={showValidationErrors}
                    />

                    <CardSelect
                      label="How many products do you typically purchase per month in these categories?"
                      options={selectOptions.purchaseFrequency}
                      value={state.purchaseFrequency}
                      onChange={(value) =>
                        setState((s) => ({ ...s, purchaseFrequency: value }))
                      }
                      required
                      showError={showValidationErrors}
                    />

                    <CardMultiSelect
                      label="What's your primary concern when buying these products?"
                      options={selectOptions.concern}
                      value={state.concern}
                      onChange={(value) =>
                        setState((s) => ({ ...s, concern: value }))
                      }
                      maxSelections={2}
                      required
                      showError={showValidationErrors}
                    />

                    <CardSelect
                      label="Have you ever purchased a counterfeit or unsafe product?"
                      options={selectOptions.counterfeit}
                      value={state.counterfeit}
                      onChange={(value) =>
                        setState((s) => ({ ...s, counterfeit: value }))
                      }
                      required
                      showError={showValidationErrors}
                    />
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-lime-400/20 text-lime-200">
                        3
                      </span>
                      Pain Points & Motivations
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex flex-col items-center">
                      <FieldLabel>What challenges do you currently face when trying to verify product authenticity or safety?</FieldLabel>
                    </div>
                    <TextArea
                      rows={4}
                      value={state.challenges}
                      onChange={(e) =>
                        setState((s) => ({ ...s, challenges: e.target.value }))
                      }
                      placeholder="e.g. hard to trust online sellers, unclear ingredients..."
                      required
                      showError={showValidationErrors}
                    />
                  </div>

                  <div className="space-y-6">
                    <CardSelect
                      label="How do you currently research products before purchasing?"
                      options={selectOptions.research}
                      value={state.research}
                      onChange={(value) =>
                        setState((s) => ({ ...s, research: value }))
                      }
                      required
                      showError={showValidationErrors}
                      otherValue={state.researchOther}
                      onOtherChange={(value) =>
                        setState((s) => ({ ...s, researchOther: value }))
                      }
                    />

                    <CardMultiSelect
                      label="What features would be most valuable to you in MAVSCAN?"
                      options={selectOptions.features}
                      value={state.desiredFeatures}
                      onChange={(value) =>
                        setState((s) => ({ ...s, desiredFeatures: value }))
                      }
                      maxSelections={3}
                      required
                      showError={showValidationErrors}
                      otherValue={state.desiredFeaturesOther}
                      onOtherChange={(value) =>
                        setState((s) => ({ ...s, desiredFeaturesOther: value }))
                      }
                    />
                  </div>
                </div>
              )}

              {/* Step 4 */}
              {step === 4 && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-lime-400/20 text-lime-200">
                        4
                      </span>
                      Usage & Credit System
                    </div>
                  </div>

                  <div className="space-y-6">
                    <CardSelect
                      label="How many product scans would you estimate needing per month?"
                      options={selectOptions.scansPerMonth}
                      value={state.scansPerMonth}
                      onChange={(value) =>
                        setState((s) => ({ ...s, scansPerMonth: value }))
                      }
                      required
                      showError={showValidationErrors}
                    />

                    <CardSelect
                      label="Which credit package would likely suit your needs best?"
                      options={selectOptions.creditPackage}
                      value={state.creditPackage}
                      onChange={(value) =>
                        setState((s) => ({ ...s, creditPackage: value }))
                      }
                      required
                      showError={showValidationErrors}
                    />

                    <CardSelect
                      label="Would you prefer:"
                      options={selectOptions.paymentPreference}
                      value={state.paymentPreference}
                      onChange={(value) =>
                        setState((s) => ({ ...s, paymentPreference: value }))
                      }
                      required
                      showError={showValidationErrors}
                    />

                    <CardSelect
                      label="How important is product verification to your purchasing decisions?"
                      options={selectOptions.verificationImportance}
                      value={state.verificationImportance}
                      onChange={(value) =>
                        setState((s) => ({ ...s, verificationImportance: value }))
                      }
                      required
                      showError={showValidationErrors}
                    />
                  </div>
                </div>
              )}

              {/* Step 5 */}
              {step === 5 && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-lime-400/20 text-lime-200">
                        5
                      </span>
                      Value Perception
                    </div>
                  </div>

                  <div className="space-y-6">
                    <CardSelect
                      label="What would you consider a fair price per product scan?"
                      options={selectOptions.fairPrice}
                      value={state.fairPrice}
                      onChange={(value) =>
                        setState((s) => ({ ...s, fairPrice: value }))
                      }
                      required
                      showError={showValidationErrors}
                      otherValue={state.fairPriceOther}
                      onOtherChange={(value) =>
                        setState((s) => ({ ...s, fairPriceOther: value }))
                      }
                    />

                    <CardSelect
                      label="Would you be willing to pay for verified product information if it helps you avoid counterfeit or unsafe products?"
                      options={selectOptions.willingnessToPay}
                      value={state.willingnessToPay}
                      onChange={(value) =>
                        setState((s) => ({ ...s, willingnessToPay: value }))
                      }
                      required
                      showError={showValidationErrors}
                    />
                  </div>
                </div>
              )}

              {/* Step 6 */}
              {step === 6 && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-lime-400/20 text-lime-200">
                        6
                      </span>
                      User Category
                    </div>
                  </div>

                  <div className="space-y-6">
                    <CardSelect
                      label="Are you signing up as:"
                      options={selectOptions.category}
                      value={state.category}
                      onChange={(value) =>
                        setState((s) => ({ ...s, category: value }))
                      }
                      required
                      showError={showValidationErrors}
                      otherValue={state.categoryOther}
                      onOtherChange={(value) =>
                        setState((s) => ({ ...s, categoryOther: value }))
                      }
                    />

                    {state.category.toLowerCase().includes("business") && (
                      <>
                        <div className="space-y-2">
                          <div className="flex flex-col items-center">
                            <FieldLabel>What type of business do you operate?</FieldLabel>
                          </div>
                          <TextInput
                            value={state.businessType}
                            onChange={(e) =>
                              setState((s) => ({
                                ...s,
                                businessType: e.target.value,
                              }))
                            }
                            placeholder="Retail store, pharmacy, e-commerce..."
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex flex-col items-center">
                            <FieldLabel>Approximately how many products would you need to verify monthly?</FieldLabel>
                          </div>
                          <TextInput
                            value={state.businessMonthlyVolume}
                            onChange={(e) =>
                              setState((s) => ({
                                ...s,
                                businessMonthlyVolume: e.target.value,
                              }))
                            }
                            placeholder="e.g. 50, 100, 500+"
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Step 7 */}
              {step === 7 && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-lime-400/20 text-lime-200">
                        7
                      </span>
                      Engagement & Incentives
                    </div>
                  </div>

                  <div className="space-y-6">
                    <CardSelect
                      label="Would you be interested in earning bonus credits through referrals?"
                      options={selectOptions.referralInterest}
                      value={state.referralInterest}
                      onChange={(value) =>
                        setState((s) => ({ ...s, referralInterest: value }))
                      }
                      required
                      showError={showValidationErrors}
                    />

                    <CardSelect
                      label="Would you participate in our beta testing program for additional free credits?"
                      options={selectOptions.beta}
                      value={state.beta}
                      onChange={(value) =>
                        setState((s) => ({ ...s, beta: value }))
                      }
                      required
                      showError={showValidationErrors}
                    />

                    <CardSelect
                      label="How did you hear about MAVSCAN?"
                      options={selectOptions.referral}
                      value={state.referral}
                      onChange={(value) =>
                        setState((s) => ({ ...s, referral: value }))
                      }
                      required
                      showError={showValidationErrors}
                      otherValue={state.referralOther}
                      onOtherChange={(value) =>
                        setState((s) => ({ ...s, referralOther: value }))
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex flex-col items-center">
                      <FieldLabel>Any suggestions or features you&apos;d like to see in MAVSCAN?</FieldLabel>
                    </div>
                    <TextArea
                      rows={3}
                      value={state.wishlist}
                      onChange={(e) =>
                        setState((s) => ({ ...s, wishlist: e.target.value }))
                      }
                      placeholder="Product recalls, brand transparency reports, verified seller directory..."
                    />
                  </div>
                </div>
              )}

              {/* Error message */}
              {submitError && (
                <div className="mt-4 rounded-lg border border-red-400/30 bg-red-400/10 p-3 text-center text-sm text-red-300">
                  {submitError}
                </div>
              )}

              {/* nav */}
              <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  onClick={onBack}
                  disabled={step === 1 || isSubmitting}
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white/80 backdrop-blur transition enabled:hover:border-lime-300/40 enabled:hover:text-lime-200 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Back
                </button>

                {step < 7 ? (
                  <button
                    type="button"
                    onClick={onContinue}
                    disabled={nextDisabled}
                    className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-lime-400 via-emerald-400 to-cyan-300 px-6 py-3 font-semibold text-[#0f172b] shadow-[0_15px_60px_rgba(163,255,0,0.25)] transition enabled:hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={nextDisabled || isSubmitting}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-lime-400 via-emerald-400 to-cyan-300 px-6 py-3 font-semibold text-[#0f172b] shadow-[0_15px_60px_rgba(163,255,0,0.25)] transition enabled:hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Joining...
                      </>
                    ) : (
                      "Join the Waitlist"
                    )}
                  </button>
                )}
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}


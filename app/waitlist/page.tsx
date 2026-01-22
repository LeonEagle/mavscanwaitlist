"use client";

import { useMemo, useState } from "react";
import type { WaitlistFormState, WaitlistStep } from "@/app/lib/types";
import { defaultState } from "@/app/lib/constants";
import { isStepValid } from "@/app/lib/validation";
import WaitlistHeader from "@/app/components/waitlist/WaitlistHeader";
import ProgressBar from "@/app/components/waitlist/ProgressBar";
import FormStepPills from "@/app/components/waitlist/FormStepPills";
import FormNavigation from "@/app/components/waitlist/FormNavigation";
import SuccessScreen from "@/app/components/waitlist/SuccessScreen";
import Step1 from "@/app/components/waitlist/steps/Step1";
import Step2 from "@/app/components/waitlist/steps/Step2";
import Step3 from "@/app/components/waitlist/steps/Step3";
import Step4 from "@/app/components/waitlist/steps/Step4";
import Step5 from "@/app/components/waitlist/steps/Step5";
import Step6 from "@/app/components/waitlist/steps/Step6";
import Step7 from "@/app/components/waitlist/steps/Step7";

export default function WaitlistPage() {
  const [step, setStep] = useState<WaitlistStep>(1);
  const [state, setState] = useState<WaitlistFormState>(defaultState);
  const [submitted, setSubmitted] = useState(false);
  const [showValidationErrors, setShowValidationErrors] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [waitlistPosition, setWaitlistPosition] = useState<number | null>(null);

  const totalSteps = 7;
  const progressPct = useMemo(
    () => Math.round((step / totalSteps) * 100),
    [step],
  );

  const nextDisabled = !isStepValid(step, state);

  function onContinue() {
    if (!isStepValid(step, state)) {
      setShowValidationErrors(true);
      return;
    }

    setShowValidationErrors(false);
    if (step < 7) setStep((s) => (s + 1) as WaitlistStep);
  }

  function onBack() {
    if (step > 1) {
      setShowValidationErrors(false);
      setStep((s) => (s - 1) as WaitlistStep);
    }
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!isStepValid(7, state)) {
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
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0f172b] via-[#11253f] to-[#0f172b]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(circle_at_50%_-20%,rgba(163,255,0,0.12),transparent_50%)]" />

      <div className="mx-auto flex max-w-3xl flex-col gap-8 px-4 pb-16 pt-10 md:px-8">
        <WaitlistHeader step={step} totalSteps={totalSteps} />

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

        <ProgressBar progress={progressPct} />

        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur"
        >
          <FormStepPills
            currentStep={step}
            totalSteps={totalSteps}
            onStepClick={setStep}
          />

          {submitted ? (
            <SuccessScreen
              email={state.email}
              waitlistPosition={waitlistPosition}
            />
          ) : (
            <>
              {step === 1 && (
                <Step1
                  state={state}
                  setState={setState}
                  showValidationErrors={showValidationErrors}
                />
              )}
              {step === 2 && (
                <Step2
                  state={state}
                  setState={setState}
                  showValidationErrors={showValidationErrors}
                />
              )}
              {step === 3 && (
                <Step3
                  state={state}
                  setState={setState}
                  showValidationErrors={showValidationErrors}
                />
              )}
              {step === 4 && (
                <Step4
                  state={state}
                  setState={setState}
                  showValidationErrors={showValidationErrors}
                />
              )}
              {step === 5 && (
                <Step5
                  state={state}
                  setState={setState}
                  showValidationErrors={showValidationErrors}
                />
              )}
              {step === 6 && (
                <Step6
                  state={state}
                  setState={setState}
                  showValidationErrors={showValidationErrors}
                />
              )}
              {step === 7 && (
                <Step7
                  state={state}
                  setState={setState}
                  showValidationErrors={showValidationErrors}
                />
              )}

              {submitError && (
                <div className="mt-4 rounded-lg border border-red-400/30 bg-red-400/10 p-3 text-center text-sm text-red-300">
                  {submitError}
                </div>
              )}

              <FormNavigation
                step={step}
                onBack={onBack}
                onContinue={onContinue}
                onSubmit={onSubmit}
                isSubmitting={isSubmitting}
                nextDisabled={nextDisabled}
              />
            </>
          )}
        </form>
      </div>
    </div>
  );
}

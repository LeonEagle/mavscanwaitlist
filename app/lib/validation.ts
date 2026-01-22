import type { WaitlistFormState, WaitlistStep } from "./types";

export function isStepValid(step: WaitlistStep, state: WaitlistFormState): boolean {
  switch (step) {
    case 1:
      return !!(state.fullName && state.email && state.country);
    case 2:
      return !!(
        state.interests.length > 0 &&
        state.purchaseFrequency &&
        state.concern.length > 0 &&
        state.counterfeit
      );
    case 3:
      return !!(
        state.challenges &&
        state.research &&
        (state.research !== "Other" || state.researchOther) &&
        state.desiredFeatures.length > 0 &&
        (!state.desiredFeatures.includes("Other") || state.desiredFeaturesOther)
      );
    case 4:
      return !!(
        state.scansPerMonth &&
        state.creditPackage &&
        state.paymentPreference &&
        state.verificationImportance
      );
    case 5:
      return !!(
        state.fairPrice &&
        (state.fairPrice !== "Other" || state.fairPriceOther) &&
        state.willingnessToPay
      );
    case 6:
      return !!(
        state.category && (state.category !== "Other" || state.categoryOther)
      );
    case 7:
      return !!(
        state.referralInterest &&
        state.beta &&
        state.referral &&
        (state.referral !== "Other" || state.referralOther)
      );
    default:
      return false;
  }
}

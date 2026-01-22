export type WaitlistFormState = {
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

export type WaitlistStep = 1 | 2 | 3 | 4 | 5 | 6 | 7;

import type { WaitlistFormState } from "./types";

export const selectOptions = {
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

export const defaultState: WaitlistFormState = {
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

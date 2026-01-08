export const BUSINESS_TYPES = [
  "Retail",
  "Service",
  "Manufacturing",
  "Technology",
] as const;

export type BusinessType = (typeof BUSINESS_TYPES)[number];

export interface Business {
  businessName: string;
  businessType: BusinessType;
  registrationNumber: string;

  country: string;
  city: string;
  addressLine1: string;
  addressLine2?: string;

  ownerName: string;
  email: string;
  phone: string;
}

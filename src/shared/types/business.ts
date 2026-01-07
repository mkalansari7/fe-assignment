export type BusinessType =
  | "Retail"
  | "Service"
  | "Manufacturing"
  | "Technology";

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

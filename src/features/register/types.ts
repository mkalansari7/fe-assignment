export type RegisterStep = 0 | 1 | 2;

export const BUSINESS_TYPES = [
  "Retail",
  "Service",
  "Manufacturing",
  "Technology",
] as const;

export type BusinessType = (typeof BUSINESS_TYPES)[number];

export type RegisterFormDraft = {
  businessName: string;
  businessType: "" | BusinessType;
  registrationNumber: string;
  country: string;
  city: string;
  addressLine1: string;
  addressLine2: string;
  ownerName: string;
  email: string;
  phone: string;
  confirmPhone: string;
};

export type StepProps = {
  data: RegisterFormDraft;
  setData: React.Dispatch<React.SetStateAction<RegisterFormDraft>>;
  next?: () => void;
  back?: () => void;
};

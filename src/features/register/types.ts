import type { BusinessType } from "../../shared/types/business";

export type RegisterStep = 0 | 1 | 2;

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

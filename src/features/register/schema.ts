import { z } from "zod";
import { BUSINESS_TYPES } from "../../shared/types/business";

export const registerBaseSchema = z.object({
  businessName: z
    .string()
    .min(3, "Business name must be at least 3 characters")
    .max(30, "Business name must be at most 30 characters")
    .regex(/^[a-zA-Z0-9 ]+$/, "Only letters, numbers, and spaces allowed"),

  businessType: z.enum(BUSINESS_TYPES, {
    message: "Business type is required",
  }),

  registrationNumber: z.string().regex(/^\d{12}$/, {
    message: "Registration number must be 12 digits",
  }),

  country: z.string().min(1, "Country is required"),

  city: z
    .string()
    .min(3, "City must be at least 3 characters")
    .max(20, "City must be at most 20 characters")
    .regex(/^[a-zA-Z ]+$/, "City can contain letters only"),

  addressLine1: z
    .string()
    .min(3, "Address must be at least 3 characters")
    .max(20, "Address must be at most 20 characters"),

  addressLine2: z
    .string()
    .min(3, "Address must be at least 3 characters")
    .max(20, "Address must be at most 20 characters")
    .regex(/^[a-zA-Z0-9 ]+$/, "Invalid address format")
    .optional()
    .or(z.literal("")),

  ownerName: z
    .string()
    .min(3, "Owner name must be at least 3 characters")
    .max(30, "Owner name must be at most 30 characters"),

  email: z.string().email("Invalid email address"),

  phone: z.string().regex(/^\d{8,11}$/, {
    message: "Phone number must be 8–11 digits",
  }),

  confirmPhone: z.string(),
});

export const businessInfoStepSchema = registerBaseSchema.pick({
  businessName: true,
  businessType: true,
  registrationNumber: true,
});

export const locationStepSchema = registerBaseSchema.pick({
  country: true,
  city: true,
  addressLine1: true,
  addressLine2: true,
});

export const ownerContactStepSchema = registerBaseSchema
  .pick({
    ownerName: true,
    email: true,
    phone: true,
    confirmPhone: true,
  })
  .refine((data) => data.phone === data.confirmPhone, {
    path: ["confirmPhone"],
    message: "Phone numbers do not match",
  });

export const registerSchema = registerBaseSchema.refine(
  (data) => data.phone === data.confirmPhone,
  {
    path: ["confirmPhone"],
    message: "Phone numbers do not match",
  }
);

export type RegisterFormData = z.infer<typeof registerSchema>;
export type BusinessInfoStepData = z.infer<typeof businessInfoStepSchema>;
export type LocationStepData = z.infer<typeof locationStepSchema>;
export type OwnerContactStepData = z.infer<typeof ownerContactStepSchema>;

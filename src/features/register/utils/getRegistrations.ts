import { readArrayFromStorage } from "../../../shared/utils/localStorage";
import type { RegisterFormData } from "../schema";
import { REGISTRATIONS_STORAGE_KEY } from "./storage";

export function getRegistrations(): RegisterFormData[] {
  return readArrayFromStorage<RegisterFormData>(REGISTRATIONS_STORAGE_KEY);
}

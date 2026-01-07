import {
  readArrayFromStorage,
  writeArrayToStorage,
} from "../../../shared/utils/localStorage";
import type { RegisterFormData } from "../schema";
import { REGISTRATIONS_STORAGE_KEY } from "./storage";

export function saveRegistration(data: RegisterFormData) {
  const existing = readArrayFromStorage<RegisterFormData>(
    REGISTRATIONS_STORAGE_KEY
  );

  const updated = [...existing, data];

  writeArrayToStorage(REGISTRATIONS_STORAGE_KEY, updated);
}

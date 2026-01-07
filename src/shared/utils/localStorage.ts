export function readArrayFromStorage<T>(key: string): T[] {
  const raw = localStorage.getItem(key);

  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function writeArrayToStorage<T>(key: string, value: T[]) {
  localStorage.setItem(key, JSON.stringify(value));
}

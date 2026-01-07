import { useEffect, useState } from "react";

type RestCountry = {
  name: {
    common: string;
  };
};

export function useCountries() {
  const [countries, setCountries] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchCountries() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          "https://restcountries.com/v3.1/region/africa?fields=name",
          { signal: controller.signal }
        );

        const res2 = await fetch(
          "https://restcountries.com/v3.1/region/americas?fields=name",
          { signal: controller.signal }
        );

        if (!res.ok || !res2.ok) {
          throw new Error("Failed to fetch countries");
        }

        const africa: RestCountry[] = await res.json();
        const americas: RestCountry[] = await res2.json();

        const all = [...africa, ...americas]
          .map((c) => c.name.common)
          .sort((a: string, b: string) => a.localeCompare(b));

        setCountries(all);
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setError("Failed to load countries. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchCountries();

    return () => controller.abort();
  }, []);

  return { countries, loading, error };
}

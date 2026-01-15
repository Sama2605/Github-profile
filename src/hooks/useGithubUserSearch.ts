import { useEffect, useState } from "react";
import { fetchGithubUser } from "../services/apiService";
import type { GithubUser } from "../types/types";

export function useGithubUserSearch(query: string) {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query.trim()) {
      setUser(null);
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        setIsLoading(true);
        const data = await fetchGithubUser(query.trim());
        setUser(data);
      } catch (err) {
        setUser(null);
        setError(err instanceof Error ? err.message : "Failed to fetch");
      } finally {
        setIsLoading(false);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [query]);

  return { user, isLoading, error };
}

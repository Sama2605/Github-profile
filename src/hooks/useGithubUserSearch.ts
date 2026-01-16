import { useEffect, useState } from "react";
import { searchGithubUsers } from "../services/apiService";
import type { GithubUser } from "../types/types";

export function useGithubUserSearch(query: string) {
  const [users, setUsers] = useState<GithubUser[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query.trim()) {
      setUsers([]);
      setError(null);
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        setIsLoading(true);
        const data = await searchGithubUsers(query.trim(), 5);
        setUsers(data);
      } catch (err) {
        setUsers([]);
        setError(err instanceof Error ? err.message : "Failed to fetch");
      } finally {
        setIsLoading(false);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [query]);

  return { users, isLoading, error };
}

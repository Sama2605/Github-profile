import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { fetchGitHubUser } from "../services/apiService";

interface GitHubContextType {
  userData: unknown | null;
  loading: boolean;
  error: string | null;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const GitHubContext = createContext<GitHubContextType | undefined>(undefined);

export function AppProviders({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState<unknown | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    async function fetchUser(username: string) {
      try {
        const data = await fetchGitHubUser(username);
        if (data) {
          setUserData(data);
        }
      } catch (error) {
        console.error(error);
        setError(error instanceof Error ? error.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    fetchUser(searchValue);
  }, [searchValue]);
  return (
    <GitHubContext.Provider
      value={{ userData, loading, error, searchValue, setSearchValue }}
    >
      {children}
    </GitHubContext.Provider>
  );
}

export function useGitHub() {
  const context = useContext(GitHubContext);
  if (!context) throw new Error("useGitHub must be used within GitHubProvider");
  return context;
}

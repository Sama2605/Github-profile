import type { GithubRepo, GithubUser } from "../types/types";

console.log("Starting fetch request...");

const BASE_URL = "https://api.github.com";

export async function searchGithubUsers(
  query: string,
  perPage = 5
): Promise<GithubUser[]> {
  const res = await fetch(
    `${BASE_URL}/search/users?q=${encodeURIComponent(
      query
    )}&per_page=${perPage}`
  );

  if (!res.ok) {
    throw new Error("Failed to search users");
  }

  const data = await res.json();
  return data.items;
}

export async function fetchGithubUser(username: string): Promise<GithubUser> {
  const res = await fetch(`${BASE_URL}/users/${username}`);

  if (!res.ok) {
    throw new Error(res.status === 404 ? "User not found" : `${res.status}`);
  }
  return res.json();
}

export async function fetchGithubRepo(user: string): Promise<GithubRepo> {
  const res = await fetch(
    `${BASE_URL}/users/${user}/repos?sort=updated&per_page=100`
  );
  if (!res.ok) {
    throw new Error(
      res.status === 404 ? "Repositorium not found" : `${res.status}`
    );
  }
  return res.json();
}

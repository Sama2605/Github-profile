export interface GithubUser {
  login: string;
  name: string;
  bio: string;
  followers: number;
  following: number;
  location: string;
  avatar_url: string;
}

export interface GithubRepo {
  html_url: string;
  name: string;
  description: string | null;
  license: { name: string } | null;
  forks_count: number;
  stargazers_count: number;
  updated_at: string;
}

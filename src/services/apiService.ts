console.log("Starting fetch request...");

const BASE_URL = "https://api.github.com";

export async function fetchGitHubUser(username: string): Promise<unknown> {
  try {
    const response = await fetch(`${BASE_URL}/users/${username}`);
    console.log(username);
    if (!response.ok) {
      throw new Error("Couldn't connect to the endpoint");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

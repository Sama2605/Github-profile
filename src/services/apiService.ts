console.log("Starting fetch request...");

export async function fetchGitHubUser(username: string): Promise<unknown> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
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

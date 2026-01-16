import { useEffect, useState } from "react";
import { fetchGithubUser } from "../../services/apiService";
import type { GithubUser } from "../../types/types";

type Props = {
  username: string;
};

const Profile = ({ username }: Props) => {
  const [user, setUser] = useState<GithubUser | null>(null);

  useEffect(() => {
    async function loadUser() {
      const data = await fetchGithubUser(username);
      setUser(data);
    }

    loadUser();
  }, [username]);

  if (!user) return <p>Loading profile...</p>;

  return (
    <>
      {" "}
      <h1>{user.login}</h1>
      <div>{user.location}</div>
    </>
  );
};

export default Profile;

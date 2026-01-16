import { useState } from "react";
import Search from "./components/Search";
import Profile from "./components/Profile";
// import Repositories from "./components/Repositories";
import "./index.css";

function App() {
  const [githubUsername, setGithubUsername] = useState("octocat");
  console.log(githubUsername);
  return (
    <>
      <Search onUserSelect={setGithubUsername} />
      <main>
        <Profile username={githubUsername} />

        {/* <Repositories /> */}
      </main>
    </>
  );
}

export default App;

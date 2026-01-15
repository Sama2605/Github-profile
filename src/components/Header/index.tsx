import "./style.css";
import searchIcon from "../../assets/Search.svg";
import { useState } from "react";
import { useGithubUserSearch } from "../../hooks/useGithubUserSearch";

const Header = () => {
  const [query, setQuery] = useState("");
  const { user, isLoading, error } = useGithubUserSearch(query);
  console.log(user);
  return (
    <header className="header">
      <div className="header__field">
        <img src={searchIcon} alt="search icon" className="header__icon" />
        <input
          type="text"
          placeholder="username"
          className="header__input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search GitHub username"
        />
      </div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {user && <p>{user.login}</p>}
      {user && <p>{user.location}</p>}
    </header>
  );
};
export default Header;

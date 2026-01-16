import "./style.css";
import searchIcon from "../../assets/Search.svg";
import { useState } from "react";
import { useGithubUserSearch } from "../../hooks/useGithubUserSearch";

type HeaderProps = {
  onUserSelect: (username: string) => void;
};
const Header = ({ onUserSelect }: HeaderProps) => {
  const [query, setQuery] = useState("");
  const { users, isLoading, error } = useGithubUserSearch(query);
  console.log(users);
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
      {users.length > 0 && (
        <div className="">
          {users.map((user) => (
            <div
              key={user.login}
              onClick={() => {
                onUserSelect(user.login);
                setQuery("");
              }}
            >
              {user.login}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};
export default Header;

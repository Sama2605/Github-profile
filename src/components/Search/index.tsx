import "./style.css";
import searchIcon from "../../assets/Search.svg";
import { useState } from "react";
import { useGithubUserSearch } from "../../hooks/useGithubUserSearch";

type SearchProps = {
  onUserSelect: (username: string) => void;
};
const Search = ({ onUserSelect }: SearchProps) => {
  const [query, setQuery] = useState("");
  const { users, isLoading, error } = useGithubUserSearch(query);
  console.log(users);
  return (
    <header className="search">
      <div className="search__field">
        <img src={searchIcon} alt="search icon" className="search__icon" />
        <input
          type="text"
          placeholder="username"
          className="search__input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search GitHub username"
        />
      </div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {users.length > 0 && (
        <div className="search__results">
          {users.map((user) => (
            <div
              className="search__resuts-item"
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
export default Search;

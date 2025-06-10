// import { useState } from "react";
import { useGitHub } from "./AppContext";

const ProfileSearchBar = () => {
  // const [searchValue, setSearchValue] = useState("");
  const { setSearchValue, searchValue, userData } = useGitHub();

  const serachHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(searchValue, userData);
  };
  return (
    <div className="relative">
      <form onSubmit={handleSubmit}>
        <input
          id="search-input"
          className="bg-[#20293A] rounded-lg w-[350px] text-white p-[10px] bg-[url('./assets/Search.svg')] bg-no-repeat bg-[center_left_16px] pl-[50px]"
          placeholder="username"
          onChange={serachHandler}
        />
      </form>
    </div>
  );
};
export default ProfileSearchBar;

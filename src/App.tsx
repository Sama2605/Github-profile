import Header from "./components/Header";
import ProfileSearchBar from "./components/ProfileSearchBar";

function App() {
  return (
    <>
      <Header>
        <div className="w-full max-w-md px-4 ">
          <ProfileSearchBar />
        </div>
      </Header>
      {/* <Users/> */}
    </>
  );
}

export default App;

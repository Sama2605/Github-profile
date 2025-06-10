import { AppProviders } from "./components/AppContext";
import Header from "./components/Header";
import ProfileSearchBar from "./components/ProfileSearchBar";

function App() {
  return (
    <>
      <AppProviders>
        <Header>
          <div className="w-full max-w-md px-4 ">
            <ProfileSearchBar />
          </div>
        </Header>
        {/* <Users/> */}
      </AppProviders>
    </>
  );
}

export default App;

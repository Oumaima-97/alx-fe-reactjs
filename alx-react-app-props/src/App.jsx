import { UserProvider } from "./UserContext.jsx";
import ProfilePage from "./components/ProfilePage.jsx";

function App() {
  return (
    <UserProvider>
      <ProfilePage />
    </UserProvider>
  );
}

export default App;

import { UserProvider } from "./UserContext.jsx";
import UserProfile from './components/UserProfile.jsx';

function App() {
  return (
    <UserProvider>
      <UserProfile />
    </UserProvider>
  );
}

export default App;

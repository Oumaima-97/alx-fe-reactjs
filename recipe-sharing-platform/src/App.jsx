import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-5">
        <div className="text-center text-2xl text-blue-500 mb-6">
          Recipe Sharing Platform
        </div>

        <Routes>
          {/* HomePage Route */}
          <Route path="/" element={<HomePage />} />

          {/* RecipeDetail Route */}
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

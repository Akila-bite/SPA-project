
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux"; // Import Provider for Redux
import {store} from "./app/store"; // Import Redux store
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Recipes from "./Pages/Recipes";
import Home from "./Pages/Home";
import FavoriteRecipes from "./Pages/FavoriteRecipes";
import About from "./Pages/About";
import Queries from "./Pages/Queries";
import ProtectedRoute from "./Components/ProtectedRoute"; // Import ProtectedRoute
import { AuthProvider } from "./Context/AuthContext"; // Import AuthProvider
import RecipeDetails from "./Components/RecipeDetails"; // Your RecipeDetails component


export default function App() {
  return (
    <Provider store={store}> {/* Wrap entire app with Redux store */}
      <AuthProvider> {/* Wrap app with AuthProvider */}
        <Router>
          <AppContent />
        </Router>
      </AuthProvider>
    </Provider>
  );
};

function AppContent() {
 
  
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} /> {/* Full recipe page */}
          <Route 
            path="/favorites" 
            element={
              <ProtectedRoute>
                <FavoriteRecipes />
              </ProtectedRoute>
            } 
          />
          <Route path="/about" element={<About />} />
          <Route path="/queries" element={<Queries />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};






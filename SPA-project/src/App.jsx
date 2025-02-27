
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Recipes from "./Pages/Recipes";
import Home from "./Pages/Home";
import FavoriteRecipes from "./Pages/FavoriteRecipes";
import About from "./Pages/About";


export default function App() {
  return (
    <Router> {/* Wrap the entire app in BrowserRouter */}
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/favorites" element={<FavoriteRecipes />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}





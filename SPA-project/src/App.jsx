// import { BrowserRouter as Router, Routes } from "react-router-dom";
// import Form from "./Components/Form"
// import Navbar from "./Components/Navbar"
// import RecipeCard from "./Components/RecipeCard"
// import SearchBar from "./Components/SearchBar"
// import Footer from "./Components/Footer"
// import Recipes from "./Pages/Recipes"
// import Home from "./Pages/Home"
// import FavoriteRecipes from "./Pages/FavoriteRecipes"

// export default function App() {
//     return (
//        <Router>
//         <Navbar />
//         <Form />
//         <RecipeCard />
//         <SearchBar />
//         <Footer />
//         <Routes>
//         <Recipes />
//         <Home />
//         <FavoriteRecipes />
//         </Routes>
//         </Router>
//     )
// }

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Form from "./Components/Form";
import Header from "./Components/Header";
// import Navbar from "./Components/Navbar";
// import RecipeCard from "./Components/RecipeCard";
import Footer from "./Components/Footer";
import Recipes from "./Pages/Recipes";
import Home from "./Pages/Home";
import FavoriteRecipes from "./Pages/FavoriteRecipes";

export default function App() {
    return (


<div className="app">
<Header />
<main>
<Router>
    {/* <Form /> */}
    {/* <RecipeCard /> */}
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/favorites" element={<FavoriteRecipes />} />
    </Routes>
</Router>
</main>
<Footer />
</div>
);
}


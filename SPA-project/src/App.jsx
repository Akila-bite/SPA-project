
import Form from "./Components/Form"
import Navbar from "./Components/Navbar"
import RecipeCard from "./Components/RecipeCard"
import SearchBar from "./Components/SearchBar"
import Footer from "./Components/Footer"
import Recipes from "./Pages/Recipes"
import Home from "./Pages/Home"
import FavoriteRecipes from "./Pages/FavoriteRecipes"

export default function App() {
    return (
       <Router>
        <Navbar />
        <Form />
        <RecipeCard />
        <SearchBar />
        <Footer />
        <Routes>
        < Recipes />
        <Home />
        <FavoriteRecipes />
        </Routes>
        </Router>
    )
}

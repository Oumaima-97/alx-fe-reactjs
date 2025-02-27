import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  // Get filtered recipes from Zustand store
  const recipes = useRecipeStore(state => state.filteredRecipes);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);
  const favorites = useRecipeStore(state => state.favorites);

  // Function to toggle favorite status
  const handleFavoriteClick = (recipeId) => {
    if (favorites.includes(recipeId)) {
      removeFavorite(recipeId); // Remove from favorites if already favorited
    } else {
      addFavorite(recipeId); // Add to favorites if not favorited
    }
  };

  return (
    <div>
      {recipes.length === 0 ? (
        <p>No recipes found. Try searching with different terms!</p>
      ) : (
        recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
            <button onClick={() => handleFavoriteClick(recipe.id)}>
              {favorites.includes(recipe.id) ? 'Unfavorite' : 'Favorite'}
            </button>
            <Link to={`/edit/${recipe.id}`}>Edit</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;

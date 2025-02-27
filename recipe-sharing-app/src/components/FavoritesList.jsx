// src/components/FavoritesList.jsx
import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  // Fetch favorite recipe IDs and recipes from the store
  const favorites = useRecipeStore(state => state.favorites);
  const recipes = useRecipeStore(state => state.recipes);

  // Filter recipes that are in the favorites list
  const favoriteRecipes = recipes.filter(recipe => favorites.includes(recipe.id));

  return (
    <div>
      <h2>My Favorite Recipes</h2>
      {favoriteRecipes.length === 0 ? (
        <p>You have no favorite recipes yet!</p>
      ) : (
        favoriteRecipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;

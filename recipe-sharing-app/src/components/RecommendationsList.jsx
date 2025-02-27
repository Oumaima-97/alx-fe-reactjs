// src/components/RecommendationsList.jsx
import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  // Fetch user favorites and all recipes from the store
  const favorites = useRecipeStore(state => state.favorites);
  const recipes = useRecipeStore(state => state.recipes);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  // Generate recommendations based on user favorites
  const recommendedRecipes = useRecipeStore(state => state.recommendations);

  // If no favorites, generate random recommendations
  if (favorites.length === 0 && recipes.length > 0) {
    generateRecommendations();  // Generate random recommendations
  }

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendedRecipes.length === 0 ? (
        <p>No recommendations available at the moment.</p>
      ) : (
        recommendedRecipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;

// src/components/RecipeList.jsx
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  // Get filtered recipes from Zustand store
  const recipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div>
      {recipes.length === 0 ? (
        <p>No recipes found. Try searching with different terms!</p>
      ) : (
        recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>
              <Link to={`/details/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
            <Link to={`/edit/${recipe.id}`}>Edit</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;

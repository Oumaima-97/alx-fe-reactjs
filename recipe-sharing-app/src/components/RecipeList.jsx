// src/components/RecipeList.jsx
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add some!</p>
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

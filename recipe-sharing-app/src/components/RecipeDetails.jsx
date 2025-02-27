// src/components/RecipeDetails.jsx
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* You will render Edit and Delete buttons here */}
      <Link to={`/edit/${recipeId}`}>Edit Recipe</Link>
      <DeleteRecipeButton recipeId={recipeId} />
    </div>
  );
};

export default RecipeDetails;

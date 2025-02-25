import { useParams } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeDetails = () => {
  const { id } = useParams();  // Get the recipe id from the URL
  const recipe = useRecipeStore(state =>
    state.recipes.find((recipe) => recipe.id === parseInt(id))  // Find the recipe by id
  );

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* You can add edit and delete functionality here */}
    </div>
  );
};

export default RecipeDetails;

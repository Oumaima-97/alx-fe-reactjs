import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe id from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json") // Fetch the local JSON file
      .then((response) => response.json())
      .then((data) => {
        const recipeData = data.find((recipe) => recipe.id === parseInt(id)); // Find the recipe by id
        setRecipe(recipeData);
      })
      .catch((error) => console.error("Error loading recipe details:", error));
  }, [id]);

  if (!recipe) return <div>Loading...</div>; // Show loading until the recipe is fetched

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-center text-blue-500 mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h2 className="text-2xl font-medium text-gray-800 mb-2">Ingredients:</h2>
      <ul className="list-disc pl-6 mb-4">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="text-gray-700">{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-medium text-gray-800 mb-2">Cooking Instructions:</h2>
      <p className="text-gray-700">{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;

import { useState } from "react";

const AddRecipeForm = () => {
  // Define state variables for form inputs
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState(""); // For displaying error messages

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!title || !ingredients || !steps) {
      setError("All fields are required.");
      return;
    }

    // Clear error and proceed with submitting the form data
    setError("");
    
    // Form data can be processed or sent to an API here
    const newRecipe = {
      title,
      ingredients,
      steps,
    };

    console.log("New Recipe:", newRecipe);
    // You can add further logic to handle saving the recipe or sending it to an API
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Add a New Recipe</h2>

      {/* Display error message if any */}
      {error && <p className="text-red-500 text-center">{error}</p>}

      <form onSubmit={handleSubmit}>
        {/* Recipe Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-medium">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
            placeholder="Enter recipe title"
          />
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-gray-700 font-medium">
            Ingredients
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
            rows="4"
            placeholder="List ingredients, separated by commas"
          />
        </div>

        {/* Preparation Steps */}
        <div className="mb-4">
          <label htmlFor="steps" className="block text-gray-700 font-medium">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
            rows="6"
            placeholder="Write the steps to prepare the recipe"
          />
        </div>

        {/* Submit Button */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;

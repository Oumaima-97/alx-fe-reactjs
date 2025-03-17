import { useState } from "react";

const AddRecipeForm = () => {
  // States for form fields and errors
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({}); // Holds validation error messages

  // Validation function
  const validate = () => {
    const newErrors = {}; // Object to collect errors

    // Check if title is empty
    if (!title) newErrors.title = "Title is required.";
    // Check if ingredients are empty
    if (!ingredients) newErrors.ingredients = "Ingredients are required.";
    // Check if steps are empty
    if (!steps) newErrors.steps = "Preparation steps are required.";

    setErrors(newErrors); // Set error messages in state
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Validate form before submission
    if (!validate()) {
      return; // Stop submission if validation fails
    }

    // Clear any existing errors after successful validation
    setErrors({});

    // Process the form data
    const newRecipe = {
      title,
      ingredients,
      steps,
    };

    // You can perform the submission here, for example, save the recipe or send it to an API
    console.log("New Recipe:", newRecipe);
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Add a New Recipe</h2>

      {/* Form */}
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
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
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
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
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
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
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

// src/components/EditRecipeForm.jsx
import { useState } from 'react';
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const EditRecipeForm = ({ recipeId }) => {
  const recipe = useRecipeStore(state => state.recipes.find(r => r.id === recipeId));
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  const [title, setTitle] = useState(recipe?.title || '');
  const [description, setDescription] = useState(recipe?.description || '');
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe({ id: recipeId, title, description });
    navigate('/'); // Redirect to home page after saving changes
  };

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  return (
    <div>
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditRecipeForm;

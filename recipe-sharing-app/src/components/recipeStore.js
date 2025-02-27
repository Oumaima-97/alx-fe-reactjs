// src/recipeStore.js
import { create } from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [], // List of recipes
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),

  // New action to update a recipe
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
  })),

  // New action to delete a recipe
  deleteRecipe: (recipeId) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId),
  })),

  // Search and filtering functionality
  searchTerm: '', // Search term entered by the user
  setSearchTerm: (term) => set({ searchTerm: term }),

  filteredRecipes: [], // Recipes after applying the search filter
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.ingredients.some(ingredient =>
        ingredient.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    ),
  })),
}));

export { useRecipeStore };

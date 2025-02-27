// src/recipeStore.js
import { create } from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [], // List of recipes
  favorites: [], // List of favorite recipe IDs
  recommendations: [], // Recommended recipes based on favorites

  // Add a recipe to the list
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  
  // Set the recipes list
  setRecipes: (recipes) => set({ recipes }),

  // Update a recipe in the list
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
  })),

  // Delete a recipe
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

  // Add a recipe to favorites
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),

  // Remove a recipe from favorites
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  // Generate recommendations based on favorites
  generateRecommendations: () => set(state => {
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),

}));

export { useRecipeStore };

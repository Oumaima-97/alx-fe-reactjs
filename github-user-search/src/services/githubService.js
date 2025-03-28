import axios from "axios";

// Base URL for GitHub API
const BASE_URL = "https://api.github.com/search/users?q";

// Fonction pour effectuer une recherche avancée d'utilisateurs avec des filtres supplémentaires
export const fetchAdvancedUserSearch = async (query, location, minRepos) => {
  try {
    // Construction de la chaîne de requête avec les filtres
    let searchQuery = `q=${query}`;

    // Ajout des filtres supplémentaires
    if (location) {
      searchQuery += `+location:${location}`;  // Filtrer par localisation
    }
    if (minRepos) {
      searchQuery += `+repos:>=${minRepos}`;  // Filtrer par nombre minimum de dépôts
    }

    // Appel API avec l'URL complète de recherche d'utilisateurs
    const response = await axios.get(`${BASE_URL}/search/users?${searchQuery}`);

    // Vérification des résultats et renvoi de la liste des utilisateurs
    if (response.data && response.data.items) {
      return response.data.items; // Retourne les utilisateurs trouvés
    } else {
      throw new Error("No users found");
    }
  } catch (error) {
    throw new Error("Error fetching search results: " + error.message);
  }
};

// Fonction pour récupérer les données d'un utilisateur par son nom d'utilisateur
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data; // Retourne les données de l'utilisateur
  } catch (error) {
    throw new Error("User not found");
  }
};
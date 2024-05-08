import React, { useState, useEffect } from 'react';

const RecipeSelector = () => {
  const [selectedRecipes, setSelectedRecipes] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [selectedDiet, setSelectedDiet] = useState('');
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/recipes');
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleRecipeSelect = (recipeId) => {
    const index = selectedRecipes.indexOf(recipeId);
    if (index === -1) {
      setSelectedRecipes([...selectedRecipes, recipeId]);
    } else {
      const updatedRecipes = [...selectedRecipes];
      updatedRecipes.splice(index, 1);
      setSelectedRecipes(updatedRecipes);
    }
  };

  const handleCuisineChange = (e) => {
    setSelectedCuisine(e.target.value);
  };

  const handleDietChange = (e) => {
    setSelectedDiet(e.target.value);
  };

  const handleContinue = () => {
    window.location.href = '/delivery-info';
  };

  // Filtravimo funkcija
  const filterRecipes = () => {
    // Čia pradedame su visais receptais
    let filteredRecipes = recipes;

    // Jei yra pasirinkta virtuvės tipas, filtruoti pagal jį
    if (selectedCuisine) {
      filteredRecipes = filteredRecipes.filter(recipe => recipe.cuisine === selectedCuisine);
    }

    // Jei yra pasirinkta dieta, filtruoti pagal ją
    if (selectedDiet) {
      filteredRecipes = filteredRecipes.filter(recipe => recipe.diet === selectedDiet);
    }

    return filteredRecipes;
  };

  const filteredRecipes = filterRecipes();

  return (
    <div>
      <h2>Recipe Selector</h2>
      <div>
        <div>
          <label>Cuisine:</label>
          <select value={selectedCuisine} onChange={handleCuisineChange}>
            <option value="">All</option>
            <option value="Italian">Italian</option>
            <option value="Mexican">Mexican</option>
            <option value="Asian">Asian</option>
            {/* Pridėkite daugiau virtuvės tipų pagal poreikį */}
          </select>
        </div>
        <div>
          <label>Diet:</label>
          <select value={selectedDiet} onChange={handleDietChange}>
            <option value="">All</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Vegan">Vegan</option>
            <option value="Pescatarian">Pescatarian</option>
            {/* Pridėkite daugiau dietų pagal poreikį */}
          </select>
        </div>
      </div>
      <div>
        {filteredRecipes.map(recipe => (
          <div key={recipe.id}>
            <label>
              <input 
                type="checkbox" 
                checked={selectedRecipes.includes(recipe.id)}
                onChange={() => handleRecipeSelect(recipe.id)}
              />
              {recipe.name}
            </label>
          </div>
        ))}
      </div>
      <button onClick={handleContinue}>Continue to Delivery Info</button>
    </div>
  );
};

export default RecipeSelector;




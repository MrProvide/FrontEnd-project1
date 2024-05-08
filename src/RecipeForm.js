import React, { useState } from 'react';
import axios from 'axios';

const RecipeForm = () => {
  const [recipeName, setRecipeName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/recipes/addRecipe', {
        name: recipeName,
        description: description
      });
      console.log(response.data);
      // Clear form fields after successful submission
      setRecipeName('');
      setDescription('');
    } catch (error) {
      console.error('Error creating recipe:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} placeholder="Recipe name" />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <button type="submit">Create Recipe</button>
    </form>
  );
};

export default RecipeForm;










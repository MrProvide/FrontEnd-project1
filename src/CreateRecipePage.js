import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreateRecipePage = () => {
  const [recipeName, setRecipeName] = useState('');
  const [recipeDescription, setRecipeDescription] = useState('');
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/products/getProducts');
      setProducts(response.data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  const addProductToSelection = (productId) => {
    const product = products.find((prod) => prod.id === productId);
    if (product) {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const saveRecipe = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/recipes/addRecipe', {
        name: recipeName,
        description: recipeDescription,
        productIds: selectedProducts.map((product) => product.id),
      });
      console.log('Recipe saved successfully:', response.data);
      setRecipeName('');
      setRecipeDescription('');
      setSelectedProducts([]);
    } catch (error) {
      console.error('Failed to save recipe:', error);
    }
  };

  return (
    <div>
      <h1>Create Recipe</h1>
      <label>Name:</label>
      <input
        type="text"
        value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)}
      />
      <label>Description:</label>
      <textarea
        value={recipeDescription}
        onChange={(e) => setRecipeDescription(e.target.value)}
      />
      <h2>Select Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.description}{' '}
            <button onClick={() => addProductToSelection(product.id)}>
              Add
            </button>
          </li>
        ))}
      </ul>
      <h2>Selected Products</h2>
      <ul>
        {selectedProducts.map((product) => (
          <li key={product.id}>
            {product.name} - {product.description}
          </li>
        ))}
      </ul>
      <button onClick={saveRecipe}>Save Recipe</button>
    </div>
  );
};

export default CreateRecipePage;



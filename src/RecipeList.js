import React, { useState } from 'react';
import AddProductForm from './AddProductToRecipe';

const RecipeForm = () => {
    const [recipeData, setRecipeData] = useState({ name: '', description: '', products: [] });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipeData({ ...recipeData, [name]: value });
    };

    const handleAddProduct = (product) => {
        setRecipeData({ ...recipeData, products: [...recipeData.products, product] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/recipes/addRecipe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(recipeData)
            });
            if (!response.ok) {
                throw new Error('Failed to add recipe');
            }
            console.log('Recipe added successfully');
            // Optionally, navigate to another page or display a success message
        } catch (error) {
            console.error('Error adding recipe:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={recipeData.name} onChange={handleChange} placeholder="Recipe name" />
                <input type="text" name="description" value={recipeData.description} onChange={handleChange} placeholder="Recipe description" />
                {/* AddProductForm component to add products */}
                <AddProductForm onAddProduct={handleAddProduct} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default RecipeForm;




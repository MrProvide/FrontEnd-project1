import React, { useState } from 'react';

const UpdateRecipe = ({ recipeId, onClose }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`http://localhost:8080/api/recipes/updateRecipe/${recipeId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, description })
            });
            if (!response.ok) {
                throw new Error('Failed to update recipe');
            }
            onClose(); // Uždaryti redagavimo formą po sėkmingo atnaujinimo
        } catch (error) {
            console.error('Error updating recipe:', error);
        }
    };

    return (
        <div>
            <h2>Update Recipe</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    ></textarea>
                </div>
                <button type="submit">Update</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default UpdateRecipe;


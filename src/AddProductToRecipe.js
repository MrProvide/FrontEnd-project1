// AddProductToRecipe.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddProductToRecipe = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');

  useEffect(() => {
    // Fetch products from backend when component mounts
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleAddProduct = async () => {
    // Send selected product ID to backend to add to recipe
    try {
      const response = await axios.post('http://localhost:8080/addProductToRecipe', {
        productId: selectedProduct
      });
      console.log(response.data);
      // Reset selected product
      setSelectedProduct('');
    } catch (error) {
      console.error('Error adding product to recipe:', error);
    }
  };

  return (
    <div>
      <select value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)}>
        <option value="">Select a product</option>
        {products.map(product => (
          <option key={product.id} value={product.id}>{product.name}</option>
        ))}
      </select>
      <button onClick={handleAddProduct}>Add Product to Recipe</button>
    </div>
  );
};

export default AddProductToRecipe;





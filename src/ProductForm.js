import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/addProduct', {
        name: productName,
        description: productDescription
      });
      console.log(response.data);
      // Clear form fields after successful submission
      setProductName('');
      setProductDescription('');
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Product name" />
      <input type="text" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} placeholder="Description" />
      <button type="submit">Create Product</button>
    </form>
  );
};

export default ProductForm;


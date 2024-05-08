import React from 'react';

const SelectedProducts = ({ selectedProducts, onRemoveProduct }) => {
    return (
        <div>
            <h2>Selected Products</h2>
            <ul>
                {selectedProducts.map(product => (
                    <li key={product.id} onClick={() => onRemoveProduct(product)}>
                        {product.name} <button>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SelectedProducts;

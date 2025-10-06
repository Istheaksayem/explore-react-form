import React, { useState } from 'react';
import ProductFrom from './ProductFrom';
import ProductTable from './ProductTable';

const ProductManagement = () => {

    const [products, setProducts] = useState([])
// boshi nai
    const handleAddProduct = newProduct =>{
        const newProducts = [...products,newProduct];
        setProducts(newProducts)
    }

    return (
        <div>
            <ProductFrom handleAddProduct={handleAddProduct}></ProductFrom>
            <ProductTable products={products}></ProductTable>
        </div>
    );
};

export default ProductManagement;
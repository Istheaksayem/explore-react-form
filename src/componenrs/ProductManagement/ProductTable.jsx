import React from 'react';

const ProductTable = ({ products }) => {
    return (
        <div>
            <h3>Products:{products.length}</h3>

            <table>

            </table>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>product</th>
                    <th>price</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product, index) =>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td></td>
                        </tr>)
                }
            </tbody>
        </div>
    );
};

export default ProductTable;
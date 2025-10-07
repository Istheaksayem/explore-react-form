import React from 'react';
import GrandPa from './GrandPa';
import './FamilyTree.css'
const FamillyTree = () => {
    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            <GrandPa></GrandPa>
        </div>
    );
};

export default FamillyTree;
import React, { useContext } from 'react';
import { AssetContext } from './FamillyTree';

const Special = ({name,assets}) => {
    const newAssets = useContext(AssetContext);
    console.log('new assets:',newAssets)
    return (
        <div>
            <h2>Special:{name}</h2>
            <p>Assets:{assets}</p>
            <p>New Assets:{newAssets}</p>
        </div>
    );
};

export default Special;
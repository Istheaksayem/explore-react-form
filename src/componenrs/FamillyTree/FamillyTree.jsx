import React, { createContext, useState } from 'react';
import GrandPa from './GrandPa';
import './FamilyTree.css'

export const AssetContext = createContext('')
export const MoneyContext = createContext(0)


const FamillyTree = () => {

    const [money, setMoney] = useState(0)

    const assets = 'diamond';
    const newAssets = 'gold'

    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            <h4>Total family money:{money}</h4>
            <MoneyContext value={[money,setMoney]}>
                <AssetContext.Provider value={newAssets}>
                    <GrandPa assets={assets}></GrandPa>
                </AssetContext.Provider>
            </MoneyContext>
        </div>
    );
};

export default FamillyTree;
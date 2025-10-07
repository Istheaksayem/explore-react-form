import React from 'react';
import Special from './Special';
import Friend from '../Friend';

const Cousin = ({name,assets}) => {
    return (
        <div>
            <h3>{name}</h3>
            {
                name === 'Abdullah' && <Special assets={assets}></Special>
            }
            {
                name ==='Joshim' && <Friend></Friend>
            }
        </div>
    );
};

export default Cousin;
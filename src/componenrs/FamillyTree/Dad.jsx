import React from 'react';
import Myself from './Myself';
import Brother from './Brother';
import Sister from './Sister';

const Dad = ({assets}) => {
    return (
        <div>
            <h2>Dad</h2>
            <section className='flex'>
                <Myself assets={assets}></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;
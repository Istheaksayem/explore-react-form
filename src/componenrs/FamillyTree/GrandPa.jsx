import React from 'react';
import Dad from './Dad';
import Uncle from './uncle';
import Aunt from './aunt';

const GrandPa = ({assets}) => {
    return (
        <div>
            <h2>Grand Pa</h2>
            <section className='flex'>
            <Dad assets={assets}></Dad>
                <Uncle></Uncle>
                <Aunt assets={assets}></Aunt>
            </section>
        </div>
    );
};

export default GrandPa;
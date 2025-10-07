import React from 'react';
import Dad from './Dad';
import Uncle from './uncle';
import Aunt from './aunt';

const GrandPa = () => {
    return (
        <div>
            <h2>Grand Pa</h2>
            <section className='flex'>
                <Dad></Dad>
                <Uncle></Uncle>
                <Aunt></Aunt>
            </section>
        </div>
    );
};

export default GrandPa;
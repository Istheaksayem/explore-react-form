import React, { use } from 'react';
import { MoneyContext } from './FamillyTree/FamillyTree';

const Friend = () => {

    const [money,]=use(MoneyContext)
    return (
        <div>
            <h3>Friend</h3>
            <p>family got: {money}</p>
        </div>
    );
};

export default Friend;
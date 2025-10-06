import React, { useState } from 'react';

const ControlledField = () => {

    const [password, setPassword] = useState('');
    const [error, setError] = useState();
    const handlePasswordOnChange = e => {
        console.log(e.target.value);
        setPassword(e.target.value);

        if(password.length < 6 ){
           setError('password must be 6 character or longer')
        }
        else{
            setError('')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted')

        if (password.length < 6){
            setError('password must be 6 character or longer')
        }
        else{
            setError('')
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder='Your Email' required />
                <br />
                <input type="password" name="password" onChange={handlePasswordOnChange} defaultValue={password} placeholder='Password' />
                <br />
                <input type="submit" value="Submit" />

            </form>
            <p style={{ color: 'red' }}>
                <small>{error}</small>
            </p>

        </div>
    );
};

export default ControlledField;
import React from 'react';
import useInputField from '../../hooks/useInputField';

const HookForm = () => {
    const [name, nameOnChange] = useInputField('')
    const [email,emailOnchange] =useInputField('')
    const [password,passwordOnchange] =useInputField('')
    const handleSubmit = e => {
        e.preventDefault();
        console.log('submit', name,email,password)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input defaultValue={name} type="text" onChange={nameOnChange} placeholder='Your Name' />
                <br />
                <input defaultValue={email} type="email" onChange={emailOnchange} name="email" placeholder='Your Email'/>
                <br/>
                <input defaultValue={password} type="password" onChange={passwordOnchange} name="email"  placeholder='Your password'/>
                <br/>

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;
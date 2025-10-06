import React from 'react';
import { useRef } from 'react';

const UncoltrilledField = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const handleSubmit = e => {
        e.preventDefault();
        console.log(emailRef.current.value);
        // console.log(passwordRef.current.value)

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email,password)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name="email" placeholder='Your Email' />
                <br />
                <input ref={passwordRef} type="password" name="password" placeholder='Your Password' />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default UncoltrilledField;
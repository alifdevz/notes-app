import React from "react";
import useInput from "../hooks/useInput";
import PropTypes from 'prop-types';

function LoginInput({ login }) {
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');

    const onSubmitHandler = (event) => {
        event.preventDefault();
        login({email: email, password: password});
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={onEmailChange} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={onPasswordChange} />
            <button>Login</button>
        </form>
    )
}

LoginInput.propTypes = {
    login: PropTypes.func.isRequired
}

export default LoginInput;
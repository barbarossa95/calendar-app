import React, { useState } from 'react';
import PropTypes from 'prop-types';

const LoginForm = ({login}) => {
    const [username, setUsername] = useState(''),
    [password, setPassword] = useState(''),
    reset = () => {
        setUsername('');
        setPassword('');
    },
    onSubmit = () => {
        const username = '',
        password = '';

        login(username,password)
            .then(() => reset())
            .catch(error => console.error(error));

    },
    handleUsernameChange = ({target:{value}}) => setUsername(value),
    handlePasswordChange = ({target:{value}}) => setPassword(value);

    return (<form>
        <input type="text" name="username" placeholder="Username" value={username} onChange={handleUsernameChange}/>
        <input type="password" name="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
        <button type="button" onClick={onSubmit}>Login</button>
      </form>);
}

export default LoginForm;
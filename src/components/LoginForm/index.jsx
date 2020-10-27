import React, { useState } from 'react';
import Link from '../ReactLink';

const LoginForm = ({login, message,  go}) => {
    const [username, setUsername] = useState(''),
        [password, setPassword] = useState(''),

        onSubmit = () => {
            login(username,password)
                .then(() => {})
                .catch(error => console.error(error));

        },
        handleUsernameChange = ({target:{value}}) => setUsername(value),
        handlePasswordChange = ({target:{value}}) => setPassword(value);

    return (
        <form className="login-form">
            <h1>Login</h1>
        <div>
            <input type="text" name="username" placeholder="Username" value={username} onChange={handleUsernameChange}/>
        </div>
        <div>
            <input type="password" name="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
        </div>
        <div>
            <button type="button" onClick={onSubmit}>Login</button>
        </div>
        <div>
            <small className="message">{message || 'Plese, login'}</small>
        </div>
        <div>
            <Link href="/register" title="Register"  go={go}></Link>
        </div>
      </form>
    );
}

export default LoginForm;
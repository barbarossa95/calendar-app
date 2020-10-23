import React, { useState } from 'react';
import { connect } from 'react-redux';
import Link from '../ReactLink';

const RegisterForm = ({register, message, go}) => {
    const [username, setUsername] = useState(''),
      [password, setPassword] = useState(''),
      reset = () => {
          setUsername('');
          setPassword('');
      },
      onSubmit = () => {
          register(username,password)
              .then(() => reset())
              .catch(error => console.error(error));

      },
      handleUsernameChange = ({target:{value}}) => setUsername(value),
      handlePasswordChange = ({target:{value}}) => setPassword(value);

    return (
        <form className="login-form">
            <h1>Register</h1>
        <div>
            <input type="text" name="username" placeholder="Username" value={username} onChange={handleUsernameChange}/>
        </div>
        <div>
            <input type="password" name="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
        </div>
        <div>
            <button type="button" onClick={onSubmit}>Register</button>
        </div>
        <div>
            <small className="message">{message || 'Plese, fill form fields'}</small>
        </div>
        <div>
            <Link href="/login" title="Login" go={go} ></Link>
        </div>
      </form>
    );
}

export default RegisterForm;
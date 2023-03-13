import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import API from '../API';
import { Context } from '../context';
import Button from './Button';
import { Wrapper } from './Login.style';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const [_user, setUser] = useContext(Context);

  const navigate = useNavigate();

  const handleSubmint = async (e) => {
    setError(false);
    try {
      const requestToken = await API.getRequestToken();
      const sessionId = await API.authenticate(requestToken, username, password);

      setUser({ sessionId: sessionId.session_id, username });

      navigate('/');
    } catch (error) {
      setError(true);
    }
  };
  const handleInput = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
  };

  return (
    <Wrapper>
      {error && <div className="error">There was an error...</div>}
      <label>Username: </label>
      <input type="text" value="username" name="username" onChange={handleInput} />
      <label>password: </label>
      <input type="password" value="password" name="password" onChange={handleInput} />
      <Button text="Login" callback={handleSubmint} />
    </Wrapper>
  );
};

export default Login;

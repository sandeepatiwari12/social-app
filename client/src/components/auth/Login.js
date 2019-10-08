import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [fromData, setFromData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = fromData;

  const onChange = e => setFromData({ ...fromData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    if (!password) {
      console.log('password should be same')
    } else {
      const loginData = {
        email,
        password
      }
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        }
        const body = JSON.stringify(loginData);
        const res = await axios.post('/api/auth', body, config);
        console.log('response on user creation', res.data);
      } catch (err) {
        console.error(err.response.data);
      }
      console.log('fromData', fromData)
    }
  }
    return (
        <Fragment>
          <h1 className="large text-primary">Sign Up</h1>
          <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
          <form className="form" onSubmit={e => onSubmit(e)}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={e => onChange(e)}
                name="email" 
                required
                />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                name="password"
                minLength="6"
                value={password}
                onChange={e => onChange(e)}
                required
              />
            </div>
            <input type="submit" className="btn btn-primary" value="Login" />
          </form>
          <p className="my-1">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </Fragment>
    )
}

export default Login

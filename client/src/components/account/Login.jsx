import React, { useState, useEffect, useContext } from 'react';
import './login.css'; 
import logo from './logo-now.png'; 
import background from './lib-1.jpg'; 
import { TextField, Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Login = ({ isUserAuthenticated }) => {
    const [login, setLogin] = useState({ username: '', password: '' });
    const [signup, setSignup] = useState({ name: '', username: '', password: '' });
    const [loginErrors, setLoginErrors] = useState({});
    const [signupErrors, setSignupErrors] = useState({});
    const [account, toggleAccount] = useState('login');
    const [loginValidationError, setLoginValidationError] = useState('');
    const [signupValidationError, setSignupValidationError] = useState('');

    const navigate = useNavigate();
    const { setAccount } = useContext(DataContext);

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    };

    const validateUsername = (username) => {
        const errors = {};
        const usernameRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!username) {
            errors.username = "Username is required";
        } else if (!usernameRegex.test(username)) {
            errors.username = "Invalid Username";
        }
        return errors;
    };

    const validatePassword = (password) => {
        const errors = {};
        if (!password) {
            errors.password = "Password is required";
        } else if (password.length < 8) {
            errors.password = "Password must be a minimum of 8 characters";
        }
        return errors;
    };

    const validateName = (name) => {
        const errors = {};
        if (!name) {
            errors.name = "Name is required";
        }
        return errors;
    };

    const loginUser = async () => {
        const usernameErrors = validateUsername(login.username);
        const passwordErrors = validatePassword(login.password);

        setLoginErrors({ username: usernameErrors.username, password: passwordErrors.password });

        if (!usernameErrors.username && !passwordErrors.password) {
            try {
                let response = await API.userLogin(login);
                if (response.isSuccess) {
                    setLoginValidationError('');

                    sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
                    sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
                    setAccount({ name: response.data.name, username: response.data.username });

                    isUserAuthenticated(true);
                    setLogin({ username: '', password: '' });
                    navigate('/');
                } else {
                    setLoginValidationError('Invalid username or password');
                }
            } catch (err) {
                setLoginValidationError('Invalid username or password');
            }
        }
    };

    const signupUser = async () => {
        const nameErrors = validateName(signup.name);
        const usernameErrors = validateUsername(signup.username);
        const passwordErrors = validatePassword(signup.password);

        setSignupErrors({ name: nameErrors.name, username: usernameErrors.username, password: passwordErrors.password });

        if (!nameErrors.name && !usernameErrors.username && !passwordErrors.password) {
            try {
                let response = await API.userSignup(signup);
                if (response.isSuccess) {
                    setSignupValidationError('');
                    setSignup({ name: '', username: '', password: '' });
                    toggleAccount('login');
                } else {
                    setSignupValidationError('Username already exists');
                }
            } catch (err) {
                setSignupValidationError('Username already exists');
            }
        }
    };

    const handleBlur = (e, validationFunc, setErrorFunc, errorKey) => {
        const errors = validationFunc(e.target.value);
        setErrorFunc(prevErrors => ({
            ...prevErrors,
            [errorKey]: errors[errorKey] || '',
        }));
    };

    const toggleSignup = () => {
        toggleAccount(account === 'signup' ? 'login' : 'signup');
    };

    return (
        <div className='main-container'>
          <div className='image-container'>
          <img src={background} alt="background" className="background-img" />
          </div>
          <div className="login-body"> 
            <Box className="login-container">
                {
                    account === 'login' ?
                    <>
                    <img src={logo} alt="Logo" className="login-logo" />
                        <div className="login-title">Welcome Back!</div>
                        <Typography>Lets continue from where you left
                        </Typography>
                        <Typography className="login-validation-error">
                            {loginValidationError}
                        </Typography>
                        <Box className="form-box">
                            <TextField
                                variant="standard"
                                value={login.username}
                                onChange={onValueChange}
                                name="username"
                                label="Enter Email"
                                onBlur={(e) => handleBlur(e, validateUsername, setLoginErrors, 'username')}
                                className="input-field"
                            />
                            <Typography className="error-text">{loginErrors.username}</Typography>
                            <TextField
                                variant="standard"
                                type="password"
                                value={login.password}
                                onChange={onValueChange}
                                name="password"
                                label="Enter Password"
                                onBlur={(e) => handleBlur(e, validatePassword, setLoginErrors, 'password')}
                                className="input-field"
                            />
                            <Typography className="error-text">{loginErrors.password}</Typography>
                            <div className='login-and-signup-buttons'>
                            <Button
                                variant="contained"
                                onClick={loginUser}
                                className="login-button"
                            >
                                Login
                            </Button>
                            <button
                                onClick={toggleSignup}
                                className="signup-button"
                            >
                                Sign Up
                            </button>
                            </div>
                            <div className='line'></div>
                            <div className='other-login-option'>
                            <button className='google-signUp'>
                              Log In with Google
                            </button>
                            <button className='google-signUp'>
                              Log In with Facebook
                            </button>
                            </div>
                        </Box>
                    </>
                    :
                    <>
                    <img src={logo} alt="Logo" className="login-logo" />
                    <div className="login-title">Welcome to READZ!</div>
                        <Typography>Lets start a new journey with us
                        </Typography>
                        <Typography className="login-validation-error">
                            {signupValidationError}
                        </Typography>
                        <Box className="form-box">
                            <TextField
                                variant="standard"
                                value={signup.name}
                                onChange={onInputChange}
                                name="name"
                                label="Enter Name"
                                onBlur={(e) => handleBlur(e, validateName, setSignupErrors, 'name')}
                                className="input-field"
                            />
                            <Typography className="error-text">{signupErrors.name}</Typography>
                            <TextField
                                variant="standard"
                                value={signup.username}
                                onChange={onInputChange}
                                name="username"
                                label="Enter Email"
                                onBlur={(e) => handleBlur(e, validateUsername, setSignupErrors, 'username')}
                                className="input-field"
                            />
                            <Typography className="error-text">{signupErrors.username}</Typography>
                            <TextField
                                variant="standard"
                                type="password"
                                value={signup.password}
                                onChange={onInputChange}
                                name="password"
                                label="Enter Password"
                                onBlur={(e) => handleBlur(e, validatePassword, setSignupErrors, 'password')}
                                className="input-field"
                            />
                            <Typography className="error-text">{signupErrors.password}</Typography>
                            <div className='login-and-signup-buttons'>
                            <Button
                                variant="contained"
                                onClick={signupUser}
                                className="login-button"
                            >
                                SIGNUP
                            </Button>
                            <button
                                onClick={toggleSignup}
                                className="signup-button"
                            >
                                Log In
                            </button>
                            </div>
                            <div className='line'></div>
                            <div className='other-login-option'>
                            <button className='google-signUp'>
                              Sign Up with Google
                            </button>
                            <button className='google-signUp'>
                              Sign Up with Facebook
                            </button>
                            </div>
                        </Box>
                    </>
                }
            </Box>
        </div>
        </div>
    );
}

export default Login;
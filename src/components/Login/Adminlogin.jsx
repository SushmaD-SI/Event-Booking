import React, { useState, useEffect } from 'react';
import { Grid, Paper, Avatar, TextField, Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import {Link, Route, Routes} from 'react-router-dom';
const Adminlogin = () => {
  const paperStyle = { padding: 40, height: '60vh', width: 300, margin: '90px auto' };
  const avatarStyle = { backgroundColor: 'purple' };

  // State for username, password, and "Remember Me" checkbox
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    // Check if a remembered user exists in local storage
    const rememberedUser = localStorage.getItem('rememberedUser');
    if (rememberedUser) {
      // Pre-fill the username field
      setUsername(rememberedUser);
      // Check the "Remember Me" checkbox
      setRememberMe(true);
    }
  }, []);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Add your authentication logic here (replace this with your actual logic)
    if (username === 'admin' && password === 'password') {
      // Authentication successful
      alert('Login successful!');

      // Check if "Remember Me" is checked
      if (rememberMe) {
        // Set a cookie or store a token in local storage to remember the user's session
        // Example using localStorage:
        localStorage.setItem('rememberedUser', username);
      } else {
        // If "Remember Me" is not checked, remove the remembered user data
        localStorage.removeItem('rememberedUser');
      }

      // Redirect the user or perform further actions
    } else {
      // Authentication failed
      alert('Invalid username or password. Please try again.');
    }
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
          <h2>ADMIN</h2>
        </Grid>
        <form onSubmit={handleFormSubmit}>
          <TextField
            margin="normal"
            label="Username"
            name="username"
            placeholder="Enter username"
            type="text"
            value={username}
            onChange={handleUsernameChange}
            fullWidth
            required
          />
          <TextField
            margin="normal"
            label="Password"
            name="password"
            placeholder="Enter password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            fullWidth
            required
          />
          <FormControlLabel
            control={
              <Checkbox
                name="rememberMe"
                color="primary"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
            }
            label="Remember me"
          />
         <Link to ="/dashboard">
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign in
          </Button>
          </Link>
        </form>
      </Paper>
    </Grid>
  );
};

export default Adminlogin;

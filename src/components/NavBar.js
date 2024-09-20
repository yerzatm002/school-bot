// src/components/NavBar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { auth } from '../firebase';

const NavBar = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/login');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
        Ата-ана және мектеп платформасы
        </Typography>
        
          <Button color="inherit" component={Link} to="/dashboard">
            Басты бет
          </Button>
        
        {/* <Button color="inherit" component={Link} to="/courses">
          Мектеп пәндері
        </Button> */}
        <Button color="inherit" component={Link} to="/chats">
          Чат-бот
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Мектеппен байланысу
        </Button>
        {currentUser && (
        <Button color="inherit" component={Link} to="/profile">
          Профиль
        </Button>
        )}
        {currentUser ? (
          <Button color="inherit" onClick={handleLogout}>
            Шығу
          </Button>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/login">
              Кіру
            </Button>
            <Button color="inherit" component={Link} to="/signup">
              Тіркелу
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

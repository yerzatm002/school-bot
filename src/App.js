// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Chat from './components/Chat';
import ProfileInfo from './components/ProfileInfo';
import FavoritesList from './components/FavoritesList';
import NavBar from './components/NavBar';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chats" element={<Chat />} />
          <Route path="/contact" element={<FavoritesList />} />
          <Route path="/profile" element={<ProtectedRoute> <ProfileInfo /> </ProtectedRoute>} />
         
          <Route 
            path="/dashboard" 
            element={
                <Dashboard />
            } 
          />
          <Route path="/" element={<Login />} />
          {/* Add other routes here */}
        </Routes>
        
      </AuthProvider>
    </Router>
  );
};

export default App;

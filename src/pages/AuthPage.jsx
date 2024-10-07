import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';
import ResetPassword from '../components/auth/ResetPassword';

function AuthPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default AuthPage;
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Screens
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import StudentForm from '../screens/StudentForm';
import TeacherForm from '../screens/TeacherForm';
import SubjectForm from '../screens/SubjectForm';
import ReportView from '../screens/ReportView';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}

export default function AppNavigator() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route path="/" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
        
        <Route path="/register-student" element={
          <PrivateRoute>
            <StudentForm />
          </PrivateRoute>
        } />
        
        <Route path="/register-teacher" element={
          <PrivateRoute>
            <TeacherForm />
          </PrivateRoute>
        } />
        
        <Route path="/register-subject" element={
          <PrivateRoute>
            <SubjectForm />
          </PrivateRoute>
        } />
        
        <Route path="/view-report" element={
          <PrivateRoute>
            <ReportView />
          </PrivateRoute>
        } />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

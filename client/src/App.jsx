import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';          // <-- Import this
import CoursePlayer from './pages/CoursePlayer'; // <-- Import this
import { useAuthStore } from './store/useAuthStore';
import Login from './pages/Login';
import Signup from './pages/Signup';

// Layout wrapper for pages that need a Navbar
const MainLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

// Protected Route Wrapper
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? children : <Navigate to="/" />;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-white font-sans">
        <Routes>
          {/* Public Route: Landing Page */}
          <Route 
            path="/" 
            element={
              <MainLayout>
                <LandingPage />
              </MainLayout>
            } 
          />

          {/* Public Route: Course Catalog */}
          <Route 
            path="/courses" 
            element={
              <MainLayout>
                <Courses />
              </MainLayout>
            } 
          />
          
          {/* Protected Route: Dashboard */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Dashboard />
                </MainLayout>
              </ProtectedRoute>
            } 
          />

          {/* Protected Route: Course Player (No Navbar for immersion) */}
          <Route 
            path="/course/:id" 
            element={
              <ProtectedRoute>
                <CoursePlayer />
              </ProtectedRoute>
            } 
          />
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import { LogOut, User } from 'lucide-react';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuthStore();

  return (
    <nav className="fixed top-0 w-full z-50 glass px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold tracking-tighter hover:text-primary transition-colors">
        LMS<span className="text-primary">.io</span>
      </Link>

      {/* Actions */}
      <div className="flex items-center gap-6">
        <Link to="/courses" className="text-sm font-medium hover:text-primary transition-colors">Courses</Link>
        
        {isAuthenticated ? (
          <div className="flex items-center gap-4">
            <Link to="/dashboard" className="flex items-center gap-2 text-sm font-medium">
              <User size={18} />
              Dashboard
            </Link>
            <button onClick={logout} className="p-2 hover:bg-white/10 rounded-full transition-all">
              <LogOut size={18} className="text-red-400" />
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="bg-violet-gradient px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-all">
              Get Started
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
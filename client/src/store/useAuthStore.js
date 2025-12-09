import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  user: null, // { name: 'Gyanaranjan', role: 'student' }
  isAuthenticated: false,
  
  // Mock Login Action (We will connect API later)
  login: (email, password) => {
    // Simulating an API call
    console.log(`Logging in with ${email}`);
    set({ 
      user: { name: 'Demo User', role: 'student' }, 
      isAuthenticated: true 
    });
  },

  logout: () => set({ user: null, isAuthenticated: false }),
}));
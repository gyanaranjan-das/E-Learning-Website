import React, { useLayoutEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import gsap from 'gsap';
import { useAuthStore } from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';
import HeroCube from '../components/3d/HeroCube';

const LandingPage = () => {
  const comp = useRef();
  const { login } = useAuthStore(); // Using dummy login for quick demo
  const navigate = useNavigate();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  const handleQuickDemo = () => {
    login("demo@user.com", "password");
    navigate('/dashboard');
  };

  return (
    <div ref={comp} className="min-h-screen pt-20 flex flex-col md:flex-row items-center justify-center overflow-hidden">
      
      {/* Left Content */}
      <div className="w-full md:w-1/2 px-10 z-10 text-center md:text-left">
        <h1 className="hero-text text-5xl md:text-7xl font-bold leading-tight mb-6">
          Learn Faster. <br />
          <span className="text-transparent bg-clip-text bg-violet-gradient">
            Build Better.
          </span>
        </h1>
        <p className="hero-text text-secondary text-lg mb-8 max-w-lg mx-auto md:mx-0">
          The next-gen E-Learning platform powered by 3D interactivity and AI-driven insights.
        </p>
        <div className="hero-text flex gap-4 justify-center md:justify-start">
          <button 
            onClick={handleQuickDemo}
            className="bg-violet-gradient px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-violet-600/30 transition-all"
          >
            Enter Dashboard (Demo)
          </button>
          <button className="border border-border px-8 py-3 rounded-xl font-semibold hover:bg-white/5 transition-all">
            Browse Courses
          </button>
        </div>
      </div>

      {/* Right 3D Scene */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-[80vh]">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 2]} intensity={1} />
          <HeroCube />
          <Environment preset="city" />
        </Canvas>
      </div>
    </div>
  );
};

export default LandingPage;
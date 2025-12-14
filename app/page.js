'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [scene, setScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const scenes = [
    {
      id: 0,
      text: "Sabri Medical Store",
      subtext: "A Beacon of Hope in Our Community",
      duration: 3000
    },
    {
      id: 1,
      text: "Standing outside this cherished establishment...",
      subtext: "",
      duration: 3500
    },
    {
      id: 2,
      text: "I see more than just a medical store",
      subtext: "I see dedication",
      duration: 3500
    },
    {
      id: 3,
      text: "Every prescription filled with care",
      subtext: "Every customer treated like family",
      duration: 3500
    },
    {
      id: 4,
      text: "Through rain or shine",
      subtext: "Day or night",
      duration: 3000
    },
    {
      id: 5,
      text: "Sabri Medical Store stands ready",
      subtext: "To serve our community",
      duration: 3500
    },
    {
      id: 6,
      text: "Your compassion heals",
      subtext: "Your service inspires",
      duration: 3500
    },
    {
      id: 7,
      text: "Thank you",
      subtext: "For your unwavering commitment to our health and wellbeing",
      duration: 4000
    },
    {
      id: 8,
      text: "Sabri Medical Store",
      subtext: "Trusted. Respected. Admired.",
      duration: 4000
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;

    if (scene < scenes.length - 1) {
      const timer = setTimeout(() => {
        setScene(scene + 1);
      }, scenes[scene].duration);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setScene(0);
        setIsPlaying(false);
      }, scenes[scene].duration);
      return () => clearTimeout(timer);
    }
  }, [scene, isPlaying]);

  const startVideo = () => {
    setScene(0);
    setIsPlaying(true);
  };

  const resetVideo = () => {
    setScene(0);
    setIsPlaying(false);
  };

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      position: 'relative',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      {/* Animated Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.1,
        background: 'radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 50%, white 0%, transparent 50%)',
        animation: 'pulse 4s ease-in-out infinite'
      }} />

      {/* Medical Store Illustration */}
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '300px',
        height: '200px',
        opacity: isPlaying ? 0.3 : 0.5,
        transition: 'opacity 1s ease'
      }}>
        <svg viewBox="0 0 300 200" style={{ width: '100%', height: '100%' }}>
          {/* Store Building */}
          <rect x="50" y="60" width="200" height="120" fill="#ffffff" opacity="0.9" />
          <rect x="50" y="50" width="200" height="15" fill="#2ecc71" />

          {/* Door */}
          <rect x="125" y="110" width="50" height="70" fill="#3498db" />

          {/* Windows */}
          <rect x="70" y="80" width="40" height="40" fill="#87ceeb" />
          <rect x="190" y="80" width="40" height="40" fill="#87ceeb" />

          {/* Cross Symbol */}
          <rect x="143" y="15" width="8" height="30" fill="#e74c3c" />
          <rect x="132" y="24" width="30" height="8" fill="#e74c3c" />
        </svg>
      </div>

      {/* Main Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px',
        boxSizing: 'border-box'
      }}>
        {!isPlaying ? (
          <div style={{
            textAlign: 'center',
            animation: 'fadeIn 1s ease'
          }}>
            <h1 style={{
              fontSize: '3rem',
              color: 'white',
              marginBottom: '20px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              fontWeight: 'bold'
            }}>
              Sabri Medical Store
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: 'white',
              marginBottom: '40px',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
            }}>
              A Tribute to Care and Dedication
            </p>
            <button
              onClick={startVideo}
              style={{
                padding: '15px 40px',
                fontSize: '1.2rem',
                backgroundColor: '#2ecc71',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                transition: 'all 0.3s ease',
                fontWeight: 'bold'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'scale(1.1)';
                e.target.style.backgroundColor = '#27ae60';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.backgroundColor = '#2ecc71';
              }}
            >
              ▶ Play Tribute Video
            </button>
          </div>
        ) : (
          <div style={{
            textAlign: 'center',
            animation: 'fadeIn 1s ease',
            maxWidth: '800px'
          }}>
            <h1 style={{
              fontSize: '2.5rem',
              color: 'white',
              marginBottom: '20px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              lineHeight: '1.4',
              animation: 'slideUp 0.8s ease'
            }}>
              {scenes[scene].text}
            </h1>
            {scenes[scene].subtext && (
              <p style={{
                fontSize: '1.5rem',
                color: '#f0f0f0',
                textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
                animation: 'slideUp 0.8s ease 0.2s backwards'
              }}>
                {scenes[scene].subtext}
              </p>
            )}
            <button
              onClick={resetVideo}
              style={{
                marginTop: '40px',
                padding: '10px 30px',
                fontSize: '1rem',
                backgroundColor: 'rgba(255,255,255,0.3)',
                color: 'white',
                border: '2px solid white',
                borderRadius: '25px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = 'rgba(255,255,255,0.5)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'rgba(255,255,255,0.3)';
              }}
            >
              ⟲ Restart
            </button>
          </div>
        )}

        {/* Progress Bar */}
        {isPlaying && (
          <div style={{
            position: 'absolute',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80%',
            maxWidth: '600px',
            height: '4px',
            backgroundColor: 'rgba(255,255,255,0.3)',
            borderRadius: '2px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${((scene + 1) / scenes.length) * 100}%`,
              height: '100%',
              backgroundColor: 'white',
              transition: 'width 0.5s ease',
              borderRadius: '2px'
            }} />
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
}

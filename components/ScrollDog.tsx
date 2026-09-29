import React, { useEffect, useState, useRef } from 'react';

interface HopInfo {
  name: string;
  hopNumber: number;
  latency: number;
}

interface Footprint {
  id: number;
  x: number;
  y: number;
}

const ScrollDog: React.FC = () => {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFacingLeft, setIsFacingLeft] = useState(false);
  const [isWalking, setIsWalking] = useState(false);
  const [activeHop, setActiveHop] = useState<HopInfo>({
    name: "Welcome",
    hopNumber: 1,
    latency: 2
  });
  const [isVisible, setIsVisible] = useState(false);

  // Click Target ring state
  const [clickTarget, setClickTarget] = useState<{ x: number; y: number } | null>(null);

  // Spawning steps footprint trail state
  const [footprints, setFootprints] = useState<Footprint[]>([]);
  
  const robotRef = useRef<HTMLDivElement>(null);
  const footToggleRef = useRef(false);

  // Initialize position to bottom right corner on mount
  useEffect(() => {
    setPosX(window.innerWidth - 120);
    setPosY(window.innerHeight - 220);
    setIsVisible(true);
  }, []);

  // Update active section hop index on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      const sections = [
        { id: 'experience', name: 'Experience', hop: 2, defaultLat: 12 },
        { id: 'research', name: 'Research', hop: 3, defaultLat: 5 },
        { id: 'skills', name: 'Skills', hop: 4, defaultLat: 6 },
        { id: 'projects', name: 'Projects', hop: 5, defaultLat: 18 },
        { id: 'education', name: 'Education', hop: 6, defaultLat: 4 },
        { id: 'references', name: 'References', hop: 7, defaultLat: 8 },
      ];

      let found = false;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            const jitter = Math.floor(Math.random() * 5) - 2;
            setActiveHop({
              name: section.name,
              hopNumber: section.hop,
              latency: Math.max(1, section.defaultLat + jitter)
            });
            found = true;
            break;
          }
        }
      }

      if (!found && scrollY <= 150) {
        setActiveHop({
          name: "Welcome",
          hopNumber: 1,
          latency: 2
        });
      } else if (!found && scrollY + windowHeight >= docHeight - 50) {
        setActiveHop({
          name: "End",
          hopNumber: 7,
          latency: 5
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle click-to-walk target triggers
  useEffect(() => {
    if (!isVisible) return;

    const handleWindowClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('button') || 
        target.closest('a') || 
        target.closest('input') || 
        target.closest('textarea') ||
        target.closest('.chatbot-terminal') ||
        target.closest('#chatbot-toggle') ||
        target.closest('.noclick-companion')
      ) {
        return;
      }

      // Coordinates to target
      const clickX = e.clientX - 32;
      const clickY = e.clientY - 40;

      // Show radar target ring at click source
      setClickTarget({ x: e.clientX, y: e.clientY });

      // Calculate path distance and direction
      const distance = Math.hypot(clickX - posX, clickY - posY);
      if (distance < 15) return;

      const travelSpeed = 220; // speed (px/sec)
      const calculatedDuration = distance / travelSpeed;

      setDuration(calculatedDuration);
      setIsFacingLeft(clickX < posX);
      setIsWalking(true);
      setPosX(clickX);
      setPosY(clickY);

      // Revert to idle state
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        setIsWalking(false);
      }, calculatedDuration * 1000);
    };

    let idleTimer: ReturnType<typeof setTimeout>;
    window.addEventListener('click', handleWindowClick);
    return () => {
      window.removeEventListener('click', handleWindowClick);
      clearTimeout(idleTimer);
    };
  }, [isVisible, posX, posY]);

  // Footprint Spawner Interval during walking animation
  useEffect(() => {
    if (!isWalking) return;

    const spawnFootprint = () => {
      if (robotRef.current) {
        const rect = robotRef.current.getBoundingClientRect();
        
        // Alternate footprint offsets between left and right feet
        const footToggle = footToggleRef.current;
        footToggleRef.current = !footToggle;
        
        const footX = rect.left + (footToggle ? 22 : 42);
        const footY = rect.top + 72;

        const footprintId = Date.now() + Math.random();
        setFootprints(prev => [...prev, { id: footprintId, x: footX, y: footY }]);

        // Remove step footprint from screen after fade out finishes
        setTimeout(() => {
          setFootprints(prev => prev.filter(fp => fp.id !== footprintId));
        }, 800);
      }
    };

    // Spawn steps footprints every 220ms matching stepping rate
    const footprintInterval = setInterval(spawnFootprint, 220);
    
    return () => {
      clearInterval(footprintInterval);
    };
  }, [isWalking]);

  // Reset target ring indicator
  useEffect(() => {
    if (!clickTarget) return;
    const timer = setTimeout(() => setClickTarget(null), 600);
    return () => clearTimeout(timer);
  }, [clickTarget]);

  if (!isVisible) return null;

  return (
    <>
      {/* 1. CLICK EFFECTS (Expanding Sonar Ping Ring) */}
      {clickTarget && (
        <div 
          className="fixed z-50 pointer-events-none -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${clickTarget.x}px`, top: `${clickTarget.y}px` }}
        >
          {/* Glowing outer expanding circle */}
          <div className="w-12 h-12 rounded-full border-2 border-cyber-amber/60 bg-cyber-amber/5 animate-ping absolute -translate-x-1/2 -translate-y-1/2"></div>
          {/* Static crosshair focus point */}
          <div className="w-2.5 h-2.5 rounded-full bg-cyber-amber shadow-[0_0_8px_rgba(245,158,11,0.8)] absolute -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      )}

      {/* 2. FOOTPRINT STEP EFFECTS */}
      {footprints.map(fp => (
        <div 
          key={fp.id}
          className="fixed z-40 w-3 h-3 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 animate-footprint"
          style={{
            left: `${fp.x}px`,
            top: `${fp.y}px`
          }}
        />
      ))}



      {/* 4. WALKING DUCK COMPANION (Walks to click locations) */}
      <div 
        ref={robotRef}
        className="fixed z-50 pointer-events-none font-mono"
        style={{
          left: `${posX}px`,
          top: `${posY}px`,
          transition: `left ${duration}s linear, top ${duration}s linear`,
          width: '64px',
          height: '80px'
        }}
      >
        {/* CSS Animations style block */}
        <style>{`
          @keyframes robotBodyWaddle {
            0%, 100% { transform: rotate(-10deg) translateX(-3px) translateY(0px); }
            50% { transform: rotate(10deg) translateX(3px) translateY(-3px); }
          }
          @keyframes robotLegStepLeft {
            0%, 100% { transform: rotate(-22deg) translateY(0px) translateX(0px); }
            50% { transform: rotate(22deg) translateY(-5px) translateX(2px); }
          }
          @keyframes robotLegStepRight {
            0%, 100% { transform: rotate(22deg) translateY(-5px) translateX(-2px); }
            50% { transform: rotate(-22deg) translateY(0px) translateX(0px); }
          }
          @keyframes footprintFade {
            0% { transform: scale(0.6); opacity: 0.8; box-shadow: 0 0 6px rgba(234, 88, 12, 0.6); }
            100% { transform: scale(1.3); opacity: 0; box-shadow: 0 0 12px rgba(234, 88, 12, 0); }
          }
          .robot-waddling {
            animation: robotBodyWaddle 0.3s ease-in-out infinite;
            transform-origin: 60px 86px;
          }
          .robot-step-l {
            animation: robotLegStepLeft 0.3s ease-in-out infinite;
            transform-origin: 44px 94px;
          }
          .robot-step-r {
            animation: robotLegStepRight 0.3s ease-in-out infinite;
            transform-origin: 76px 94px;
          }
          .animate-footprint {
            border: 1px solid #ea580c;
            background: rgba(234, 88, 12, 0.25);
            animation: footprintFade 0.8s ease-out forwards;
          }
        `}</style>

        {/* Robot SVG Graphic (Flipped horizontally via scaleX(-1) if moving left) */}
        <div 
          className="w-16 h-20 relative transition-transform duration-200"
          style={{ transform: isFacingLeft ? 'scaleX(-1)' : 'none' }}
        >
          <svg viewBox="0 0 120 150" className="w-full h-full">
            
            {/* LEFT LEG */}
            <g className={isWalking ? 'robot-step-l' : ''}>
              <circle cx="44" cy="94" r="4.5" fill="#374151" />
              <rect x="39" y="94" width="10" height="14" fill="#1f2937" rx="2" />
              <circle cx="44" cy="104" r="2" fill="#9ca3af" />
              
              <path d="M 37 108 L 47 108 L 43 125 L 34 125 Z" fill="#ebe9e0" stroke="#ca8a04" strokeWidth="0.25" />
              <path d="M 30 125 L 48 125 L 48 132 A 2 2 0 0 1 46 134 L 32 134 A 2 2 0 0 1 30 132 Z" fill="#ea580c" />
              <rect x="29" y="134" width="20" height="3" fill="#111827" rx="1" />
            </g>

            {/* RIGHT LEG */}
            <g className={isWalking ? 'robot-step-r' : ''}>
              <circle cx="76" cy="94" r="4.5" fill="#374151" />
              <rect x="71" y="94" width="10" height="14" fill="#1f2937" rx="2" />
              <circle cx="76" cy="104" r="2" fill="#9ca3af" />
              
              <path d="M 73 108 L 83 108 L 86 125 L 77 125 Z" fill="#ebe9e0" stroke="#ca8a04" strokeWidth="0.25" />
              <path d="M 72 125 L 90 125 L 90 132 A 2 2 0 0 1 88 134 L 74 134 A 2 2 0 0 1 72 132 Z" fill="#ea580c" />
              <rect x="71" y="134" width="20" height="3" fill="#111827" rx="1" />
            </g>

            {/* UPPER DUCK BODY: Head, Neck, Chest */}
            <g className={isWalking ? 'robot-waddling' : ''}>
              {/* Exposed wiring */}
              <path d="M 52 47 Q 44 60 52 72" fill="none" stroke="#1f2937" strokeWidth="1.5" />
              <path d="M 68 47 Q 76 60 68 72" fill="none" stroke="#ea580c" strokeWidth="1" />
              <path d="M 60 47 Q 60 62 58 72" fill="none" stroke="#111827" strokeWidth="1.25" />

              {/* Neck joints */}
              <rect x="57" y="47" width="6" height="24" fill="#111827" rx="1" />
              <rect x="54" y="55" width="12" height="4" fill="#4b5563" rx="1" />
              <circle cx="60" cy="57" r="1.5" fill="#d1d5db" />
              <circle cx="60" cy="65" r="1.5" fill="#d1d5db" />

              {/* Chest block */}
              <rect x="47" y="70" width="26" height="18" fill="#ebe9e0" stroke="#9ca3af" strokeWidth="0.5" rx="5" />
              <circle cx="52" cy="74" r="1" fill="#4b5563" />
              <circle cx="68" cy="74" r="1" fill="#4b5563" />
              <circle cx="52" cy="84" r="1" fill="#4b5563" />
              <circle cx="68" cy="84" r="1" fill="#4b5563" />

              {/* Head Dome shell */}
              <path d="M 33 42 A 13 13 0 0 1 46 14 H 74 A 13 13 0 0 1 87 42 V 43 H 33 Z" fill="#ebe9e0" />
              <path d="M 33 43 H 87 V 46 A 2.5 2.5 0 0 1 84.5 48.5 H 35.5 A 2.5 2.5 0 0 1 33 46 Z" fill="#ea580c" />

              {/* Orange Side Pivot hinges */}
              <rect x="30.5" y="26" width="2.5" height="9" fill="#ea580c" rx="1" />
              <rect x="87" y="26" width="2.5" height="9" fill="#ea580c" rx="1" />

              {/* Face plate */}
              <path d="M 36 22 A 6 6 0 0 1 42 16 H 78 A 6 6 0 0 1 84 22 V 42 H 36 Z" fill="#cfcdbe" opacity="0.3" />

              {/* Camera Eye Lens */}
              <circle cx="49" cy="30" r="9" fill="#ea580c" />
              <circle cx="49" cy="30" r="6" fill="#facc15" />
              <circle cx="49" cy="30" r="4.5" fill="#111827" />
              <circle cx="51" cy="28" r="1" fill="#ffffff" />

              {/* Aperture Sensor */}
              <rect x="67" y="27" width="7" height="4" fill="#111827" rx="1.5" />
              <circle cx="69" cy="29" r="0.75" fill="#ea580c" />
            </g>

          </svg>
        </div>
      </div>
    </>
  );
};

export default ScrollDog;
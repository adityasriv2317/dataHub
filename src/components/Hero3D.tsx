
import { useEffect, useRef } from 'react';

const Hero3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 3D-like animation variables
    let time = 0;
    const particles: Array<{
      x: number;
      y: number;
      z: number;
      size: number;
      color: string;
      speed: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        z: Math.random() * 1000,
        size: Math.random() * 3 + 1,
        color: `hsl(${200 + Math.random() * 60}, 70%, 60%)`,
        speed: Math.random() * 0.5 + 0.1
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      
      time += 0.01;

      // Draw connecting lines and particles
      particles.forEach((particle, i) => {
        // Update particle position
        particle.z -= particle.speed;
        if (particle.z <= 0) {
          particle.z = 1000;
          particle.x = Math.random() * canvas.offsetWidth;
          particle.y = Math.random() * canvas.offsetHeight;
        }

        // Calculate 3D projection
        const scale = 1000 / (1000 + particle.z);
        const x = particle.x * scale;
        const y = particle.y * scale;
        const size = particle.size * scale;

        // Draw particle
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = scale;
        ctx.fill();

        // Draw connections to nearby particles
        particles.forEach((otherParticle, j) => {
          if (i !== j) {
            const otherScale = 1000 / (1000 + otherParticle.z);
            const otherX = otherParticle.x * otherScale;
            const otherY = otherParticle.y * otherScale;
            
            const distance = Math.sqrt((x - otherX) ** 2 + (y - otherY) ** 2);
            
            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(otherX, otherY);
              ctx.strokeStyle = particle.color;
              ctx.globalAlpha = (1 - distance / 100) * scale * 0.3;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        });
      });

      // Draw central geometric shape
      const centerX = canvas.offsetWidth / 2;
      const centerY = canvas.offsetHeight / 2;
      
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(time);
      
      // Draw rotating cube-like structure
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const x = Math.cos(angle) * 50;
        const y = Math.sin(angle) * 50;
        
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${240 + i * 20}, 70%, 60%)`;
        ctx.globalAlpha = 0.8;
        ctx.fill();
        
        // Connect to center
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(x, y);
        ctx.strokeStyle = `hsl(${240 + i * 20}, 70%, 60%)`;
        ctx.globalAlpha = 0.4;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      
      ctx.restore();

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ width: '100%', height: '100%' }}
      />
      <div className="relative z-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg backdrop-blur-sm border border-white/10 flex items-center justify-center">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg animate-pulse" />
      </div>
    </div>
  );
};

export default Hero3D;

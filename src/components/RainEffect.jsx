import { useEffect, useRef } from 'react';
import './RainEffect.css';

const RainEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Rain drops array
    const raindrops = [];
    const numberOfDrops = 100; // Lightweight - only 100 drops

    // Create raindrop class
    class Raindrop {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.length = Math.random() * 20 + 10;
        this.speed = Math.random() * 3 + 2;
        this.opacity = Math.random() * 0.5 + 0.3;
      }

      fall() {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.y = -this.length;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(174, 194, 224, ${this.opacity})`;
        ctx.lineWidth = 1;
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.length);
        ctx.stroke();
      }
    }

    // Initialize raindrops
    for (let i = 0; i < numberOfDrops; i++) {
      raindrops.push(new Raindrop());
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      raindrops.forEach(drop => {
        drop.fall();
        drop.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="rain-canvas" />;
};

export default RainEffect;

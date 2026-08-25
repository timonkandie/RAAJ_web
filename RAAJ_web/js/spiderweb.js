/**
 * Interactive Spiderweb Background
 * Renders connecting nodes that track the mouse.
 * Optimized for performance and disabled on touch devices/tablets.
 */

(function () {
  // Check if device uses a fine pointer (mouse) and is not a mobile/tablet (width >= 768px)
  // removed check
   // Do not initialize on mobile or touch devices

  const canvas = document.getElementById('spiderweb-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  
  // Mouse position
  const mouse = { x: null, y: null, radius: 150 };

  // Theme Colors
  const particleColor = 'rgba(212, 175, 55, 0.8)'; // Champagne Gold
  const lineColor = 'rgba(212, 175, 55, 0.5)';
  
  function init() {
    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });
    window.addEventListener('mouseout', () => {
      mouse.x = null;
      mouse.y = null;
    });

    createParticles();
    animate();
  }

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  class Particle {
    constructor(x, y, dx, dy, size) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.size = size;
    }
    
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      ctx.fillStyle = particleColor;
      ctx.fill();
    }
    
    update() {
      if (this.x > width || this.x < 0) this.dx = -this.dx;
      if (this.y > height || this.y < 0) this.dy = -this.dy;
      
      this.x += this.dx;
      this.y += this.dy;
      this.draw();
    }
  }

  function createParticles() {
    particles = [];
    // Adjust particle count based on screen area to maintain performance
    const particleCount = Math.floor((width * height) / 10000);
    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 3 + 1.5;
      const x = Math.random() * width;
      const y = Math.random() * height;
      const dx = (Math.random() - 0.5) * 0.5;
      const dy = (Math.random() - 0.5) * 0.5;
      particles.push(new Particle(x, y, dx, dy, size));
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, width, height);
    
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      
      // Connect to other particles
      for (let j = i; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          ctx.beginPath();
          ctx.strokeStyle = lineColor;
          ctx.lineWidth = 1;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
      
      // Connect to mouse
      if (mouse.x && mouse.y) {
        const dx = particles[i].x - mouse.x;
        const dy = particles[i].y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
          ctx.beginPath();
          // Fade line out as it gets further from mouse
          const alpha = 0.5 - (distance / mouse.radius) * 0.5;
          ctx.strokeStyle = `rgba(212, 175, 55, ${alpha})`;
          ctx.lineWidth = 1.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
          
          // Slight attraction to mouse
          particles[i].x -= dx * 0.01;
          particles[i].y -= dy * 0.01;
        }
      }
    }
  }

  // Delay initialization slightly to ensure DOM is ready
  setTimeout(init, 100);
})();


(function() {
    const neonCSS = `
        /* ═══ NEON GLOBAL ═══ */
        :root {
            --neon-violet: #7c3aed;
            --neon-cyan: #22d3ee;
            --neon-blue: #3b82f6;
            --neon-pink: #ec4899;
            --neon-glow-v: rgba(124,58,237,0.6);
            --neon-glow-c: rgba(34,211,238,0.6);
        }

        body { position: relative; overflow-x: hidden; }

        /* Fondo animado */
        body::before {
            content: '';
            position: fixed; inset: 0;
            pointer-events: none; z-index: -2;
            background:
                radial-gradient(ellipse at 15% 10%, rgba(124,58,237,0.22) 0%, transparent 38%),
                radial-gradient(ellipse at 85% 85%, rgba(34,211,238,0.18) 0%, transparent 34%),
                radial-gradient(ellipse at 50% 50%, rgba(59,130,246,0.08) 0%, transparent 45%);
            animation: bgPulse 8s ease-in-out infinite alternate;
        }
        @keyframes bgPulse {
            0%   { opacity: 0.85; }
            100% { opacity: 1; }
        }

        /* Grid lines sutiles */
        body::after {
            content: '';
            position: fixed; inset: 0;
            pointer-events: none; z-index: -1;
            background-image:
                linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px);
            background-size: 60px 60px;
            opacity: 0.6;
        }

        /* ─── NEON BORDERS ─── */
        .neon-border {
            border: 1px solid rgba(34,211,238,0.35) !important;
            box-shadow: 0 0 12px rgba(34,211,238,0.15), inset 0 0 12px rgba(34,211,238,0.04) !important;
        }
        .neon-border-violet {
            border: 1px solid rgba(124,58,237,0.45) !important;
            box-shadow: 0 0 16px rgba(124,58,237,0.2), inset 0 0 16px rgba(124,58,237,0.05) !important;
        }

        /* ─── NEON GLOW TEXTS ─── */
        .neon-glow {
            text-shadow:
                0 0 10px rgba(34,211,238,0.5),
                0 0 22px rgba(99,102,241,0.35),
                0 0 45px rgba(34,211,238,0.18);
        }
        .neon-glow-violet {
            text-shadow:
                0 0 10px rgba(167,139,250,0.6),
                0 0 22px rgba(124,58,237,0.4),
                0 0 45px rgba(124,58,237,0.2);
        }

        /* ─── PRODUCT CARDS NEON ─── */
        .product-card, .stat-card, .glass-card, .modal-card, .modal-content, .page-top-card {
            transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease !important;
        }
        .product-card:hover {
            border-color: rgba(34,211,238,0.4) !important;
            box-shadow:
                0 0 0 1px rgba(34,211,238,0.15),
                0 0 20px rgba(34,211,238,0.12),
                0 20px 50px rgba(0,0,0,0.4) !important;
        }
        .stat-card:hover, .glass-card:hover {
            border-color: rgba(124,58,237,0.45) !important;
            box-shadow:
                0 0 0 1px rgba(124,58,237,0.15),
                0 0 24px rgba(124,58,237,0.14),
                0 20px 50px rgba(0,0,0,0.4) !important;
        }

        /* ─── BUTTONS NEON ─── */
        .btn-primary {
            position: relative;
            overflow: hidden;
        }
        .btn-primary::after {
            content: '';
            position: absolute; inset: 0;
            background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%);
            opacity: 0;
            transition: opacity 0.25s;
        }
        .btn-primary:hover::after { opacity: 1; }
        .btn-primary:hover {
            box-shadow: 0 0 25px rgba(99,102,241,0.45), 0 0 50px rgba(34,211,238,0.2) !important;
        }

        /* ─── INPUTS NEON FOCUS ─── */
        input:focus, select:focus, textarea:focus {
            border-color: #22d3ee !important;
            box-shadow: 0 0 0 3px rgba(34,211,238,0.15), 0 0 18px rgba(34,211,238,0.12) !important;
        }

        /* ─── NEON SCAN LINE (top) ─── */
        .neon-scanline {
            position: fixed; top: 0; left: 0; right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, #7c3aed, #22d3ee, #7c3aed, transparent);
            z-index: 9999;
            animation: scanMove 4s linear infinite;
            opacity: 0.65;
        }
        @keyframes scanMove {
            0%   { transform: scaleX(0) translateX(-100%); opacity:0; }
            10%  { opacity: 0.65; }
            90%  { opacity: 0.65; }
            100% { transform: scaleX(1) translateX(0%); opacity:0; }
        }

        /* ─── NEON LIGHTNING BOLTS (decorative) ─── */
        .neon-bolt {
            position: fixed;
            pointer-events: none;
            z-index: -1;
            opacity: 0;
            animation: boltFlash 12s ease-in-out infinite;
        }
        .neon-bolt:nth-child(1) { top: 10%; left: 5%; animation-delay: 0s; }
        .neon-bolt:nth-child(2) { top: 60%; right: 3%; animation-delay: 4s; }
        .neon-bolt:nth-child(3) { bottom: 15%; left: 8%; animation-delay: 8s; }
        @keyframes boltFlash {
            0%,90%,100% { opacity: 0; transform: scale(0.8); }
            92%          { opacity: 0.7; transform: scale(1.1); }
            96%          { opacity: 0.3; transform: scale(0.95); }
            98%          { opacity: 0.6; transform: scale(1.05); }
        }

        /* ─── NEON CORNERS on cards ─── */
        .neon-corner {
            position: relative;
        }
        .neon-corner::before, .neon-corner::after {
            content: '';
            position: absolute;
            width: 20px; height: 20px;
            border-color: rgba(34,211,238,0.55);
            border-style: solid;
            z-index: 1;
            pointer-events: none;
            transition: opacity 0.3s;
            opacity: 0;
        }
        .neon-corner::before {
            top: -1px; left: -1px;
            border-width: 2px 0 0 2px;
            border-radius: 4px 0 0 0;
        }
        .neon-corner::after {
            bottom: -1px; right: -1px;
            border-width: 0 2px 2px 0;
            border-radius: 0 0 4px 0;
        }
        .neon-corner:hover::before, .neon-corner:hover::after { opacity: 1; }

        /* ─── SIDEBAR neon active ─── */
        .sidebar-item.active, nav a.text-cyan-300 {
            box-shadow: inset 3px 0 0 rgba(34,211,238,0.7), 0 0 15px rgba(34,211,238,0.08) !important;
        }

        /* ─── CANVAS particles ─── */
        #neonParticlesCanvas {
            position: fixed; inset: 0;
            z-index: -3;
            pointer-events: none;
            opacity: 0.9;
        }
    `;

    const style = document.createElement('style');
    style.id = 'neonEffectsStyle';
    style.textContent = neonCSS;
    document.head.appendChild(style);

    function injectScanline() {
        const line = document.createElement('div');
        line.className = 'neon-scanline';
        document.body.prepend(line);
    }

    function injectBolts() {
        const svgBolt = `<svg width="40" height="80" viewBox="0 0 40 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="22,0 8,40 18,40 4,80" stroke="url(#boltGrad)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            <defs>
              <linearGradient id="boltGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#a78bfa"/>
                <stop offset="100%" stop-color="#22d3ee"/>
              </linearGradient>
            </defs>
        </svg>`;
        for (let i = 0; i < 3; i++) {
            const d = document.createElement('div');
            d.className = 'neon-bolt';
            d.innerHTML = svgBolt;
            document.body.appendChild(d);
        }
    }

    function applyNeonClasses() {
        document.querySelectorAll('h1, h2, h3').forEach(el => el.classList.add('neon-glow'));
        document.querySelectorAll('.hero-title, .brand-text, .sidebar-logo-text').forEach(el => {
            el.classList.remove('neon-glow');
            el.classList.add('neon-glow-violet');
        });
        document.querySelectorAll('.product-card, .stat-card, .glass-card').forEach(el => el.classList.add('neon-corner'));
        document.querySelectorAll('.modal-card, .modal-content').forEach(el => el.classList.add('neon-border'));
    }

    function createCanvas() {
        const canvas = document.createElement('canvas');
        canvas.id = 'neonParticlesCanvas';
        document.body.prepend(canvas);
        const ctx = canvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;
        let W = window.innerWidth, H = window.innerHeight;
        let particles = [], rafId;

        function resize() {
            W = window.innerWidth; H = window.innerHeight;
            canvas.width = W * dpr; canvas.height = H * dpr;
            canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }

        const colors = [
            [185, 95, 75],  // cyan
            [240, 95, 75],  // violet
            [220, 95, 70],  // blue
            [300, 95, 75],  // pink
        ];

        function makeP() {
            const c = colors[Math.floor(Math.random() * colors.length)];
            return {
                x: Math.random() * W, y: Math.random() * H,
                r: Math.random() * 2 + 0.5,
                sx: (Math.random() - 0.5) * 0.3,
                sy: (Math.random() - 0.5) * 0.2,
                h: c[0], s: c[1], l: c[2],
                a: Math.random() * 0.5 + 0.1,
                drift: Math.random() * 6,
                pulse: Math.random() * Math.PI * 2
            };
        }

        function init() {
            const n = W < 768 ? 80 : 160;
            particles = Array.from({ length: n }, makeP);
        }

        let t = 0;
        function draw() {
            ctx.clearRect(0, 0, W, H);
            ctx.globalCompositeOperation = 'lighter';
            t += 0.012;

            particles.forEach(p => {
                p.pulse += 0.02;
                const a = p.a * (0.7 + 0.3 * Math.sin(p.pulse));
                const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 10);
                g.addColorStop(0, `hsla(${p.h},${p.s}%,${p.l}%,${a})`);
                g.addColorStop(1, `hsla(${p.h},${p.s}%,${p.l}%,0)`);
                ctx.fillStyle = g;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r * 7, 0, Math.PI * 2);
                ctx.fill();

                p.x += p.sx + Math.sin(p.drift + t) * 0.25;
                p.y += p.sy + Math.cos(p.drift + t * 0.7) * 0.15;
                if (p.x < -20) p.x = W + 20;
                if (p.x > W + 20) p.x = -20;
                if (p.y < -20) p.y = H + 20;
                if (p.y > H + 20) p.y = -20;
            });

            // Conexiones
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const d = Math.sqrt(dx * dx + dy * dy);
                    if (d < 120) {
                        const hAvg = (particles[i].h + particles[j].h) / 2;
                        ctx.strokeStyle = `hsla(${hAvg},90%,70%,${0.13 - d / 120 * 0.11})`;
                        ctx.lineWidth = 0.8;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            rafId = requestAnimationFrame(draw);
        }

        window.addEventListener('resize', () => { resize(); init(); });
        resize(); init(); draw();
    }

    document.addEventListener('DOMContentLoaded', () => {
        injectScanline();
        injectBolts();
        applyNeonClasses();
        createCanvas();
    });
})();

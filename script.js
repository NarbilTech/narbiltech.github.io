document.addEventListener('DOMContentLoaded', () => {
    // Otomatik Yıl Güncelleme
    const yearSpan = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    // Buton Etkileşimi
    const btn = document.getElementById('mainButton');
    btn.addEventListener('click', () => {
        btn.textContent = 'İyi Seçim!';
        btn.style.backgroundColor = '#4a4a4a';
        btn.style.color = '#fff';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Otomatik Yıl
    document.getElementById('year').textContent = new Date().getFullYear();

    // --- HAREKETLİ ARKA PLAN SİSTEMİ ---
    const canvas = document.getElementById('bgCanvas');
    const ctx = canvas.getContext('2d');

    let particles = [];
    const particleCount = 80; // Parçacık sayısı

    function init() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2
            });
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
        ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";

        particles.forEach((p, i) => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();

            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dist = Math.sqrt((p.x - p2.x)**2 + (p.y - p2.y)**2);
                if (dist < 150) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        });
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', init);
    init();
    animate();
});
/* ============================================
   Michel AYENA Portfolio — Interactive Script
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initTerminal();
    initScrollReveal();
    initStatCounter();
    initSkillBars();
    initScrollIndicator();
});

/* --- Navbar --- */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const toggle = document.getElementById('nav-toggle');
    const links = document.getElementById('nav-links');

    // Scroll Effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const current = window.scrollY;
        navbar.classList.toggle('scrolled', current > 50);
        lastScroll = current;
    });

    // Mobile Toggle
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        links.classList.toggle('active');
    });

    // Close mobile nav on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            links.classList.remove('active');
        });
    });
}

/* --- Terminal Typing Animation --- */
function initTerminal() {
    const body = document.getElementById('terminal-body');
    if (!body) return;

    const lines = [
        { type: 'command', text: 'whoami', delay: 800 },
        { type: 'output', text: 'Michel AYENA — Fullstack Developer & DevSecOps', class: 'output-accent', delay: 400 },
        { type: 'spacer', delay: 300 },
        { type: 'command', text: 'cat skills.json | jq .pillars', delay: 600 },
        { type: 'output', text: '├── Frontend: React 19, Next.js, TypeScript', class: 'output-cyan', delay: 200 },
        { type: 'output', text: '├── Backend: Laravel 11/12, PostgreSQL, Redis', class: 'output-yellow', delay: 200 },
        { type: 'output', text: '├── DevSecOps: Docker, GitHub Actions, SAST/SCA', class: 'output-green', delay: 200 },
        { type: 'output', text: '└── Vibe Coding: Antigravity IA 🎵', class: 'output-accent', delay: 200 },
        { type: 'spacer', delay: 400 },
        { type: 'command', text: 'echo $PHILOSOPHY', delay: 600 },
        { type: 'output', text: '"L\'Excellence par la Rigueur — Security First"', class: 'output-green', delay: 300 },
        { type: 'spacer', delay: 400 },
        { type: 'command', text: 'docker compose up -d --secure ✓', delay: 500 },
        { type: 'output', text: '🚀 SAST ✓ | SCA ✓ | Docker ✓ | Deploy ✓', class: 'output-green', delay: 300 },
    ];

    let currentLineIndex = 0;
    let totalDelay = 500; // initial delay

    // Clear existing content except the first line
    // First line is already in HTML, we animate from the second onward
    const firstLine = body.querySelector('.terminal-line');
    if (firstLine) firstLine.style.animation = 'fadeIn 0.3s ease forwards';

    function addLine(lineData) {
        const div = document.createElement('div');
        div.classList.add('terminal-line');

        if (lineData.type === 'spacer') {
            div.innerHTML = '&nbsp;';
        } else if (lineData.type === 'command') {
            div.innerHTML = `<span class="prompt">$</span><span class="command">${lineData.text}</span>`;
        } else if (lineData.type === 'output') {
            div.innerHTML = `<span class="output ${lineData.class || ''}">${lineData.text}</span>`;
        }

        div.style.opacity = '0';
        body.appendChild(div);

        // Animate in
        requestAnimationFrame(() => {
            div.style.transition = 'opacity 0.3s ease';
            div.style.opacity = '1';
        });

        // Auto-scroll terminal
        body.scrollTop = body.scrollHeight;
    }

    // Skip the first line (whoami) since it's already in HTML
    lines.forEach((line, index) => {
        if (index === 0) return; // Skip whoami, it's in HTML

        totalDelay += line.delay;
        setTimeout(() => addLine(line), totalDelay);
    });
}

/* --- Scroll Reveal --- */
function initScrollReveal() {
    const revealElements = document.querySelectorAll(
        '.about-card, .skill-pillar, .project-card, .cta-card, .workflow-step, .section-header'
    );

    revealElements.forEach(el => {
        el.classList.add('reveal');
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Stagger the animation
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 80);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    revealElements.forEach(el => observer.observe(el));
}

/* --- Stat Counter Animation --- */
function initStatCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.getAttribute('data-target'));
                    animateCounter(el, target);
                    observer.unobserve(el);
                }
            });
        },
        { threshold: 0.5 }
    );

    statNumbers.forEach(num => observer.observe(num));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 40;
    const duration = 1500;
    const stepTime = duration / 40;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, stepTime);
}

/* --- Skill Bars Animation --- */
function initSkillBars() {
    const bars = document.querySelectorAll('.bar-fill');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const width = bar.getAttribute('data-width');
                    setTimeout(() => {
                        bar.style.width = width + '%';
                    }, 300);
                    observer.unobserve(bar);
                }
            });
        },
        { threshold: 0.3 }
    );

    bars.forEach(bar => observer.observe(bar));
}

/* --- Scroll Progress Indicator --- */
function initScrollIndicator() {
    const indicator = document.createElement('div');
    indicator.classList.add('scroll-indicator');
    document.body.prepend(indicator);

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        indicator.style.width = scrollPercent + '%';
    });
}

/* --- Smooth Scroll for Safari --- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

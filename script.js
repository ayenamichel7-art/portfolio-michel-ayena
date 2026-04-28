/* ============================================
   Michel AYENA Portfolio — Interactive Script
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    initI18n();
    initNavbar();
    initTerminal();
    initScrollReveal();
    initStatCounter();
    initSkillBars();
    initScrollIndicator();
});

/* --- Internationalization (i18n) --- */
const translations = {
    fr: {
        nav_about: "À propos",
        nav_skills: "Compétences",
        nav_projects: "Projets",
        nav_philosophy: "Philosophie",
        nav_contact: "Contact",
        hero_badge: "Disponible pour de nouveaux projets",
        hero_subtitle: "Expertise <strong>Laravel</strong>, <strong>Next.js</strong> & <strong>Automatisation de Sécurité</strong> · <strong>Vibe Coder</strong> 🎵",
        hero_quote: "<i class=\"ph ph-quotes\"></i> Je ne me contente pas de coder des fonctionnalités. Je bâtis des écosystèmes SaaS <strong>sécurisés (SAST/SCA)</strong>, performants et prêts pour la production.",
        hero_cta_projects: "Explorer mes projets",
        hero_cta_contact: "Discutons",
        stat_saas: "Projets SaaS",
        stat_cicd: "CI/CD Automatisé",
        stat_monitoring: "Monitoring Actif",
        about_tag: "À propos",
        about_title: "Un développeur qui <span class=\"gradient-text\">sécurise</span> ce qu'il construit",
        about_fullstack_title: "Ingénieur Fullstack",
        about_fullstack_desc: "Spécialisé dans la construction d'applications SaaS complètes avec <strong>Laravel</strong> et <strong>Next.js</strong>. De l'architecture de la base de données à l'interface utilisateur, je maîtrise l'ensemble de la chaîne. Tous mes projets sont <strong>100% Dockerisés</strong>.",
        about_devsecops_title: "DevSecOps",
        about_devsecops_desc: "Chaque projet que je livre passe par des audits <strong>SAST/SCA</strong> automatisés. La sécurité n'est pas une option, c'est la fondation.",
        about_vibe_title: "Vibe Coder",
        about_vibe_desc: "J'embrasse le <strong>Vibe Coding</strong> : je combine intuition créative et outils IA comme <strong>Antigravity</strong> pour transformer des idées en produits à une vitesse industrielle.",
        about_impact_title: "Impact Local",
        about_impact_desc: "Je conçois des solutions technologiques qui répondent aux défis concrets du Bénin et de l'Afrique de l'Ouest.",
        skills_tag: "Compétences",
        skills_title: "Stack technique <span class=\"gradient-text\">organisé par piliers</span>",
        skills_frontend: "Frontend",
        skills_frontend_tag: "Interface & UX",
        skills_backend: "Backend",
        skills_backend_tag: "Architecture & API",
        skills_devsecops: "DevSecOps & Cloud",
        skills_devsecops_tag: "Sécurité & Déploiement",
        skills_monitoring: "Monitoring",
        skills_monitoring_tag: "Surveillance & Fiabilité",
        projects_tag: "Projets Phares",
        projects_title: "Des systèmes <span class=\"gradient-text\">industriels</span>, pas des prototypes",
        projects_desc: "Chaque projet est architecturé pour la production, sécurisé par design et automatisé de bout en bout.",
        project_featured: "Projet Phare",
        project_education_type: "SaaS Multi-tenant",
        project_education_desc: "Plateforme de dématérialisation scolaire avec architecture industrielle pour la gestion complète des établissements.",
        project_highlight_innovation: "Innovation",
        project_education_innovation: "Architecture Multi-tenant avec isolation stricte des données pour la confidentialité inter-établissements.",
        project_highlight_security: "Sécurité",
        project_education_security: "Audit systématique SCA des dépendances pour protéger les données académiques sensibles.",
        project_openzap_type: "Infrastructure de Communication Massive",
        project_openzap_desc: "Solution SaaS d'orchestration de campagnes WhatsApp à grande échelle avec gestion de flux asynchrones.",
        project_highlight_performance: "Performance",
        project_openzap_performance: "Flux asynchrones via Redis & Laravel Jobs pour des volumes massifs sans latence.",
        project_openzap_security: "Algorithmes anti-bannissement et sécurisation des API endpoints.",
        project_prodesign_type: "Automatisation Créative IA",
        project_prodesign_desc: "Plateforme haute performance pour agences créatives, combinant la rapidité de Rust et l'intelligence artificielle.",
        project_highlight_technical: "Technique",
        project_prodesign_technical: "Hybridation Rust + IA (Python) + Interface React pour un rendu ultra-rapide.",
        project_marketplace_type: "E-commerce Local",
        project_marketplace_desc: "Solution robuste de commerce électronique connectée à l'écosystème WhatsApp pour le Bénin.",
        project_highlight_impact: "Impact",
        project_marketplace_impact: "Intégration profonde WhatsApp pour transformer l'expérience d'achat au Bénin.",
        project_highlight_devops: "DevOps",
        project_marketplace_devops: "Pipeline CI/CD automatisé vers Vercel avec scan de vulnérabilités intégré.",
        project_digifix_type: "Gestion de Services Digitaux",
        project_digifix_desc: "Application conteneurisée pour la gestion de services avec parité parfaite dev/production.",
        project_highlight_architecture: "Architecture",
        project_digifix_architecture: "Stack moderne Laravel + React/Vite, entièrement conteneurisé avec Docker.",
        philosophy_tag: "Philosophie",
        philosophy_title: "Ma promesse : <span class=\"gradient-text\">L'Excellence par la Rigueur</span>",
        philosophy_intro: "Chaque ligne de code que je pousse passe par un workflow rigoureux. Je ne livre pas du code qui \"marche\" — je livre du code <strong>industriel, sécurisé et conteneurisé</strong>. Le Vibe Coding me donne la vitesse, la rigueur me donne la fiabilité.",
        philosophy_sast_title: "Analyse Statique (SAST)",
        philosophy_sast_desc: "Chaque commit est scanné par Semgrep pour détecter les vulnérabilités avant qu'elles n'atteignent la production.",
        philosophy_sca_title: "Audit de Dépendances (SCA)",
        philosophy_sca_desc: "Snyk et Dependabot surveillent en continu chaque dépendance pour éviter les failles de la chaîne d'approvisionnement.",
        philosophy_monitoring_title: "Monitoring 24/7",
        philosophy_monitoring_desc: "UptimeRobot et Fail2Ban garantissent un uptime maximal et une surveillance continue des menaces.",
        contact_tag: "Contact",
        contact_title: "Prêt à <span class=\"gradient-text\">collaborer</span> ?",
        contact_desc: "Que vous avez besoin d'un SaaS sécurisé, d'une plateforme e-commerce ou d'un audit DevSecOps, discutons de votre projet.",
        contact_github_title: "Explorer mon GitHub",
        contact_github_desc: "Pour la preuve technique",
          contact_cv_title: "Télécharger mon CV",
        contact_cv_desc: "Format DevSecOps",
        footer_title: "Fullstack Developer & DevSecOps Enthusiast",
        footer_copy: "&copy; 2026 Michel AYENA — Construit avec passion & sécurité.",
        // CV specific
        cv_sidebar_subtitle: "Développeur Fullstack<br>& DevSecOps",
        cv_contact_title: "Contact",
        cv_skills_title: "Compétences",
        cv_skill_vibe: "Vibe Coding",
        cv_languages_title: "Langues",
        lang_french: "Français",
        lang_english: "Anglais",
        cv_tools_title: "Outils",
        cv_main_subtitle: "Fullstack Developer & DevSecOps Enthusiast",
        cv_tagline: "Je ne me contente pas de coder des fonctionnalités. Je bâtis des écosystèmes SaaS <strong>sécurisés (SAST/SCA)</strong>, performants, 100% Dockerisés et prêts pour la production. Le Vibe Coding me donne la vitesse, la rigueur me donne la fiabilité.",
        cv_exp_title: "Expériences & Projets Phares",
        // CV Projects Details
        cv_project_education_desc: "Plateforme de dématérialisation scolaire — Architecture industrielle",
        cv_project_education_b1: "<strong>Innovation :</strong> Architecture Multi-tenant avec isolation stricte des données pour garantir la confidentialité entre établissements.",
        cv_project_education_b2: "<strong>Sécurité :</strong> Audit systématique SCA des dépendances pour protéger les données académiques sensibles.",
        cv_project_education_b3: "<strong>Impact :</strong> Gestion complète du cycle scolaire — inscriptions, notes, bulletins, paiements.",
        cv_project_openzap_desc: "Solution SaaS d'orchestration de campagnes WhatsApp à grande échelle",
        cv_project_openzap_b1: "<strong>Performance :</strong> Gestion de flux asynchrones via Redis & Laravel Jobs pour traiter des volumes massifs sans latence.",
        cv_project_openzap_b2: "<strong>Sécurité :</strong> Algorithmes de protection anti-bannissement et sécurisation des points d'accès API (SSRF hardening).",
        cv_project_prodesign_desc: "Plateforme haute performance pour agences créatives",
        cv_project_prodesign_b1: "<strong>Technique :</strong> Hybridation Rust + IA (Python) + interface React pour un rendu ultra-rapide et fiable.",
        cv_project_prodesign_b2: "<strong>DevOps :</strong> Environnement entièrement conteneurisé avec Docker, non-root execution, Dependabot activé.",
        cv_project_marketplace_desc: "Solution robuste de commerce électronique connectée à WhatsApp",
        cv_project_marketplace_b1: "<strong>Impact :</strong> Intégration profonde WhatsApp pour transformer l'expérience d'achat au Bénin.",
        cv_project_marketplace_b2: "<strong>DevOps :</strong> Pipeline CI/CD automatisé vers Vercel avec scan de vulnérabilités intégré.",
        cv_project_digifix_desc: "Application conteneurisée pour la gestion de services",
        cv_project_digifix_b1: "<strong>Architecture :</strong> Stack moderne Laravel (Backend) & React/Vite (Frontend) avec parité dev/prod parfaite.",
        cv_project_digifix_b2: "<strong>Infrastructure :</strong> Entièrement conteneurisé avec Docker — déploiement reproductible et sécurisé.",
        cv_philosophy_title: "Ma Philosophie — L'Excellence par la Rigueur",
        cv_sast_desc: "Analyse statique Semgrep sur chaque commit",
        cv_sca_desc: "Audit Snyk & Dependabot en continu",
        cv_monitoring_desc: "UptimeRobot & Fail2Ban — 24/7",
        cv_edu_title: "Formation & Certifications",
        cv_edu_degree: "Diplôme d'Ingénieur / Licence en Informatique",
        cv_edu_school: "Institut Supérieur de Technologie",
        cv_edu_b1: "Spécialisation en Développement Logiciel et Sécurité des Systèmes.",
        cv_edu_b2: "Major de promotion en Algorithmique et Architecture Cloud."
    },
    en: {
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_philosophy: "Philosophy",
        nav_contact: "Contact",
        hero_badge: "Available for new projects",
        hero_subtitle: "<strong>Laravel</strong>, <strong>Next.js</strong> & <strong>Security Automation</strong> Expertise · <strong>Vibe Coder</strong> 🎵",
        hero_quote: "<i class=\"ph ph-quotes\"></i> I don't just code features. I build <strong>secure (SAST/SCA)</strong>, high-performance, and production-ready SaaS ecosystems.",
        hero_cta_projects: "Explore my projects",
        hero_cta_contact: "Let's talk",
        stat_saas: "SaaS Projects",
        stat_cicd: "Automated CI/CD",
        stat_monitoring: "Active Monitoring",
        about_tag: "About",
        about_title: "A developer who <span class=\"gradient-text\">secures</span> what he builds",
        about_fullstack_title: "Fullstack Engineer",
        about_fullstack_desc: "Specialized in building complete SaaS applications with <strong>Laravel</strong> and <strong>Next.js</strong>. From database architecture to UI, I master the entire chain. All my projects are <strong>100% Dockerized</strong>.",
        about_devsecops_title: "DevSecOps",
        about_devsecops_desc: "Every project I deliver goes through automated <strong>SAST/SCA</strong> audits. Security is not an option, it's the foundation.",
        about_vibe_title: "Vibe Coder",
        about_vibe_desc: "I embrace <strong>Vibe Coding</strong>: I combine creative intuition and AI tools like <strong>Antigravity</strong> to transform ideas into products at industrial speed.",
        about_impact_title: "Local Impact",
        about_impact_desc: "I design technological solutions that address concrete challenges in Benin and West Africa.",
        skills_tag: "Skills",
        skills_title: "Technical stack <span class=\"gradient-text\">organized by pillars</span>",
        skills_frontend: "Frontend",
        skills_frontend_tag: "Interface & UX",
        skills_backend: "Backend",
        skills_backend_tag: "Architecture & API",
        skills_devsecops: "DevSecOps & Cloud",
        skills_devsecops_tag: "Security & Deployment",
        skills_monitoring: "Monitoring",
        skills_monitoring_tag: "Uptime & Reliability",
        projects_tag: "Featured Projects",
        projects_title: "Industrial <span class=\"gradient-text\">systems</span>, not prototypes",
        projects_desc: "Each project is architected for production, secure by design, and end-to-end automated.",
        project_featured: "Featured Project",
        project_education_type: "Multi-tenant SaaS",
        project_education_desc: "School dematerialization platform with industrial architecture for complete management of institutions.",
        project_highlight_innovation: "Innovation",
        project_education_innovation: "Multi-tenant architecture with strict data isolation for inter-institutional confidentiality.",
        project_highlight_security: "Security",
        project_education_security: "Systematic SCA audit of dependencies to protect sensitive academic data.",
        project_openzap_type: "Massive Communication Infrastructure",
        project_openzap_desc: "SaaS solution for orchestrating large-scale WhatsApp campaigns with asynchronous flow management.",
        project_highlight_performance: "Performance",
        project_openzap_performance: "Asynchronous flows via Redis & Laravel Jobs for massive volumes without latency.",
        project_openzap_security: "Anti-ban algorithms and API endpoint securing.",
        project_prodesign_type: "Creative AI Automation",
        project_prodesign_desc: "High-performance platform for creative agencies, combining Rust's speed and artificial intelligence.",
        project_highlight_technical: "Technical",
        project_prodesign_technical: "Rust + AI (Python) + React interface hybridization for ultra-fast rendering.",
        project_marketplace_type: "Local E-commerce",
        project_marketplace_desc: "Robust electronic commerce solution connected to the WhatsApp ecosystem for Benin.",
        project_highlight_impact: "Impact",
        project_marketplace_impact: "Deep WhatsApp integration to transform the shopping experience in Benin.",
        project_highlight_devops: "DevOps",
        project_marketplace_devops: "Automated CI/CD pipeline to Vercel with integrated vulnerability scanning.",
        project_digifix_type: "Digital Service Management",
        project_digifix_desc: "Containerized application for service management with perfect dev/production parity.",
        project_highlight_architecture: "Architecture",
        project_digifix_architecture: "Modern stack Laravel + React/Vite, fully containerized with Docker.",
        philosophy_tag: "Philosophy",
        philosophy_title: "My promise: <span class=\"gradient-text\">Excellence through Rigor</span>",
        philosophy_intro: "Every line of code I push goes through a rigorous workflow. I don't deliver code that just \"works\" — I deliver <strong>industrial, secure, and containerized</strong> code. Vibe Coding gives me speed, rigor gives me reliability.",
        philosophy_sast_title: "Static Analysis (SAST)",
        philosophy_sast_desc: "Every commit is scanned by Semgrep to detect vulnerabilities before they reach production.",
        philosophy_sca_title: "Dependency Audit (SCA)",
        philosophy_sca_desc: "Snyk and Dependabot continuously monitor every dependency to avoid supply chain flaws.",
        philosophy_monitoring_title: "24/7 Monitoring",
        philosophy_monitoring_desc: "UptimeRobot and Fail2Ban guarantee maximum uptime and continuous threat monitoring.",
        contact_tag: "Contact",
        contact_title: "Ready to <span class=\"gradient-text\">collaborate</span>?",
        contact_desc: "Whether you need a secure SaaS, an e-commerce platform, or a DevSecOps audit, let's discuss your project.",
        contact_github_title: "Explore my GitHub",
        contact_github_desc: "For technical proof",
        contact_whatsapp_title: "Chat on WhatsApp",
        contact_whatsapp_desc: "For business",
        contact_cv_title: "Download my CV",
        contact_cv_desc: "DevSecOps format",
        footer_title: "Fullstack Developer & DevSecOps Enthusiast",
        footer_copy: "&copy; 2026 Michel AYENA — Built with passion & security.",
        // CV specific
        cv_sidebar_subtitle: "Fullstack Developer<br>& DevSecOps",
        cv_contact_title: "Contact",
        cv_skills_title: "Skills",
        cv_skill_vibe: "Vibe Coding",
        cv_languages_title: "Languages",
        lang_french: "French",
        lang_english: "English",
        cv_tools_title: "Tools",
        cv_main_subtitle: "Fullstack Developer & DevSecOps Enthusiast",
        cv_tagline: "I don't just code features. I build <strong>secure (SAST/SCA)</strong>, high-performance, 100% Dockerized and production-ready SaaS ecosystems. Vibe Coding gives me speed, rigor gives me reliability.",
        cv_exp_title: "Experiences & Featured Projects",
        // CV Projects Details
        cv_project_education_desc: "School dematerialization platform — Industrial architecture",
        cv_project_education_b1: "<strong>Innovation:</strong> Multi-tenant architecture with strict data isolation to guarantee confidentiality between institutions.",
        cv_project_education_b2: "<strong>Security:</strong> Systematic SCA audit of dependencies to protect sensitive academic data.",
        cv_project_education_b3: "<strong>Impact:</strong> Complete management of the school cycle — registrations, grades, reports, payments.",
        cv_project_openzap_desc: "SaaS solution for orchestrating large-scale WhatsApp campaigns",
        cv_project_openzap_b1: "<strong>Performance:</strong> Asynchronous flow management via Redis & Laravel Jobs to process massive volumes without latency.",
        cv_project_openzap_b2: "<strong>Security:</strong> Anti-ban protection algorithms and securing of API access points (SSRF hardening).",
        cv_project_prodesign_desc: "High-performance platform for creative agencies",
        cv_project_prodesign_b1: "<strong>Technical:</strong> Rust + AI (Python) + React interface hybridization for ultra-fast and reliable rendering.",
        cv_project_prodesign_b2: "<strong>DevOps:</strong> Environment fully containerized with Docker, non-root execution, Dependabot enabled.",
        cv_project_marketplace_desc: "Robust electronic commerce solution connected to WhatsApp",
        cv_project_marketplace_b1: "<strong>Impact:</strong> Deep WhatsApp integration to transform the shopping experience in Benin.",
        cv_project_marketplace_b2: "<strong>DevOps:</strong> Automated CI/CD pipeline to Vercel with integrated vulnerability scanning.",
        cv_project_digifix_desc: "Containerized application for service management",
        cv_project_digifix_b1: "<strong>Architecture:</strong> Modern stack Laravel (Backend) & React/Vite (Frontend) with perfect dev/prod parity.",
        cv_project_digifix_b2: "<strong>Infrastructure:</strong> Fully containerized with Docker — reproducible and secure deployment.",
        cv_philosophy_title: "My Philosophy — Excellence through Rigor",
        cv_sast_desc: "Static analysis Semgrep on every commit",
        cv_sca_desc: "Continuous Snyk & Dependabot audit",
        cv_monitoring_desc: "UptimeRobot & Fail2Ban — 24/7",
        cv_edu_title: "Education & Certifications",
        cv_edu_degree: "Engineer's Degree / Bachelor in Computer Science",
        cv_edu_school: "Higher Institute of Technology",
        cv_edu_b1: "Specialization in Software Development and Systems Security.",
        cv_edu_b2: "Top of class in Algorithms and Cloud Architecture."
    }
};

const urlParams = new URLSearchParams(window.location.search);
const langParam = urlParams.get('lang');
let currentLang = langParam || localStorage.getItem('preferred-lang') || 'en';

function initI18n() {
    const langBtns = document.querySelectorAll('[data-lang-switcher]');
    
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang-switcher');
            switchLanguage(lang);
        });
    });

    // Initial load
    switchLanguage(currentLang, false);
}

function switchLanguage(lang, reloadAnimation = true) {
    currentLang = lang;
    localStorage.setItem('preferred-lang', lang);
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang);

    // Update buttons
    document.querySelectorAll('[data-lang-switcher]').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang-switcher') === lang);
    });

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update meta tags
    const metaDesc = document.querySelector('meta[name="description"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (lang === 'en') {
        if (metaDesc) metaDesc.setAttribute('content', 'Michel AYENA — Fullstack Developer & DevSecOps Enthusiast. Expert Laravel, Next.js, CI/CD, SAST/SCA. Builder of secure and performant SaaS ecosystems.');
        if (ogDesc) ogDesc.setAttribute('content', 'I build secure (SAST/SCA), high-performance, production-ready SaaS ecosystems.');
    } else {
        if (metaDesc) metaDesc.setAttribute('content', "Michel AYENA — Fullstack Developer & DevSecOps Enthusiast. Expert Laravel, Next.js, CI/CD, SAST/SCA. Bâtisseur d'écosystèmes SaaS sécurisés et performants.");
        if (ogDesc) ogDesc.setAttribute('content', "Je bâtis des écosystèmes SaaS sécurisés (SAST/SCA), performants et prêts pour la production.");
    }

    // Update CV Download Link
    const cvLink = document.getElementById('cta-cv-download');
    if (cvLink) {
        cvLink.setAttribute('href', lang === 'en' ? 'Michel_AYENA_CV_DevSecOps_EN.pdf' : 'Michel_AYENA_CV_DevSecOps.pdf');
    }

    if (reloadAnimation) {
        initTerminal();
    }
}


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
const terminalData = {
    fr: [
        { type: 'command', text: 'whoami', delay: 800 },
        { type: 'output', text: 'Michel AYENA — Développeur Fullstack & DevSecOps', class: 'output-accent', delay: 400 },
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
    ],
    en: [
        { type: 'command', text: 'whoami', delay: 800 },
        { type: 'output', text: 'Michel AYENA — Fullstack Developer & DevSecOps', class: 'output-accent', delay: 400 },
        { type: 'spacer', delay: 300 },
        { type: 'command', text: 'cat skills.json | jq .pillars', delay: 600 },
        { type: 'output', text: '├── Frontend: React 19, Next.js, TypeScript', class: 'output-cyan', delay: 200 },
        { type: 'output', text: '├── Backend: Laravel 11/12, PostgreSQL, Redis', class: 'output-yellow', delay: 200 },
        { type: 'output', text: '├── DevSecOps: Docker, GitHub Actions, SAST/SCA', class: 'output-green', delay: 200 },
        { type: 'output', text: '└── Vibe Coding: Antigravity AI 🎵', class: 'output-accent', delay: 200 },
        { type: 'spacer', delay: 400 },
        { type: 'command', text: 'echo $PHILOSOPHY', delay: 600 },
        { type: 'output', text: '"Excellence through Rigor — Security First"', class: 'output-green', delay: 300 },
        { type: 'spacer', delay: 400 },
        { type: 'command', text: 'docker compose up -d --secure ✓', delay: 500 },
        { type: 'output', text: '🚀 SAST ✓ | SCA ✓ | Docker ✓ | Deploy ✓', class: 'output-green', delay: 300 },
    ]
};

let terminalTimeoutIds = [];

function initTerminal() {
    const body = document.getElementById('terminal-body');
    if (!body) return;

    // Clear previous timeouts and content
    terminalTimeoutIds.forEach(id => clearTimeout(id));
    terminalTimeoutIds = [];
    
    body.innerHTML = '';

    const lines = terminalData[currentLang];

    let totalDelay = 500;

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

        requestAnimationFrame(() => {
            div.style.transition = 'opacity 0.3s ease';
            div.style.opacity = '1';
        });

        body.scrollTop = body.scrollHeight;
    }

    lines.forEach((line) => {
        totalDelay += line.delay;
        const timeoutId = setTimeout(() => addLine(line), totalDelay);
        terminalTimeoutIds.push(timeoutId);
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

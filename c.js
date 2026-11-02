document.addEventListener('DOMContentLoaded', () => {
    
    // Toggle Mode Sombre / Clair
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            themeToggle.textContent = isDark ? '☀️ Mode Clair' : '🌙 Mode Sombre';
        });
    }

    // Animation d'apparition au défilement des sections
    const sections = document.querySelectorAll('.interactive-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { 
        threshold: 0.15 
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Effet tactile/clic sur les cartes d'information
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.style.transform = 'scale(0.97)';
            setTimeout(() => {
                card.style.transform = '';
            }, 150);
        });
    });

    // Affichage / Masquage interactif de la liste de gestes réflexes
    const actionBtn = document.getElementById('action-btn');
    const actionContent = document.getElementById('action-content');

    if (actionBtn && actionContent) {
        actionBtn.addEventListener('click', () => {
            actionContent.classList.toggle('hidden');
            if (actionContent.classList.contains('hidden')) {
                actionBtn.textContent = 'Découvrir les 5 gestes réflexes';
            } else {
                actionBtn.textContent = 'Masquer les gestes réflexes';
            }
        });
    }
});s
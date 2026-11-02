document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');

    if (themeToggle) {
        const updateThemeButton = () => {
            const isDark = document.body.classList.contains('dark-mode');
            themeToggle.textContent = isDark ? '☀️ Mode Clair' : '🌙 Mode Sombre';
            themeToggle.setAttribute('aria-pressed', String(isDark));
        };

        updateThemeButton();

        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            updateThemeButton();
        });
    }

    const sections = document.querySelectorAll('.interactive-section');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.15
        });

        sections.forEach((section) => observer.observe(section));
    } else {
        sections.forEach((section) => section.classList.add('visible'));
    }

    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        card.addEventListener('click', () => {
            card.style.transform = 'scale(0.97)';
            setTimeout(() => {
                card.style.transform = '';
            }, 150);
        });
    });

    const actionBtn = document.getElementById('action-btn');
    const actionContent = document.getElementById('action-content');

    if (actionBtn && actionContent) {
        const updateActionButton = () => {
            const isHidden = actionContent.classList.contains('hidden');
            actionBtn.textContent = isHidden ? 'Découvrir les 5 gestes réflexes' : 'Masquer les gestes réflexes';
            actionBtn.setAttribute('aria-expanded', String(!isHidden));
        };

        updateActionButton();

        actionBtn.addEventListener('click', () => {
            actionContent.classList.toggle('hidden');
            updateActionButton();
        });
    }
});

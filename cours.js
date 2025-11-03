// Toggle menu mobile
const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const menu = document.querySelector('.head1G');

if (toggle) {
    toggle.addEventListener('click', () => {
        menu.classList.add('active');
        toggle.style.display = 'none';
        close.style.display = 'flex';
    });
}

if (close) {
    close.addEventListener('click', () => {
        menu.classList.remove('active');
        close.style.display = 'none';
        toggle.style.display = 'flex';
    });
}

// Navigation vers la section Cours
const menuItems = document.querySelectorAll('.head1G-item h1');
const coursSection = document.getElementById('cours-section');
const mainSections = [
    document.querySelector('.head'),
    document.querySelector('.P1'),
    document.querySelector('.P2'),
    document.querySelector('.P3')
];

menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        // Si on clique sur "Cours" (index 1)
        if (index === 1) {
            // Cacher toutes les sections principales
            mainSections.forEach(section => {
                if (section) section.style.display = 'none';
            });
            // Afficher la section cours
            if (coursSection) {
                coursSection.style.display = 'block';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            
            // Fermer le menu mobile si ouvert
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
                close.style.display = 'none';
                toggle.style.display = 'flex';
            }
        }
        // Si on clique sur "Accueil" (index 0)
        else if (index === 0) {
            // Afficher toutes les sections principales
            mainSections.forEach(section => {
                if (section) section.style.display = 'flex';
            });
            // Cacher la section cours
            if (coursSection) {
                coursSection.style.display = 'none';
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Fermer le menu mobile si ouvert
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
                close.style.display = 'none';
                toggle.style.display = 'flex';
            }
        }
    });
});

// Prévenir le redimensionnement avec animation
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});
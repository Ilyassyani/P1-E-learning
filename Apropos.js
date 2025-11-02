// Navigation vers la section À Propos
const aproposSection = document.getElementById('apropos-section');

// Mettre à jour la section dans le forEach existant
menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        // Si on clique sur "Cours" (index 1)
        if (index === 1) {
            mainSections.forEach(section => {
                if (section) section.style.display = 'none';
            });
            if (coursSection) {
                coursSection.style.display = 'block';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            if (aproposSection) {
                aproposSection.style.display = 'none';
            }
            
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
                close.style.display = 'none';
                toggle.style.display = 'flex';
            }
        }
        // Si on clique sur "À propos" (index 4)
        else if (index === 4) {
            mainSections.forEach(section => {
                if (section) section.style.display = 'none';
            });
            if (coursSection) {
                coursSection.style.display = 'none';
            }
            if (aproposSection) {
                aproposSection.style.display = 'block';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
                close.style.display = 'none';
                toggle.style.display = 'flex';
            }
        }
        // Si on clique sur "Accueil" (index 0)
        else if (index === 0) {
            mainSections.forEach(section => {
                if (section) section.style.display = 'flex';
            });
            if (coursSection) {
                coursSection.style.display = 'none';
            }
            if (aproposSection) {
                aproposSection.style.display = 'none';
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
                close.style.display = 'none';
                toggle.style.display = 'flex';
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    
    // Fonctionnalité 1 : Compteur Animé pour les Statistiques
    const statsSection = document.querySelector('.apropos-stats');
    const statsNumbers = document.querySelectorAll('.apropos-stats-number');
    let hasAnimated = false; // Pour s'assurer que l'animation ne se déclenche qu'une seule fois

    const animateNumber = (element, target) => {
        let current = 0;
        const duration = 1500; // Durée de l'animation en ms
        const stepTime = Math.abs(Math.floor(duration / target));

        const timer = setInterval(() => {
            current++;
            // Le texte pour le dernier élément sera "100%"
            element.textContent = (element.getAttribute('data-target') === '100') ? current + '%' : current;
            
            if (current >= target) {
                clearInterval(timer);
                // Assurer la valeur finale exacte pour le %
                element.textContent = (element.getAttribute('data-target') === '100') ? '100%' : target;
            }
        }, stepTime);
    };

    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                statsNumbers.forEach(numberEl => {
                    const target = parseInt(numberEl.getAttribute('data-target'));
                    animateNumber(numberEl, target);
                });
                hasAnimated = true;
                observer.unobserve(statsSection); // Arrêter d'observer une fois l'animation lancée
            }
        });
    };

    // Utilisation de l'Intersection Observer pour déclencher l'animation au défilement
    const observer = new IntersectionObserver(handleIntersection, {
        root: null, // viewport
        threshold: 0.5 // Déclenche quand 50% de la section est visible
    });

    if (statsSection) {
        observer.observe(statsSection);
    }


    // Fonctionnalité 2 : Gestion du bouton CTA (Call To Action)
    const ctaButton = document.getElementById('cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            // Dans un vrai projet, cela redirigerait l'utilisateur vers la page d'inscription.
            alert("Merci de votre intérêt ! Redirection vers la page d'inscription...");
            // window.location.href = "/inscription.html"; // Exemple de redirection
        });
    }

});
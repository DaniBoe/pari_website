// Simple JavaScript for smooth scrolling and basic interactions
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                // Add more offset for mobile to account for smaller screens
                const isMobile = window.innerWidth <= 768;
                const extraOffset = isMobile ? 40 : 20;
                const targetPosition = targetSection.offsetTop - headerHeight - extraOffset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Mobile Menu Toggle
const mobileBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Simple interaction for the "Buy" buttons for now (Placeholder)
document.querySelectorAll('.pricing-card .btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Bu özellik şu an geliştirme aşamasındadır. Yakında login sayfasına yönlendirileceksiniz.');
    });
});

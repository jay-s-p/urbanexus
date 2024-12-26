// JavaScript for adding 'active' class to the current section link
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

/*================================== TOGGLE ICON NAVBAR ============================================ */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}

/*================================== SCROLL SECTION ACTIVE LINK ============================================ */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll =() =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>= offset && top< offset + height){
            navLinks.forEach.apply(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
            });
        }; 
    });

    /*================================== STICKY NAVBAR ============================================ */

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*================================== REMOVE TOGGLE ICON AND NAV BAR ============================================ */
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*================================== scroll reveal ============================================ */
ScrollReveal({
    distance: '80px',
    duration:2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-contact h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-contact p, .about-content', {origin: 'right'});

/*================================== typed js ============================================ */
const typed = new Typed('.multiple-text',{
    strings:['Housing Assistance', 'Food & dining Assistance', 'Academic Assistance', 'Health Assistance', 'Transportation Assistance','Entertainment Assistance'],
    typeSpeed:70,
    backSpeed:70,
    backDelay: 1000,
    loop: true,
});


/*======================================= Form NOt Redirection======================== */

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contact-form'); // Get the form element
  
    // Check if the form exists
    if (form) {
      // Add event listener for form submission
      form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission (no page reload)
  
        const submitButton = form.querySelector('input[type="submit"]');
        submitButton.value = 'Sending...'; // Change button text to indicate submission
  
        // Create FormData object to hold form data
        const formData = new FormData(form);
  
        // Send the form data via AJAX to Formspree using Fetch API
        fetch(form.action, {
          method: 'POST',
          body: formData, // Send form data as multipart/form-data
        })
        .then(response => {
          // Check if the response is successful (status code 2xx)
          if (!response.ok) {
            throw new Error('Form submission failed with status: ' + response.status);
          }
          return response.json(); // Parse JSON response from Formspree
        })
        .catch(error => {
          // Handle errors (e.g., network issues, Formspree errors)
          console.error('Error:', error);
        })
        .finally(() => {
          // Show the "Message Successfully Sent" alert regardless of success or error
          alert('Message Successfully Sent');
          
          // Reset the form and button text after submission
          form.reset();
          submitButton.value = 'Send Message';
        });
      });
    }
  });
  
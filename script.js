// app.js

// 1. Hero Image Slider/Carousel [cite: 16]
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.slider-nav.prev');
    const nextButton = document.querySelector('.slider-nav.next');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active-slide');
            if (i === index) {
                slide.classList.add('active-slide');
            }
        });
        currentSlide = index;
    }

    function nextSlide() {
        let newIndex = (currentSlide + 1) % slides.length;
        showSlide(newIndex);
    }

    function prevSlide() {
        let newIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(newIndex);
    }

    if (slides.length > 1) {
        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);

        // Auto-advance the slider every 5 seconds (optional enhancement)
        setInterval(nextSlide, 5000);
    }
    
    // Ensure the first slide is visible on load
    showSlide(currentSlide);
});


// 2. Scroll-to-Top Button [cite: 17]
const scrollButton = document.getElementById('scroll-to-top');

// Function to show/hide the button
window.onscroll = function() {
    // Button appears after scrolling 300px down
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
};

// Function to scroll to the top
scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // For smooth scrolling
    });
});


// 3. Placeholder for Client-Side Form Validation [cite: 16]
// Implementation will be done on members.html (Join Form) and contact.html (Contact Form)
function handleFormValidation(formId) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', function(event) {
        // Prevent default submission
        event.preventDefault(); 
        
        let isValid = true;
        
        // --- Validation Logic Here ---
        
        if (isValid) {
            alert("Form submitted successfully! (Placeholder)");
            form.reset();
        } else {
            // Provide user-friendly error messages (e.g., highlighting fields) [cite: 16]
            alert("Please correct the errors in the form.");
        }
    });
}

// Call the function for the required forms once they are created
// handleFormValidation('join-form'); 
// handleFormValidation('contact-form');


// 4. Placeholder for Dynamic Event Filter/Search [cite: 17]
// Implementation will be done on events.html
function handleEventFiltering() {
    // Add logic here to filter events based on a search term or category select
}
// handleEventFiltering();
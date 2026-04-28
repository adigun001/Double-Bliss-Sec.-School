window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    
    // Add a slight delay (e.g., 500ms) so the user actually sees the beautiful logo
    setTimeout(() => {
        preloader.classList.add('loader-fade-out');
    }, 500);
});

const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Optional: Change icon from bars to 'X' when open
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});


const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide-item');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let index = 0;

function updateSlider() {
    track.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlider();
});


const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-box');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const target = button.getAttribute('data-target');

        galleryItems.forEach(item => {
            if (target === 'all' || item.classList.contains(target)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
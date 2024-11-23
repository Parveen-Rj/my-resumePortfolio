// Har section ko select karenge
var sections = document.querySelectorAll('.section');
// Ye function check karega ke section viewport (screen) mein aya hai ya nahi
var revealSection = function () {
    sections.forEach(function (section) {
        var sectionTop = section.getBoundingClientRect().top;
        // Agar section ka top, window ke andar hai to visible class add karega
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('visible');
        }
        else {
            section.classList.remove('visible');
        }
    });
};
// Jab bhi scroll ho, ye function chalega
window.addEventListener('scroll', revealSection);
// Jab page load ho tab bhi check karega ke koi section visible hai ya nahi
revealSection();

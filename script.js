// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple alert on button click
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        console.log("User clicked download/play button");
    });
});
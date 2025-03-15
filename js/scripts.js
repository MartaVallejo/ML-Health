// Adjust heights for project images
function adjustProjectImages() {
    const projects = document.querySelectorAll('.project-box');
    projects.forEach(project => {
        const text = project.querySelector('.project-content');
        const image = project.querySelector('.project-image img');
        if (text && image) {
            image.style.height = `${text.offsetHeight}px`; // Set image height based on text height
        }
    });
}

// Adjust heights for news images
function adjustNewsImages() {
    const newsItems = document.querySelectorAll('.news-item');
    newsItems.forEach(item => {
        const text = item.querySelector('.news-text');
        const image = item.querySelector('.news-image img');
        if (text && image) {
            image.style.height = `${text.offsetHeight}px`; // Set image height based on text height
        }
    });
}

// Run both functions on load and resize
window.addEventListener('load', () => {
    adjustProjectImages();
    adjustNewsImages();
});

window.addEventListener('resize', () => {
    adjustProjectImages();
    adjustNewsImages();
});



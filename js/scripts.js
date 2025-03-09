function matchProjectImageHeight() {
    document.querySelectorAll('.project-box').forEach(project => {
        let textHeight = project.querySelector('.project-content').offsetHeight;
        let imageContainer = project.querySelector('.project-image');

        if (imageContainer) {
            imageContainer.style.height = textHeight + "px"; // Force height match
        }
    });
}

// Run function on page load and when window resizes
window.addEventListener("load", matchProjectImageHeight);
window.addEventListener("resize", matchProjectImageHeight);

document.addEventListener("DOMContentLoaded", function () {
    function adjustImageHeight() {
        document.querySelectorAll(".project-box").forEach((box) => {
            const content = box.querySelector(".project-content");
            const image = box.querySelector(".project-image img");

            if (content && image) {
                const contentHeight = content.clientHeight;
                image.style.height = `${contentHeight}px`;
            }
        });
    }

    adjustImageHeight();

    // Adjust on window resize
    window.addEventListener("resize", adjustImageHeight);
});


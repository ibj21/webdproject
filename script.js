window.addEventListener("load", function() {
    let img = document.getElementById("fadeImage");

    // Fade-in effect for hero image
    img.style.opacity = "1";
    img.style.transform = "translateY(0)";
});

let sections = document.querySelectorAll(".section");
let currentIndex = 0;
let isScrolling = false;

document.addEventListener("wheel", function(event) {
    if (isScrolling) return;
    isScrolling = true;

    if (event.deltaY > 0 && currentIndex < sections.length) {
        // Scroll Down
        sections[currentIndex].style.transform = "translateY(-100vh)";
        currentIndex++;
    } else if (event.deltaY < 0 && currentIndex > 0) {
        // Scroll Up
        currentIndex--;
        sections[currentIndex].style.transform = "translateY(0)";
    }

    setTimeout(() => {
        isScrolling = false;
    }, 800);
});

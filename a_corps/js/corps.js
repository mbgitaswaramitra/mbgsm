/**
 * Animation Fade in Up
 */

function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated");
      observer.unobserve(entry.target);
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const corpItems = document.querySelectorAll(".gambar-container");

  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    threshold: 0.5,
  });

  corpItems.forEach((item) => {
    observer.observe(item);
  });
});

/**
 * Auto Slideshow
 */
document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll(".slider");

  sliders.forEach((slider) => {
    let currentIndex = 0;
    const images = slider.querySelectorAll("img");
    const totalImages = images.length;

    function showNextImage() {
      currentIndex = (currentIndex + 1) % totalImages;
      slider.style.transform = `translateX(${-currentIndex * 100}%)`;
    }

    setInterval(showNextImage, 1500); // Change image every 3 seconds
  });
});

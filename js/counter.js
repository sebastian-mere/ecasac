document.addEventListener("DOMContentLoaded", function() {
  const section = document.querySelector(".post-catalogo");
  const sectionPosition = section.offsetTop;
  const windowHeight = window.innerHeight;
  const valorElement = document.querySelector(".valor");
  let animated = false;

  window.addEventListener("scroll", function() {
    const screenPosition = window.scrollY;

    if (screenPosition > sectionPosition - windowHeight && !animated) {
      animateCounter(valorElement, 11000);
      animated = true;
    }
  });

  function animateCounter(element, targetValue) {
    let currentValue = 0;
    const duration = 2000;
    const startTime = performance.now();

    function updateCounter(timestamp) {
      const elapsedTime = timestamp - startTime;
      currentValue = Math.min(targetValue, (elapsedTime / duration) * targetValue);
      element.textContent = Math.ceil(currentValue);

      if (elapsedTime < duration) {
        requestAnimationFrame(updateCounter);
      }
    }

    requestAnimationFrame(updateCounter);
  }
});
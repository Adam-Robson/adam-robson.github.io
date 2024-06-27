// script.js
document.addEventListener('DOMContentLoaded', () => {
  const paragraphs = document.querySelectorAll('.item');
  let currentIndex = 0;

  function showNextParagraph() {
    // Hide all paragraphs
    paragraphs.forEach(p => p.classList.remove('active'));

    // Show the current paragraph
    paragraphs[currentIndex].classList.add('active');

    // Move to the next paragraph
    currentIndex = (currentIndex + 1) % paragraphs.length;
  }

  // Show the first paragraph initially
  showNextParagraph();

  // Cycle through the paragraphs every 1.5 seconds
  setInterval(showNextParagraph, 1500);
});

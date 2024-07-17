document.addEventListener('DOMContentLoaded', () => {
  const paragraphs = document.querySelectorAll('.statement');
  let idx = 0;

  const showNextParagraph = () => {
    paragraphs.forEach(paragraph => paragraph.classList.remove('active'));
    paragraphs[idx].classList.add('active');
    idx = (idx + 1) % paragraphs.length;
  };
  
  showNextParagraph();
  setInterval(showNextParagraph, 1500);
});

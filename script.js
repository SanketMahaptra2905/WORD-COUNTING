const textInput = document.getElementById('textInput');
const wordCountDisplay = document.getElementById('wordCount');
const charCountDisplay = document.getElementById('charCount');
const sentenceCountDisplay = document.getElementById('sentenceCount');
const clearButton = document.getElementById('clearButton');

textInput.addEventListener('input', updateCounts);
clearButton.addEventListener('click', clearText);

function updateCounts() {
  const text = textInput.value.trim();
  const charCount = text.length;
  const wordCount = text === '' ? 0 : text.split(/\s+/).length;
  const sentenceCount = text === '' ? 0 : text.split(/[.!?]+/).filter(Boolean).length;

  charCountDisplay.textContent = charCount;
  wordCountDisplay.textContent = wordCount;
  sentenceCountDisplay.textContent = sentenceCount;

  animateStats();
}

function clearText() {
  textInput.value = '';
  updateCounts();
  textInput.focus();
}

function animateStats() {
  document.querySelectorAll('.stat span').forEach(stat => {
    stat.classList.add('animate');
    setTimeout(() => stat.classList.remove('animate'), 300);
  });
}

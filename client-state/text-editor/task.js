const editor = document.getElementById('editor');
let storedText = localStorage.getItem('text');

if (storedText) {
  editor.value = storedText;
} 

editor.addEventListener('input', () => {
  localStorage.setItem('text', editor.value);
  storedText = editor.value;
})

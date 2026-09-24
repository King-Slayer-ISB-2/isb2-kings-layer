const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

function updateButtonText() {
  toggleBtn.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
}

// Ambil pilihan tema yang tersimpan sebelumnya
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
}
updateButtonText();

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem(
    'theme',
    body.classList.contains('dark-mode') ? 'dark' : 'light'
  );
  updateButtonText();
});
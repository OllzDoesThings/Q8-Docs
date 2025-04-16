function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('q8-theme', newTheme);

  const themeIcon = document.getElementById('theme-icon');
  themeIcon.textContent = newTheme === 'light' ? '🌞' : '🌙';
}

// On page load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('q8-theme') || 'dark';
  document.body.setAttribute('data-theme', savedTheme);
  document.getElementById('theme-icon').textContent = savedTheme === 'light' ? '🌞' : '🌙';
});

function filterInstructions(query) {
  const instructions = document.querySelectorAll('.instruction');
  instructions.forEach(ins => {
    const title = ins.querySelector('h3').textContent.toLowerCase();
    const description = ins.querySelector('p').textContent.toLowerCase();
    const lowerQuery = query.toLowerCase();
    if (title.includes(lowerQuery) || description.includes(lowerQuery)) {
      ins.style.display = '';
    } else {
      ins.style.display = 'none';
    }
  });
}

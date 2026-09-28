const toggleButton = document.querySelector('.theme-toggle');
const body = document.body;
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDark) {
  body.classList.add('dark');
  toggleButton.textContent = '☾';
}

toggleButton?.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');
  toggleButton.textContent = isDark ? '☾' : '☼';
});

document.querySelector('.newsletter-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector('button');
  const originalText = button.textContent;
  button.textContent = 'Subscribed';

  setTimeout(() => {
    button.textContent = originalText;
    event.currentTarget.reset();
  }, 1800);
});

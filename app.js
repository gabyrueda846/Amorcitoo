const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const message = document.querySelector('.heart-message');
document.querySelectorAll('.heart-grid button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.heart-grid button').forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    message.textContent = button.dataset.text;
  });
});
document.getElementById('openSecret').addEventListener('click', () => {
  const secret = document.getElementById('secret');
  secret.classList.toggle('show');
  document.getElementById('openSecret').textContent =
    secret.classList.contains('show') ? 'Te amo, mi niño 💙' : 'Abrir mi último mensajito ♡';
});
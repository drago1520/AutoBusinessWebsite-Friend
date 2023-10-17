document.getElementById('scroll-button').addEventListener('click', function() {
  const section = document.getElementById('target-section');
  section.scrollIntoView({ behavior: 'smooth' });
});

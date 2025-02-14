// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');
const themeText = document.getElementById('theme-text');
const themeTextMobile = document.getElementById('theme-text-mobile');
const body = document.body;

const toggleDarkMode = () => {
  body.classList.toggle('dark');
  const isDarkMode = body.classList.contains('dark');
  themeText.innerText = isDarkMode ? 'Light Mode' : 'Dark Mode';
  themeTextMobile.innerText = isDarkMode ? 'Light Mode' : 'Dark Mode';
};

themeToggle.addEventListener('click', toggleDarkMode);
themeToggleMobile.addEventListener('click', toggleDarkMode);

// Scroll to top button
const scrollTopButton = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopButton.classList.remove('hidden');
  } else {
    scrollTopButton.classList.add('hidden');
  }
});

scrollTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
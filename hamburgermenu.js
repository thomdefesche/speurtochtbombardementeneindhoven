document.addEventListener('DOMContentLoaded', function() {
    // Toggle menu popup visibility
    document.querySelectorAll('.hamburger-menu').forEach(function(bar) {
      bar.addEventListener('click', function() {
        document.querySelector('.menu-popup').classList.toggle('active');
      });
    });
  });
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.querySelector('button.hamburger-btn');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
  
    // Toggle the menu visibility when the hamburger button is clicked
    hamburgerBtn.addEventListener('click', () => {
      hamburgerMenu.classList.toggle('show-menu');
      const isOpen = hamburgerMenu.classList.contains('show-menu');
      hamburgerBtn.setAttribute('aria-expanded', isOpen);
    });
  
    // Close the menu if clicked outside of the hamburger menu
    document.addEventListener('click', (event) => {
      if (!hamburgerMenu.contains(event.target) && !hamburgerBtn.contains(event.target)) {
        hamburgerMenu.classList.remove('show-menu');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      }
    });
  
    // Prevent closing the menu when clicking inside the hamburger menu
    hamburgerMenu.addEventListener('click', (event) => {
      event.stopPropagation();
    });
  
    // Close the menu and focus the hamburger button when Escape key is pressed
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && hamburgerMenu.classList.contains('show-menu')) {
        // Close the menu
        hamburgerMenu.classList.remove('show-menu');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        
        // Focus the hamburger button after closing the menu
        hamburgerBtn.focus();
      }
    });
  });  
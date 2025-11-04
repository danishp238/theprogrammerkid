const header = document.querySelector('#header');
const footer = document.querySelector('#footer');

const headerContent = `
<nav class="glitter-bg text-white py-4 sticky top-0 z-50 shadow-lg">
  <div class="container mx-auto px-4 flex justify-between items-center">
    <!-- Logo -->
    <div class="flex items-center flex-shrink-0">
      <a href="index.html" class="flex items-center">
        <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3">
          <span class="text-blue-600 font-bold text-xl">P</span>
        </div>
        <h1 class="text-xl sm:text-2xl font-bold text-glow whitespace-nowrap">TheProgrammerKid</h1>
      </a>
    </div>

    <!-- Hamburger button -->
    <button id="menu-toggle" class="lg:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none">
      <span class="bg-white w-6 h-0.5 mb-1.5 transition-all duration-300" id="bar1"></span>
      <span class="bg-white w-6 h-0.5 mb-1.5 transition-all duration-300" id="bar2"></span>
      <span class="bg-white w-6 h-0.5 transition-all duration-300" id="bar3"></span>
    </button>

    <!-- Desktop Navigation -->
    <div class="hidden lg:flex items-center space-x-8">
      <a href="index.html#topics" class="hover:text-blue-200 transition-colors">Topics</a>
      <a href="privacy-policy.html" class="hover:text-blue-200 transition-colors">Privacy Policy</a>
      <a href="contact.html" class="hover:text-blue-200 transition-colors">Contact</a>
      <a href="about.html" class="hover:text-blue-200 transition-colors">About</a>
      <a href="index.html#topics">
        <button class="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-100 transition-colors">
          Get Started
        </button>
      </a>
    </div>

    <!-- Mobile Menu Overlay -->
    <div id="mobile-menu" class="fixed inset-0 bg-blue-900 bg-opacity-95 z-40 lg:hidden hidden transition-opacity duration-300">
      <div class="flex flex-col items-center justify-center h-full space-y-8">
        <a href="index.html#topics" class="text-2xl font-semibold text-white hover:text-blue-200 transition-colors">Topics</a>
        <a href="privacy-policy.html" class="text-2xl font-semibold text-white hover:text-blue-200 transition-colors">Privacy Policy</a>
        <a href="contact.html" class="text-2xl font-semibold text-white hover:text-blue-200 transition-colors">Contact</a>
        <a href="about.html" class="text-2xl font-semibold text-white hover:text-blue-200 transition-colors">About</a>
        <a href="index.html#topics">
          <button class="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition-colors text-lg mt-4">
            Get Started
          </button>
        </a>
      </div>
      
      <!-- Close button -->
      <button class="absolute top-6 right-6 text-white text-2xl p-2" id="close-menu">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  </div>
</nav>
`;

const footerContent = `
   <div class="container mx-auto px-6">
    <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8">
      <!-- Logo Section - Give it more columns on desktop -->
      <div class="md:col-span-2 lg:col-span-2">
        <div class="flex items-center mb-4">
          <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3 flex-shrink-0">
            <a href="index.html" class="cursor-pointer flex items-center justify-center w-full h-full">
              <span class="text-blue-600 font-bold text-xl">P</span>
            </a>
          </div>
          <a href="index.html">
            <h3 class="text-xl font-bold whitespace-nowrap">TheProgrammerKid</h3>
          </a>
        </div>
        <p class="text-blue-100 mt-2">
          Your comprehensive guide to building and optimizing websites for success.
        </p>
      </div>

      <!-- Resources Section -->
      <div>
        <h4 class="text-lg font-semibold mb-4">Resources</h4>
        <ul class="space-y-2">
          <li><a href="index.html#topics" class="text-blue-100 hover:text-white transition-colors">Tutorials</a></li>
          <li><a href="tools.html" class="text-blue-100 hover:text-white transition-colors">Free Tools</a></li>
        </ul>
      </div>

      <!-- Company Section -->
      <div>
        <h4 class="text-lg font-semibold mb-4">Company</h4>
        <ul class="space-y-2">
          <li><a href="about.html" class="text-blue-100 hover:text-white transition-colors">About Us</a></li>
          <li><a href="contact.html" class="text-blue-100 hover:text-white transition-colors">Contact</a></li>
          <li><a href="privacy-policy.html" class="text-blue-100 hover:text-white transition-colors">Privacy Policy</a></li>
        </ul>
      </div>

      <!-- Newsletter Section -->
      <div class="md:col-span-2 lg:col-span-2">
        <h4 class="text-lg font-semibold mb-4">Stay Connected</h4>
        <p class="text-blue-100 mb-4">Subscribe to our newsletter for the latest updates.</p>
        <form id="newsletter-form" class="flex">
          <input 
            type="email" 
            id="newsletter-email" 
            placeholder="Your email"
            class="bg-white bg-opacity-20 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-white"
            required
          >
          <button
            type="submit"
            id="newsletter-btn"
            class="bg-white text-blue-600 px-4 rounded-r-lg font-semibold hover:bg-blue-100 transition-colors whitespace-nowrap">
            Join
          </button>
        </form>
        <p id="newsletter-message" class="text-green-300 text-sm mt-2 hidden">
          ✅ Thanks for joining! You'll now receive updates.
        </p>
      </div>
    </div>

    <div class="border-t border-blue-400 mt-8 pt-8 text-center text-blue-200">
      <p>&copy; 2025 TheProgrammerKid. All rights reserved.</p>
    </div>
  </div>
`;

// Inject header & footer
header.innerHTML = headerContent;
footer.innerHTML = footerContent;

// Mobile Menu Functionality
function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenu = document.getElementById('close-menu');
  const bars = ['bar1', 'bar2', 'bar3'].map(id => document.getElementById(id));

  function toggleMenu() {
    const isOpen = !mobileMenu.classList.contains('hidden');

    if (isOpen) {
      // Close menu
      mobileMenu.classList.add('hidden');
      document.body.style.overflow = 'auto';
      // Reset hamburger
      bars[0].style.transform = 'none';
      bars[1].style.opacity = '1';
      bars[2].style.transform = 'none';
    } else {
      // Open menu
      mobileMenu.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      // Animate to X
      bars[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
      bars[1].style.opacity = '0';
      bars[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
    }
  }

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', toggleMenu);

    if (closeMenu) {
      closeMenu.addEventListener('click', toggleMenu);
    }

    // Close menu when clicking on links
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', toggleMenu);
    });

    // Close menu when pressing Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
        toggleMenu();
      }
    });
  }
}

// Newsletter Form Handling
function initNewsletterForms() {
  const forms = [
    { formId: "newsletter-form", emailId: "newsletter-email", messageId: "newsletter-message" },
    { formId: "tools-form", emailId: "tools-email", messageId: "tools-message" }
  ];

  forms.forEach(({ formId, emailId, messageId }) => {
    const form = document.getElementById(formId);
    if (!form) return;

    const emailInput = document.getElementById(emailId);
    const message = document.getElementById(messageId);

    form.addEventListener("submit", e => {
      e.preventDefault();
      if (emailInput && emailInput.value.trim() !== "") {
        if (message) message.classList.remove("hidden");
        emailInput.value = "";
        if (message) setTimeout(() => message.classList.add("hidden"), 4000);
      }
    });
  });
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  initMobileMenu();
  initNewsletterForms();
});
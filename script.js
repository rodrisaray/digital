// Fundamental Namespace to avoid polluting global scope
const PortfolioApp = (() => {
  'use strict';

  // 1. Cache DOM Elements for performance and clarity
  const dom = {
    menuToggle: document.querySelector('#menu-toggle'),
    navMenu: document.querySelector('#nav-menu'),
    contactForm: document.querySelector('#contact-form'),
    formStatus: document.querySelector('#form-status'),
    portfolioGrid: document.querySelector('.portfolio-grid'),
    loadMoreBtn: document.querySelector('#load-more-btn'),
    socialShareButtons: document.querySelectorAll('.social-share'),
  };

  // 2. Open and Close Navigation Menu (Open & Room)
  function toggleMenu() {
    if (!dom.navMenu) return;
    dom.navMenu.classList.toggle('active');
  }

  // 3. Validate Contact Form (Give & Address)
  function validateForm(formData) {
    const errors = [];

    if (!formData.name.trim()) {
      errors.push('Name is required.');
    }
    if (!formData.email.trim() || !validateEmail(formData.email)) {
      errors.push('Valid email is required.');
    }
    if (!formData.message.trim()) {
      errors.push('Message cannot be empty.');
    }

    return errors;
  }

  // Simple email regex validator
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }

  // 4. Handle Contact Form Submission (Give & Ability)
  function handleFormSubmit(event) {
    event.preventDefault();

    const formData = {
      name: dom.contactForm.name.value,
      email: dom.contactForm.email.value,
      message: dom.contactForm.message.value,
    };

    const errors = validateForm(formData);

    if (errors.length > 0) {
      displayFormStatus(errors.join(' '), 'error');
      return;
    }

    // Simulate sending data (could integrate with Mailchimp or API)
    displayFormStatus('Sending...', 'info');

    setTimeout(() => {
      displayFormStatus('Thank you for reaching out! We will get back to you soon.', 'success');
      dom.contactForm.reset();
    }, 1500);
  }

  // 5. Display Status Messages (Shine & Give)
  function displayFormStatus(message, status) {
    if (!dom.formStatus) return;

    dom.formStatus.textContent = message;
    dom.formStatus.className = `form-status ${status}`;
  }

  // 6. Load More Portfolio Items (Build & Grow)
  function loadMoreItems() {
    // Placeholder: Fetch or generate new items dynamically
    if (!dom.portfolioGrid) return;

    const newItem = document.createElement('div');
    newItem.className = 'card';
    newItem.innerHTML = `
      <h3>New Project</h3>
      <p>Building and growing the digital presence.</p>
    `;

    dom.portfolioGrid.appendChild(newItem);

    // Optionally disable button after adding
    dom.loadMoreBtn.disabled = true;
    dom.loadMoreBtn.textContent = 'No more items to load';
  }

  // 7. Social Share Buttons Handler (Social & Give)
  function handleSocialShare(event) {
    event.preventDefault();
    const platform = event.currentTarget.dataset.platform;
    const url = encodeURIComponent(window.location.href);
    let shareUrl = '';

    switch(platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?url=${url}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, '_blank', 'width=600,height=400');
  }

  // 8. Initialization: Bind Event Listeners (Build)
  function init() {
    if (dom.menuToggle) {
      dom.menuToggle.addEventListener('click', toggleMenu);
    }

    if (dom.contactForm) {
      dom.contactForm.addEventListener('submit', handleFormSubmit);
    }

    if (dom.loadMoreBtn) {
      dom.loadMoreBtn.addEventListener('click', loadMoreItems);
    }

    if (dom.socialShareButtons.length > 0) {
      dom.socialShareButtons.forEach(button => {
        button.addEventListener('click', handleSocialShare);
      });
    }
  }

  // 9. Public API (if needed)
  return {
    init,
  };
})();

// Initialize the portfolio app when DOM is ready
document.addEventListener('DOMContentLoaded', PortfolioApp.init);

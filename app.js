/**
 * SCHOOLO — B2B SaaS Marketing Website JavaScript
 * Handles interactive navigation, modal triggers, tab switching,
 * contact form submission, and scroll animations.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header scroll effect
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile Navigation Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // 3. Modal Overlay Logic (Demo, Privacy, Terms, Security)
  function setupModal(triggerClass, modalId) {
    const modal = document.getElementById(modalId);
    const triggers = document.querySelectorAll(`.${triggerClass}`);
    if (!modal) return;

    triggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      });
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  setupModal('js-open-demo-modal', 'demoModal');
  setupModal('js-open-privacy', 'privacyModal');
  setupModal('js-open-terms', 'termsModal');
  setupModal('js-open-security', 'securityModal');

  // 4. Solutions Tier Tabs Switching
  const tabBtns = document.querySelectorAll('.tab-btn');
  const featureBlocks = document.querySelectorAll('.feature-block');

  tabBtns.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTier = tab.getAttribute('data-tier');
      
      // Update active tab button
      tabBtns.forEach(b => b.classList.remove('active'));
      tab.classList.add('active');

      // Filter or highlight feature blocks
      featureBlocks.forEach(block => {
        const blockTier = block.getAttribute('data-tier');
        if (targetTier === 'all' || blockTier === targetTier) {
          block.style.display = 'grid';
          block.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          block.style.display = 'none';
        }
      });
    });
  });

  // 5. Contact / Demo Request Form Handler
  const contactForm = document.getElementById('demoForm');
  const modalDemoForm = document.getElementById('modalDemoForm');

  function handleFormSubmit(formElement) {
    if (!formElement) return;

    formElement.addEventListener('submit', (e) => {
      e.preventDefault();

      const submitBtn = formElement.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      // Show submitting state
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="spinner" width="20" height="20" viewBox="0 0 50 50" style="animation: spin 1s linear infinite;">
          <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" stroke-width="5" stroke-dasharray="80" stroke-dashoffset="60"></circle>
        </svg> Sending Request...
      `;

      setTimeout(() => {
        // Show success state
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        
        const successMsg = formElement.querySelector('.form-success-msg') || document.createElement('div');
        successMsg.className = 'form-success-msg';
        const refId = 'SCH-' + Math.floor(100000 + Math.random() * 900000);
        successMsg.innerHTML = `
          <strong>🎉 Request Submitted Successfully!</strong><br>
          Thank you! Our school system specialist will reach out within 24 hours.<br>
          <small>Ref: <strong>${refId}</strong></small>
        `;
        successMsg.style.display = 'block';

        if (!formElement.contains(successMsg)) {
          formElement.appendChild(successMsg);
        }

        formElement.reset();
      }, 1200);
    });
  }

  handleFormSubmit(contactForm);
  handleFormSubmit(modalDemoForm);

  // 6. Smooth scroll & real-time URL hash update on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  let isScrollingByClick = false;

  function updateScrollState() {
    let current = '';
    const scrollPosition = window.scrollY + 140;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    // Update active navbar link
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (current && link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });

    // Dynamically update URL hash quickly without reloading or scroll jumps
    if (current && !isScrollingByClick) {
      const newHash = `#${current}`;
      if (window.location.hash !== newHash) {
        history.replaceState(null, '', newHash);
      }
    }
  }

  // Fast real-time scroll tracking
  window.addEventListener('scroll', () => {
    requestAnimationFrame(updateScrollState);
  }, { passive: true });

  // Smooth scroll click handler for all hash links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#' || !targetId.startsWith('#')) return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        isScrollingByClick = true;

        // Update URL hash immediately on click
        history.replaceState(null, '', targetId);

        // Highlight nav link
        navLinks.forEach(link => link.classList.remove('active'));
        if (this.classList.contains('nav-link')) {
          this.classList.add('active');
        }

        const offsetTop = targetElement.offsetTop - 85;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });

        setTimeout(() => {
          isScrollingByClick = false;
        }, 600);
      }
    });
  });
});

// Keyframe animation for spinner
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(styleSheet);

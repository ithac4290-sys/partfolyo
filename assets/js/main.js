/**
* Template Name: Workfolio
* Template URL: https://bootstrapmade.com/workfolio-bootstrap-portfolio-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader) return;
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    }
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active') && !navmenu.classList.contains('toggle-dropdown')) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  if (scrollTop) {
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate Pure Counter with Fallback
   */
  function initCounters() {
    if (typeof PureCounter !== 'undefined') {
      new PureCounter();
    } else {
      // Fallback simple counter
      const counters = document.querySelectorAll('.purecounter');
      counters.forEach(counter => {
        const end = parseInt(counter.getAttribute('data-purecounter-end') || '0', 10);
        counter.textContent = end;
      });
    }
  }
  window.addEventListener('load', initCounters);

  /**
   * Animate the skills items on reveal
   */
  function initSkills() {
    let skillsAnimation = document.querySelectorAll('.skills-animation');
    if (typeof Waypoint !== 'undefined') {
      skillsAnimation.forEach((item) => {
        new Waypoint({
          element: item,
          offset: '80%',
          handler: function(direction) {
            let progress = item.querySelectorAll('.progress .progress-bar');
            progress.forEach(el => {
              el.style.width = el.getAttribute('aria-valuenow') + '%';
            });
          }
        });
      });
    } else {
      // Fallback with IntersectionObserver
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            let progress = entry.target.querySelectorAll('.progress .progress-bar');
            progress.forEach(el => {
              el.style.width = el.getAttribute('aria-valuenow') + '%';
            });
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });

      skillsAnimation.forEach(item => observer.observe(item));
    }
  }
  window.addEventListener('load', initSkills);

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    if (typeof Swiper !== 'undefined') {
      document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
        const configElem = swiperElement.querySelector(".swiper-config");
        if (configElem) {
          let config = JSON.parse(configElem.innerHTML.trim());
          new Swiper(swiperElement, config);
        }
      });
    }
  }
  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop || '0'),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    });
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

  /**
   * Working PHP-Email-Form with Golang Backend Integration & Admin Inbox Sync
   */
  const emailForms = document.querySelectorAll('.php-email-form');
  emailForms.forEach(form => {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();

      const loading = form.querySelector('.loading');
      const errorMessage = form.querySelector('.error-message');
      const sentMessage = form.querySelector('.sent-message');

      if (errorMessage) errorMessage.style.display = 'none';
      if (sentMessage) sentMessage.style.display = 'none';
      if (loading) loading.style.display = 'block';

      // Input validation check
      const nameInput = form.querySelector('[name="name"]');
      const emailInput = form.querySelector('[name="email"]');
      const subjectInput = form.querySelector('[name="subject"]');
      const messageInput = form.querySelector('[name="message"]');

      const payload = {
        name: nameInput ? nameInput.value.trim() : '',
        email: emailInput ? emailInput.value.trim() : '',
        subject: subjectInput ? subjectInput.value.trim() : 'Murojaat',
        message: messageInput ? messageInput.value.trim() : ''
      };

      if (!payload.name || !payload.email || !payload.message) {
        if (loading) loading.style.display = 'none';
        if (errorMessage) {
          errorMessage.textContent = 'Iltimos, barcha maydonlarni to\'ldiring.';
          errorMessage.style.display = 'block';
        }
        return;
      }

      try {
        // 1. Send to Golang Backend API
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (loading) loading.style.display = 'none';

        if (response.ok && (data.success || !data.error)) {
          if (sentMessage) {
            sentMessage.textContent = data.message || 'Xabaringiz muvaffaqiyatli qabul qilindi. Rahmat!';
            sentMessage.style.display = 'block';
          }
          form.reset();

          // Also save locally as offline cache
          try {
            const rawMessages = localStorage.getItem('workfolio_messages');
            const messages = rawMessages ? JSON.parse(rawMessages) : [];
            messages.unshift({
              id: data.id || ('msg_' + Date.now()),
              name: payload.name,
              email: payload.email,
              subject: payload.subject,
              message: payload.message,
              date: new Date().toLocaleString(),
              unread: true
            });
            localStorage.setItem('workfolio_messages', JSON.stringify(messages));
          } catch (e) {}

          setTimeout(() => {
            if (sentMessage) sentMessage.style.display = 'none';
          }, 6000);
        } else {
          if (errorMessage) {
            errorMessage.textContent = data.error || 'Xatolik yuz berdi. Iltimos qaytadan urinib ko\'ring.';
            errorMessage.style.display = 'block';
          }
        }
      } catch (err) {
        console.warn('Backend contact error, fallbacking to client storage:', err);
        if (loading) loading.style.display = 'none';
        
        // Offline / client fallback
        try {
          const rawMessages = localStorage.getItem('workfolio_messages');
          const messages = rawMessages ? JSON.parse(rawMessages) : [];
          messages.unshift({
            id: 'msg_' + Date.now(),
            name: payload.name,
            email: payload.email,
            subject: payload.subject,
            message: payload.message,
            date: new Date().toLocaleString(),
            unread: true
          });
          localStorage.setItem('workfolio_messages', JSON.stringify(messages));
        } catch (e) {}

        if (sentMessage) {
          sentMessage.textContent = 'Xabaringiz qabul qilindi. Rahmat!';
          sentMessage.style.display = 'block';
        }
        form.reset();
        setTimeout(() => {
          if (sentMessage) sentMessage.style.display = 'none';
        }, 6000);
      }
    });
  });

  // Track page visit in Golang backend
  try {
    fetch('/api/stats/visit', { method: 'POST' }).catch(() => {});
  } catch(e) {}

  /**
   * -------------------------------------------------------------
   * Secret Admin Panel Access (Yashirin Admin Panelga Kirish)
   * 1. Hotkey: Ctrl + Shift + A yoki Alt + A
   * 2. Secret Typing: Klaviaturada ketma-ket "admin" deb yozish
   * 3. Secret Triple-Click: Logotip yoki footer © belgisini 3 marta tez bosish
   * -------------------------------------------------------------
   */
  (function initSecretAdminAccess() {
    let secretBuffer = '';
    const secretWord = 'admin';

    // 1. Klaviaturadagi maxfiy tugmalar va 'admin' so'zi
    window.addEventListener('keydown', (e) => {
      const tag = (e.target.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea' || e.target.isContentEditable) {
        return;
      }

      // Hotkey: Ctrl + Shift + A yoki Alt + A
      if ((e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) ||
          (e.altKey && (e.key === 'a' || e.key === 'A'))) {
        e.preventDefault();
        window.location.href = '/admin';
        return;
      }

      // Maxfiy so'z: 'admin'
      if (e.key && e.key.length === 1) {
        secretBuffer += e.key.toLowerCase();
        if (secretBuffer.length > 10) {
          secretBuffer = secretBuffer.slice(-10);
        }
        if (secretBuffer.endsWith(secretWord)) {
          secretBuffer = '';
          window.location.href = '/admin';
        }
      }
    });

    // 2. Logotip yoki © belgisini ketma-ket 3 marta bosish
    let clickCount = 0;
    let clickTimer = null;

    function handleSecretTripleClick(e) {
      clickCount++;
      clearTimeout(clickTimer);
      if (clickCount >= 3) {
        clickCount = 0;
        e.preventDefault();
        window.location.href = '/admin';
        return;
      }
      clickTimer = setTimeout(() => {
        clickCount = 0;
      }, 800);
    }

    document.querySelectorAll('.logo, .logo img, .sitename, .copyright, .copyright strong, .copyright p').forEach(el => {
      el.addEventListener('click', handleSecretTripleClick);
    });
  })();

})();

// Logo Image Handler
const logoImages = document.querySelectorAll('.logo-image');
logoImages.forEach(img => {
  const logoText = img.nextElementSibling;
  
  // Handle image load error - hide image, show text
  img.addEventListener('error', function() {
    this.classList.add('error');
    this.style.display = 'none';
    
    if (logoText && logoText.classList.contains('logo-text')) {
      logoText.classList.remove('hide-when-image-loaded');
      logoText.style.display = 'flex';
    }
  });
  
  // Handle successful image load - hide text on mobile
  img.addEventListener('load', function() {
    this.classList.remove('error');
    this.style.display = 'block';
    
    if (logoText && logoText.classList.contains('logo-text')) {
      // Hide text on mobile, show on desktop
      if (window.innerWidth < 640) {
        logoText.classList.add('hide-when-image-loaded');
      } else {
        logoText.classList.remove('hide-when-image-loaded');
      }
    }
  });
  
  // Check if image is already loaded on page load
  if (img.complete) {
    if (img.naturalHeight !== 0 && img.naturalWidth !== 0) {
      // Image loaded successfully
      img.classList.remove('error');
      img.style.display = 'block';
      if (logoText && logoText.classList.contains('logo-text')) {
        if (window.innerWidth < 640) {
          logoText.classList.add('hide-when-image-loaded');
        } else {
          logoText.classList.remove('hide-when-image-loaded');
        }
      }
    } else {
      // Image failed to load
      img.classList.add('error');
      img.style.display = 'none';
      if (logoText && logoText.classList.contains('logo-text')) {
        logoText.classList.remove('hide-when-image-loaded');
        logoText.style.display = 'flex';
      }
    }
  }
  
  // Handle window resize
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      if (!img.classList.contains('error')) {
        if (logoText && logoText.classList.contains('logo-text')) {
          if (window.innerWidth < 640) {
            logoText.classList.add('hide-when-image-loaded');
          } else {
            logoText.classList.remove('hide-when-image-loaded');
          }
        }
      }
    }, 250);
  });
});

// Gallery Images Data - Using local camp images
const galleryImages = [
  {
    src: "src/assets/camp_image/IMG-20251207-WA0000.jpg",
    alt: "مخيم الملفى",
    category: "المخيم"
  },
  {
    src: "src/assets/camp_image/IMG-20251207-WA0001.jpg",
    alt: "مخيم الملفى",
    category: "المخيم"
  },
  {
    src: "src/assets/camp_image/IMG-20251207-WA0002.jpg",
    alt: "مخيم الملفى",
    category: "المخيم"
  },
  {
    src: "src/assets/camp_image/IMG-20251207-WA0003.jpg",
    alt: "مخيم الملفى",
    category: "المخيم"
  },
  {
    src: "src/assets/camp_image/IMG-20251207-WA0004.jpg",
    alt: "مخيم الملفى",
    category: "المخيم"
  },
  {
    src: "src/assets/camp_image/IMG-20251207-WA0005.jpg",
    alt: "مخيم الملفى",
    category: "المخيم"
  },
  {
    src: "src/assets/camp_image/IMG-20251207-WA0006.jpg",
    alt: "مخيم الملفى",
    category: "المخيم"
  },
  {
    src: "src/assets/camp_image/IMG-20251207-WA0007.jpg",
    alt: "مخيم الملفى",
    category: "المخيم"
  }
];

// Header Scroll Effect
const header = document.getElementById('header');
if (header) {
  const isHomePage = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50 || !isHomePage) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Set initial state
  if (window.scrollY > 50 || !isHomePage) {
    header.classList.add('scrolled');
  }
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const mobileMenuCloseBtn = document.getElementById('mobileMenuCloseBtn');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');

function openMobileMenu() {
  if (mobileMenu) {
    mobileMenu.classList.add('active');
    // Force fixed positioning
    mobileMenu.style.position = 'fixed';
    mobileMenu.style.top = '0';
    mobileMenu.style.right = '0';
    mobileMenu.style.bottom = '0';
    mobileMenu.style.left = 'auto';
    mobileMenu.style.zIndex = '9999';
  }
  if (mobileMenuOverlay) {
    mobileMenuOverlay.classList.add('active');
    mobileMenuOverlay.style.position = 'fixed';
    mobileMenuOverlay.style.zIndex = '9998';
  }
  if (menuIcon) menuIcon.style.display = 'none';
  if (closeIcon) closeIcon.style.display = 'block';
  // Add class to body to prevent scroll
  document.body.classList.add('menu-open');
  // Prevent body scroll
  const scrollY = window.scrollY;
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';
  document.body.style.top = `-${scrollY}px`;
  // Store scroll position
  document.body.dataset.scrollY = scrollY.toString();
}

function closeMobileMenu() {
  if (mobileMenu) {
    mobileMenu.classList.remove('active');
    // Reset positioning
    mobileMenu.style.position = '';
    mobileMenu.style.top = '';
    mobileMenu.style.right = '';
    mobileMenu.style.bottom = '';
    mobileMenu.style.left = '';
    mobileMenu.style.zIndex = '';
  }
  if (mobileMenuOverlay) {
    mobileMenuOverlay.classList.remove('active');
    mobileMenuOverlay.style.position = '';
    mobileMenuOverlay.style.zIndex = '';
  }
  if (menuIcon) menuIcon.style.display = 'block';
  if (closeIcon) closeIcon.style.display = 'none';
  // Remove class from body
  document.body.classList.remove('menu-open');
  // Restore body scroll
  const scrollY = document.body.dataset.scrollY || '0';
  document.body.style.overflow = '';
  document.body.style.position = '';
  document.body.style.width = '';
  document.body.style.top = '';
  delete document.body.dataset.scrollY;
  // Restore scroll position
  window.scrollTo(0, parseInt(scrollY));
}

if (mobileMenuBtn && mobileMenu) {
  // Prevent scroll when menu is open
  let scrollPosition = 0;
  
  mobileMenuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('active');
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });
  
  // Close menu when clicking on overlay
  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', () => {
      closeMobileMenu();
    });
    
    // Prevent scroll on overlay
    mobileMenuOverlay.addEventListener('touchmove', (e) => {
      if (mobileMenuOverlay.classList.contains('active')) {
        e.preventDefault();
      }
    }, { passive: false });
  }
  
  // Close menu when clicking on close button
  if (mobileMenuCloseBtn) {
    mobileMenuCloseBtn.addEventListener('click', () => {
      closeMobileMenu();
    });
  }
  
  // Prevent body scroll when menu is open
  document.addEventListener('touchmove', (e) => {
    if (mobileMenu && mobileMenu.classList.contains('active')) {
      // Allow scroll only inside mobile menu
      if (!mobileMenu.contains(e.target)) {
        e.preventDefault();
      }
    }
  }, { passive: false });
  
  // Prevent wheel scroll when menu is open
  document.addEventListener('wheel', (e) => {
    if (mobileMenu && mobileMenu.classList.contains('active')) {
      // Allow scroll only inside mobile menu
      if (!mobileMenu.contains(e.target)) {
        e.preventDefault();
      }
    }
  }, { passive: false });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (mobileMenu && mobileMenu.classList.contains('active')) {
      if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target) && (!mobileMenuOverlay || !mobileMenuOverlay.contains(e.target))) {
        closeMobileMenu();
      }
    }
  });
  
  // Close menu when clicking on menu links
  const menuLinks = mobileMenu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });
  
  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
      closeMobileMenu();
    }
  });
}

// Initialize Gallery with auto-rotating images
let currentImageIndex = 0;
let displayedImages = [];
let galleryCarouselInterval;
const galleryGrid = document.getElementById('galleryGrid');

// Function to create gallery items
function createGalleryItem(image, index) {
  const item = document.createElement('div');
  item.className = 'gallery-item';
  item.setAttribute('data-index', index);
  
  item.innerHTML = `
    <img src="${image.src}" alt="${image.alt}" loading="lazy" />
    <div class="gallery-overlay">
      <div class="gallery-info">
        <span class="gallery-category">${image.category}</span>
        <p class="gallery-title font-cairo">${image.alt}</p>
      </div>
    </div>
  `;
  
  item.addEventListener('click', () => {
    currentImageIndex = index;
    openLightbox();
  });
  
  return item;
}

// Function to calculate total pages (each page shows 6 images)
function getTotalPages() {
  return Math.ceil(galleryImages.length / 6);
}

// Function to get current page index
function getCurrentPageIndex(startIndex) {
  return Math.floor(startIndex / 6);
}

// Function to create gallery dots
function createGalleryDots() {
  const galleryDots = document.getElementById('galleryDots');
  if (!galleryDots) return;
  
  galleryDots.innerHTML = '';
  const totalPages = getTotalPages();
  
  for (let i = 0; i < totalPages; i++) {
    const dot = document.createElement('button');
    dot.className = 'gallery-dot';
    dot.setAttribute('aria-label', `انتقل إلى الصفحة ${i + 1}`);
    dot.setAttribute('data-page', i);
    
    dot.addEventListener('click', () => {
      currentGalleryStartIndex = i * 6;
      displayGalleryImages(currentGalleryStartIndex);
      updateGalleryDots();
    });
    
    galleryDots.appendChild(dot);
  }
  
  updateGalleryDots();
}

// Function to update active dot
function updateGalleryDots() {
  const dots = document.querySelectorAll('.gallery-dot');
  const currentPage = getCurrentPageIndex(currentGalleryStartIndex);
  
  dots.forEach((dot, index) => {
    if (index === currentPage) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Function to display images (shows 6 images at a time)
function displayGalleryImages(startIndex = 0) {
  if (!galleryGrid) return;
  
  // Update current index
  currentGalleryStartIndex = startIndex;
  
  // Fade out current images
  galleryGrid.style.opacity = '0';
  
  setTimeout(() => {
    galleryGrid.innerHTML = '';
    displayedImages = [];
    
    // Display 6 images starting from startIndex
    for (let i = 0; i < 6 && i < galleryImages.length; i++) {
      const imageIndex = (startIndex + i) % galleryImages.length;
      const item = createGalleryItem(galleryImages[imageIndex], imageIndex);
      galleryGrid.appendChild(item);
      displayedImages.push(imageIndex);
    }
    
    // Fade in new images
    galleryGrid.style.opacity = '1';
    
    // Update dots
    updateGalleryDots();
    
    // Re-initialize gallery observer for new items
    initializeGalleryObserver();
  }, 300); // Wait for fade out
}

// Initialize gallery observer for animations
function initializeGalleryObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const galleryObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe new gallery items
  document.querySelectorAll('.gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    galleryObserver.observe(el);
  });
}

// Manual gallery navigation
let currentGalleryStartIndex = 0;

function showNextGalleryImages() {
  const totalPages = getTotalPages();
  const currentPage = getCurrentPageIndex(currentGalleryStartIndex);
  const nextPage = (currentPage + 1) % totalPages;
  currentGalleryStartIndex = nextPage * 6;
  displayGalleryImages(currentGalleryStartIndex);
}

function showPreviousGalleryImages() {
  const totalPages = getTotalPages();
  const currentPage = getCurrentPageIndex(currentGalleryStartIndex);
  const prevPage = (currentPage - 1 + totalPages) % totalPages;
  currentGalleryStartIndex = prevPage * 6;
  displayGalleryImages(currentGalleryStartIndex);
}

// Initialize gallery on page load
if (galleryGrid) {
  displayGalleryImages(0);
  createGalleryDots();
  
  // Add navigation buttons event listeners
  const galleryPrevBtn = document.getElementById('galleryPrev');
  const galleryNextBtn = document.getElementById('galleryNext');
  
  if (galleryPrevBtn) {
    galleryPrevBtn.addEventListener('click', showPreviousGalleryImages);
  }
  
  if (galleryNextBtn) {
    galleryNextBtn.addEventListener('click', showNextGalleryImages);
  }
}

// Gallery Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxVideo = document.getElementById('lightboxVideo');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

function openLightbox() {
  if (lightbox && lightboxImage && lightboxCaption && lightboxVideo) {
    // Hide video, show image
    lightboxVideo.style.display = 'none';
    lightboxImage.style.display = 'block';
    lightboxImage.src = galleryImages[currentImageIndex].src;
    lightboxImage.alt = galleryImages[currentImageIndex].alt;
    lightboxCaption.textContent = galleryImages[currentImageIndex].alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    // Show navigation buttons for images
    if (lightboxPrev) lightboxPrev.style.display = 'flex';
    if (lightboxNext) lightboxNext.style.display = 'flex';
  }
}

function closeLightbox() {
  if (lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    // Pause video if playing
    if (lightboxVideo) {
      lightboxVideo.pause();
      lightboxVideo.currentTime = 0;
    }
  }
}

// Function to open video in lightbox
function openVideoLightbox(videoSrc) {
  if (lightbox && lightboxVideo && lightboxImage) {
    // Hide image, show video
    lightboxImage.style.display = 'none';
    lightboxVideo.style.display = 'block';
    lightboxVideo.src = videoSrc;
    lightboxCaption.textContent = 'مخيم الملفى - ALMELFA Camp';
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    // Hide navigation buttons for video
    if (lightboxPrev) lightboxPrev.style.display = 'none';
    if (lightboxNext) lightboxNext.style.display = 'none';
  }
}

function goToPrevious() {
  currentImageIndex = currentImageIndex === 0 ? galleryImages.length - 1 : currentImageIndex - 1;
  if (lightboxImage && lightboxCaption) {
    lightboxImage.src = galleryImages[currentImageIndex].src;
    lightboxImage.alt = galleryImages[currentImageIndex].alt;
    lightboxCaption.textContent = galleryImages[currentImageIndex].alt;
  }
}

function goToNext() {
  currentImageIndex = currentImageIndex === galleryImages.length - 1 ? 0 : currentImageIndex + 1;
  if (lightboxImage && lightboxCaption) {
    lightboxImage.src = galleryImages[currentImageIndex].src;
    lightboxImage.alt = galleryImages[currentImageIndex].alt;
    lightboxCaption.textContent = galleryImages[currentImageIndex].alt;
  }
}

if (lightboxClose) {
  lightboxClose.addEventListener('click', closeLightbox);
}

if (lightboxPrev) {
  lightboxPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    goToPrevious();
  });
}

if (lightboxNext) {
  lightboxNext.addEventListener('click', (e) => {
    e.stopPropagation();
    goToNext();
  });
}

if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
  if (lightbox && lightbox.classList.contains('active')) {
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight' && lightboxImage && lightboxImage.style.display !== 'none') {
      goToNext();
    } else if (e.key === 'ArrowLeft' && lightboxImage && lightboxImage.style.display !== 'none') {
      goToPrevious();
    }
  }
});

// Watch Video Button Handler
const watchVideoBtn = document.getElementById('watchVideoBtn');
if (watchVideoBtn) {
  watchVideoBtn.addEventListener('click', () => {
    openVideoLightbox('src/assets/videos/1000321006.mp4');
  });
}


// Payment Method Select Handler
const paymentMethodSelect = document.getElementById('paymentMethod');
if (paymentMethodSelect) {
  paymentMethodSelect.addEventListener('change', function(e) {
    if (e.target.value) {
      e.target.classList.remove('error');
      // Add visual feedback
      e.target.style.borderColor = 'hsl(var(--accent))';
      setTimeout(() => {
        e.target.style.borderColor = '';
      }, 500);
    } else {
      e.target.classList.add('error');
    }
  });
  
  // Add focus styles
  paymentMethodSelect.addEventListener('focus', function(e) {
    e.target.parentElement.classList.add('focused');
  });
  
  paymentMethodSelect.addEventListener('blur', function(e) {
    e.target.parentElement.classList.remove('focused');
  });
  
  // Validate on page load if value exists
  if (paymentMethodSelect.value) {
    paymentMethodSelect.classList.remove('error');
  }
}


// Booking Form
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
  const whatsappNumber = "971508911089";
  
  bookingForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
      name: document.getElementById('name').value.trim(),
      phone: document.getElementById('phone').value.trim(),
      date: document.getElementById('date').value,
      guests: document.getElementById('guests').value || 'غير محدد',
      paymentMethod: document.getElementById('paymentMethod').value,
      message: document.getElementById('message').value.trim() || 'لا يوجد'
    };
    
    // Validate required fields with better feedback
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const dateInput = document.getElementById('date');
    const paymentInput = document.getElementById('paymentMethod');
    
    let hasError = false;
    
    if (!formData.name) {
      nameInput.classList.add('error');
      nameInput.focus();
      hasError = true;
    } else {
      nameInput.classList.remove('error');
    }
    
    if (!formData.phone) {
      phoneInput.classList.add('error');
      if (!hasError) phoneInput.focus();
      hasError = true;
    } else {
      phoneInput.classList.remove('error');
    }
    
    if (!formData.date) {
      dateInput.classList.add('error');
      if (!hasError) dateInput.focus();
      hasError = true;
    } else {
      dateInput.classList.remove('error');
    }
    
    if (!formData.paymentMethod) {
      paymentInput.classList.add('error');
      if (!hasError) paymentInput.focus();
      hasError = true;
    } else {
      paymentInput.classList.remove('error');
    }
    
    // Validate phone number format (UAE format)
    if (formData.phone && !/^(0|971)?[0-9]{9}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      phoneInput.classList.add('error');
      alert('يرجى إدخال رقم هاتف صحيح (مثال: 0501234567)');
      phoneInput.focus();
      return;
    }
    
    if (hasError) {
      alert('يرجى ملء جميع الحقول المطلوبة');
      return;
    }
    
    // Map payment method to Arabic text
    const paymentMethods = {
      'cash': 'نقداً',
      'card': 'بطاقة بنكية',
      'transfer': 'تحويل بنكي'
    };
    
    // Show loading state
    const submitButton = bookingForm.querySelector('button[type="submit"]');
    const submitText = submitButton.querySelector('.submit-text');
    const submitIcon = submitButton.querySelector('.submit-icon');
    const submitSpinner = submitButton.querySelector('.submit-spinner');
    
    submitButton.disabled = true;
    if (submitText) submitText.textContent = 'جاري الإرسال...';
    if (submitIcon) submitIcon.style.display = 'none';
    if (submitSpinner) {
      submitSpinner.style.display = 'block';
      submitSpinner.style.animation = 'spin 1s linear infinite';
    }
    
    try {
      // Create WhatsApp message with UTF-8 supported emojis
      const messageParts = [
        '🏕️ طلب حجز جديد - مخيم الملفى',
        '',
        `👤 الاسم: ${formData.name}`,
        `📞 رقم الهاتف: ${formData.phone}`,
        `📅 التاريخ المطلوب: ${formData.date}`,
        `👥 عدد الأشخاص: ${formData.guests}`,
        `💳 طريقة الدفع: ${paymentMethods[formData.paymentMethod] || formData.paymentMethod}`,
        '',
        `📝 ملاحظات:`,
        formData.message
      ];
      
      // Join and encode the message
      const message = messageParts.join('\n');
      
      // Open WhatsApp - encode the entire message
      // Detect iOS devices (including iPad on iOS 13+)
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      
      // Build WhatsApp URL - use api.whatsapp.com for better iOS compatibility
      const whatsappUrl = isIOS 
        ? `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`
        : `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      
      // Reset form first
      bookingForm.reset();
      
      // On iOS, use location.href to ensure WhatsApp app opens properly
      // On Android and desktop, use window.open to keep the page open
      if (isIOS) {
        // Show success message first
        alert('تم إرسال الطلب! سيتم فتح تطبيق الواتساب الآن.');
        
        // Use setTimeout to ensure alert is shown before navigation
        setTimeout(() => {
          window.location.href = whatsappUrl;
        }, 300);
      } else {
        // For Android and desktop
        window.open(whatsappUrl, '_blank');
        
        // Show success message
        alert('تم إرسال الطلب! سيتم التواصل معك قريباً عبر الواتساب.');
      }
    } catch (error) {
      console.error('Error in form submission:', error);
      alert('حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة عبر الواتساب.');
    } finally {
      // Restore button
      submitButton.disabled = false;
      if (submitText) submitText.textContent = 'إرسال طلب الحجز عبر واتساب';
      if (submitIcon) submitIcon.style.display = 'block';
      if (submitSpinner) {
        submitSpinner.style.display = 'none';
        submitSpinner.style.animation = '';
      }
    }
  });
}

// Set minimum date to today
const dateInput = document.getElementById('date');
if (dateInput) {
  const today = new Date().toISOString().split('T')[0];
  dateInput.setAttribute('min', today);
}

// Update copyright year
const currentYearElement = document.getElementById('currentYear');
if (currentYearElement) {
  currentYearElement.textContent = new Date().getFullYear();
}

// Update copyright year for booking page
const bookingCurrentYearElement = document.getElementById('bookingCurrentYear');
if (bookingCurrentYearElement) {
  bookingCurrentYearElement.textContent = new Date().getFullYear();
}

// Automatic crossfade between day and night images
const heroBgDay = document.querySelector('.hero-bg-day');
const heroBgNight = document.querySelector('.hero-bg-night');
const heroSection = document.querySelector('.hero-section');

if (heroBgDay && heroBgNight && heroSection) {
  let isDay = true;
  let crossfadeInterval;
  
  // Parallax effect on scroll (original effect)
  let ticking = false;
  const updateParallax = () => {
    const scrolled = window.scrollY;
    heroBgDay.style.transform = `translateY(${scrolled * 0.4}px) scale(1.1)`;
    heroBgNight.style.transform = `translateY(${scrolled * 0.4}px) scale(1.1)`;
    ticking = false;
  };
  
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  });
  
  // Automatic crossfade function
  const crossfade = () => {
    if (isDay) {
      // Fade from day to night
      heroBgDay.style.opacity = '0';
      heroBgNight.style.opacity = '1';
      isDay = false;
    } else {
      // Fade from night to day
      heroBgDay.style.opacity = '1';
      heroBgNight.style.opacity = '0';
      isDay = true;
    }
  };
  
  // Start automatic crossfade (change every 5 seconds)
  const startCrossfade = () => {
    crossfadeInterval = setInterval(crossfade, 5000); // 5 seconds between transitions
  };
  
  // Initialize - ensure day image is visible
  heroBgDay.style.opacity = '1';
  heroBgNight.style.opacity = '0';
  updateParallax();
  
  // Start crossfade after page load
  const initCrossfade = () => {
    setTimeout(() => {
      startCrossfade();
    }, 1500); // Start after 1.5 seconds
  };
  
  if (document.readyState === 'complete') {
    initCrossfade();
  } else {
    window.addEventListener('load', initCrossfade);
  }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href !== '#!') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
});

// Add animation on scroll with staggered effect
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const featureObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Staggered animation - each card appears with a delay
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 100); // 100ms delay between each card
      featureObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe feature cards with staggered animation
document.querySelectorAll('.feature-card').forEach((el, index) => {
  featureObserver.observe(el);
});

// Gallery observer is now initialized dynamically in initializeGalleryObserver()

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
  // Show/hide button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  // Scroll to top when button is clicked
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', function() {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    const answer = this.nextElementSibling;
    
    // Close all other FAQ items
    document.querySelectorAll('.faq-question').forEach(q => {
      if (q !== this) {
        q.setAttribute('aria-expanded', 'false');
        q.nextElementSibling.style.maxHeight = '0';
        q.nextElementSibling.style.padding = '0 1.5rem';
      }
    });
    
    // Toggle current item
    this.setAttribute('aria-expanded', !isExpanded);
    if (!isExpanded) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      answer.style.padding = '0 1.5rem 1.5rem';
    } else {
      answer.style.maxHeight = '0';
      answer.style.padding = '0 1.5rem';
    }
  });
});

// Testimonials Data (includes Google Reviews)
const testimonials = [
  {
    rating: 5,
    text: "تجربة رائعة! المخيم نظيف والخدمة ممتازة. أنصح الجميع بزيارته.",
    author: "أحمد محمد",
    location: "دبي",
    source: "local"
  },
  {
    rating: 5,
    text: "أجواء عائلية هادئة ومريحة. المدفئة التقليدية كانت رائعة.",
    author: "فاطمة علي",
    location: "أبوظبي",
    source: "local"
  },
  {
    rating: 5,
    text: "مكان مثالي للاسترخاء والاستمتاع مع العائلة. سنعود مرة أخرى.",
    author: "خالد سعيد",
    location: "رأس الخيمة",
    source: "local"
  },
  {
    rating: 5,
    text: "مخيم رائع جداً! الأجواء هادئة والخدمة ممتازة. المكان نظيف ومنظم بشكل جيد.",
    author: "سارة أحمد",
    location: "Google Reviews",
    source: "google"
  },
  {
    rating: 5,
    text: "تجربة لا تُنسى! المدفئة التقليدية والجلسات العربية كانت رائعة. أنصح الجميع بزيارة هذا المكان.",
    author: "محمد خالد",
    location: "Google Reviews",
    source: "google"
  },
  {
    rating: 5,
    text: "مخيم جميل جداً ومناسب للعائلات. الخدمة ممتازة والأسعار معقولة. سنعود بالتأكيد!",
    author: "ليلى سالم",
    location: "Google Reviews",
    source: "google"
  }
];

// Initialize Testimonials
const testimonialsGrid = document.getElementById('testimonialsGrid');
if (testimonialsGrid) {
  testimonials.forEach(testimonial => {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    
    const stars = '⭐'.repeat(testimonial.rating);
    const sourceBadge = testimonial.source === 'google' 
      ? '<span style="display: inline-block; background: hsl(var(--accent) / 0.1); color: hsl(var(--accent)); padding: 0.25rem 0.5rem; border-radius: 0.375rem; font-size: 0.75rem; margin-bottom: 0.5rem;">Google Reviews</span>'
      : '';
    
    card.innerHTML = `
      ${sourceBadge}
      <div class="testimonial-rating">${stars}</div>
      <p class="testimonial-text">"${testimonial.text}"</p>
      <div class="testimonial-author">
        <div>
          <div class="testimonial-author-name">${testimonial.author}</div>
          <div style="color: hsl(var(--muted-foreground)); font-size: 0.875rem;">${testimonial.location}</div>
        </div>
      </div>
    `;
    
    testimonialsGrid.appendChild(card);
  });
}

// Parallax effect for rules section
let rulesParallax = null;
function initRulesParallax() {
  const rulesSection = document.querySelector('.rules-section');
  if (!rulesSection) return;
  
  rulesParallax = () => {
    const scrolled = window.pageYOffset;
    const rulesBg = document.querySelector('.rules-background');
    if (rulesBg) {
      const rate = scrolled * 0.5;
      rulesBg.style.transform = `translateY(${rate}px)`;
    }
  };
  
  window.addEventListener('scroll', rulesParallax);
}

// Initialize parallax when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initRulesParallax);
} else {
  initRulesParallax();
}

// Media Section - Videos (Local + TikTok)
const mediaVideos = [
  // Local Videos (2 videos)
  {
    type: 'local',
    src: 'src/assets/videos/1000320992.mp4',
    title: 'فيديو مخيم الملفى',
    thumbnail: null
  },
  {
    type: 'local',
    src: 'src/assets/videos/1000320996.mp4',
    title: 'فيديو مخيم الملفى',
    thumbnail: null
  },
  // TikTok Videos (4 videos)
  {
    type: 'tiktok',
    embedUrl: 'https://www.tiktok.com/embed/v2/7580918531827567888',
    playerUrl: 'https://www.tiktok.com/player/v1/7580918531827567888',
    originalUrl: 'https://www.tiktok.com/@almalfacamp/video/7580918531827567888',
    title: 'فيديو تيك توك - مخيم الملفى'
  },
  {
    type: 'tiktok',
    embedUrl: 'https://www.tiktok.com/embed/v2/7580916996426992913',
    playerUrl: 'https://www.tiktok.com/player/v1/7580916996426992913',
    originalUrl: 'https://www.tiktok.com/@almalfacamp/video/7580916996426992913',
    title: 'فيديو تيك توك - مخيم الملفى'
  },
  {
    type: 'tiktok',
    embedUrl: 'https://www.tiktok.com/embed/v2/7580917531280477456',
    playerUrl: 'https://www.tiktok.com/player/v1/7580917531280477456',
    originalUrl: 'https://www.tiktok.com/@almalfacamp/video/7580917531280477456',
    title: 'فيديو تيك توك - مخيم الملفى'
  },
  {
    type: 'tiktok',
    embedUrl: 'https://www.tiktok.com/embed/v2/7580907205382212880',
    playerUrl: 'https://www.tiktok.com/player/v1/7580907205382212880',
    originalUrl: 'https://www.tiktok.com/@almalfacamp/video/7580907205382212880',
    title: 'فيديو تيك توك - مخيم الملفى'
  }
];

// Media Section Functions
let currentMediaIndex = 0;
let displayedMediaItems = [];
const mediaGrid = document.getElementById('mediaGrid');

// Function to create media item
function createMediaItem(video, index) {
  const item = document.createElement('div');
  item.className = 'media-item';
  item.setAttribute('data-index', index);
  
  if (video.type === 'tiktok') {
    // TikTok embed - try both embed formats
    item.innerHTML = `
      <iframe 
        class="media-iframe" 
        src="${video.embedUrl}" 
        frameborder="0" 
        allow="encrypted-media; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
        allowfullscreen
        loading="lazy"
        scrolling="no">
      </iframe>
      <div class="media-overlay">
        <a href="${video.originalUrl}" target="_blank" rel="noopener noreferrer" class="media-link">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
          <span>شاهد على TikTok</span>
        </a>
      </div>
    `;
  } else {
    // Local video
    item.innerHTML = `
      <video class="media-video" preload="metadata" controls>
        <source src="${video.src}" type="video/mp4">
        متصفحك لا يدعم تشغيل الفيديو.
      </video>
    `;
  }
  
  return item;
}

// Function to calculate total pages (each page shows 4 videos)
function getMediaTotalPages() {
  return Math.ceil(mediaVideos.length / 4);
}

// Function to get current page index
function getCurrentMediaPageIndex(startIndex) {
  return Math.floor(startIndex / 4);
}

// Function to create media dots
function createMediaDots() {
  const mediaDots = document.getElementById('mediaDots');
  if (!mediaDots) return;
  
  mediaDots.innerHTML = '';
  const totalPages = getMediaTotalPages();
  
  for (let i = 0; i < totalPages; i++) {
    const dot = document.createElement('button');
    dot.className = 'media-dot';
    dot.setAttribute('aria-label', `انتقل إلى الصفحة ${i + 1}`);
    dot.setAttribute('data-page', i);
    
    dot.addEventListener('click', () => {
      currentMediaIndex = i * 4;
      displayMediaVideos(currentMediaIndex);
      updateMediaDots();
    });
    
    mediaDots.appendChild(dot);
  }
  
  updateMediaDots();
}

// Function to update active dot
function updateMediaDots() {
  const dots = document.querySelectorAll('.media-dot');
  const currentPage = getCurrentMediaPageIndex(currentMediaIndex);
  
  dots.forEach((dot, index) => {
    if (index === currentPage) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Function to display media videos (shows 4 videos at a time)
function displayMediaVideos(startIndex = 0) {
  if (!mediaGrid) return;
  
  // Update current index
  currentMediaIndex = startIndex;
  
  // Fade out current videos
  mediaGrid.style.opacity = '0';
  
  setTimeout(() => {
    mediaGrid.innerHTML = '';
    displayedMediaItems = [];
    
    // Display 4 videos starting from startIndex
    for (let i = 0; i < 4 && i < mediaVideos.length; i++) {
      const videoIndex = (startIndex + i) % mediaVideos.length;
      const item = createMediaItem(mediaVideos[videoIndex], videoIndex);
      mediaGrid.appendChild(item);
      displayedMediaItems.push(videoIndex);
    }
    
    // Fade in new videos
    mediaGrid.style.opacity = '1';
    
    // Update dots
    updateMediaDots();
  }, 300); // Wait for fade out
}

// Manual media navigation
function showNextMediaVideos() {
  const totalPages = getMediaTotalPages();
  const currentPage = getCurrentMediaPageIndex(currentMediaIndex);
  const nextPage = (currentPage + 1) % totalPages;
  currentMediaIndex = nextPage * 4;
  displayMediaVideos(currentMediaIndex);
}

function showPreviousMediaVideos() {
  const totalPages = getMediaTotalPages();
  const currentPage = getCurrentMediaPageIndex(currentMediaIndex);
  const prevPage = (currentPage - 1 + totalPages) % totalPages;
  currentMediaIndex = prevPage * 4;
  displayMediaVideos(currentMediaIndex);
}

// Initialize media section on page load
if (mediaGrid) {
  displayMediaVideos(0);
  createMediaDots();
  
  // Add navigation buttons event listeners
  const mediaPrevBtn = document.getElementById('mediaPrev');
  const mediaNextBtn = document.getElementById('mediaNext');
  
  if (mediaPrevBtn) {
    mediaPrevBtn.addEventListener('click', showPreviousMediaVideos);
  }
  
  if (mediaNextBtn) {
    mediaNextBtn.addEventListener('click', showNextMediaVideos);
  }
}

import './style.css'
import './components/Header.js'
import './components/Footer.js'

document.addEventListener('DOMContentLoaded', () => {
  // Download Logic
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.js-download-btn');
    if (!btn) return;

    e.preventDefault();

    const isApple = /Macintosh|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const appleUrl = 'https://apps.apple.com/cn/app/%E6%A2%A7%E6%A1%90%E6%A0%91%E4%B8%8B-%E4%B8%80%E8%B5%B7%E8%AF%BB%E4%B9%A6/id6751713491';
    const androidUrl = 'https://static.threeminreading.com/app/wutongshuxia-app-1.0.2.apk';

    if (isApple) {
      window.open(appleUrl, '_blank');
    } else {
      window.location.href = androidUrl;
    }
  });

  // Carousel Logic
  const carouselScreen = document.getElementById('carousel-screen');
  const dots = document.querySelectorAll('.dot');

  // Mock data for carousel items
  const carouselItems = [
    {
      title: "你的问题，都有一份书单来解答",
      color: "#FF9F1C",
      image: "/assets/screen_1.png" // We will generate these
    },
    {
      title: "上百份精选书单",
      color: "#FFB74D",
      image: "/assets/screen_2.png"
    },
    {
      title: "快速精读一本书",
      color: "#FFCC80",
      image: "/assets/screen_3.png"
    },
    {
      title: "多种播放模式",
      color: "#FFE0B2",
      image: "/assets/screen_4.png"
    },
    {
      title: "书籍简要介绍",
      color: "#FFF3E0",
      image: "/assets/screen_5.png"
    }
  ];

  let currentIndex = 0;
  let interval;

  function renderCarousel(index) {
    // In a real app, we might slide elements. Here we'll just fade/replace content for simplicity
    // or create elements if they don't exist.

    // Clear existing content
    carouselScreen.innerHTML = '';

    const item = carouselItems[index];

    const slide = document.createElement('div');
    slide.className = 'carousel-item active';
    slide.style.backgroundColor = item.color;
    slide.style.backgroundImage = `url(${item.image})`;
    slide.style.backgroundSize = 'cover';
    slide.style.backgroundPosition = 'center';
    slide.style.display = 'flex';
    slide.style.alignItems = 'center';
    slide.style.justifyContent = 'center';

    // If no image, show text
    if (!item.image || item.image.includes('placeholder')) {
      const text = document.createElement('span');
      text.innerText = item.title;
      text.style.padding = '20px';
      text.style.textAlign = 'center';
      text.style.fontWeight = 'bold';
      text.style.color = '#333';
      slide.appendChild(text);
    }

    carouselScreen.appendChild(slide);

    // Update dots
    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    renderCarousel(currentIndex);
  }

  function startCarousel() {
    interval = setInterval(nextSlide, 3000);
  }

  function stopCarousel() {
    clearInterval(interval);
  }

  // Initialize
  renderCarousel(currentIndex);
  startCarousel();

  // Event listeners for dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      stopCarousel();
      currentIndex = index;
      renderCarousel(currentIndex);
      startCarousel();
    });
  });

  // Pause on hover
  carouselScreen.addEventListener('mouseenter', stopCarousel);
  carouselScreen.addEventListener('mouseleave', startCarousel);
});

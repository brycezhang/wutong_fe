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
    const androidUrl = 'https://sj.qq.com/appdetail/com.qyyy.yilan';

    if (isApple) {
      window.open(appleUrl, '_blank');
    } else {
      window.location.href = androidUrl;
    }
  });
});

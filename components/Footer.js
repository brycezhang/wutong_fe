class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="site-footer">
        <div class="container footer-container">
          <a href="/" class="footer-logo">
            <div class="logo-icon"></div>
            <span class="logo-text">梧桐树下</span>
          </a>
          <div class="footer-links">
            <a href="/contact.html">联系我们</a>
            <a href="/terms.html">用户协议</a>
            <a href="/privacy.html">隐私政策</a>
          </div>
          <div class="footer-copyright">
            <p>© 2025 千言一语文化传媒有限公司. All rights reserved.</p>
            <p>粤ICP备2025453755号-2</p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('site-footer', SiteFooter);

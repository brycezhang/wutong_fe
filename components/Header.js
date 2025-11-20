class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <header class="site-header">
        <div class="container header-container">
          <a href="https://www.wutongshuxia.com.cn/" class="logo-area">
            <div class="logo-icon"></div>
            <div class="logo">梧桐树下</div>
          </a>
          <nav class="main-nav">
            <a href="/contact.html" id="header-contact">联系我们</a>
            <a href="#" class="btn btn-black js-download-btn">下载</a>
          </nav>
        </div>
      </header>
    `;
    }
}

customElements.define('site-header', SiteHeader);

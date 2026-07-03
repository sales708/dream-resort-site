/* Shared footer HTML – paths relative to site root */
const FOOTER_FACEBOOK = `
      <div class="footer-social">
        <a href="https://www.facebook.com/profile.php?id=61591808600500" class="footer-social-link" target="_blank" rel="noopener noreferrer">
          <svg class="footer-social-icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          <span data-i18n="footerFacebook">Facebook</span>
        </a>
      </div>`;

window.SITE_FOOTER = {
  root: `
    <div class="container footer-grid">
      <div class="footer-brand">
        <strong data-i18n="footerCompany">ドリームリゾート開発株式会社</strong>
        <span data-i18n="footerDesc">Overseas Travel Agency B2B Land Operator for Japan</span>
      </div>
      <nav class="footer-nav" aria-label="Footer links">
        <a href="legal/company.html" data-i18n="footerCompanyInfo">会社案内</a>
        <a href="legal/privacy.html" data-i18n="footerPrivacy">個人情報保護ポリシー</a>
        <a href="legal/terms.html" data-i18n="footerTerms">旅行業約款</a>
        <a href="legal/contact.html" data-i18n="footerInquiry">お問い合わせ</a>
      </nav>${FOOTER_FACEBOOK}
    </div>`,
  nested: `
    <div class="container footer-grid">
      <div class="footer-brand">
        <strong data-i18n="footerCompany">ドリームリゾート開発株式会社</strong>
        <span data-i18n="footerDesc">Overseas Travel Agency B2B Land Operator for Japan</span>
      </div>
      <nav class="footer-nav" aria-label="Footer links">
        <a href="../legal/company.html" data-i18n="footerCompanyInfo">会社案内</a>
        <a href="../legal/privacy.html" data-i18n="footerPrivacy">個人情報保護ポリシー</a>
        <a href="../legal/terms.html" data-i18n="footerTerms">旅行業約款</a>
        <a href="../legal/contact.html" data-i18n="footerInquiry">お問い合わせ</a>
      </nav>${FOOTER_FACEBOOK}
    </div>`,
  legal: `
    <div class="container footer-grid">
      <div class="footer-brand">
        <strong data-i18n="footerCompany">ドリームリゾート開発株式会社</strong>
        <span data-i18n="footerDesc">Overseas Travel Agency B2B Land Operator for Japan</span>
      </div>
      <nav class="footer-nav" aria-label="Footer links">
        <a href="company.html" data-i18n="footerCompanyInfo">会社案内</a>
        <a href="privacy.html" data-i18n="footerPrivacy">個人情報保護ポリシー</a>
        <a href="terms.html" data-i18n="footerTerms">旅行業約款</a>
        <a href="contact.html" data-i18n="footerInquiry">お問い合わせ</a>
      </nav>${FOOTER_FACEBOOK}
    </div>`
};

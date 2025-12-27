// Footer Component - Reusable across all pages
document.addEventListener('DOMContentLoaded', function() {
  const footerHTML = `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>KITABGHAR</h3>
          <p>Your gateway to the world of books</p>
        </div>
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="home.html">Home</a></li>
            <li><a href="aboutus.html">About Us</a></li>
            <li><a href="genre.html">Genre</a></li>
            <li><a href="bestseller.html">BestSeller</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Follow Us</h4>
          <div class="social-links">
            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-instagram"></i></a>
            <a href="#"><i class="fa fa-youtube"></i></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Kitabghar. All rights reserved.</p>
      </div>
    </footer>
  `;
  
  // Insert footer at the end of body or in footer container
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) {
    footerContainer.innerHTML = footerHTML;
  } else {
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }
});

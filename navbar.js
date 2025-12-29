// Navbar Component - Reusable across all pages
document.addEventListener('DOMContentLoaded', function() {
  // Get the current page filename to set active class
  const currentPage = window.location.pathname.split('/').pop() || 'home.html';
  
  const navbarHTML = `
    <div class="navbar">
      <div class="nav-links">
        <a href="home.html" ${currentPage === 'home.html' || currentPage === '' ? 'class="active"' : ''}><i class="fa fa-fw fa-home"></i> Home</a>
        <a href="aboutus.html" ${currentPage === 'aboutus.html' ? 'class="active"' : ''}><i class="fa fa-fw fa-book"></i> About Us</a>
        <a href="genre.html" ${currentPage === 'genre.html' ? 'class="active"' : ''}><i class="fa fa-fw fa-fire"></i> Genre</a>
        <a href="bestseller.html" ${currentPage === 'bestseller.html' ? 'class="active"' : ''}><i class="fa fa-fw fa-star"></i> BestSeller</a>
        <a href="contact.html" ${currentPage === 'contact.html' ? 'class="active"' : ''}><i class="fa fa-fw fa-envelope"></i> Contact Us</a>
      </div>
    </div>
  `;
  
  // Insert navbar at the beginning of body
  const navbarContainer = document.getElementById('navbar-container');
  if (navbarContainer) {
    navbarContainer.innerHTML = navbarHTML;
  } else {
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
  }
});

// Bestseller Page JavaScript Functions

function buyBook(bookButton) {
  // Get book details from the card
  const card = bookButton.closest('.bestseller-card');
  const title = card.querySelector('.book-info h3').textContent;
  const author = card.querySelector('.author').textContent.replace('by ', '');
  const price = card.querySelector('.price').textContent;
  const rating = card.querySelector('.rating span').textContent;
  const image = card.querySelector('.book-image img').getAttribute('src');
  
  // Create URL parameters
  const params = new URLSearchParams({
    title: title,
    author: author,
    price: price,
    rating: rating,
    image: image
  });
  
  // Redirect to buy page
  window.location.href = 'buy.html?' + params.toString();
}

function rentBook(bookButton) {
  // Get book details from the card
  const card = bookButton.closest('.bestseller-card');
  const title = card.querySelector('.book-info h3').textContent;
  const author = card.querySelector('.author').textContent.replace('by ', '');
  const price = card.querySelector('.price').textContent;
  const rating = card.querySelector('.rating span').textContent;
  const image = card.querySelector('.book-image img').getAttribute('src');
  
  // Create URL parameters
  const params = new URLSearchParams({
    title: title,
    author: author,
    price: price,
    rating: rating,
    image: image
  });
  
  // Redirect to rentbook page
  window.location.href = 'rentbook.html?' + params.toString();
}

// Add smooth scroll animation for page load
document.addEventListener('DOMContentLoaded', function() {
  // Animate cards on scroll
  const cards = document.querySelectorAll('.bestseller-card');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    card.style.transitionDelay = (index * 0.1) + 's';
    observer.observe(card);
  });
});

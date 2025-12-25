// Bestseller Page JavaScript Functions

function buyBook(bookTitle) {
  alert('Adding "' + bookTitle + '" to your cart!\n\nYou will be redirected to the checkout page.');
  // In a real application, this would add the book to cart and redirect
  console.log('Buy action triggered for: ' + bookTitle);
}

function rentBook(bookTitle) {
  alert('Renting "' + bookTitle + '"!\n\nRental period: 30 days\nYou will receive an email with details.');
  // In a real application, this would initiate the rental process
  console.log('Rent action triggered for: ' + bookTitle);
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

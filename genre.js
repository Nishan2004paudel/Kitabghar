function toggleCategory() {
  const nepaliSection = document.getElementById('nepaliSection');
  const internationalSection = document.getElementById('internationalSection');
  const nepaliBtn = document.getElementById('nepaliBtn');
  const internationalBtn = document.getElementById('internationalBtn');
  
  if (nepaliSection.style.display === 'none') {
    nepaliSection.style.display = 'block';
    internationalSection.style.display = 'none';
    nepaliBtn.classList.add('active');
    internationalBtn.classList.remove('active');
  } else {
    nepaliSection.style.display = 'none';
    internationalSection.style.display = 'block';
    nepaliBtn.classList.remove('active');
    internationalBtn.classList.add('active');
  }
}

function buyBook(bookCard) {
  // Get book details from the card
  const card = bookCard.closest('.book-card');
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

function rentBook(bookName) {
  alert('Proceeding to rent: ' + bookName);
  // Add your rent logic here
}

// Make entire book card clickable
document.addEventListener('DOMContentLoaded', function() {
  const bookCards = document.querySelectorAll('.book-card');
  
  bookCards.forEach(card => {
    // Add click event to book image and info sections
    const bookImage = card.querySelector('.book-image');
    const bookInfo = card.querySelector('.book-info');
    
    if (bookImage) {
      bookImage.style.cursor = 'pointer';
      bookImage.addEventListener('click', function() {
        const buyBtn = card.querySelector('.buy-btn');
        if (buyBtn) {
          buyBook(buyBtn);
        }
      });
    }
    
    if (bookInfo) {
      bookInfo.style.cursor = 'pointer';
      bookInfo.addEventListener('click', function() {
        const buyBtn = card.querySelector('.buy-btn');
        if (buyBtn) {
          buyBook(buyBtn);
        }
      });
    }
  });
});

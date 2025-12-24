// Selected books array
let selectedBooks = [];

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

// Initialize book cards with click handlers
document.addEventListener('DOMContentLoaded', function() {
  const bookCards = document.querySelectorAll('.book-card');
  
  bookCards.forEach((card, index) => {
    // Add unique ID to each book card
    const bookName = card.querySelector('img').alt;
    card.dataset.bookId = index;
    card.dataset.bookName = bookName;
    
    card.addEventListener('click', function() {
      toggleBookSelection(this);
    });
  });
});

function toggleBookSelection(card) {
  const bookId = card.dataset.bookId;
  const bookName = card.dataset.bookName;
  
  if (card.classList.contains('selected')) {
    // Deselect the book
    card.classList.remove('selected');
    selectedBooks = selectedBooks.filter(book => book.id !== bookId);
  } else {
    // Select the book
    card.classList.add('selected');
    selectedBooks.push({ id: bookId, name: bookName });
  }
  
  updateSelectionBar();
}

function updateSelectionBar() {
  const selectionBar = document.getElementById('selectionBar');
  const selectedCount = document.getElementById('selectedCount');
  
  selectedCount.textContent = selectedBooks.length;
  
  if (selectedBooks.length > 0) {
    selectionBar.classList.add('visible');
  } else {
    selectionBar.classList.remove('visible');
  }
}

function clearSelection() {
  selectedBooks = [];
  document.querySelectorAll('.book-card.selected').forEach(card => {
    card.classList.remove('selected');
  });
  updateSelectionBar();
}

function buyBooks() {
  if (selectedBooks.length === 0) return;
  
  const bookNames = selectedBooks.map(book => book.name).join(', ');
  alert('Proceeding to buy: ' + bookNames);
  // Add your buy logic here
}

function rentBooks() {
  if (selectedBooks.length === 0) return;
  
  const bookNames = selectedBooks.map(book => book.name).join(', ');
  alert('Proceeding to rent: ' + bookNames);
  // Add your rent logic here
}

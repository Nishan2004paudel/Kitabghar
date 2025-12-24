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

function buyBook(bookName) {
  alert('Proceeding to buy: ' + bookName);
  // Add your buy logic here
}

function rentBook(bookName) {
  alert('Proceeding to rent: ' + bookName);
  // Add your rent logic here
}

function sellYourBook() {
  alert('Redirecting to sell your book form...');
  // Add your sell book logic here
}

function rentYourBook() {
  alert('Redirecting to rent out your book form...');
  // Add your rent out book logic here
}

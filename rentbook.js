// Rent Book Page JavaScript

let bookPrice = 0;
let depositAmount = 0;

document.addEventListener('DOMContentLoaded', function() {
  loadBookDetails();
  setupRentalOptions();
  setupPaymentOptions();
  updateSummary();
});

function loadBookDetails() {
  // Get URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  
  const title = urlParams.get('title') || 'Book Title';
  const author = urlParams.get('author') || 'Unknown Author';
  const price = urlParams.get('price') || 'Rs. 0';
  const rating = urlParams.get('rating') || '4.0';
  const image = urlParams.get('image') || '';

  // Update book details on page
  document.getElementById('bookTitle').textContent = title;
  document.getElementById('bookAuthor').textContent = author;
  document.getElementById('ratingValue').textContent = rating + ' / 5';
  
  if (image) {
    document.getElementById('bookImage').src = image;
    document.getElementById('bookImage').alt = title;
  }

  // Generate star rating
  const starRating = document.getElementById('starRating');
  const ratingNum = parseFloat(rating);
  let starsHtml = '';
  
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(ratingNum)) {
      starsHtml += '<i class="fa fa-star"></i>';
    } else if (i - 0.5 <= ratingNum) {
      starsHtml += '<i class="fa fa-star-half-o"></i>';
    } else {
      starsHtml += '<i class="fa fa-star-o"></i>';
    }
  }
  starRating.innerHTML = starsHtml;

  // Calculate rental prices based on book price
  bookPrice = parseInt(price.replace(/[^0-9]/g, '')) || 0;
  depositAmount = Math.round(bookPrice * 0.5); // 50% of book price as deposit

  // Calculate rental prices (percentage of book price)
  const price7 = Math.round(bookPrice * 0.15); // 15% for 7 days
  const price15 = Math.round(bookPrice * 0.25 * 0.9); // 25% with 10% discount for 15 days
  const price30 = Math.round(bookPrice * 0.35 * 0.8); // 35% with 20% discount for 30 days

  document.getElementById('price7').textContent = 'Rs. ' + price7;
  document.getElementById('price15').textContent = 'Rs. ' + price15;
  document.getElementById('price30').textContent = 'Rs. ' + price30;
  document.getElementById('depositAmount').textContent = 'Rs. ' + depositAmount;

  // Update page title
  document.title = 'Rent ' + title + ' - Kitabghar';
}

function setupRentalOptions() {
  const rentalOptions = document.querySelectorAll('.rental-option');
  
  rentalOptions.forEach(option => {
    const radio = option.querySelector('input[type="radio"]');
    const label = option.querySelector('label');
    
    // Set initial selected state
    if (radio.checked) {
      option.classList.add('selected');
    }
    
    label.addEventListener('click', function() {
      // Remove selected class from all options
      rentalOptions.forEach(opt => opt.classList.remove('selected'));
      
      // Add selected class to clicked option
      option.classList.add('selected');
      
      // Check the radio button
      radio.checked = true;
      
      // Update summary
      updateSummary();
    });
  });
}

function setupPaymentOptions() {
  const paymentOptions = document.querySelectorAll('.payment-option');
  
  paymentOptions.forEach(option => {
    const radio = option.querySelector('input[type="radio"]');
    const label = option.querySelector('label');
    
    label.addEventListener('click', function() {
      // Remove selected class from all options
      paymentOptions.forEach(opt => opt.classList.remove('selected'));
      
      // Add selected class to clicked option
      option.classList.add('selected');
      
      // Check the radio button
      radio.checked = true;
    });
  });
}

function updateSummary() {
  const selectedRental = document.querySelector('input[name="rental"]:checked');
  
  if (!selectedRental) return;
  
  const days = selectedRental.value;
  const rentalOption = selectedRental.closest('.rental-option');
  const discount = parseInt(rentalOption.dataset.discount) || 0;
  
  // Calculate rental fee based on selected period
  let rentalFee = 0;
  let originalFee = 0;
  
  switch(days) {
    case '7':
      originalFee = Math.round(bookPrice * 0.15);
      rentalFee = originalFee;
      break;
    case '15':
      originalFee = Math.round(bookPrice * 0.25);
      rentalFee = Math.round(originalFee * 0.9); // 10% discount
      break;
    case '30':
      originalFee = Math.round(bookPrice * 0.35);
      rentalFee = Math.round(originalFee * 0.8); // 20% discount
      break;
  }
  
  const discountAmount = originalFee - rentalFee;
  const total = rentalFee + depositAmount;
  
  // Update summary display
  document.getElementById('summaryPeriod').textContent = days + ' Days';
  document.getElementById('summaryRental').textContent = 'Rs. ' + rentalFee;
  document.getElementById('summaryDeposit').textContent = 'Rs. ' + depositAmount;
  document.getElementById('totalAmount').textContent = 'Rs. ' + total;
  document.getElementById('refundAmount').textContent = 'Rs. ' + depositAmount;
  
  // Show/hide discount row
  const discountRow = document.getElementById('discountRow');
  if (discount > 0) {
    discountRow.style.display = 'flex';
    document.getElementById('discountAmount').textContent = '- Rs. ' + discountAmount + ' (' + discount + '% OFF)';
  } else {
    discountRow.style.display = 'none';
  }
}

function processRental() {
  const selectedPayment = document.querySelector('input[name="payment"]:checked');
  const selectedRental = document.querySelector('input[name="rental"]:checked');
  
  if (!selectedPayment) {
    alert('Please select a payment method');
    return;
  }

  const paymentMethod = selectedPayment.value;
  const rentalDays = selectedRental.value;
  const bookTitle = document.getElementById('bookTitle').textContent;
  const totalAmount = document.getElementById('totalAmount').textContent;

  // Payment processing simulation
  let message = '';
  
  switch(paymentMethod) {
    case 'esewa':
      message = 'Redirecting to eSewa payment gateway...';
      break;
    case 'khalti':
      message = 'Redirecting to Khalti payment gateway...';
      break;
    case 'imepay':
      message = 'Redirecting to IME Pay...';
      break;
    case 'bank':
      message = 'You will receive bank transfer details via email.';
      break;
    case 'cod':
      message = 'Your rental order has been placed!\nPlease pay ' + totalAmount + ' when you receive the book.';
      break;
  }

  alert('🎉 Rental Order Confirmed!\n\n' + 
        'Book: ' + bookTitle + '\n' +
        'Rental Period: ' + rentalDays + ' Days\n' +
        'Total Amount: ' + totalAmount + '\n\n' + 
        message + '\n\n' +
        'Remember: Your deposit will be refunded when you return the book in good condition!');
  
  // In a real application, this would redirect to the payment gateway
  // window.location.href = '/payment/' + paymentMethod;
}

// Buy Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
  loadBookDetails();
  setupPaymentOptions();
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
  document.getElementById('bookPrice').textContent = price;
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

  // Calculate prices
  const priceNum = parseFloat(price.replace(/[^0-9.]/g, '')) || 0;
  const originalPrice = Math.round(priceNum / 0.9); // Original price before 10% discount
  const discount = originalPrice - priceNum;
  const total = priceNum; // Final price after discount

  document.getElementById('originalPrice').textContent = 'Rs. ' + originalPrice;
  document.getElementById('summaryPrice').textContent = 'Rs. ' + originalPrice; // Show original in summary
  document.getElementById('discountAmount').textContent = '- Rs. ' + discount;
  document.getElementById('totalAmount').textContent = 'Rs. ' + total;

  // Update page title
  document.title = 'Buy ' + title + ' - Kitabghar';
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

function processPayment() {
  const selectedPayment = document.querySelector('input[name="payment"]:checked');
  
  if (!selectedPayment) {
    alert('Please select a payment method');
    return;
  }

  const paymentMethod = selectedPayment.value;
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
      message = 'Redirecting to bank transfer...';
      break;
    case 'cod':
      message = 'Order confirmed! You will pay ' + totalAmount + ' on delivery.';
      break;
    default:
      message = 'Processing payment...';
  }

  // Show confirmation
  alert(message + '\n\nBook: ' + bookTitle + '\nTotal: ' + totalAmount);

  // Here you would integrate actual payment gateway
  // For now, we'll show a success message
  if (paymentMethod === 'cod') {
    setTimeout(() => {
      alert('Thank you for your order!\n\nYour book "' + bookTitle + '" will be delivered within 3-5 business days.');
      window.location.href = 'genre.html';
    }, 500);
  }
}

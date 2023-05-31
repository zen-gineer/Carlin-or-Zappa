const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const showAuthBtn = document.getElementById('show-auth');
const loader = document.getElementById('loader');
const lottieElement = document.getElementById('lottie-background');

// Show loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}
// Hide loading
function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

// Show new quote
function newQuote() {
  loading();
  // Pick a random quote from localQuotes array
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  // Hide author initially
  authorText.classList.add('hide-author');
  // Check if author is null and replace with 'unknown'
  if(!quote.author) {
    authorText.textContent = 'Unknown';
  } else {
    authorText.textContent = quote.author;
  }
  // Check quote length to determine styling
  if(quote.text.length > 120) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }
// Set quote, hide loader
  quoteText.textContent = quote.text;
  complete();
}

// Tweet quote - note the back tics
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, '_blank');
}
function showAuth() {
  authorText.classList.remove('hide-author');
}

// Event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);
showAuthBtn.addEventListener('click', showAuth);
lottieElement.addEventListener('data_ready', function() {
  lottieElement.style.display = 'flex';
  lottieElement.style.width = '100vw';
  lottieElement.style.height = '100vh';
}
);

// On load
newQuote();

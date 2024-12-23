'use strict';
const quotes = [
  'The best dreams happen when you’re awake.» (Cherie Gilderbloom).',
  'Accept who you are. Unless you’re a serial killer.» (Ellen DeGeneres, Seriously… I’m Kidding',
  '«You can never be overdressed or overeducated.» (Oscar Wilde).',
];

const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate_btn');

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteElement.textContent = randomQuote;
}
generateBtn.addEventListener('click', generateRandomQuote);

// generateRandomQuote();

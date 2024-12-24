const quotes = [
  {
    quote: 'The best dreams happen when you’re awake',
    author: 'Cherie Gilderbloom',
  },
  {
    quote: 'Accept who you are. Unless you’re a serial killer',
    author: 'Ellen DeGeneres',
  },
  {
    quote: 'You can never be overdressed or overeducated',
    author: 'Oscar Wilde',
  },
  {
    quote:
      'In three words I can sum up everything I’ve learned about life: it goes on.',
    author: 'Robert Frost',
  },
  {
    quote: 'Life is what happens when you’re busy making other plans.',
    author: 'John Lennon',
  },
  {
    quote: 'Get busy living or get busy dying.',
    author: 'Stephen King',
  },
  {
    quote: 'You only live once, but if you do it right, once is enough.',
    author: 'Mae West',
  },
  {
    quote: 'The purpose of our lives is to be happy.',
    author: 'Dalai Lama',
  },
  {
    quote: 'Life is either a daring adventure or nothing at all.',
    author: 'Helen Keller',
  },
  {
    quote:
      'To live is the rarest thing in the world. Most people exist, that is all.',
    author: 'Oscar Wilde',
  },
];

const quoteElement = document.getElementById('quote');
const quoteAuthorElement = document.getElementById('quote-author');
const generateBtn = document.getElementById('generate_btn');

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const { quote, author: quoteAuthor } = randomQuote;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = quoteAuthor;
}
generateBtn.addEventListener('click', generateRandomQuote);

// generateRandomQuote();

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

function showLoadingSpinner(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function removeLoadingSpinner(){
    loader.hidden = true;
    quoteContainer.hidden = false;
}

function newQuote(){
    showLoadingSpinner();
    // generate random index
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    // check if quote author is blank and replcae with 'unknown'
    authorText.textContent = quote.author ? quote.author : 'Unknown';
    
    // check code length to determine styling
    if(quote.text.length > 10){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
    // set quote, hide loader
    quoteText.textContent = quote.text;
    removeLoadingSpinner();
}

function tweetQuote(){
    // = template string, uses backticks, ? for query parameter
    // template string allows varibale and convert into string
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;

    // allow open url
    window.open(twitterUrl, '_blank');
}

// Event Listener, put after function
// when user click, run function
newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// call loading function at the beginning of new quote function
newQuote();

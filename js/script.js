/******************************************
project 1 - Random Quote Generator
******************************************/

/***
 * `quotes` array & objects
 ***/
const quotes = [
    {
        quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
        source: "Francis of Assisi",
        citation: "book", tag: "book",
        year: "1997"
    },
    {
        quote: "Believe you can and you're halfway there.",
        source: "Theodore Roosevelt",
        citation: "movie", tag: "movie",
        year: "2004"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        source: "Confucius",
        citation: "book", tag: "book",
        year: "2009"
    },
    {
        quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        source: "Thomas A. Edison",
        citation: "movie", tag: "movie",
        year: "1976"
    },
    {
        quote: "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
        source: "Confucius",
        citation: "book", tag: "book",
        year: "1999"
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        source: "Sam Levenson",
        citation: "book", tag: "book",
        year: "2018"
    },
    {
        quote: "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
        source: "Ayn Bond",
        citation: "movie", tag: "movie",
        year: "2015"
    },
    {
        quote: "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
        source: "Ayn Rand",
        citation: "movie", tag: "movie",
        year: "2016"
    },
    {
        quote: "Expect problems and eat them for breakfast.",
        source: "Alfred A. Montapert",
        citation: "book", tag: "book",
        year: "2011"
    },
    {
        quote: "Start where you are. Use what you have. Do what you can.",
        source: "Arthur Ashe",
        citation: "movie", tag: "movie",
        year: "2017"
    },
    {
        quote: "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
        source: "Samuel Beckett",
        citation: "book", tag: "book",
        year: "1987"
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        source: "Oscar Wilde",
        citation: "movie", tag: "movie",
        year: "1856"
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        source: "Albert Einstein",
        citation: "movie", tag: "movie",
        year: "1945"
    },
    {
        quote: "Always remember that you are absolutely unique. Just like everyone else.",
        source: "Margaret Mead",
        citation: "movie", tag: "movie",
        year: "1977"
    },
    {
        quote: "Do not take life too seriously. You will never get out of it alive.",
        source: "Elbert Hubbard",
        citation: "movie", tag: "movie",
        year: "1877"
    },
    {
        quote: "People who think they know everything are a great annoyance to those of us who do.",
        source: "Isaac Asimov",
        citation: "book", tag: "book",
        year: "1971"
    },
    {
        quote: "Procrastination is the art of keeping up with yesterday.",
        source: "Don Marquis",
        citation: "book", tag: "book",
        year: "1992"
    },
    {
        quote: "Get your facts first, then you can distort them as you please.",
        source: "Mark Twain",
        citation: "book", tag: "book",
        year: "2008"
    },
    {
        quote: "A day without sunshine is like, you know, night.",
        source: "Steve Martin",
        citation: "book", tag: "book",
        year: "2019"
    },
    {
        quote: "My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the hell she is.",
        source: "Ellen DeGeneres",
        citation: "book", tag: "book",
        year: "1998"
    },
    {
        quote: "Don't sweat the petty things and don't pet the sweaty things.",
        source: "priyanka choopra",
        citation: "movie", tag: "movie",
        year: "1973"
    },
    {
        quote: "Always do whatever's next.",
        source: "George steve",
        citation: "movie", tag: "movie",
        year: "1967"
    },
    {
        quote: "Atheism is a non-prophet organization.",
        source: "zuckerburg Carlin",
        citation: "book", tag: "book",
        year: "1899"
    },
    {
        quote: "Hapiness is not something ready made. It comes from your own actions.",
        source: "Dalai Lama",
        citation: "book", tag: "book",
        year: "1934"
    }

];
/***
 * `getRandomQuoteByTag` function
 ***/
//function for book tag
function QuoteByBookTag(quotes) {
    //filtering by tag name
    const result = quotes.filter(quote => quote.tag == 'book');
    console.log(result);
    printQuoteByTag(result);
}

//function for movie tag
function QuoteByMovieTag(quotes) {
    //filtering by tag name
    const result = quotes.filter(quote => quote.tag == 'movie');
    console.log(result);
    printQuoteByTag(result);
}
//fuction for receive quote using tagname
function printQuoteByTag(result) {
    const quoteIndex = Math.floor(Math.random() * result.length);
    const resultQuotes = result[quoteIndex];
    // console.log(result);
    document.getElementById('quote-box').innerHTML =
        "<p class='quote'>" + resultQuotes.quote + "</p>" +
        "<p class='source'>" + resultQuotes.source + "<span class='citation'>" + resultQuotes.citation + "</span>" + "<span class='year'>" + resultQuotes.year + "</span>" + "</p>";
    random_bg_color();
}


/***
 * `getRandomQuote` function
 ***/
function getRandomQuote(quotes) {
    // Random number generator
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    // Returns random quote to printQuotes
    return quotes[quoteIndex];
}

// 
/***
 * `printQuote` function
 ***/
function printQuote() {
    // Calls and stores the getRandomQuote
    const resultQuotes = getRandomQuote(quotes);
    // console.log(result);
    document.getElementById('quote-box').innerHTML =
    "<p class='quote'>" + resultQuotes.quote + "</p>" +
        "<p class='source'>" + resultQuotes.source + "<span class='citation'>" + resultQuotes.citation + "</span>" + "<span class='year'>" + resultQuotes.year + "</span>" + "</p>" ;
    random_bg_color();
}

//this function is for random bg color 
function random_bg_color() {
    var x = Math.floor(Math.random() * 150);
    var y = Math.floor(Math.random() * 150);
    var z = Math.floor(Math.random() * 150);
    var bgColor = "rgb(" + x + "," + y + "," + z + "," + 0.5 + ")";
    // console.log(bgColor);

    // document.body.style.background = bgColor;
    document.getElementById("container").style.backgroundColor = bgColor;
}

/***
 * click event listener for the print quote button
 ***/
// when user clicks on the button then code will change
document.getElementById('load-quote').addEventListener("click", printQuote);
//run this function to change the quote in every refresh
printQuote();
// Quotes automatically refresh at regular intervals.
setInterval(function () { printQuote(); }, 3000);

//KAZI ABDUR RAKIB
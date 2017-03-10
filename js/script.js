// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
// document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", function(){
    ( !window.requestAnimationFrame ) ? setTimeout(printQuote, 1000) : requestAnimationFrame(printQuote);
});

let quotes = [{
    saying: "The best preparation for tomorrow is doing your best today.",
    author: "H. Jackson Brown, Jr.",
    citation: "brainyquote.com",
    year: 1987,
    business: "Author"
}, {
    saying: "I can't change the direction of the wind, but I can always adjust my sails to reach my destination",
    author: "Jimmy Dean",
    citation: "brainyquote.com",
    year: 1956,
    business: "Singer"
}, {
    saying: "Change your thoughts and you change your world",
    author: "Norman Vincent Peale",
    citation: "brainyquote.com",
    year: 1973,
    business: "Minister"
}, {
    saying: "Try to be a rainbow in someones cloud",
    author: "Maya Angelou",
    citation: "brainyquote.com",
    year: 2011,
    business: "Poet"
}, {
    saying: "If an opportunity doesn't knock, build a door",
    author: "Milton Berle",
    citation: "brainyquote.com",
    business: "Comedian"

}, ];

let displayedQuotes = []; 
let selectedQuote;
let backgroundColors = [];
let timer


// Generate a random quote 

function getRandomQuote() {

    if (displayedQuotes.length === quotes.length) {displayedQuotes = [];}

    do {
            let x = Math.floor(Math.random() * quotes.length);
            selectedQuote = quotes[x];
            
        } while (displayedQuotes.includes(selectedQuote));

    return selectedQuote;
}

// Generate a random Background color 

function getRandomColor () {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Check the Color Contrast depending on the color of the background

function getContrastYIQ(hexcolor){
    var r = parseInt(hexcolor.substr(0,2),16);
    var g = parseInt(hexcolor.substr(2,2),16);
    var b = parseInt(hexcolor.substr(4,2),16);
    var yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128) ? '#000000' : '#ffffff';
}

// Creating the quote

function printQuote(){

	let getQuote = getRandomQuote();
    displayedQuotes.push(getQuote);
    console.log(getQuote.saying)

    let sayingInner = "<p class='quote'>" + getQuote.saying + "</p>";
    let sourceInner = "<p class='source'>" + getQuote.author ;
        sourceInner += "<span class='citation'>" + getQuote.citation + "</span>";
        sourceInner += "<span class='year'>" + ( getQuote.year ? getQuote.year : " " ) + "</span>";
        sourceInner += "<span class='business'> " + ( getQuote.business ? getQuote.business : " " ) + " </span>";
        sourceInner += "</p>" ;

    let quoteInner = sayingInner + sourceInner;
    let quoteBox = document.getElementById("quote-box");
    
        

    let bodyEle = document.body;
    let bodyColor = document.body.style.backgroundColor = getRandomColor();
    quoteBox.style.color = getContrastYIQ(bodyColor.substr(1,6)) ;
    let theQuotes = document.getElementById('quote-box').innerHTML = quoteInner;
}

// Refresh the quote every 20 seconds
setInterval(printQuote, 20000);


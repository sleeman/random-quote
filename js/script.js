// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
// document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", function(){
    clearInterval(printQuote);
    ( !window.requestAnimationFrame ) ? setTimeout(printQuote, 1000) : requestAnimationFrame(printQuote);
});

var quotes = [{
    saying: "The best preparation for tomorrow is doing your best today.",
    author: "H. Jackson Brown, Jr.",
    citation: "brainyquote.com",
    year: 1987
}, {
    saying: "I can't change the direction of the wind, but I can always adjust my sails to reach my destination",
    author: "Jimmy Dean",
    citation: "brainyquote.com",
    year: 1956
}, {
    saying: "Change your thoughts and you change your world",
    author: "Norman Vincent Peale",
    citation: "brainyquote.com",
    year: 1973
}, {
    saying: "Try to be a rainbow in someones cloud",
    author: "Maya Angelou",
    citation: "brainyquote.com",
    year: 2011
}, {
    saying: "If an opportunity doesn't knock, build a door",
    author: "Milton Berle",
    citation: "brainyquote.com",

}, ];

var displayedQuotes = []; 
var selectedQuote;
var backgroundColors = [];
var timer

function getRandomQuote() {

    if (displayedQuotes.length === quotes.length) {displayedQuotes = [];}

// if (!Array.prototype.elemetExists) {
//     Array.prototype.elemetExists = function (string) {
//         return !!~this.indexOf(string);
//     };
// }

do {
        var x = Math.floor(Math.random() * quotes.length);
        selectedQuote = quotes[x];
        
    } while (displayedQuotes.includes(selectedQuote));

    return selectedQuote;
}

function printQuote(){

	var getQuote = getRandomQuote();
    displayedQuotes.push(getQuote);
    console.log(getQuote.saying)

    var sayingInner = "<p class='quote'>" + getQuote.saying + "</p>";
    var sourceInner = "<p class='source'>" + getQuote.author ;
        sourceInner += "<span class='citation'>" + getQuote.citation + "</span>";
        sourceInner += "<span class='year'>" + (getQuote.year ? getQuote.year: " " ) + "</span>";

    var quoteInner = sayingInner + sourceInner;
    
        function getRandomColor () {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    var bodyEle = document.body;
    console.log(bodyEle)
    document.body.style.backgroundColor = getRandomColor();
    var theQuotes = document.getElementById('quote-box').innerHTML = quoteInner;
}


setInterval(printQuote, 1000);


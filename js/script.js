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
  
	// var theQuotes = [];

  
  //   if(!theQuotes.includes(x) ){
		// theQuotes.push(x);
  //   }

 //  if (quotes.length === 0) {
	// 	quotes = theQuotes;
	// 	theQuotes = []; 
	// }

    // var selected = quotes[x];


 //    quotes.splice(x,1);
 //    theQuotes.push(selected);




var displayedQuotes = []; // Variable to keep track of quotes that have been displayed in an array.
var selectedQuote;
var backgroundColors = [];
var timer



// GET A RANDOM QUOTE. The top number of the Math.random method equals the length of the quotes array.
function getRandomQuote() {
    // console.log(displayedQuotes.indexOf(selectedQuote));
    // Resets displayedQuotes if all quotes have been displayed once.
    if (displayedQuotes.length === quotes.length) {displayedQuotes = [];}
    // Selects a random quote. Selects again if random quote is in displayedQuotes.
    // console.log(displayedQuotes.indexOf(quotes[x]) === -1);
    // do {
        // var x = Math.floor(Math.random() * quotes.length);
        // selectedQuote = quotes[x];
        
    // } while (displayedQuotes.indexOf(selectedQuote) > -1);

   // if(displayedQuotes.indexOf(selectedQuote) === -1){
   //  var x = Math.floor(Math.random() * quotes.length);
   //      selectedQuote = quotes[x];
   //   displayedQuotes.push(selectedQuote);
   // }
// console.log(selectedQuote);

// if (!Array.prototype.elemetExists) {
//     Array.prototype.elemetExists = function (string) {
//         return !!~this.indexOf(string);
//     };
// }

do {
        var x = Math.floor(Math.random() * quotes.length);
        selectedQuote = quotes[x];

        
    } while (~displayedQuotes.indexOf(selectedQuote));


   var iteratore = quotes.map(function(ele, i, arr){
    var x = Math.floor(Math.random() * arr.length);
    // if(arr.indexOf(ele) === i){
        return ele;
    // };
    // console.log(ele);
    // console.log(i);
    // console.log(arr);
   });

 // displayedQuotes.push(iteratore);
   // console.log(iteratore);
   // console.log(iteratore[x]);
    return selectedQuote;

}



function printQuote(){

	var getQuote = getRandomQuote();
    displayedQuotes.push(getQuote);
    console.log(getQuote.saying)
    // console.log(displayedQuotes.indexOf(getQuote) > -1);
    


    var    sayingInner = "<p class='quote'>" + getQuote.saying + "</p>";
    var    sourceInner = "<p class='source'>" + getQuote.author ;
        sourceInner += "<span class='citation'>" + getQuote.citation + "</span>";
        sourceInner += "<span class='year'>" + (getQuote.year ? getQuote.year: " " ) + "</span>";
        sourceInner += "</p>";
    // var quote = document.getElementsByClassName('quote').innerHTML;

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


setInterval(printQuote, 10000)


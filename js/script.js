
//array of objects

var quotes = [
  {quote:"You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face. You are able to say to yourself, 'I lived through this horror. I can take the next thing that comes along.'", source: "Eleanor Rooevelt" , citation: "Speech", year:"1962", tags: "Strength quote"},
  {quote:"Strength and growth come only through continuous effort and struggle.", source: "Napoleon Hill", citation: "speech", year:"1970", tags: "strength quote"},
  {quote:"Strength does not come from winning. Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength.", source: "Arnold Schwarzenegger", citation: "Speech", year:"1990", tags: "Strength quote"},
  {quote:"Great works are performed not by strength but by perseverance.", source: "Samuel Johnson", citation: "Speech", year:" 1784", tags: "Strength quote"},
  {quote:"I like criticism. It makes you strong.", source: "LeBron James", citation: " Speech", year:"2016", tags: "Strength quote"}
];


//random qute function
function getRandomQuote () {
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]; // random quote expression
  return randomQuote;
}

// random color function
 function colorGenerator() {
  return randomColor = Math.floor(Math.random() * 256) // random quote expression
 }

// print function
function printQuote () {

  setTimeout(printQuote, 7000); // random quote/color time set. 1 sec
   var x = colorGenerator();
   var y = colorGenerator();
   var z = colorGenerator();
   var color = "rgb(" + x + "," + y + "," + z + ")";

  var generateRandomQuote = getRandomQuote(); // random number function stored in variable
  var html = ''; // empty html variable string
  html += '<p class = "quote">' +  generateRandomQuote.quote + '</p>' + '<p class = "source">' + generateRandomQuote.source

  // conditional statement checking  citation property
  if (generateRandomQuote.citation){
    html += '<span class = "citation">' + generateRandomQuote.citation + '</span>';
  }

  // conditional statement checking year property
    if (generateRandomQuote.year){
      html += '<span class = "citation">' + generateRandomQuote.year + '</span>';
    }

    // conditional statement checking tags property
    if (generateRandomQuote.tags){
      html += '<span class = "tags">'+  generateRandomQuote.tags; + '</span>';
  }

    html += '</p>';
    document.getElementById('quote-box').innerHTML = html; // print html string
    document.body.style.backgroundColor = color; // print random color
  }

  printQuote ();

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

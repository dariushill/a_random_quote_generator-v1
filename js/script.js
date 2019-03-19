
var quotes = [
  {quote:"You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face. You are able to say to yourself, 'I lived through this horror. I can take the next thing that comes along.'", source: "Elearnor Rooevelt" , citation: "Speech", year:"1962", tags: "Strength quote"},
  {quote:"Strength and growth come only through continuous effort and struggle.", source: "Napoleon Hill", citation: "speech", year:"1970", tags: "strength quote"},
  {quote:"Strength does not come from winning. Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength.", source: "Arnold Schwarzenegger", citation: "Speech", year:"1990", tags: "Strength quote"},
  {quote:"Great works are performed not by strength but by perseverance.", source: "Samuel Johnson", citation: "Speech", year:" 1784", tags: "Strength quote"},
  {quote:"I like criticism. It makes you strong.", source: "LeBron James", citation: " Speech", year:"2016", tags: "Strength quote"}
];

function getRandomQuote () {
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randomQuote;
}
 function colorGenerator() {
  return randomColor = Math.floor(Math.random() * 256)
 }

function printQuote () {

  setTimeout(printQuote, 1000);
   var x = colorGenerator();
   var y = colorGenerator();
   var z = colorGenerator();
   var color = "rgb(" + x + "," + y + "," + z + ")";

  var generateRandomQuote = getRandomQuote();
  var html = '';
  html += '<p class = "quote">' +  generateRandomQuote.quote + '</p>' + '<p class = "source">' + generateRandomQuote.source

  if (generateRandomQuote.citation){
    html += '<span class = "citation">' + generateRandomQuote.citation + '</span>';
  }


    if (generateRandomQuote.year){
      html += '<span class = "citation">' + generateRandomQuote.year + '</span>';
    }


    if (generateRandomQuote.tags){
      html += '<span class = "tags">'+  generateRandomQuote.tags; + '</span>';
  }

    html += '</p>';
    document.getElementById('quote-box').innerHTML = html;
    document.body.style.backgroundColor = color;
  }

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

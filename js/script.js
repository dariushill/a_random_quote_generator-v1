
var quotes = [
  {quote:"You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face. You are able to say to yourself, 'I lived through this horror. I can take the next thing that comes along.'", source: "Elearnor Rooevelt" , citation: "", year:"", tags: "strength quote"},
  {quote:"Strength and growth come only through continuous effort and struggle.", source: "Napoleon Hill", citation: "", year:"", tags: "strength quote"},
  {quote:"Strength does not come from winning. Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength.", source: "Arnold Schwarzenegger", citation: "", year:"", tags: "strength quote"},
  {quote:"Great works are performed not by strength but by perseverance.", source: "Samuel Johnson", citation: "", year:"", tags: "strength quote" },
  {quote:"I like criticism. It makes you strong.", source: "LeBron James", citation: "", year:"", tags: "strength quote" }
];

function getRandomQuote () {
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randomQuote;
}


function printQuote () {
  var generateRandomQuote = getRandomQuote();
  var html = '';
  html += '<p class = "quote">' +  generateRandomQuote.quote + '</p>' + '<p class = "source">' + generateRandomQuote.source

  if (generateRandomQuote.year.length === 0){
    html += '<span class = "citation">' + generateRandomQuote.citation + '</span>' + '</p>';
    document.getElementById('quote-box').innerHTML = html;
  } else {
      document.getElementById('quote-box').innerHTML = html;
    }

    if (generateRandomQuote.citation.length === 0){
      html += '<span class = "citation">' + generateRandomQuote.citation + '</span>' + '</p>';
      document.getElementById('quote-box').innerHTML = html;
    } else {
      document.getElementById('quote-box').innerHTML = html;

  }
    if (generateRandomQuote.tags === "strength quote"){
      html += '<span class = "tags">'+  generateRandomQuote.tags; + '</span>' + '</p>';
      document.getElementById('quote-box').innerHTML = html;
  } else {
    document.getElementById('quote-box').innerHTML = html;
}

  }


document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotesObj = [{
  quote: '“Don\'t cry because it\'s over, smile because it happened.”',
  author: '― Dr. Seuss'
}, {
  quote: '“Be yourself; everyone else is already taken.”',
  author: '― Oscar Wilde'
}, {
  quote: '“A room without books is like a body without a soul.”',
  author: '― Marcus Tullius Cicero'
}, {
  quote: '“You only live once, but if you do it right, once is enough.” ',
  author: '― Mae West'
}, {
  quote: '“Be the change that you wish to see in the world.” ',
  author: '― Mahatma Gandhi'
}]

$("#randombtn").on("click", function() {
  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var quoteRand = getRandom(0, quotesObj.length);
  var quoteString = quotesObj[quoteRand].quote;
  var authorString = quotesObj[quoteRand].author;
  $(".quotes").html(quoteString);
  $(".author").html(authorString);
});
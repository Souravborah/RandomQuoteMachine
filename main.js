$(document).ready(function(){

   var quote;
   var author;

   function randomQuotes(){
   	$.ajax({
      url: 'http://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
      	method: 'getQuote',
      	lang: 'en',
      	format: 'jsonp',
      },
      success: function(response){
      	quote = response.quoteText;
      	author = response.quoteAuthor;
      	$('#quote').text(quote);
      	if(author){
      		$('#author').text('- ' + author);
      	} else{
            $('#author').text('- Unknown');
      	}
      }
   	});
   }
   randomQuotes();

   $('.getQuote').on('click', function(event){
      event.preventDefault();
      randomQuotes();
   });

   $('.shareQuote').on('click', function(event){
      event.preventDefault();
      window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + ' -- ' + author));
   });
});
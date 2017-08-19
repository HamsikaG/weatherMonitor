$(document).ready(function(){

  $("#butt").on('click',function() {
      $.ajax({
        type: 'GET',
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
    dataType: 'json',
        success: function(data) {
 console.log('success',data);
  document.getElementById("demo").innerHTML=data.quote;
  document.getElementById("auth").innerHTML="Author: "+data.author;
  document.getElementById("cat").innerHTML="Category: "+data.category;

      },
      error:function(exception){alert('Exeption:'+exception);},
      beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "EX9MsEk9GNmsh0ZnYvg56vLR3sTSp11g7z7jsn3nUkUriLvgMD"); // Enter here your Mashape key
    }
});

    });
});

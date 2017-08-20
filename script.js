$(document).ready(function(){
  var x = document.getElementById("demo");
  $('#tempunit').hide();
  if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(showPosition);
  else
      x.innerHTML = "Geolocation is not supported by this browser.";
  function showPosition(position) {
      $.ajax({
        type: 'GET',
    url: 'https://fcc-weather-api.glitch.me/api/current?lat='+position.coords.latitude+'&lon='+position.coords.longitude,
    dataType: 'json',
        success: function(data) {
 console.log('success',data);
 $('#tempunit').show();

  $('body').css('background', 'url(' + data.weather[0].icon + ')');
  document.getElementById("demo").style.color="black";
document.getElementById("demo").innerHTML="Weather: "+ data.weather[0].description+"<br>"+" City: "+ data.name;
document.getElementById("temp").innerHTML="<br>"+" Temp: "+ data.main.temp;
$('.temp').click(function fToC(){
  $(this).text(function(i, text){
if (text === "F")
   {
     var fTemp=data.main.temp;
       var fToCel = (fTemp - 32) * (5 / 9);
    //   fToCel =   fToCel.toFixed(2); //returns string fixed to 2 decimal places
//fToCel =   parseFloat(fToCel);
       document.getElementById("temp").innerHTML="<br>"+" Temp: "+ fToCel;
return "C";
   }
   else
   {
     var cTemp = parseFloat($("temp").text()* 9 / 5 + 32);


  document.getElementById("temp").innerHTML="<br>"+" Temp: "+ cTemp;
  return "F";

   }
});
// $("#tempunit").click(function () {
//     var currentTempUnit = $("#tempunit").text();
//     var newTempUnit = currentTempUnit == "C" ? "F" : "C";
//     $("#tempunit").text(newTempUnit);
//     if (newTempUnit == "F") {
//       var fahTemp = Math.round(parseInt($("#temp").text()) * 9 / 5 + 32);
//       $("#temp").text(fahTemp + " " + String.fromCharCode(176));
//     } else {
//       $("#temp").text(currentTempInCelsius + " " + String.fromCharCode(176));
//     }
//   });
});
      },
      error:function(exception){alert('Exeption:'+exception);},
  });
    }

});

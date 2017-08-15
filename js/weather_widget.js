$(document).ready(function () {
  $.simpleWeather({
    woeid: '', //2357536
    location: '66213',
    unit: 'f',
    success: function (weather) {
      console.log(weather.forecast);
      $("#current-image").attr("src", weather.image);
      $("#left-col").css('background-image', 'url(' + weather.image + ')');
      $("#left-col").css('background-repeat', 'no-repeat');
      $("#left-col").css('background-position', 'right top');
      $("#current-temp").text(weather.temp + String.fromCharCode(176) + weather.units.temp);
      $("#current-location").text(weather.city + ', ' + weather.region);
      $("#current-condition").text(weather.currently);
      // for (var i = 0; i < weather.forecast.length; i++) {
      for (var i = 0; i < 5; i++) {
        $("#forecast").append(
          '<dl><dt>' + weather.forecast[i].day + '</dt><dd>' + weather.forecast[i].high + '<img src="' + weather.forecast[i].thumbnail + '"></dd></dl>'
        );
      }
    },
    error: function (error) {
      $("#weather").html('<p>' + error + '</p>');
    }
  });
});
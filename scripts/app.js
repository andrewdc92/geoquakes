// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
var $quakesList;
var map;


$(document).on("ready", function() {

  var source=$('#quakes-template').html();
  var template =Handlebars.compile(source);

  $.ajax ({
    method: "GET",
    url: weekly_quakes_endpoint,
    // data:
    dataType:'json',
    success: renderQuakeData,
    error: onError,

  })

    function renderQuakeData(quakeResults) {
      console.log("received results:", quakeResults);
      console.log(quakeResults.features[0].properties.title)
    }

    function onError(xhr, status, errorThrown) {
      alert("Sorry, there was a problem!");
      console.log("Error: " + errorThrown);
      console.log("Status: " + status);
      console.dir(xhr);
    }

});

// // pass in data to render in the template
// var trackHtml = template({ quakesList: trackResults });
//
// // append html to the view
// $results.append(trackHtml);

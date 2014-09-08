/*global $, document, window, console, alert, start */

// this function runs automatically when the page is loaded
$(document).ready(function () {

  // show an alert if user tries to navigate away from this page
  window.onbeforeunload = function() {
      return "Are you sure you want to leave this page?";
  };

  // load all scrips then begin the experiment
  $.when(
    $.getScript( "http://code.jquery.com/jquery-latest.min.js" ),

    $.Deferred(function( deferred ){
      $( deferred.resolve );
    })
  ).done(function(){
    startExperiment();
  });
});

/*global $ */

function finishExperiment() {
  /*
  * function called when the subject clicks Done
  *
  * This function reads the responses the subject gives
  * and passes those responses to the function saveData
  * 
  * This function then hides the experiment and displays a "Thank you" message
  */
  
  var responses = $('form').serializeArray();
  saveData(responses);
  
  $('#experiment').hide();
  $('#message').text("Thank you for completing the experiment!");
}

function saveData(data) {
  /*
  * write a new row to the database
  *
  * data: a dictionary composed of key, value pairs
  *       containing all the info to write to the database
  *
  * an anonymous function is used because it creates a
  * copy of all information in the data variable, 
  * thus if any other functions change the data object after this function executes
  * then the information written to the database does not change.
  */

  (function (d) {
    $.post('submit',  {"content": JSON.stringify(d)});
  })(data);
}


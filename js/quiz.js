var quiz = {
  
  //Change this variable to point at the contact us page
  contact_us_url : "http://www.google.co.uk",

  //Chage this if you want more than 2 options in the quiz
  num_options: 2

};


/*  
 *  Initialises all components of the quizes 
 */
$(document).ready(function(){
  /* Makes sure the contact us button links to the same place */
  $("#contact-us").click(function(){
    window.location.href = quiz.contact_us_url;
  });  
  
  /* Ensures that radio buttons move on to the next slide */
  $(".question-wrapper input:radio").click(function(){
    parent_div = $(this).parent().parent(); //Gets the parent of the radio button which has been clicked
    if(parent_div.find("input:radio:checked").length == quiz.num_options){ //checks all items have been selected
      $("#quiz-carousel").carousel("next"); //Moves the quiz on to the next question
    } 
  });
  $("#start-quiz").click(function(){
    $("#quiz-carousel").carousel("next");
  })
});

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
  var next_slide = function() {$("#quiz-carousel").carousel("next");} //Moves the quiz on to the next question
  /* Makes sure the contact us button links to the same place */
  $("#contact-us").click(function(){
    window.location.href = quiz.contact_us_url;
  });  
  
  /* Ensures that radio buttons move on to the next slide */
  $(".question-wrapper input:radio").click(function(){
    parent_div = $(this).parent().parent(); //Gets the parent of the radio button which has been clicked
    if(parent_div.find("input:radio:checked").length == quiz.num_options){ //checks all items have been selected
      next_slide();
    } 
  });
  $("#start-quiz").click(next_slide);
  $("#continue-button").click(next_slide);
  $("#check-my-power-button").click(function(){
    console.log("Checking power");
    var quiz-data = get_quiz_data();
    var parsed-data = parse_quiz_data(quiz-data);
    display-data(parsed_data); 
  }) 
});

function get_quiz_data(){
  console.log($(".item input:radio:selected"));
}

function parse_quiz_data(data){
  return [];
}

function display_data(data){
  console.log("data");
}

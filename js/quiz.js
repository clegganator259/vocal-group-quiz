var quiz = {
  
  //Change this variable to point at the contact us page
  contact_us_url : "http://www.google.co.uk",

  //Chage this if you want more than 2 options in the quiz
  num_options: 2,

  //url the guage is fetched from
  guages_url: "/vocal-group-quiz/guages.html",
  quiz_url: "/vocal-group-quiz/quiz.html"
};

$(document).ready(function(){
  quiz.quiz_url = location.protocol + "//" + document.domain + quiz.quiz_url;
  quiz.guages_url = location.protocol + "//" + document.domain + quiz.guages_url;
  console.log(quiz.quiz_url);
  load_quiz();
});

/*  
 *  Initialises all components of the quizes 
 */
function initialise_quiz(){
  var next_slide = function() {$("#quiz-carousel").carousel("next");}; //Moves the quiz on to the next question
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
    var quiz_data = get_quiz_data();
    var parsed_data = parse_quiz_data(quiz_data);
    display_data(parsed_data); 
    console.log(quiz.quiz_url);
    console.log("Data displayed");
  });
}

function get_quiz_data(){
  return $(".item input:radio:checked");
}

function parse_quiz_data(data){
  return data.map(function(element){
    return element;
  });
}

function display_data(data){
  console.log(quiz.guages_url);
  $.ajax({
    url: quiz.guages_url,
    success: make_guages(data)
  });
}

function load_quiz(){
  $.ajax({
    url: "quiz.html",
    success: function(html){
      console.log("loading quiz");
      console.log(html);
      console.log($("#quiz-container"));
      $("#quiz-container").empty();
      $("#quiz-container").append(html);
      initialise_quiz();
    },
    failure: function() {
      console.log("FAILURE");
    }
  })
}


function make_guages(data){
  return function(html){
    var new_page = $(html);
    console.log("Done");
    console.log($("#quiz-container"));
    console.log($(html));
    $("#quiz-container").empty();
    $("#quiz-container").append(html);
    var values = [67,46,76,34,54,45];
    var g1 = new JustGage({
        id: "main_guage",
        value: values[0],
        min: 0,
        max: 100,
        relativeGaugeSize: true,
        title: "Visitors"

    });
    var g2 = new JustGage({
        id: "p_guage",
        value: values[1],
        min: 0,
        max: 100,
        relativeGaugeSize: true,
        title: "Visitors"

    });
    var g3 = new JustGage({
        id: "o_guage",
        value: values[2],
        min: 0,
        max: 100,
        relativeGaugeSize: true,
        title: "Visitors"

    });
    var g4 = new JustGage({
        id: "w_guage",
        value: values[3],
        min: 0,
        max: 100,
        relativeGaugeSize: true,
        title: "Visitors"

    });
    var g5 = new JustGage({
        id: "e_guage",
        value: values[4],
        min: 0,
        max: 100,
        relativeGaugeSize: true,
        title: "Visitors"

    });
    var g6 = new JustGage({
        id: "r_guage",
        value: values[5],
        min: 0,
        max: 100,
        relativeGaugeSize: true,
        title: "Visitors"

    });
  }
}

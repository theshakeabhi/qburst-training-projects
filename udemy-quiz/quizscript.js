var questions = [
    {
      question: "Who invented JavaScript?",
      choices: ["Douglas Crockford", "Sheryl Sandberg" ,"Brendan Eich"],
      correctAnswer: 2
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      choices: [ "Node.js","TypeScript",  "npm"],
      
      correctAnswer: 2
    },
    {
      question: "Which tool can you use to ensure code quality?",
      choices: ["Angular","jQuery","RequireJS","ESLint"],
      correctAnswer: 3
    }
  ];

  var currentQuestion =0;
  var correctAnswers=0;
  var quizOver  =false;

  $(document).ready(function() {
      displayCurrentQuestion();
      $(this).find(".quizMessage").hide();
      $(this).find(".nextButton").on("click",function () {
          if(!quizOver){
              value=$("input[type='radio']:checked").val();
              if(value == undefined){
                $(document).find(".quizMessage").text("please select an answer");
                $(document).find(".quizMessage").show();
              }
              else{
                $(document).find(".quizMessage").hide();
                if(value == questions[currentQuestion].correctAnswer){
                    correctAnswers++;
                }
                currentQuestion++;
                if(currentQuestion < questions.length){
                    displayCurrentQuestion();
                }
                else{
                    displayScore();
                    $(document).find(".nextButton").text("play again");
                    quizOver =true;

                }
              }
            }else{
              quizOver=false;
              $(document).find(".nextButton").text("Next Question");
              resetQuiz();
              displayCurrentQuestion();
              hideScore();
          }

    });


});

function displayCurrentQuestion(){

    console.log("In display current question");

    var quest = questions[currentQuestion].question;
    var questionClass=$(document).find(".quizContainer > .question");
    var choiceClass=$(document).find(".quizContainer > .choiceList");
    var numChoices=questions[currentQuestion].choices.length;

    $(questionClass).text(quest);
    $(choiceClass).find("li").remove();
    var choice;
    for ( i=0 ; i< numChoices;i++) {
        choice=questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' +i+ ' name="dynradio"/>' +choice+ '</li>').appendTo(choiceClass);
    }
}

    function resetQuiz(){
        currentQuestion=0;
        correctAnswers=0;
        hideScore();
    }

    function displayScore() {
        $(document).find(".quizContainer > .result").text("You scored :"+ correctAnswers);
        $(document).find(".quizContainer > .result").show();
    }

    function hideScore() {
        $(document).find(".result").hide();
    }
        
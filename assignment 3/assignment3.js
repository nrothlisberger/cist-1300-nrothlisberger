
function check(){

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var question9 = document.quiz.question9.value;
    var question10 = document.quiz.question10.value;
    var question11 = document.quiz.question11.value;
    var question12 = document.quiz.question12.value;
    var question13 = document.quiz.question13.value;
    var question14 = document.quiz.question14.value;
    var question15 = document.quiz.question15.value;
    var correct = 0;


    if (question1 == "Providence") {
        correct++;
    }
    if (question2 == "Hartford") {
        correct++;
    }
    if (question3 == "Albany") {
        correct++;
    }
    if(question4 == "Texas"){
        correct++;
    }
    if(question5 == "Montana"){
        correct++;
    }
    if(question6 == "Mexico"){
        correct++;
    }
    if(question7 == "60"){
        correct++;
    }
    if(question8 == "a"){
        correct++;
    }
    if(question9 == "z"){
        correct++;
    }
    if(question10 == "west"){
        correct++;
    }
    if(question11 == "7"){
        correct++;
    }
    if(question12 == "a"){
        correct++;
    }
    if(question13 == "2 million"){
        correct++;
    }
    if(question14 == "New Jersey"){
        correct++;
    }
    if(question15 == "true"){
        correct++;
    }

    var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
    var messages = ["Great job!", "That's just okay", "You really need to do better"];
    var score;

    if (correct == 0) {
        score = 10;
    }

    if (correct > 0 && correct < 15) {
        score = 5;
    }

    if (correct == 15) {
        score = 0;
    }

    document.getElementById("after_submit").style.visibility = "visible";

    document.getElementById("message").innerHTML = messages[score];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
    document.getElementById("picture").src = pictures[score];
}

const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const choiceA = document.getElementById("A")
const choiceB = document.getElementById("B")
const choiceC = document.getElementById("C")
const choiceD = document.getElementById("D")

const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("score);
const scoreContainer = document.getElementById("scoreContainer")

let questions = [
    {
        question: "what is two plus two?",
        choiceA: 1,
        choiceB: 2,
        choiceC: 3,
        choiceD: 4,
        correct: "D"
    },

[{
    question : "How many moons does the Earth have? ,
    choiceA : 1,
    choiceB : 2,
    choiceC : 3,
    choiceD : 4,
    correct : "A"
}]

[{
    question : "are there are seven days in a week?,
    choiceA : true,
    choiceB : false,
    correct: "A"
}


{
 question :
    {
        question: "what is two plus two?
        choiceA: 1,
        choiceB: 2,
        choiceC: 3,
        choiceD: 4,
        correct: "D"
    },
]
    [{
        question : "How many moons does the Earth have? ,
        choiceA : 1,
        choiceB : 2,
        choiceC : 3,
        choiceD : 4,
        correct : "A"
    }]

        [{
        question : "How many moons does the Earth have? ,
        choiceA : 1,
        choiceB : 2,
        choiceC : 3,
        choiceD : 4,
        correct : "A"
    }]

        [{
        question : "How many moons does the Earth have? ,
        choiceA : 1,
        choiceB : 2,
        choiceC : 3,
        choiceD : 4,
        correct : "A"
    }]

        [{
        question : "How many moons does the Earth have? ,
        choiceA : 1,
        choiceB : 2,
        choiceC : 3,
        choiceD : 4,
        correct : "A"
    }]

        [{
        question : "How many moons does the Earth have? ,
        choiceA : 1,
        choiceB : 2,
        choiceC : 3,
        choiceD : 4,
        correct : "A"
    }]

        [{
        question : "How many moons does the Earth have? ,
        choiceA : 1,
        choiceB : 2,
        choiceC : 3,
        choiceD : 4,
        correct : "A"
    }]

        [{
        question : "How many moons does the Earth have? ,
        choiceA : 1,
        choiceB : 2,
        choiceC : 3,
        choiceD : 4,
        correct : "A"
    }]

        [{
        question : "How many moons does the Earth have? ,
        choiceA : 1,
        choiceB : 2,
        choiceC : 3,
        choiceD : 4,
        correct : "A"
    }]
        [{
        question : "How many moons does the Earth have? ,"
        choiceA : 1,
        choiceB : 2,
        choiceC : 3,
        choiceD : 4,
        correct : "A"
    }]
    [{
    question : "How many moons does the Earth have? ,
    choiceA : 1,
    choiceB : 2,
    choiceC : 3,
    choiceD : 4,
    correct : "A"
}]
    [{
    question : "How many moons does the Earth have? ,
    choiceA : 1,
    choiceB : 2,
    choiceC : 3,
    choiceD : 4,
    correct : "A"
}]


const lastQuestion = questions.length -1;
let runningQuestionIndex = 0;


function renderQuestion(){
    let q = questions[runningQuestionIndex];
    question.innerHTML = "<p>"+ q.question+"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}
start.style.display = "none";
renderQuestion();
quiz.style.display = "block";
function renderProgress(){
for(let qIndex = 0; qIndex <= lastQuestion;
    qIndex++){
    progress.innerHTML += "<div class='prog' id="+
        qIndex +"></div>";
}
}

let count = 0;
const questionTime = 15;
const gaugeWidth = 150;
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;
count = 0;
function renderCounter(){

    if (count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit +"px";
        count++ }
    }else{
    clearInterval(TIMER);
    scoreRender();
{
    count = 0;
    answerIsWrong();
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    }else{
        clearInterval(TIMER);
}

}
start.addEventListener("click",startQuiz;
        start.addEventListener("click",startQuiz);
        function startQuiz(){
            start.style.display = "none";
            renderQuestion();
            quiz.style.display = "block";
            renderProgress();
            renderCounter();
            TIMER = setInterval(renderCounter,1000);
        }
function checkAnswer(answer){
if (answer == questions[runningQuestion].correct) {
    score++;
answerIsCorrect();
}else{
    answerIsWrong();
    count = 0;
    if(runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
        clearInterval(TIMER);
    }
}

}
}

function answerIsCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = "0f0";
}

function answerIsWrong(){
 document.getElementById(runningQuestion).style.backgroundColor = "f00";

        }
        function scoreRender(){
scoreDiv.style.display = "block";

const scorePerCent = Math.round(100 * score/questions.length);
}

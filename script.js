
let timer = 90
let quizDiv = document.querySelector("#quiz");
let questionButton1 = document.querySelector("#answer1");

let timerID = setInterval(function () {

    timer -= 1
    console.log(timer)


}, 1000)


let questions = [{ question: "What color is the sky?", answers: ["blue", "red", "yellow", "green"], correctAnswer: "blue" },
{ question: "What color is the sky?", answers: ["blue", "red", "yellow", "green"], correctAnswer: "blue" },
{question: "What is normally used to measure the yield of explosions?", answers:["Newtons", "Weight of TNT", "BTU's", "kg/cm2"], correctAnswer: "Weight of TNT"},
{question: "How much would one cubic inch of a nuetron star weigh on earth?", answers:["3 lbs", "35 lbs", "950 lbs", "2 billion tons"], correctAnswer: "2 billion tons"},
]

let currentQuestion = 0
renderQuestion();

function renderQuestion(){
    questionButton1.textContent = questions[currentQuestion].answers[0];

}

questions[0].question
questions[0].answers[0]
questions[0].answers[1]
questions[0].answers[2]
questions[0].answers[3]
questions[0].correctAnswer
questions[1].question
questions[1].answers[0]
questions[1].answers[1]
questions[1].answers[2]
questions[1].answers[3]
questions[1].correctAnswer
questions[2].question
questions[2].answers[0]
questions[2].answers[1]
questions[2].answers[2]
questions[2].answers[3]
questions[2].correctAnswer

quizDiv.addEventListener("click", function(event){

    if(event.target.matches("button"))
        console.log("clicked")
        renderQuestion();
        currentQuestion++

})
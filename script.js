let quizDiv = document.querySelector("#quiz");
let timerEl = document.querySelector("#timer");
let startButton = document.querySelector("#startButton")
let startQuiz = document.querySelector("#startQuiz")
let answers = document.querySelector("button")
let questionsText = document.querySelector("#question")
let questionButton1 = document.querySelector("#answer1");
let questionButton2 = document.querySelector("#answer2");
let questionButton3 = document.querySelector("#answer3");
let questionButton4 = document.querySelector("#answer4");
let correctAnswer = document.querySelector("correct-answer")
let currentScore = document.querySelector("currentScore")
let highScores = JSON.parse(localStorage.getItem("highScores")) || {};
let saveScore = document.querySelector("#saveScore")
let initials = document.querySelector("#initials")
let saveBtn = document.querySelector("#saveBtn")
let timer = 90
let startTimer = () => setInterval(function () {

    timer -= 1
    console.log(timer)


}, 1000)


let questions = [{ question: "What color is the sky", answers: ["blue", "red", "yellow", "green"], correctAnswer: "blue" },
{ question: "What color is the ocean?", answers: ["blue", "red", "yellow", "green"], correctAnswer: "blue" },
{ question: "What is normally used to measure the yield of explosions?", answers: ["Newtons", "Weight of TNT", "BTU's", "kg/cm2"], correctAnswer: "Weight of TNT" },
{ question: "How much would one cubic inch of a nuetron star weigh on earth?", answers: ["10 lbs", "5000 lbs", "2 million lbs", "2 billion tons"], correctAnswer: "2 billion tons" },
]

let currentQuestion = -1

function renderQuestion() {
    let answerContainer = document.querySelector("#answerContainer")
    currentQuestion++;
    if (currentQuestion === 4) {
        saveScore.classList.remove("hidden")
        quizDiv.classList.add("hidden")
        return
    }
    console.log("renderQuestion", currentQuestion)
    questionsText.innerText = questions[currentQuestion].question
    questionButton1.innerText = questions[currentQuestion].answers[0]
    questionButton2.innerText = questions[currentQuestion].answers[1]
    questionButton3.innerText = questions[currentQuestion].answers[2]
    questionButton4.innerText = questions[currentQuestion].answers[3]

    if (currentQuestion === 0){
    answerContainer.addEventListener("click", function (event) {
        console.log("click", event.target.classList[0])
        if (event.target.classList[0] === "Answer") {
            console.log(questions[currentQuestion].correctAnswer)
            event.target.innerText === questions[currentQuestion].correctAnswer ?
                currentScore++ :
                timer -= 10;
            renderQuestion();
        }
    })}



}
startButton.addEventListener("click", function (event) {
    console.log(event)


    startTimer()
    startQuiz.classList.add("hidden")
    quizDiv.classList.remove("hidden")


    

    renderQuestion();



})
initials.addEventListener("change", function(event){
    initials.innerText = event.target.value
})
saveBtn.addEventListener("click", function (event) {
    highScores[initials.value] = currentScore
    let highScoresString = JSON.stringify(highScores)
    localStorage.setItem("highScores", highScoresString)
    window.location.href = "./highscores.html"
})




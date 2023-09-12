let first = document.querySelector("#first")
let second = document.querySelector("#second")
let third = document.querySelector("#third")
let highscores = JSON.parse(localStorage.getItem("highScores"))
let scores = Object.values(highscores).sort()
let firstObject = Object.keys(highscores)[0]
let secondObject = Object.keys(highscores)[1]
let thirdObject = Object.keys(highscores)[2]

first.innerText = firstObject?`${firstObject}: ${highscores[firstObject]}`:""
second.innerText = secondObject?`${secondObject}: ${highscores[secondObject]}`:""
third.innerText = thirdObject?`${thirdObject}: ${highscores[thirdObject]}`:""

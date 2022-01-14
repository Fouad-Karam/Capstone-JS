
const questionBtn = document.getElementById("question-btn")
const answerBtn = document.getElementById("answer-btn")

const table1 = document.getElementById("table-el1") 

table1.addEventListener("click", function() {
    console.log("Table 1 Clicked")
})

questionBtn.addEventListener("click", function() {
    console.log("New Question Clicked");
})

answerBtn.addEventListener("click", function() {
    console.log("New Answer Clicked");
})
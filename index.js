/*Const variables*/
const questionBtn = document.getElementById("question-btn")
const answerBtn = document.getElementById("answer-btn")

const questionBox = document.getElementById("question-el")
const answerBox = document.getElementById("answer-el")

const table1 = document.getElementById("table-el1")
const table2 = document.getElementById("table-el2") 
const table3 = document.getElementById("table-el3") 
const table4 = document.getElementById("table-el4") 
const table5 = document.getElementById("table-el5") 
const table6 = document.getElementById("table-el6") 
const table7 = document.getElementById("table-el7") 
const table8 = document.getElementById("table-el8") 
const table9 = document.getElementById("table-el9") 
const table10 = document.getElementById("table-el10") 
const table11 = document.getElementById("table-el11") 
const table12 = document.getElementById("table-el12") 

const lstTable1 = {
    "1x1": "1",
    "1x2": "2"
}

/*Multiplication table functions*/
table1.addEventListener("click", function() {
    questionBox.textContent = "Question for table 1"
})

table1.addEventListener("click", function() {
    answerBox.textContent = "Answer for table 1"
})

table2.addEventListener("click", function() {
    questionBox.textContent = "Question for table 2"
})

table2.addEventListener("click", function() {
    answerBox.textContent = "Answer for table 2"
})

table3.addEventListener("click", function() {
    console.log("Table 3 Clicked")
})
table4.addEventListener("click", function() {
    console.log("Table 4 Clicked")
})
table5.addEventListener("click", function() {
    console.log("Table 5 Clicked")
})
table6.addEventListener("click", function() {
    console.log("Table 6 Clicked")
})
table7.addEventListener("click", function() {
    console.log("Table 7 Clicked")
})
table8.addEventListener("click", function() {
    console.log("Table 8 Clicked")
})
table9.addEventListener("click", function() {
    console.log("Table 9 Clicked")
})
table10.addEventListener("click", function() {
    console.log("Table 10 Clicked")
})
table11.addEventListener("click", function() {
    console.log("Table 11 Clicked")
})
table12.addEventListener("click", function() {
    console.log("Table 12 Clicked")
})


/*Question & Answer functions*/
questionBtn.addEventListener("click", function() {
    console.log("New Question Clicked");
})

answerBtn.addEventListener("click", function() {
    console.log("New Answer Clicked");
})
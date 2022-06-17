// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score


// 5 Questions
// Which company developed javascript?
// Microsoft, Netscape, Apple, Adobe, Disney

// Which of these is a looping structure in Javascript?
// this, else, if, FOR, why

// What would be the result of 3+2+"7"?
// 12, 42, 14, 28, Fiftyseven

// Why is a Pop up box type available in javascript?
// ALERT, Hey you, Psst, Ding-ding, Prompter

// Does Javascript have concept level scope?
// No  

var body = document.body;
var h1El = document.createElement('h1');
var buttonEl = document.querySelector("#nxt-quest");
var questionsEl = document.querySelector("#questions");



// // create button element
var startQuiz = function() {
  var listItemEl = document.createElement("li");
  listItemEl.className = "";
  listItemEl.textContent = ("Microsoft, Netscape, Apple, Adobe, Disney");
  questionsEl.appendChild(listItemEl);    
};

buttonEl.addEventListener("click", startQuiz);

// List items for each question
var quest1ItemEl = document.createElement ("li");
var quest2ItemEl = document.createElement ("li");
var quest3ItemEl = document.createElement ("li");
var quest4ItemEl = document.createElement ("li");
var quest5ItemEl = document.createElement ("li");

quest1ItemEl.textContent = ("Microsoft", "Netscape", "Apple", "Adobe", "Disney");


// listEl.appendChild(li1)
// listEl.appendChild(li2)
// listEl.appendChild(li3)
// listEl.appendChild(li4)
// listEl.appendChild(li5)


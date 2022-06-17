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

// List items for each question
var li1 = document.createElement ("li");
var li2 = document.createElement ("li");
var li3 = document.createElement ("li");
var li4 = document.createElement ("li");
var li5 = document.createElement ("li");

li1.textContent = "Microsoft";
li2.textContent = "Netscape";
li3.textContent = "Apple";
li4.textContent = "Adobe";
li5.textContent = "Disney";

listEl.appendChild(li1)
listEl.appendChild(li2)
listEl.appendChild(li3)
listEl.appendChild(li4)
listEl.appendChild(li5)

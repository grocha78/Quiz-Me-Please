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


//  let questions = [
//     {
//         numb: 1,
//         question: "Which company developed Javascript?",
//         answer: "Netscape",
//         options: ["Microsoft", "Netscape", "Apple", "Adobe", "Disney"]
//     },
//     {
//         numb: 2,
//         question: "What does CSS stand for?",
//         answer: "Cascading Style Sheet",
//         options: ["Computer Style Sheet", "Cheese Sausage Sandwich", "Cascading Style Sheet", "Colors Style Sheet", "Common Colors Sheet"]
//     },
//     {
//         numb: 3,
//         question: "Which of these is a looping structure in Javascript?",
//         answer: "For",
//         options: ["this", "else", "if", "for", "why"]
//     },
//     {
//         numb: 4,
//         question: "Does Javascript have concept level scope?",
//         answer: "Yes",
//         options: ["Yes", "No"]
//     },
//     {
//         numb: 5,
//         question: "What is a pop up box type available in javascript?",
//         answer: "alert",
//         options: ["alert", "hey", "prompter", "psst", "popup"]
//     },

// ]

var body = document.body;
var h1El = document.createElement('h1');
var buttonEl = document.querySelector("#nxt-quest");
var questionsEl = document.querySelector("#questions");
//var questionSubmitClick = document.querySelector("#questionSubmit");

//questionSubmitClick.addEventListener("click", insertQuestion);

// //function insertQuestion(event) {
//   event.preventDefault();
//   var questionListEl = document.createElement("li");
//   questionListEl.textContent = questionInput.value;
//   questionListEl.className = "list-group-item";
//   listEl.appendChild(questionListEl);
// }

// create button element
// var startQuiz = function() {
//   event.preventDefault();
//   var listItemEl = document.createElement("li");
//   listItemEl.className = "container";
//   listItemEl.textContent = ("");
//   questionsEl.appendChild(listItemEl);    
// };

// buttonEl.addEventListener("click", startQuiz);

var container1 = document.querySelector('.container1');

container1.addEventListener('click', function (event) {
  var element = event.target;

  // if (element.matches(".box")) {
  var state = element.getAttribute('data-state');

  // Use an if statement to conditionally render the number on the card
  if (state === 'hidden') {
    // Using the dataset property, we change the state to visible because the user can now see the number
    element.dataset.state = 'visible';
  } else {
    // 'Hide' the number by setting .textContent to an empty string
    element.textContent = ("Which company developed Javascript?");
    // Use .setAttribute() method
    element.setAttribute('data-state', 'hidden');
  }
  //}
});

var container2 = document.querySelector('.container2');

container2.addEventListener('click', function (event) {
  var element = event.target;

  // if (element.matches(".box")) {
  var state = element.getAttribute('data-state');

  // Use an if statement to conditionally render the number on the card
  if (state === 'hidden') {
    // Using the dataset property, we change the state to visible because the user can now see the number
    element.dataset.state = 'visible';
  } else {
    // 'Hide' the number by setting .textContent to an empty string
    element.textContent = ("What does CSS stand for?");
    // Use .setAttribute() method
    element.setAttribute('data-state', 'hidden');
  }
  //}
});

var container3 = document.querySelector('.container3');

container3.addEventListener('click', function (event) {
  var element = event.target;

  // if (element.matches(".box")) {
  var state = element.getAttribute('data-state');

  // Use an if statement to conditionally render the number on the card
  if (state === 'hidden') {
    // Using the dataset property, we change the state to visible because the user can now see the number
    element.dataset.state = 'visible';
  } else {
    // 'Hide' the number by setting .textContent to an empty string
    element.textContent = ("Which of these is a looping structure in Javascript?");
    // Use .setAttribute() method
    element.setAttribute('data-state', 'hidden');
  }
  //}
});

var container4 = document.querySelector('.container4');

container4.addEventListener('click', function (event) {
  var element = event.target;

  // if (element.matches(".box")) {
  var state = element.getAttribute('data-state');

  // Use an if statement to conditionally render the number on the card
  if (state === 'hidden') {
    // Using the dataset property, we change the state to visible because the user can now see the number
    element.dataset.state = 'visible';
  } else {
    // 'Hide' the number by setting .textContent to an empty string
    element.textContent = ("Does Javascript have concept level scope?");
    // Use .setAttribute() method
    element.setAttribute('data-state', 'hidden');
  }
  //}
});

var container5 = document.querySelector('.container5');

container5.addEventListener('click', function (event) {
  var element = event.target;

  // if (element.matches(".box")) {
  var state = element.getAttribute('data-state');

  // Use an if statement to conditionally render the number on the card
  if (state === 'hidden') {
    // Using the dataset property, we change the state to visible because the user can now see the number
    element.dataset.state = 'visible';
  } else {
    // 'Hide' the number by setting .textContent to an empty string
    element.textContent = ("What is a pop up box type available in javascript?");
    // Use .setAttribute() method
    element.setAttribute('data-state', 'hidden');
  }
  //}
});

// // package up data as an object
// var questDataobj = {

// };

// // sent it as an argument to createQuestEl
// createQuestEl(questDataobj);
// };

// var createQuestEl = function(questDataobj) {
//     // create list item
//   var listItemEl = document.createElement("li");
//   listItemEl.className = "";

// create div to hold question info and add to list item
    //var questInfoEl = document.createElement("div");
    //questInfoEl.className = "";

// add html content to div
  //questInfoEl.innerHTML = "<h3>Which company developed javascript?" + questDataobj.name + "</h3><span>" + questDataobj.type + "</span>";
  //listItemEl.appendChild(listItemEl);  

// add entire list item to list
//questionsEl.appendChild(listItemEl);
// }

// // function startTimer (time) {
//     counter = setInterval (timer, 1000);
//     function timer() {
//         timeCount.textContent = time;
//         time--;
//     if (time < 9) {
//         let addZero = timeCount.textContent;
//         timeCount.textContent = "0" + addZero;
//     }
//     if (time < 0) {
//         clearInterval(counter);
//         timeText.textContent = "Time Off";
//         var allOptions = option_list.children.length; //getting all option items
//             let correcAns = questions[que_count].answer; //getting correct answer from array
//             for(i=0; i < allOptions; i++){
//                 if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
//                     option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
//                     option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
//                     console.log("Time Off: Auto selected correct answer.");
//                 }
//             }
//             for(i=0; i < allOptions; i++){
//                 option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
//             }
//             next_btn.classList.add("show"); //show the next button if user selected any option
//         }
//     }
// }
   

// List items for each question
// var quest1ItemEl = document.createElement ("li");
// var quest2ItemEl = document.createElement ("li");
// var quest3ItemEl = document.createElement ("li");
// var quest4ItemEl = document.createElement ("li");
// var quest5ItemEl = document.createElement ("li");

// quest1ItemEl.textContent = ("Microsoft", "Netscape", "Apple", "Adobe", "Disney");


// listEl.appendChild(li1)
// listEl.appendChild(li2)
// listEl.appendChild(li3)
// listEl.appendChild(li4)
// listEl.appendChild(li5)


const questions = [
  {
    question: "The capital city of England is..",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    correct: "London",
    answers: ["Glasgow", "Manchester", "Cardiff", "London"]
  },
  {
    question: "The capital city of the USA is..",
    flag: "󠁧󠁢󠁥󠁮󠁧🇺🇸",
    correct: "Washington.DC",
    answers: ["New York", "Washington", "Los Angeles", "Washington.DC"]
  },
  {
    question: "The capital city of France is..",
    flag: "󠁧󠁢󠁥󠁮󠁧🇫🇷",
    correct: "Paris",
    answers: ["Lille", "Lyon", "Berlin", "Paris"]
  }
];
const shuffle = arr => arr.sort(() => .5 - Math.random());
shuffle(questions);
// Requirements
// 1. Dynamic HTML
// 1.1 Change number
// 1.2 Change question
// 1.3 Change answers
// 2. Change styles of buttons on click
// 3. Make sure we get the correct answer when we do click on the
// correct one
// 4. Reset stylings when we move on
// 5. Randomisation
const attachCheck = () => {
  const buttons = document.querySelectorAll(".answer");
  buttons.forEach(button => {
   
    button.addEventListener("click", (event) => {
      console.log(event.target.innerHTML)
      console.log(event.target.id)
      console.log(event)
      const answer = event.target.innerHTML;
      checkCorrectAnswer( button, answer);
    })
  })
}
// Generate dynamic HTML
const generateHTML = (question, answer1, answer2, answer3, answer4) => {
  // Get the main quiz area
  const main = document.querySelector(".quiz-area");
  // Reset to empty
  main.innerHTML = "";
  // Add in the stuff I want
  main.innerHTML = `
    <h2>${question}</h2>
    <section>
      <button id="blah" class="answer">${answer1}</button>
      <button class="answer">${answer2}</button>
      <button class="answer">${answer3}</button>
      <button class="answer">${answer4}</button>
    </section>
  `;
  attachCheck();
};
// start at the first question (index 0)
// When click next - increment the number
// Generate HTML again
let questionNumber = 0;
const incrementQuestion = () => {
  questionNumber++;
  const question = questions[questionNumber];
  generateHTML(
    question.question,
    question.answers[0],
    question.answers[1],
    question.answers[2],
    question.answers[3],
  );
};
const question = questions[questionNumber];
generateHTML(
  question.question,
  question.answers[0],
  question.answers[1],
  question.answers[2],
  question.answers[3],
);
document.querySelector(".next").addEventListener("click", () => {
  incrementQuestion();
})
// When I click the button
// Get it's innerHTML
const checkCorrectAnswer = (answer) => {
  // Check it against the correct answer
  const question = questions[questionNumber]
  // IF answer is correct 
  if (question.correct === answer) {

    console.log("Correct")
  } else {
// Change button styling incorrect

    console.log("Wrong")
  }
}
// Add the correct/Incorrect classes
// When I click the correct answer, make the button green
// When I click the incorrect answer, make the button red
// Clean the code however you see fit
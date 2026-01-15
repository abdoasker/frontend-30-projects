const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
      { text: "Paris", correct: true },
      { text: "Rome", correct: false },
    ],
  },
  {
    question: "What is the capital of Italy?",
    answers: [
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
      { text: "Rome", correct: true },
      { text: "Paris", correct: false },
    ],
  },
  {
    question: "What is the capital of Spain?",
    answers: [
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: true },
      { text: "Rome", correct: false },
      { text: "Paris", correct: false },
    ],
  },
  {
    question: "What is the capital of Germany?",
    answers: [
      { text: "Berlin", correct: true },
      { text: "Madrid", correct: false },
      { text: "Rome", correct: false },
      { text: "Paris", correct: false },
    ],
  },
];
// Get DOM elements for the quiz interface
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
// Initialize quiz state variables
let currentQuestionIndex = 0;
let score = 0;

// Function to start or restart the quiz
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
// Function to display the current question and its answers
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button); // Append answer button to the container
    if (answer.correct) {
      button.dataset.correct = answer.correct; // Store correct answer flag
    }
    button.addEventListener("click", selectAnswer); // Add click event to select answer
  });
}
// Function to reset the state before showing a new question
function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild); // Clear previous answer buttons
  }
}
// Function to handle answer selection
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true"; // Check if selected answer is correct
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++; // Increment score for correct answer
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct"); // Highlight correct answer
    }
    button.disabled = true; // Disable all buttons after selection
  });
  // If this is the last question, show score immediately; otherwise, show next button
  if (currentQuestionIndex === questions.length - 1) {
    showScore();
  } else {
    nextButton.style.display = "block";
  }
}

// Function to display the final score
function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}
// Function to handle next button click
function handleNextButton() {
  // Corrected typo from 'handel' to 'handle'
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(); // Show next question
  } else {
    showScore(); // Show final score
  }
}
// Event listener for next button
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length - 1) {
    handleNextButton(); // Move to next question
  } else {
    startQuiz(); // Restart quiz
  }
});
// Start the quiz when the script loads
startQuiz();

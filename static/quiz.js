// Questions, answer choices, and correct answers for each quiz
const quizzes = {
    quiz1: [
        {
            question: "1. Who was the first president of the United States of America?",
            answerChoices: ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "James Monroe"],
            correctAnswer: "George Washington"
        },
        {
            question: "2. Where was democracy first developed?",
            answerChoices: ["Greece", "Egypt", "England", "Japan"],
            correctAnswer: "Greece"
        },
        {
            question: "3. Who invented the telephone?",
            answerChoices: ["Albert Einstein", "Nikola Tesla", "Alexander Graham Bell", "Thomas Edison"],
            correctAnswer: "Alexander Graham Bell"
        },
        {
            question: "4. Which historical figure famously crossed the Alps with elephants in order to attack Italy?",
            answerChoices: ["Boudicca", "Vercingetorix", "Attila the Hun", "Hannibal Barca"],
            correctAnswer: "Hannibal Barca"
        },
        {
            question: "5. What island was Napoleon Bonaparte first exiled to?",
            answerChoices: ["Elba", "Jersey", "Tahiti", "Cyprus"],
            correctAnswer: "Elba"
        }
    ],
    quiz2: [
        {
            question: "1. Which one of the following is an amphibian?",
            answerChoices: ["Lion", "Frog", "Snake", "Whale"],
            correctAnswer: "Frog"
        },
        {
            question: "2. Which of the following is not one of the three types of rocks?",
            answerChoices: ["Metamorphic", "Sedimentary", "Molten", "Igneous"],
            correctAnswer: "Molten"
        },
        {
            question: "2. What is the largest planet in our solar system?",
            answerChoices: ["Saturn", "Earth", "Venus", "Jupiter"],
            correctAnswer: "Jupiter"
        },
        {
            question: "4. What is the forumla for water?",
            answerChoices: ["H20", "CO2", "CH4", "KCI"],
            correctAnswer: "H20"
        },
        {
            question: "5. What gas is needed by planets to perform photosynthesis?",
            answerChoices: ["Oxygen", "Carbon dioxide", "Helium", "Nitrogen"],
            correctAnswer: "Carbon dioxide"
        }
    ]
};

// Handles answer choice selection
function selectAnswer(quizId, questionId, selectedIndex) {
    const buttons = document.querySelectorAll(`#${questionId} button`);
    buttons.forEach((button, index) => {
        button.classList.remove('selected');
        if (index === selectedIndex) {
            button.classList.add('selected');
        }
    });
}

// Checks whether or not the selected answer choice is the correct answer
function checkAnswer(questionId, correctAnswer) {
    const selectedButton = document.querySelector(`#${questionId} .selected`);
    return selectedButton && selectedButton.textContent === correctAnswer;
}

// Provides functionality for the submit button in the quizzes
// Outputs a score (Correct Answer Choices/Total Questions)
function submitQuiz(quizId) {
    let score = 0;
    const questions = quizzes[quizId];
    questions.forEach((question, index) => {
        const questionId = `q${index + 1}`;
        if (checkAnswer(questionId, question.correctAnswer)) {
            score++;
        }
    });
    document.getElementById('result').textContent = `Score: ${score}/${questions.length}`;
}

// Event listeners for the buttons 
document.addEventListener("DOMContentLoaded", function() {
    const quizId = document.body.dataset.quizId;
    const questions = quizzes[quizId];
    questions.forEach((question, index) => {
        const questionId = `q${index + 1}`;
        const buttons = document.querySelectorAll(`#${questionId} button`);
        buttons.forEach((button, btnIndex) => {
            button.onclick = () => selectAnswer(quizId, questionId, btnIndex);
        });
    });
});

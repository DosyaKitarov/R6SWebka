const questions = [
    {
        question: "DO YOU USUALLY COMMUNICATE WITH YOUR TEAMMATES?",
        options:["No, never", 
                 "Yes, always"]
    },
    {
        question: "DO YOU PREFER MOVING CONSTANTLY OR HOLDING A POINT?",
        options:["I prefer moving constantly and surprising my enemy", 
                 "I prefer fully analyzing the situation before moving"]
    },
    {
        question: "WHAT IS MORE IMPORTANT FOR YOU?",
        options:["Pure skill", 
                 "Knowledge and tactics"]
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("survey-question");
const optionsContainer = document.getElementById("survey-options");

function showQuestion() {
    document.getElementById("survey").style.display = "unset";
    document.getElementById("survey-start").style.display = "none";

    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option) => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.classList.add("btn", "btn-dark", "fs-3", "text-light", "m-2")
        optionButton.addEventListener("click", checkAnswer);
        optionsContainer.appendChild(optionButton);
    });
}

function checkAnswer(event) {
    const selectedOption = event.target.textContent;
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.options[0]) {
        score += 5;
    }
    else {
        score -= 5;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz(event);
    }
}

function endQuiz(event) {
    event.preventDefault();

    document.getElementById("survey-body").style.display = "none";
    document.getElementById("suggested-operators").style.display = "unset";

    if (score === 15) {
        document.getElementById("suggestion-1-img").src = "imges/defense/caveira.png"
        document.getElementById("suggestion-1-name").textContent = "CAVEIRA"
        document.getElementById("suggestion-2-img").src = "imges/attack/ash.png"
        document.getElementById("suggestion-2-name").textContent = "ASH"
    }
    else if (score < 15 && score > 0) {
        document.getElementById("suggestion-1-img").src = "imges/defense/bandit.png"
        document.getElementById("suggestion-1-name").textContent = "BANDIT"
        document.getElementById("suggestion-2-img").src = "imges/attack/thermite.png"
        document.getElementById("suggestion-2-name").textContent = "THERMITE"
    }
    else if (score > -15 && score < 0) {
        document.getElementById("suggestion-1-img").src = "imges/defense/rook.png"
        document.getElementById("suggestion-1-name").textContent = "ROOK"
        document.getElementById("suggestion-2-img").src = "imges/attack/dokkaebi.png"
        document.getElementById("suggestion-2-name").textContent = "DOKKAEBI"
    }
    else if (score === -15) {
        document.getElementById("suggestion-1-img").src = "imges/defense/smoke.png"
        document.getElementById("suggestion-1-name").textContent = "SMOKE"
        document.getElementById("suggestion-2-img").src = "imges/attack/thatcher.png"
        document.getElementById("suggestion-2-name").textContent = "THATCHER"
    }
}
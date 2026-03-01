const questions = [
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "JQuery", "CSS", "XML"],
        correct: 2
    },
    {
        question: "Which is not a JavaScript Framework?",
        options: ["Python Script", "React", "Angular", "Vue"],
        correct: 0
    },
    {
        question: "Which is used for Connect To Database?",
        options: ["PHP", "HTML", "JS", "CSS"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    document.getElementById("question").innerText =
        questions[currentQuestion].question;

    const buttons = document.getElementsByClassName("option-btn");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerText = questions[currentQuestion].options[i];
    }

    document.getElementById("result").innerText = "";
}

function selectAnswer(index) {
    if (index === questions[currentQuestion].correct) {
        score++;
        document.getElementById("result").innerText = "Correct ✅";
    } else {
        document.getElementById("result").innerText = "Wrong ❌";
    }
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz").innerHTML =
            "<h2>Your Score: " + score + "/" + questions.length + "</h2>";
    }
}

loadQuestion();
// Questions that will be asked
const Questions = [{
	q: "Today it is Thursday.After 132 days,it will be?",
	a: [{ text: "Monday", isCorrect: false },
	{ text: "Sunday", isCorrect: false },
	{ text: "Wednesday", isCorrect: true },
	{ text: "Thursday", isCorrect: false }
	]

},
{
	q: "How many times the hands of a clock coincide in a day?",
	a: [{ text: "24", isCorrect: false, isSelected: false },
	{ text: "23", isCorrect: false },
	{ text: "21", isCorrect: false },
	{ text: "22", isCorrect: true }
	]

},
{
	q: " What is the HCF of 1095 and 1168?",
	a: [{ text: "37", isCorrect: false },
	{ text: "43", isCorrect: false },
	{ text: "73", isCorrect: true },
	{ text: "83", isCorrect: false }
	]

}

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}

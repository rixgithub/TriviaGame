$(document).ready(function() {

var question1 = {
	question: "What is the capital of Minnesota?",
	answer: "St. Paul",
	wrongOne: "Minneapolis",
	wrongTwo: "Duluth",
	wrongThree: "Rochester"
}

var question2 = {
	question: "What is the capital of New York?",
	answer: "Albany",
	wrongOne: "Buffalo",
	wrongTwo: "New York",
	wrongThree: "Rochester"
}

var question3 = {
	question: "What is the capital of Colorado?",
	answer: "Denver",
	wrongOne: "Boulder",
	wrongTwo: "Fort Collins",
	wrongThree: "Colorado Springs"
}

var question4 = {
	question: "What is the capital of Maryland?",
	answer: "Annapolis",
	wrongOne: "Frederick",
	wrongTwo: "Gaithersburg",
	wrongThree: "Baltimore"
}

var question5 = {
	question: "What is the capital of California?",
	answer: "Sacramento",
	wrongOne: "Los Angeles",
	wrongTwo: "San Francisco",
	wrongThree: "San Diego"
}

var correctAnswers = 0;

var incorrectAnswers = 0;

var unanswered = 0;

var timer =10;

var intervalId;

function timerStart() {
	intervalId = setInterval(decrement, 1000);
}

function decrement() {
	timer--;
	$("#timeRemaining").html("Time Remaining: " + timer);
	if (timer === 0) {
        timerStop();
    }
}

function timerStop() {
	clearInterval(intervalId);
}

function gamestart() {
	$("#start").on("click", function() {
		$("#start").detach();
		firstQuestion();
	});
}

function firstQuestion() {
  	timerStart();
	$("#questionDiv").html("<h2>" + question1.question + "</h2>");
	$("#answersDiv").append("<button class='button wrong'>" + question1.wrongOne + "</button>" + "<br>");
	$("#answersDiv").append("<button class='button right'>" + question1.answer + "</button>" + "<br>");
	$("#answersDiv").append("<button class='button wrong'>" + question1.wrongTwo + "</button>" + "<br>");
	$("#answersDiv").append("<button class='button wrong'>" + question1.wrongThree + "</button>" + "<br>");

	$(".right").on("click", function() {
		if (timer > 0) {
			correctAnswers++;
			$("#timeRemaining, #questionDiv, #answersDiv").empty();
			$("#resultDiv").append("<h2>You Are Correct!</h2>" + "<br>" + "<img>St. Paul pic</img>");
			setTimeout(secondQuestion, 4000);
		}
	});
	
	$(".wrong").on("click", function() {
		if (timer > 0) {
			incorrectAnswers++;
			$("#timeRemaining, #questionDiv, #answersDiv").empty();
			$("#resultDiv").append("<h2>Wrong Answer!</h2>" + "<h3>The Correct Answer is St. Paul</h3>" + "<img>St. Paul pic</img>");
			setTimeout(secondQuestion, 4000);
		}
	});

	if (timer === 0) {
		unanswered++;
		$("#timeRemaining, #questionDiv, #answersDiv").empty();	
		$("#resultDiv").append("<h2>Time Is Up!</h2>" + "<h3>The Correct Answer is St. Paul</h3>" + "<img>St. Paul pic</img>");
		setTimeout(secondQuestion, 4000);
		console.log("unanswered" + unanswered);
	}
}

function secondQuestion() {
	questionsAnswered = 1;
	timerStart();
	$("#resultDiv").empty();
	$("#questionDiv").html("<h2>" + question2.question + "</h2>");
	$("#answersDiv").append("<button class='button wrong'>" + question2.wrongOne + "</button>" + "<br>");
	$("#answersDiv").append("<button class='button wrong'>" + question2.wrongTwo + "</button>" + "<br>");
	$("#answersDiv").append("<button class='button wrong'>" + question2.wrongThree + "</button>" + "<br>");
	$("#answersDiv").append("<button class='button right'>" + question2.answer + "</button>" + "<br>");
	
	$(".right").on("click", function() {
		if (timer > 0) {
			correctAnswers++;
			$("#timeRemaining, #questionDiv, #answersDiv").empty();
			$("#resultDiv").append("<h2>You Are Correct!</h2>" + "<br>" + "<img>Albany pic</img>");
			setTimeout(thirdQuestion, 3000);
		}
	});

	$(".wrong").on("click", function() {
		if (timer > 0) {
			incorrectAnswers++;
			$("#timeRemaining, #questionDiv, #answersDiv").empty();
			$("#resultDiv").append("<h2>Wrong Answer!</h2>" + "<h3>The Correct Answer is Albany</h3>" + "<img>Albany pic</img>");
			setTimeout(thirdQuestion, 3000);
		}
	});

	if (timer === 0) {
		unanswered++;
		$("#timeRemaining, #questionDiv, #answersDiv").empty();
		$("#resultDiv").append("<h2>Time Is Up!</h2>" + "<h3>The Correct Answer is Albany</h3>" + "<img>Albany pic</img>");
		setTimeout(thirdQuestion, 3000);
	}
}

function thirdQuestion() {
	questionsAnswered = 2;
	timerStart();
	$("#resultDiv").empty();
	$("#questionDiv, #answersDiv").empty();
	$("#questionDiv").html("<h2>" + question3.question + "</h2>");
	$("#answersDiv").append("<button class='button wrong'>" + question3.wrongOne + "</button>" + "<br>");
	$("#answersDiv").append("<button class='button wrong'>" + question3.wrongTwo + "</button>" + "<br>");
	$("#answersDiv").append("<button class='button right'>" + question3.answer + "</button>" + "<br>");
	$("#answersDiv").append("<button class='button wrong'>" + question3.wrongThree + "</button>" + "<br>");

	$(".right").on("click", function() {
		if (timer > 0) {
			correctAnswers++;
			$("#timeRemaining, #questionDiv, #answersDiv").empty();
			$("#resultDiv").append("<h2>You Are Correct!</h2>" + "<br>" + "<img>Denver pic</img>");
			setTimeout(fourthQuestion, 3000);
		}
	});

	$(".wrong").on("click", function() {
		if (timer > 0) {
			incorrectAnswers++;
			$("#timeRemaining, #questionDiv, #answersDiv").empty();
			$("#resultDiv").append("<h2>Wrong Answer!</h2>" + "<h3>The Correct Answer is Denver</h3>" + "<img>Denver pic</img>");
			setTimeout(fourthQuestion, 3000);
		}
	});

	if (timer === 0) {
		unanswered++;
		$("#timeRemaining, #questionDiv, #answersDiv").empty();
		$("#resultDiv").append("<h2>Time Is Up!</h2>" + "<h3>The Correct Answer is Denver</h3>" + "<img>Denver pic</img>");
		setTimeout(fourthQuestion, 3000);
	}
}

function fourthQuestion() {
	questionsAnswered = 3;
	timerStart();
	$("#resultDiv").empty();
	$("#questionDiv #answersDiv").empty();
	$("#questionDiv").html("<h2>" + question4.question + "</h2>");
	$("#answersDiv").append("<button class='button right'>" + question4.answer + "</button>" + "<br>");
	$("#answersDiv").append("<button class='button wrong'>" + question4.wrongOne + "</button>" + "<br>");
	$("#answersDiv").append("<button class='button wrong'>" + question4.wrongTwo + "</button>" + "<br>");
	$("#answersDiv").append("<button class='button wrong'>" + question4.wrongThree + "</button>" + "<br>");

	$(".right").on("click", function() {
		if (timer > 0) {
			correctAnswers++;
			$("#timeRemaining, #questionDiv, #answersDiv").empty();
			$("#resultDiv").append("<h2>You Are Correct!</h2>" + "<br>" + "<img>Annapolis pic</img>");
			setTimeout(fifthQuestion, 3000);

		}
	});

	$(".wrong").on("click", function() {
		if (timer > 0) {
			incorrectAnswers++;
			$("#timeRemaining, #questionDiv, #answersDiv").empty();
			$("#resultDiv").append("<h2>Wrong Answer!</h2>" + "<h3>The Correct Answer is Annapolis</h3>" + "<img>Annapolis pic</img>");
			setTimeout(fifthQuestion, 3000);
		}
	});

	if (timer === 0) {
		unanswered++;
		$("#timeRemaining, #questionDiv, #answersDiv").empty();
		$("#resultDiv").append("<h2>Time Is Up!</h2>" + "<h3>The Correct Answer is Annapolis</h3>" + "<img>Annapolis pic</img>");
		setTimeout(fifthQuestion, 3000);
	}
}

function fifthQuestion() {
	questionsAnswered = 4;
	timerStart();
	$("#resultDiv").empty();
	$("#questionDiv #answersDiv").empty();
	$("#questionDiv").html("<h2>" + question5.question + "</h2>");
	$("#answersDiv").append("<button class='button wrong'>" + question5.wrongOne + "</button>" + "<br>");
	$("#answersDiv").append("<button class='button right'>" + question5.answer + "</button>" + "<br>");
	$("#answersDiv").append("<button class='button wrong'>" + question5.wrongTwo + "</button>" + "<br>");
	$("#answersDiv").append("<button class='button wrong'>" + question5.wrongThree + "</button>" + "<br>");

	$(".right").on("click", function() {
		if (timer > 0) {
			correctAnswers++;
			$("#timeRemaining, #questionDiv, #answersDiv").empty();
			$("#resultDiv").append("<h2>You Are Correct!</h2>" + "<br>" + "<img>Sacramento pic</img>");
			setTimeout(displayResults, 3000);

		}
	});

	$(".wrong").on("click", function() {
		if (timer > 0) {
			incorrectAnswers++;
			$("#timeRemaining, #questionDiv, #answersDiv").empty();
			$("#resultDiv").append("<h2>Wrong Answer!</h2>" + "<h3>The Correct Answer is Sacramento</h3>" + "<img>Sacramento pic</img>");
			setTimeout(displayResults, 3000);
		}
	});

	if (timer === 0) {
		unanswered++;
		$("#timeRemaining, #questionDiv, #answersDiv").empty();
		$("#resultDiv").append("<h2>Time Is Up!</h2>" + "<h3>The Correct Answer is Sacramento</h3>" + "<img>Sacramento pic</img>");
		setTimeout(displayResults, 3000);
	}
}

function displayResults() {	
	$("#resultDiv").empty();
	$("#resultDiv").append("<h2>Correct Answers:</h2> " + correctAnswers + "<br>");
	$("#resultDiv").append("<h2>Incorrect Answers:</h2> " + incorrectAnswers + "<br>");
	$("#resultDiv").append("<h2>Unanswered Questions:</h2> " + unanswered + "<br>" +"<br>");
	$("#resultDiv").append("<button id='restart'>Start Over?</button");

	$("#restart").on("click", function() {
		$("#resultDiv").empty();
		firstQuestion();
	});
}

gamestart();

});

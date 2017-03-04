$(document).ready(function() {

var question1 = {
	question: "Who was Brandon Walsh's girlfriend from Minnesota?",
	answer: "Sheryl",
	wrongOne: "Vicky",
	wrongTwo: "Sharon",
	wrongThree: "Sheila"
}

var question2 = {
	question: "Who was Tiffani Amber Thiessen dating when she landed the part of Valerie?",
	answer: "Brian Austin Green",
	wrongOne: "Luke Perry",
	wrongTwo: " Jason Priestley",
	wrongThree: "Ian Ziering"
}

var question3 = {
	question: "What television series did Steve's mom star in?",
	answer: "Hartley House",
	wrongOne: "The Big Valley",
	wrongTwo: "Falcon Crest",
	wrongThree: "Dallas"
}

var question4 = {
	question: "Who is the father of Kelly Taylor's baby?",
	answer: "Dylan",
	wrongOne: "Brandon",
	wrongTwo: "Steve",
	wrongThree: "David"
}

var question5 = {
	question: "What did Brenda get arrested for?",
	answer: "Breaking and Entering",
	wrongOne: "DUI",
	wrongTwo: "Speeding",
	wrongThree: "Fighting"
}

var correctAnswers = 0;

var incorrectAnswers = 0;

var unanswered = 0;

var timer = 10;

var intervalId;

function timerStart() {
	timer = 10;
	$("#timeRemaining").html("Time Remaining: " + timer);
	intervalId = setInterval(decrement, 1000);
}

function decrement() {
	timer--;
	$("#timeRemaining").html("Time Remaining: " + timer);
	if (timer < 1) {
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
	$("#answersDiv").append("<button class='wrong btn-lg'>" + question1.wrongOne + "</button>" + "<br>");
	$("#answersDiv").append("<button class='right btn-lg'>" + question1.answer + "</button>" + "<br>");
	$("#answersDiv").append("<button class='wrong btn-lg'>" + question1.wrongTwo + "</button>" + "<br>");
	$("#answersDiv").append("<button class='wrong btn-lg'>" + question1.wrongThree + "</button>" + "<br>");
	
	$(".right").on("click", function() {
		if (timer > 0) {
			correctAnswers++;
			$("#timeRemaining, #questionDiv, #answersDiv").empty();
			$("#resultDiv").append("<h2>You Are Correct!</h2>" + "<br>" + "<img src='assets/images/sheryl.jpg'</img>");
			timerStop();
			setTimeout(secondQuestion, 3000);
		}	 	
	});
	
	$(".wrong").on("click", function() {
		if (timer > 0) {
			incorrectAnswers++;
			$("#timeRemaining, #questionDiv, #answersDiv").empty();
			$("#resultDiv").append("<h2>Wrong Answer!</h2>" + "<h3>The Correct Answer is Sheryl.</h3>" + "<img src='assets/images/sheryl.jpg'</img>");
			timerStop();
			setTimeout(secondQuestion, 3000);
		}	
	});

	function timeUp1() {
		if (timer === 0) {
			unanswered++;
			$("#timeRemaining, #questionDiv, #answersDiv").empty();	
			$("#resultDiv").append("<h2>Time Is Up!</h2>" + "<h3>The Correct Answer is Sheryl.</h3>" + "<img src='assets/images/sheryl.jpg'</img>");
			timerStop();
			setTimeout(secondQuestion, 3000);
		}
	}
	setTimeout(timeUp1, 10000);
}

function secondQuestion() {
	timerStart();
	$("#resultDiv").empty();
	$("#questionDiv").html("<h2>" + question2.question + "</h2>");
	$("#answersDiv").append("<button class='wrong btn-lg'>" + question2.wrongOne + "</button>" + "<br>");
	$("#answersDiv").append("<button class='wrong btn-lg'>" + question2.wrongTwo + "</button>" + "<br>");
	$("#answersDiv").append("<button class='wrong btn-lg'>" + question2.wrongThree + "</button>" + "<br>");
	$("#answersDiv").append("<button class='right btn-lg'>" + question2.answer + "</button>" + "<br>");
	
	$(".right").on("click", function() {
		if (timer > 0) {
			correctAnswers++;
			$("#timeRemaining, #questionDiv, #answersDiv").empty();
			$("#resultDiv").append("<h2>You Are Correct!</h2>" + "<br>" + "<img src='assets/images/david.jpg'</img>");
			timerStop();
			setTimeout(thirdQuestion, 3000);
		}
	});

	$(".wrong").on("click", function() {
		if (timer > 0) {
			incorrectAnswers++;
			$("#timeRemaining, #questionDiv, #answersDiv").empty();
			$("#resultDiv").append("<h2>Wrong Answer!</h2>" + "<h3>The Correct Answer is Brian Austin Green</h3>" + "<img src='assets/images/david.jpg'</img>");
			timerStop();
			setTimeout(thirdQuestion, 3000);
		}
	});

	function timeUp2() {
		if (timer === 0) {
			unanswered++;
			$("#timeRemaining, #questionDiv, #answersDiv").empty();	
			$("#resultDiv").append("<h2>Time Is Up!</h2>" + "<h3>The Correct Answer is Brian Austin Green</h3>" + "<img src='assets/images/david.jpg'</img>");
			timerStop();
			setTimeout(thirdQuestion, 3000);
		}
	}
	setTimeout(timeUp2, 10000);
}

function thirdQuestion() {
	timerStart();
	$("#resultDiv").empty();
	$("#questionDiv, #answersDiv").empty();
	$("#questionDiv").html("<h2>" + question3.question + "</h2>");
	$("#answersDiv").append("<button class='wrong btn-lg'>" + question3.wrongOne + "</button>" + "<br>");
	$("#answersDiv").append("<button class='wrong btn-lg'>" + question3.wrongTwo + "</button>" + "<br>");
	$("#answersDiv").append("<button class='right btn-lg'>" + question3.answer + "</button>" + "<br>");
	$("#answersDiv").append("<button class='wrong btn-lg'>" + question3.wrongThree + "</button>" + "<br>");

	$(".right").on("click", function() {
		if (timer > 0) {
			correctAnswers++;
			$("#timeRemaining, #questionDiv, #answersDiv").empty();
			$("#resultDiv").append("<h2>You Are Correct!</h2>" + "<br>" + "<img src='assets/images/stevemom.jpg'</img>");
			timerStop();
			setTimeout(fourthQuestion, 3000);
		}
	});

	$(".wrong").on("click", function() {
		if (timer > 0) {
			incorrectAnswers++;
			$("#timeRemaining, #questionDiv, #answersDiv").empty();
			$("#resultDiv").append("<h2>Wrong Answer!</h2>" + "<h3>The Correct Answer is Hartley House</h3>" + "<img src='assets/images/stevemom.jpg'</img>");
			timerStop();
			setTimeout(fourthQuestion, 3000);
		}
	});

	function timeUp3() {
		if (timer === 0) {
			unanswered++;
			$("#timeRemaining, #questionDiv, #answersDiv").empty();	
			$("#resultDiv").append("<h2>Time Is Up!</h2>" + "<h3>The Correct Answer is Hartley House</h3>" + "<img src='assets/images/stevemom.jpg'</img>");
			timerStop();
			setTimeout(fourthQuestion, 3000);
		}
	}
	setTimeout(timeUp3, 10000);
}

function fourthQuestion() {
	timerStart();
	$("#resultDiv").empty();
	$("#questionDiv #answersDiv").empty();
	$("#questionDiv").html("<h2>" + question4.question + "</h2>");
	$("#answersDiv").append("<button class='right btn-lg'>" + question4.answer + "</button>" + "<br>");
	$("#answersDiv").append("<button class='wrong btn-lg'>" + question4.wrongOne + "</button>" + "<br>");
	$("#answersDiv").append("<button class='wrong btn-lg'>" + question4.wrongTwo + "</button>" + "<br>");
	$("#answersDiv").append("<button class='wrong btn-lg'>" + question4.wrongThree + "</button>" + "<br>");

	$(".right").on("click", function() {
		if (timer > 0) {
			correctAnswers++;
			$("#timeRemaining, #questionDiv, #answersDiv").empty();
			$("#resultDiv").append("<h2>You Are Correct!</h2>" + "<br>" + "<img src='assets/images/dylan.jpg'</img>");
			timerStop();
			setTimeout(fifthQuestion, 3000);
		}
	});

	$(".wrong").on("click", function() {
		if (timer > 0) {
			incorrectAnswers++;
			$("#timeRemaining, #questionDiv, #answersDiv").empty();
			$("#resultDiv").append("<h2>Wrong Answer!</h2>" + "<h3>The Correct Answer is Dylan</h3>" + "<img src='assets/images/dylan.jpg'</img>");
			timerStop();
			setTimeout(fifthQuestion, 3000);
		}
	});

	function timeUp4() {
		if (timer === 0) {
			unanswered++;
			$("#timeRemaining, #questionDiv, #answersDiv").empty();	
			$("#resultDiv").append("<h2>Time Is Up!</h2>" + "<h3>The Correct Answer is Dylan</h3>" + "<img src='assets/images/dylan.jpg'</img>");
			timerStop();
			setTimeout(fifthQuestion, 3000);
		}
	}
	setTimeout(timeUp4, 10000);
}

function fifthQuestion() {
	timerStart();
	$("#resultDiv").empty();
	$("#questionDiv #answersDiv").empty();
	$("#questionDiv").html("<h2>" + question5.question + "</h2>");
	$("#answersDiv").append("<button class='wrong btn-lg'>" + question5.wrongOne + "</button>" + "<br>");
	$("#answersDiv").append("<button class='right btn-lg'>" + question5.answer + "</button>" + "<br>");
	$("#answersDiv").append("<button class='wrong btn-lg'>" + question5.wrongTwo + "</button>" + "<br>");
	$("#answersDiv").append("<button class='wrong btn-lg'>" + question5.wrongThree + "</button>" + "<br>");

	$(".right").on("click", function() {
		if (timer > 0) {
			correctAnswers++;
			$("#timeRemaining, #questionDiv, #answersDiv").empty();
			$("#resultDiv").append("<h2>You Are Correct!</h2>" + "<br>" + "<img src='assets/images/brenda.jpg'</img>");
			timerStop();
			setTimeout(displayResults, 3000);
		}
	});

	$(".wrong").on("click", function() {
		if (timer > 0) {
			incorrectAnswers++;
			$("#timeRemaining, #questionDiv, #answersDiv").empty();
			$("#resultDiv").append("<h2>Wrong Answer!</h2>" + "<h3>The Correct Answer is Breaking and Entering</h3>" + "<img src='assets/images/brenda.jpg'</img>");
			timerStop();
			setTimeout(displayResults, 3000);
		}
	});

	function timeUp5() {
		if (timer === 0) {
			unanswered++;
			$("#timeRemaining, #questionDiv, #answersDiv").empty();	
			$("#resultDiv").append("<h2>Time Is Up!</h2>" + "<h3>The Correct Answer is Breaking and Entering</h3>" + "<img src='assets/images/brenda.jpg'</img>");
			timerStop();
			setTimeout(displayResults, 3000);
		}
	}
	setTimeout(timeUp5, 10000);
}

function displayResults() {	
	$("#resultDiv").empty();
	$("#resultDiv").append("<h2>Correct Answers:</h2> " + correctAnswers + "<br>");
	$("#resultDiv").append("<h2>Incorrect Answers:</h2> " + incorrectAnswers + "<br>");
	$("#resultDiv").append("<h2>Unanswered Questions:</h2> " + unanswered + "<br>" +"<br>");
	$("#resultDiv").append("<button class='btn-lg' id='restart'>Start Over?</button");

	$("#restart").on("click", function() {
		$("#resultDiv").empty();
		correctAnswers = 0;
		incorrectAnswers = 0;
		unanswered = 0;
		firstQuestion();
	});
}

gamestart();

});

// Nice! Great job wrapping all your code in this `$(document).ready` block
$(document).ready(function() {

var question1 = {
	question: "Who was Brandon Walsh's girlfriend from Minnesota?",
	answer: "Sheryl",
	wrongOne: "Vicky",
	wrongTwo: "Sharon",
	wrongThree: "Sheila",
	imageUrl: 'sheryl.jpg'
}

var question2 = {
	question: "Who was Tiffani Amber Thiessen dating when she landed the part of Valerie?",
	answer: "Brian Austin Green",
	wrongOne: "Luke Perry",
	wrongTwo: " Jason Priestley",
	wrongThree: "Ian Ziering",
	imageUrl: 'david.jpg'
}

var question3 = {
	question: "What television series did Steve's mom star in?",
	answer: "Hartley House",
	wrongOne: "The Big Valley",
	wrongTwo: "Falcon Crest",
	wrongThree: "Dallas",
	imageUrl: 'stevemom.jpg'
}

var question4 = {
	question: "Who is the father of Kelly Taylor's baby?",
	answer: "Dylan",
	wrongOne: "Brandon",
	wrongTwo: "Steve",
	wrongThree: "David",
	imageUrl: 'dylan.jpg'
}

var question5 = {
	question: "What did Brenda get arrested for?",
	answer: "Breaking and Entering",
	wrongOne: "DUI",
	wrongTwo: "Speeding",
	wrongThree: "Fighting",
	imageUrl: 'brenda.jpg'
}

var questions = [ question1, question2, question3, question4, question5 ]

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
		nextQuestion();
	});
}

// by making the nextQuestion button more generic you can DRY up your code quite a bit
function nextQuestion () {
	// the question can be determined by the number of answers a user has submitted
	var question = questions[ correctAnswers + incorrectAnswers + unanswered ]
	var answers = [ question.wrongOne, question.wrongTwo, question.wrongThree, question.answer ]

	timerStart();

	$("#resultDiv").empty();
	$("#questionDiv").html("<h2>" + question.question + "</h2>");
	// instead of giving the correct answer button a class of `right` we can just make them all generic answer buttons
	// and determine later whether or not it's correct. Otherwis a tech savvy user could inspect your answer buttons
	// and quickly figure out which one was correct.
	$("#answersDiv").append("<button class='answer btn-lg'>" + randomAnswer() + "</button>" + "<br>");
	$("#answersDiv").append("<button class='answer btn-lg'>" + randomAnswer() + "</button>" + "<br>");
	$("#answersDiv").append("<button class='answer btn-lg'>" + randomAnswer() + "</button>" + "<br>");
	$("#answersDiv").append("<button class='answer btn-lg'>" + randomAnswer() + "</button>" + "<br>");

	// this function will grab a random answer from the remaining answer options
	function randomAnswer() {
		var randomIndex = Math.floor(Math.random() * answers.length)

		// When used the following arguments `.splice` will remove 1 element from the answers array t the specified answer index
		// I'd encourage you to read the docs on `.splice` to better understand what's going on here.
		return answers.splice(randomIndex, 1)
	}

	$('.answer').on('click', function() {
		if (timer > 0) {
			
			if( $(this).text() === question.answer ) {
				correctAnswers++;
				$("#timeRemaining, #questionDiv, #answersDiv").empty();
				$("#resultDiv").append("<h2>You Are Correct!</h2>" + "<br>" + "<img src='assets/images/" + question.imageUrl + "'</img>");
			}
			else {
				incorrectAnswers++;
				$("#timeRemaining, #questionDiv, #answersDiv").empty();
				$("#resultDiv").append("<h2>Wrong Answer!</h2>" + "<h3>The Correct Answer is " + question.answer + ".</h3>" + "<img src='assets/images/" + question.imageUrl + "'</img>");
			}

			timerStop();
			// this is checking if there's another available question
			if ( questions[ correctAnswers + incorrectAnswers + unanswered ] ) {
				setTimeout(nextQuestion, 3000);
			}
			else {
				setTimeout(displayResults, 3000);
			}
		}

	})

	function timeUp1() {
		if (timer === 0) {
			unanswered++;
			$("#timeRemaining, #questionDiv, #answersDiv").empty();
			// using string concatenation allows us to make this append statement much more DRY
			$("#resultDiv").append("<h2>Time Is Up!</h2>" + "<h3>The Correct Answer is " + question.answer + ".</h3>" + "<img src='assets/images/" + question.imageUrl + "'</img>");
			timerStop();

			if ( questions[ correctAnswers + incorrectAnswers + unanswered ] ) {
				setTimeout(nextQuestion, 3000);
			}
			else {
				setTimeout(displayResults, 3000);
			}
		}
	}
	setTimeout(timeUp1, 10000);


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
		nextQuestion();
	});
}

gamestart();

});

/*
Dale Franks
11/30/2019
Project 3
Extra Features:
1) Updated message when game is won
2) Music, timer, and move counter
3) Multiple puzzle picture options
4) Solve button
*/

//This is for playing default music
var audio = new Audio('witcherTheme.mp3');
audio.play();

//This is for the timer
var startTime, endTime;
function start() {
  startTime = new Date();
};
function end() {
  endTime = new Date();
  var timeDiff = endTime - startTime;
  timeDiff /= 1000;
  var seconds = Math.round(timeDiff);
  secs.innerText = "Seconds to completion: " + seconds;
}

/*p1 through p16 are variable representations of HTML code
so that the HTML can be modified using this .js page*/
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
var p5 = document.getElementById("p5");
var p6 = document.getElementById("p6"); 
var p7 = document.getElementById("p7"); 
var p8 = document.getElementById("p8");
var p9 = document.getElementById("p9");
var p10 = document.getElementById("p10");
var p11 = document.getElementById("p11");
var p12 = document.getElementById("p12"); 
var p13 = document.getElementById("p13"); 
var p14 = document.getElementById("p14"); 
var p15 = document.getElementById("p15"); 
var p16 = document.getElementById("p16");

/*This is a multidimensional array that keeps track of where
the blank tile (-1) is and makes all the logic below possible*/
var cardsRowColumn = [
	["1", "2", "3", "4"],
	["5", "6", "7", "8"],
	["9", "10", "11", "12"],
	["13", "14", "15", "-1"]
];

/*This is a multidimensional array that keeps track of the p values
at [row, column] and allows them to be updated by using the array above
as a reference*/
var tableRowColumn = [
	[p1, p2, p3, p4],
	[p5, p6, p7, p8],
	[p9, p10, p11, p12],
	[p13, p14, p15, p16]
];

/*This keeps track of the total moves made by the user*/
var totalMoves = 0;

//There variables are for updating the puzzle and music currently being played
var puzzle1 = document.getElementById("puzzle1");
var puzzle2 = document.getElementById("puzzle2");
var puzzle3 = document.getElementById("puzzle3");
var puzzle4 = document.getElementById("puzzle4");
var audio1 = new Audio('witcherTheme.mp3');
var audio2 = new Audio('ACTheme.mp3');
var audio3 = new Audio('skyrimTheme.mp3');
var audio4 = new Audio('marioTheme.mp3');
var shufflebutton = document.getElementById("shufflebutton");
var chosenPuzzle = "";
chosenPuzzle = "puzzle"

/*This updates the music and chosen puzzle to The Witcher 3*/
puzzle1.onclick = function() {
	audio.pause();
	audio2.pause();
	audio3.pause();
	audio4.pause();
	chosenPuzzle = "puzzle";
	p1.innerHTML = "<div class=\"" + chosenPuzzle + " piece1 hoverpiece\">" + "1" + "</div>";
	p2.innerHTML = "<div class=\"" + chosenPuzzle + " piece2 hoverpiece\">" + "2" + "</div>";
	p3.innerHTML = "<div class=\"" + chosenPuzzle + " piece3 hoverpiece\">" + "3" + "</div>";
	p4.innerHTML = "<div class=\"" + chosenPuzzle + " piece4 hoverpiece\">" + "4" + "</div>";
	p5.innerHTML = "<div class=\"" + chosenPuzzle + " piece5 hoverpiece\">" + "5" + "</div>";
	p6.innerHTML = "<div class=\"" + chosenPuzzle + " piece6 hoverpiece\">" + "6" + "</div>";
	p7.innerHTML = "<div class=\"" + chosenPuzzle + " piece7 hoverpiece\">" + "7" + "</div>";
	p8.innerHTML = "<div class=\"" + chosenPuzzle + " piece8 hoverpiece\">" + "8" + "</div>";
	p9.innerHTML = "<div class=\"" + chosenPuzzle + " piece9 hoverpiece\">" + "9" + "</div>";
	p10.innerHTML = "<div class=\"" + chosenPuzzle + " piece10 hoverpiece\">" + "10" + "</div>";
	p11.innerHTML = "<div class=\"" + chosenPuzzle + " piece11 hoverpiece\">" + "11" + "</div>";
	p12.innerHTML = "<div class=\"" + chosenPuzzle + " piece12 hoverpiece\">" + "12" + "</div>";
	p13.innerHTML = "<div class=\"" + chosenPuzzle + " piece13 hoverpiece\">" + "13" + "</div>";
	p14.innerHTML = "<div class=\"" + chosenPuzzle + " piece14 hoverpiece\">" + "14" + "</div>";
	p15.innerHTML = "<div class=\"" + chosenPuzzle + " piece15 hoverpiece\">" + "15" + "</div>";
	p16.innerHTML = "<div class=\"puzzleBlank hoverpiece\">" + "16" + "</div>";
	audio1.currentTime = 0;
	audio1.play();
	header1.innerText = "Witcher 3 - The Wild Hunt Puzzle";
}
/*This updates the music and chosen puzzle to Assassin's Creed*/
puzzle2.onclick = function() {
	audio.pause();
	audio1.pause();
	audio3.pause();
	audio4.pause();
	chosenPuzzle = "ACPuzzle";
	p1.innerHTML = "<div class=\"" + chosenPuzzle + " piece1 hoverpiece\">" + "1" + "</div>";
	p2.innerHTML = "<div class=\"" + chosenPuzzle + " piece2 hoverpiece\">" + "2" + "</div>";
	p3.innerHTML = "<div class=\"" + chosenPuzzle + " piece3 hoverpiece\">" + "3" + "</div>";
	p4.innerHTML = "<div class=\"" + chosenPuzzle + " piece4 hoverpiece\">" + "4" + "</div>";
	p5.innerHTML = "<div class=\"" + chosenPuzzle + " piece5 hoverpiece\">" + "5" + "</div>";
	p6.innerHTML = "<div class=\"" + chosenPuzzle + " piece6 hoverpiece\">" + "6" + "</div>";
	p7.innerHTML = "<div class=\"" + chosenPuzzle + " piece7 hoverpiece\">" + "7" + "</div>";
	p8.innerHTML = "<div class=\"" + chosenPuzzle + " piece8 hoverpiece\">" + "8" + "</div>";
	p9.innerHTML = "<div class=\"" + chosenPuzzle + " piece9 hoverpiece\">" + "9" + "</div>";
	p10.innerHTML = "<div class=\"" + chosenPuzzle + " piece10 hoverpiece\">" + "10" + "</div>";
	p11.innerHTML = "<div class=\"" + chosenPuzzle + " piece11 hoverpiece\">" + "11" + "</div>";
	p12.innerHTML = "<div class=\"" + chosenPuzzle + " piece12 hoverpiece\">" + "12" + "</div>";
	p13.innerHTML = "<div class=\"" + chosenPuzzle + " piece13 hoverpiece\">" + "13" + "</div>";
	p14.innerHTML = "<div class=\"" + chosenPuzzle + " piece14 hoverpiece\">" + "14" + "</div>";
	p15.innerHTML = "<div class=\"" + chosenPuzzle + " piece15 hoverpiece\">" + "15" + "</div>";
	p16.innerHTML = "<div class=\"puzzleBlank hoverpiece\">" + "16" + "</div>";
	audio2.currentTime = 0;
	audio2.play();
	header1.innerText = "Assassin's Creed 3 Puzzle";
}
/*This updates the music and chosen puzzle to Skyrim*/
puzzle3.onclick = function() {
	audio.pause();
	audio1.pause();
	audio2.pause();
	audio4.pause();
	chosenPuzzle = "skyrimPuzzle";
	p1.innerHTML = "<div class=\"" + chosenPuzzle + " piece1 hoverpiece\">" + "1" + "</div>";
	p2.innerHTML = "<div class=\"" + chosenPuzzle + " piece2 hoverpiece\">" + "2" + "</div>";
	p3.innerHTML = "<div class=\"" + chosenPuzzle + " piece3 hoverpiece\">" + "3" + "</div>";
	p4.innerHTML = "<div class=\"" + chosenPuzzle + " piece4 hoverpiece\">" + "4" + "</div>";
	p5.innerHTML = "<div class=\"" + chosenPuzzle + " piece5 hoverpiece\">" + "5" + "</div>";
	p6.innerHTML = "<div class=\"" + chosenPuzzle + " piece6 hoverpiece\">" + "6" + "</div>";
	p7.innerHTML = "<div class=\"" + chosenPuzzle + " piece7 hoverpiece\">" + "7" + "</div>";
	p8.innerHTML = "<div class=\"" + chosenPuzzle + " piece8 hoverpiece\">" + "8" + "</div>";
	p9.innerHTML = "<div class=\"" + chosenPuzzle + " piece9 hoverpiece\">" + "9" + "</div>";
	p10.innerHTML = "<div class=\"" + chosenPuzzle + " piece10 hoverpiece\">" + "10" + "</div>";
	p11.innerHTML = "<div class=\"" + chosenPuzzle + " piece11 hoverpiece\">" + "11" + "</div>";
	p12.innerHTML = "<div class=\"" + chosenPuzzle + " piece12 hoverpiece\">" + "12" + "</div>";
	p13.innerHTML = "<div class=\"" + chosenPuzzle + " piece13 hoverpiece\">" + "13" + "</div>";
	p14.innerHTML = "<div class=\"" + chosenPuzzle + " piece14 hoverpiece\">" + "14" + "</div>";
	p15.innerHTML = "<div class=\"" + chosenPuzzle + " piece15 hoverpiece\">" + "15" + "</div>";
	p16.innerHTML = "<div class=\"puzzleBlank\">" + "16" + "</div>";
	audio3.currentTime = 0;
	audio3.play();
	header1.innerText = "Elder Scrolls V - Skyrim Puzzle";
}
/*This updates the music and chosen puzzle to the Mario Galaxy 2*/
puzzle4.onclick = function() {
	audio.pause();
	audio1.pause()
	audio2.pause();
	audio3.pause();
	chosenPuzzle = "marioPuzzle";
	p1.innerHTML = "<div class=\"" + chosenPuzzle + " piece1 hoverpiece\">" + "1" + "</div>";
	p2.innerHTML = "<div class=\"" + chosenPuzzle + " piece2 hoverpiece\">" + "2" + "</div>";
	p3.innerHTML = "<div class=\"" + chosenPuzzle + " piece3 hoverpiece\">" + "3" + "</div>";
	p4.innerHTML = "<div class=\"" + chosenPuzzle + " piece4 hoverpiece\">" + "4" + "</div>";
	p5.innerHTML = "<div class=\"" + chosenPuzzle + " piece5 hoverpiece\">" + "5" + "</div>";
	p6.innerHTML = "<div class=\"" + chosenPuzzle + " piece6 hoverpiece\">" + "6" + "</div>";
	p7.innerHTML = "<div class=\"" + chosenPuzzle + " piece7 hoverpiece\">" + "7" + "</div>";
	p8.innerHTML = "<div class=\"" + chosenPuzzle + " piece8 hoverpiece\">" + "8" + "</div>";
	p9.innerHTML = "<div class=\"" + chosenPuzzle + " piece9 hoverpiece\">" + "9" + "</div>";
	p10.innerHTML = "<div class=\"" + chosenPuzzle + " piece10 hoverpiece\">" + "10" + "</div>";
	p11.innerHTML = "<div class=\"" + chosenPuzzle + " piece11 hoverpiece\">" + "11" + "</div>";
	p12.innerHTML = "<div class=\"" + chosenPuzzle + " piece12 hoverpiece\">" + "12" + "</div>";
	p13.innerHTML = "<div class=\"" + chosenPuzzle + " piece13 hoverpiece\">" + "13" + "</div>";
	p14.innerHTML = "<div class=\"" + chosenPuzzle + " piece14 hoverpiece\">" + "14" + "</div>";
	p15.innerHTML = "<div class=\"" + chosenPuzzle + " piece15 hoverpiece\">" + "15" + "</div>";
	p16.innerHTML = "<div class=\"puzzleBlank hoverpiece\">" + "16" + "</div>";
	audio4.currentTime = 0;
	audio4.play();
	header1.innerText = "Mario Galaxy 2 Puzzle";
}
/*This takes in the chosen puzzle as input when the solve button is clicked to solve*/
function solvedPuzzle(input) {
	p1.innerHTML = "<div class=\"" + chosenPuzzle + " piece1 hoverpiece\">" + "1" + "</div>";
	p2.innerHTML = "<div class=\"" + chosenPuzzle + " piece2 hoverpiece\">" + "2" + "</div>";
	p3.innerHTML = "<div class=\"" + chosenPuzzle + " piece3 hoverpiece\">" + "3" + "</div>";
	p4.innerHTML = "<div class=\"" + chosenPuzzle + " piece4 hoverpiece\">" + "4" + "</div>";
	p5.innerHTML = "<div class=\"" + chosenPuzzle + " piece5 hoverpiece\">" + "5" + "</div>";
	p6.innerHTML = "<div class=\"" + chosenPuzzle + " piece6 hoverpiece\">" + "6" + "</div>";
	p7.innerHTML = "<div class=\"" + chosenPuzzle + " piece7 hoverpiece\">" + "7" + "</div>";
	p8.innerHTML = "<div class=\"" + chosenPuzzle + " piece8 hoverpiece\">" + "8" + "</div>";
	p9.innerHTML = "<div class=\"" + chosenPuzzle + " piece9 hoverpiece\">" + "9" + "</div>";
	p10.innerHTML = "<div class=\"" + chosenPuzzle + " piece10 hoverpiece\">" + "10" + "</div>";
	p11.innerHTML = "<div class=\"" + chosenPuzzle + " piece11 hoverpiece\">" + "11" + "</div>";
	p12.innerHTML = "<div class=\"" + chosenPuzzle + " piece12 hoverpiece\">" + "12" + "</div>";
	p13.innerHTML = "<div class=\"" + chosenPuzzle + " piece13 hoverpiece\">" + "13" + "</div>";
	p14.innerHTML = "<div class=\"" + chosenPuzzle + " piece14 hoverpiece\">" + "14" + "</div>";
	p15.innerHTML = "<div class=\"" + chosenPuzzle + " piece15 hoverpiece\">" + "15" + "</div>";
	p16.innerHTML = "<div class=\"puzzleBlank hoverpiece\">" + "16" + "</div>";
}
/*This function uses swapTile to make up to 800 random moves to shuffle the puzzle.
Since it is only called when a puzzle option or the shuffle button is clicked, 
it also updates the HTML in the header to display the correct puzzle being played*/
function shuffle() {
	totalMoves = 0;
	for (var i = 0; i < 800; i++) {
		var ran1 = Math.floor(Math.random() * 4);
		var ran2 = Math.floor(Math.random() * 4);
		swapTile(ran1, ran2);
		if(chosenPuzzle == 'puzzle'){
			header1.innerText = "Witcher 3 - The Wild Hunt Puzzle";
		}
		else if(chosenPuzzle == 'ACPuzzle'){
			header1.innerText = "Assassin's Creed 3 Puzzle";
		}
		else if(chosenPuzzle == 'skyrimPuzzle'){
			header1.innerText = "Elder Scrolls V - Skyrim Puzzle";
		}
		else if(chosenPuzzle == 'marioPuzzle'){
			header1.innerText = "Mario Galaxy 2 Puzzle";
		}
		totalMoves = 0;
		i++;
	}
	totalMoves = 0;
	moveCounter.innerText = "Move Counter";
}
/*This function swaps the tiles up, down, left, or right based on lots of
extremely complicated logic that took me ages to figure out*/
function swapTile(row, column) {
	
	var currentTD = tableRowColumn[row][column];
	var currentCard = cardsRowColumn[row][column];
	var leftCard = column-1;
	var rightCard = column+1;
	var upCard = row-1;
	var downCard = row+1;
	
	//Up
	if (row != 0 && cardsRowColumn[upCard][column] == -1){
		var nextTD = tableRowColumn[upCard][column];
		var nextCard = cardsRowColumn[upCard][column];
		console.log("nextCard: " + nextCard);
		currentTD.innerHTML = "<div class=\"puzzleBlank hoverpiece\">"+"16"+"</div>";
		nextTD.innerHTML = "<div class=\"" + chosenPuzzle + " piece"+currentCard+" hoverpiece\">"+currentCard+"</div>";
		cardsRowColumn[row][column] = "-1";
		cardsRowColumn[upCard][column] = currentCard;
		totalMoves = totalMoves + 1;
		moves.innerText = totalMoves;
	}
	//Down
	if (row != 3 && cardsRowColumn[downCard][column] == -1){
		var nextTD = tableRowColumn[downCard][column];
		var nextCard = cardsRowColumn[downCard][column];
		console.log("nextCard: " + nextCard);
		currentTD.innerHTML = "<div class=\"puzzleBlank hoverpiece\">"+"16"+"</div>";
		nextTD.innerHTML = "<div class=\"" + chosenPuzzle + " piece"+currentCard+" hoverpiece\">"+currentCard+"</div>";
		cardsRowColumn[row][column] = "-1";
		cardsRowColumn[downCard][column] = currentCard;
		totalMoves = totalMoves + 1;
		moves.innerText = totalMoves;
	}
	//Right
	if (column != 3 && cardsRowColumn[row][rightCard] == -1){
		var nextTD = tableRowColumn[row][rightCard];
		var nextCard = cardsRowColumn[row][rightCard];
		console.log("nextCard: " + nextCard);
		currentTD.innerHTML = "<div class=\"puzzleBlank hoverpiece\">"+"16"+"</div>";
		nextTD.innerHTML = "<div class=\"" + chosenPuzzle + " piece"+currentCard+" hoverpiece\">"+currentCard+"</div>";
		cardsRowColumn[row][column] = "-1";
		cardsRowColumn[row][rightCard] = currentCard;
		totalMoves = totalMoves + 1;
		moves.innerText = totalMoves;
	}
	//Left
	if (column != 0 && cardsRowColumn[row][leftCard] == -1){
		var nextTD = tableRowColumn[row][leftCard];
		var nextCard = cardsRowColumn[row][leftCard];
		console.log("nextCard: " + nextCard);
		currentTD.innerHTML = "<div class=\"puzzleBlank hoverpiece\">"+"16"+"</div>";
		nextTD.innerHTML = "<div class=\"" + chosenPuzzle + " piece"+currentCard+" hoverpiece\">"+currentCard+"</div>";
		cardsRowColumn[row][column] = "-1";
		cardsRowColumn[row][leftCard] = currentCard;
		totalMoves = totalMoves + 1;
		moves.innerText = totalMoves;
	}
	//Check if solved, and if solved, change h1 to display congratulations
	if (cardsRowColumn[0][0] == "1"
		&& cardsRowColumn[0][1] == "2"
		&& cardsRowColumn[0][2] == "3"
		&& cardsRowColumn[0][3] == "4"
		&& cardsRowColumn[1][0] == "5"
		&& cardsRowColumn[1][1] == "6"
		&& cardsRowColumn[1][2] == "7"
		&& cardsRowColumn[1][3] == "8"
		&& cardsRowColumn[2][0] == "9"
		&& cardsRowColumn[2][1] == "10"
		&& cardsRowColumn[2][2] == "11"
		&& cardsRowColumn[2][3] == "12"
		&& cardsRowColumn[3][0] == "13"
		&& cardsRowColumn[3][1] == "14"
		&& cardsRowColumn[3][2] == "15"
		&& cardsRowColumn[3][3] == "-1") {
		header1.innerText = "Congratulations, you completed the puzzle!";
		moves.innerText = totalMoves;
		moveCounter.innerText = "Total number of moves used:";
	}
}
/*These are the onclicks for the shuffle and solve buttons*/
shufflebutton.onclick = function() {
	shuffle();
}
solveThePuzzle.onclick = function() {
	solvedPuzzle();
}
/*These are the onclicks for each of the 16 squares in the puzzle*/
p1.onclick = function() {
	
	swapTile(0,0);
}
p2.onclick = function() {

	swapTile(0,1);
}
p3.onclick = function() {

	swapTile(0,2);
}
p4.onclick = function() {

	swapTile(0,3);
}
p5.onclick = function() {

	swapTile(1,0);
}
p6.onclick = function() {

	swapTile(1,1);
}
p7.onclick = function() {

	swapTile(1,2);
}
p8.onclick = function() {

	swapTile(1,3);
}
p9.onclick = function() {

	swapTile(2,0);
}
p10.onclick = function() {

	swapTile(2,1);
}
p11.onclick = function() {

	swapTile(2,2);
}
p12.onclick = function() {

	swapTile(2,3);
}
p13.onclick = function() {

	swapTile(3,0);
}
p14.onclick = function() {

	swapTile(3,1);
}
p15.onclick = function() {

	swapTile(3,2);
}
p16.onclick = function() {

	swapTile(3,3);
}
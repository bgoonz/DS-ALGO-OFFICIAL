
let canvas = document.getElementById('canvas'),
	ctx = canvas.getContext('2d'),
	canvasWidth = window.innerWidth - 50,
	canvasHeight = window.innerHeight + 200,
	numbers = [];

canvas.width = canvasWidth;
canvas.height = canvasHeight;

ctx.fillRect(0, 0, canvas.width, 7);

// Simple random number generator
function random(min, max) {
	return Math.random() * (max - min) + min;
}

// Generate random numbers to populate the structures
function randomizer() {
	ctx.clearRect(0, 7, canvas.width, canvas.height);
	numbers = [];
	for (let i = 0; i < 8; i++) {
		numbers.push(Math.floor(random(0, 100)));
	}
	document.getElementById("numbersArea").innerHTML = numbers;
	// document.getElementById("numbersArea").innerHTML = '<button>Some text here</button>';
}

function createBinaryTree() {
	ctx.clearRect(0, 7, canvas.width, canvas.height);
	// ctx.beginPath();
	// ctx.arc(100,75,50,0,2*Math.PI);
	// ctx.stroke();
	ctx.font = "24px Comfortaa";
	ctx.fillText("Insert Binary Tree here - " + numbers, 50, 50);
	return;
}

function createQueue() {
	ctx.clearRect(0, 7, canvas.width, canvas.height);
	var startingTopLeft = canvasWidth / 5.5;
	var center = [startingTopLeft + 35, 135];
	ctx.font="22px Comfortaa";
	ctx.fillText("Index #:", center[0] - 125, center[1] + 75);
	for (var i = 0; i < numbers.length; i++) {
		ctx.strokeStyle = "#000000";
		ctx.lineWidth = 7;
		ctx.strokeRect(startingTopLeft, 75, 100, 100);
		ctx.font="28px Comfortaa";
		ctx.fillStyle = "white";
		ctx.fillText(numbers[i], center[0], center[1]);
		ctx.font="22px Comfortaa";
		ctx.fillStyle = "black";
		ctx.fillText(i, center[0], center[1] + 75);
		startingTopLeft += 100;
		center[0] += 100;
	}
}

function createStack() {
	ctx.clearRect(0, 7, canvas.width, canvas.height);
	var startingX = (canvasWidth / 2) - 75;
	var startingY = 75;
	var center = [startingX + 25, startingY + 50];
	ctx.font="22px Comfortaa";
	ctx.fillText("Index #:", center[0] - 155, center[1]);
	for (var i = 0; i < numbers.length; i++) {
		ctx.strokeStyle = "#000000";
		ctx.lineWidth = 7;
		ctx.strokeRect(startingX, startingY, 75, 75);
		ctx.font="24px Comfortaa";
		ctx.fillStyle = "white";
		ctx.fillText(numbers[numbers.length - 1 - i], center[0], center[1]);
		ctx.font="20px Comfortaa";
		ctx.fillStyle = "black";
		ctx.fillText((numbers.length - 1 - i), center[0] - 55, center[1]);
		startingY += 75;
		center[1] += 74;
	}
}

function createLinkedList() {
	ctx.clearRect(0, 7, canvas.width, canvas.height);
	ctx.font = "24px Comfortaa";
	ctx.fillText("Insert Linked List here - " + numbers, 50, 50);
	return;
}

function createHeap() {
	ctx.clearRect(0, 7, canvas.width, canvas.height);
	ctx.font = "24px Comfortaa";
	ctx.fillText("Insert Heap here - " + numbers, 50, 50);
	return;
}

function createDblLinkedList() {
	ctx.clearRect(0, 7, canvas.width, canvas.height);
	ctx.font = "24px Comfortaa";
	ctx.fillText("Insert Doubly Linked List here - " + numbers, 50, 50);
	return;
}

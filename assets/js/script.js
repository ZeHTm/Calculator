let arrNumbrButtons = document.getElementsByClassName('calck__log');
let outPastСalculation = document.getElementById('outafter');
let outInDisplayCalc = document.getElementById('out');
let listHistory = document.getElementById("calckHistoryDisplay");
let arrValueCalculation = [];
let listHistoryMasiv = [];
let calcNumListHistory = 0;
let valueClick;

document.onkeypress = function (event) {
	if (event.keyCode > 39 && event.keyCode < 58) {
		callClick('keyboard');
	} else if (event.keyCode == 99) {
		deleteAll();
	} else if (event.keyCode == 61 || event.keyCode == 13) {
		equationSolution();
	}
}
document.onkeydown = function (event) {
	if (event.keyCode == 8) backspace();
}

for (let i = 0; i < arrNumbrButtons.length; i++) {
	arrNumbrButtons[i].onclick = callClick;
}

function returnLastItem(arr) {
	return arr[arr.length - 1];
}

function callClick(keyBoard) {
	let retLastItem = returnLastItem(arrValueCalculation);
	if (keyBoard === 'keyboard') {
		valueClick = this.event.key;
	} else {
		valueClick = this.value;
	}

	checkDuplicationSigns();
	if (valueClick == ")" || valueClick == "/" || valueClick == "*" || valueClick == "+") { //checking the first value
		if (arrValueCalculation[0] == undefined) return false;
	}
	if (retLastItem == ")" && valueClick == "(") return false;

	//check sign after "("
	let arrSing = ["/", "*", "+", ")"];
	for (let i = 0; i < arrSing.length; i++) {
		if (retLastItem == "(" && valueClick == arrSing[i]) return false;
	}

	//record of result
	outInDisplayCalc.innerHTML += valueClick;
	arrValueCalculation.push(valueClick);

	//verification of the result
	let numberMassiv = [".", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]; //forbids write down "("" before numbers
	for (let i = 0; i < numberMassiv.length; i++) {
		if (retLastItem == numberMassiv[i] && valueClick == "(") backspace();
	}
	checkCloserArrow();
}

function deleteAll() {
	outInDisplayCalc.innerHTML = '';
	arrValueCalculation = [];
	outPastСalculation.innerHTML = '';
}

function backspace() {
	let i = outInDisplayCalc.innerHTML;
	i = i.slice(0, -1);
	outInDisplayCalc.innerHTML = i;
	arrValueCalculation.pop();
}

function equationSolution() {
	checkLastItem();
	addMissingArrow();
	let result;
	if (arrValueCalculation == 'undefined' || arrValueCalculation == null || arrValueCalculation == "") {
		outInDisplayCalc.innerHTML = '';
	} else {
		let string = Math.abs = arrValueCalculation;
		let number = string.join('');
		result = eval(number);
		outInDisplayCalc.innerHTML = result;
		outPastСalculation.innerHTML = number + " = " + result;
		listHistoryMasiv.push(calcNumListHistory)

		// add changes to the story list
		for (let calcNumListHistory = 0; calcNumListHistory < listHistoryMasiv.length; calcNumListHistory++) { };
		calcNumListHistory++;
		listHistory.innerHTML += calcNumListHistory + ") " + number + " = " + result + "<br>" + "<hr>" + "<br>";
		arrValueCalculation = [];
		arrValueCalculation.push(result);
	}
}

function checkDuplicationSigns() {
	let retLastItem = returnLastItem(arrValueCalculation);
	let arrSing = ["/", "*", "-", "+", "."];
	for (let a = 0; a < arrSing.length; a++) {
		for (let b = 0; b < arrSing.length; b++) {
			if (retLastItem == arrSing[a] && valueClick == arrSing[b]) backspace();
		}
	}
	for (let i = 0; i < arrSing.length; i++) {
		if (retLastItem == arrSing[i] && valueClick == ")") return false;
	}
}

function checkCloserArrow() {
	let openArr = 0;
	let closeArr = 0;
	for (let i = 0; i < arrValueCalculation.length; i++) {
		if (arrValueCalculation[i] == "(") openArr++;
		if (arrValueCalculation[i] == ")") closeArr++;
	}
	if (openArr < closeArr) backspace();
}

function addMissingArrow() {
	let openArr = 0;
	let closeArr = 0;
	for (let i = 0; i < arrValueCalculation.length; i++) {
		if (arrValueCalculation[i] == "(") openArr++;
		if (arrValueCalculation[i] == ")") closeArr++;
	}
	for (closeArr; openArr > closeArr; closeArr++) {
		outInDisplayCalc.value += ")";
		arrValueCalculation.push(")");
	}
}

function checkLastItem() {
	let arrSing = ["/", "*", "-", "+", ".", "("];
	for (let i = 0; i < arrValueCalculation.length; i++) {
		for (let a = 0; a < arrSing.length; a++) {
			let lastItem = returnLastItem(arrValueCalculation);
			if (lastItem == arrSing[a]) backspace();
		}
	}
}

function openListHistory() {
	let elem = document.getElementById("calckList");
	if (elem.style.transform == 'rotateX(90deg)') {
		elem.style.transform = 'rotateX(0deg)';
	} else {
		elem.style.transform = 'rotateX(90deg)';
	}
}

function clearHistory() {
	listHistory.innerHTML = "";
	listHistoryMasiv = [];
	calcNumListHistory = 0;
}
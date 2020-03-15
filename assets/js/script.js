let arrNumbrButtons = document.getElementsByClassName('calck__log');
let outPastСalculation = document.getElementById('outafter');
let outInDisplayCalc = document.getElementById('out');
let arrValueCalculation = [];
let listHistoryMasiv = [];
let calcNumListHistory = 0;

document.onkeypress = function (event) {
	if (event.keyCode>39 && event.keyCode<58) {
		arrValueCalculation.push(event.key);
		outInDisplayCalc.innerHTML += event.key;
	} else if (event.keyCode == 99) {
		deleteAll ();
	} else if (event.keyCode == 61 || event.keyCode == 13) {
		equationSolution ();
	}
}
document.onkeydown = function (event) {
	if (event.keyCode == 8) backspace();
}

for (let i=0; i<arrNumbrButtons.length; i++) {
	arrNumbrButtons[i].onclick = callClick;
}

function returnLastItem(arr) {
	return arr[arr.length - 1];
}

//For DIV
function callClick() {
	let valueClick = this.value;
	let retLastItem = returnLastItem(arrValueCalculation);
	let arrSing = ["/", "*", "-", "+", "."];
	for (let a = 0; a<arrSing.length; a++) {
		for (let b = 0; b<arrSing.length; b++) {
			if (retLastItem == arrSing[a] && valueClick == arrSing[b]) backspace();
		}
	}

	if(retLastItem == ")" && valueClick == "(" ||
		retLastItem == "(" && valueClick == ")" ) {
			return false;
	} else {
		if (valueClick == ")" || valueClick == "/" || valueClick == "*" || valueClick == "+") { //blocks water elements at the beginning of calculation
			if (arrValueCalculation[0] == undefined) {
				return false;
			}
		}
	outInDisplayCalc.innerHTML += valueClick;
	arrValueCalculation.push(valueClick);
	checkCloserArrow();
	}
}

function deleteAll () {
	outInDisplayCalc.innerHTML = '';
	arrValueCalculation = [];
	outPastСalculation.innerHTML = '';
}

function backspace () {
	let i = outInDisplayCalc.innerHTML;
	i = i.slice (0, -1);
	outInDisplayCalc.innerHTML = i;
	arrValueCalculation.pop();
}

function equationSolution () {
	checkLastItem();
	addMissingArrow();
	let listHistory = document.getElementById("calckHistoryDisplay");
	let result;
	if (arrValueCalculation=='undefined' || arrValueCalculation==null || arrValueCalculation=="") {
		outInDisplayCalc.innerHTML = '';
	} else {
		let string = Math.abs = arrValueCalculation;
		let number = string.join('');
		result = eval(number);
		outInDisplayCalc.innerHTML = result;
		outPastСalculation.innerHTML = number + " = " + result;
		listHistoryMasiv.push(calcNumListHistory)
		for (let calcNumListHistory = 0; calcNumListHistory < listHistoryMasiv.length; calcNumListHistory++) {
		}
		calcNumListHistory++;
		listHistory.innerHTML += calcNumListHistory + ") " + number + " = " + result + "<br>" + "<hr>" + "<br>";
		arrValueCalculation = [];
		arrValueCalculation.push(result);
	}
}

function checkCloserArrow() {
	let openArr = 0;
	let closeArr = 0;
	for (let i = 0; i<arrValueCalculation.length; i++) {
		if (arrValueCalculation[i] == "(") openArr++;
		if (arrValueCalculation[i] == ")") closeArr++;
	}
	if (openArr<closeArr) {
		backspace();
	}
}

function addMissingArrow() {
	let openArr = 0;
	let closeArr = 0;
	for (let i = 0; i<arrValueCalculation.length; i++) {
		if (arrValueCalculation[i] == "(") openArr++;
		if (arrValueCalculation[i] == ")") closeArr++;
	}
	for (closeArr; openArr>closeArr; closeArr++) {
		outInDisplayCalc.value += ")";
		arrValueCalculation.push(")");
	}
}

function checkLastItem() {
	let lastItem = returnLastItem(arrValueCalculation);
	let arrSing = ["/", "*", "-", "+", ".", "("];
	for (let i = 0; i<arrSing.length; i++) {
		if (lastItem == arrSing[i]) backspace();
		}
}

function listHistory () {
	let elem = document.getElementById("calckList");
	let i = elem.style.transform;
if (i == 'rotateX(90deg)') {
		elem.style.transform = 'rotateX(0deg)';
	} else {
		elem.style.transform = 'rotateX(90deg)';
	}
}

function clearHistory() {
	let display = document.getElementById("calckDisplay");
	display.innerHTML = "";
	listHistoryMasiv = [];
	calcNumListHistory = 0;
}
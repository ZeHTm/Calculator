let masNumbr = document.getElementsByClassName('calck__log');
let outAfter = document.getElementById('outafter');
let outHtml = document.getElementById('out');
let numArr = [];
let historMassiv = [];
let numString = 0;

document.onkeypress = function (event) {
	if (event.keyCode>39 && event.keyCode<58) {
		console.log(event.key)
		numArr.push(event.key);
		outHtml.value += event.key;
	} else if (event.keyCode == 99) {
		delet ();
	} else if (event.keyCode == 61 || event.keyCode == 13) {
		equal ();
	}
}
document.onkeydown = function (event) {
	if (event.keyCode == 8) erase ();
}

for (let i=0; i<masNumbr.length; i++) {
	masNumbr[i].onclick = callClick;
}

//For INPUT
function callClick() {
	let i = this.value;
	outHtml.value += i;
	numArr.push(i);
}

function delet () {
	outHtml.value = '';
	numArr = [];
	outAfter.innerHTML = '';
}

function erase () {
	let i = outHtml.value;
	i = i.slice (0, -1);
	outHtml.value = i;
	numArr.pop();
	console.log(numArr)
}

function equal () {
	let historyList = document.getElementById("calckHistList");
	let result;
	if (numArr=='undefined' || numArr==null || numArr=="") {
		outHtml.value = '';
	} else {
		let string = Math.abs = numArr;
		let number = string.join('');
		result = eval(number);
		outHtml.value = result;
		outAfter.innerHTML = number + " = " + result;
		historMassiv.push(numString)
		for (let numString = 0; numString < historMassiv.length; numString++) {
		}
		numString++;
		historyList.innerHTML += numString + ") " + number + " = " + result + "<br>";
		numArr = [];
		numArr.push(result);
	}
}

function historyList () {
	let elem = document.getElementById("calckList");
	let i = elem.style.transform;
if (i == 'rotateX(90deg)') {
		elem.style.transform = 'rotateX(0deg)';
	} else {
		elem.style.transform = 'rotateX(90deg)';
	}
}

function clearHistory() {
	let historyList = document.getElementById("calckHistList");
	historyList.innerHTML = "";
	historMassiv = [];
	numString = 0;
}
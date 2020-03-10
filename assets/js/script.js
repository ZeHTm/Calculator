let masNumbr = document.getElementsByClassName('calck__log');
let outAfter = document.getElementById('outafter');
let outHtml = document.getElementById('out');
let numArr = [];

for (let i=0; i<masNumbr.length; i++) {
	masNumbr[i].onclick = callElevator;
}

//For INPUT
function callElevator() {
	i = this.value;
	outHtml.value += i;
	numArr.push(i);
	console.log(numArr)
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
		historyList.innerHTML += "1) " + number + " = " + result + "<br>";
		numArr = [];
		numArr.push(result);
	}
}

function historyList () {
	var elem = document.getElementById("calckList");
	elem.classList.toggle("calckHistoryList");
}

function clearHistory() {
	let historyList = document.getElementById("calckHistList");
	historyList.innerHTML = "";
}
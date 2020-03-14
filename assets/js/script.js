let masNumbr = document.getElementsByClassName('calck__log');
let outAfter = document.getElementById('outafter');
let outHtml = document.getElementById('out');
let numArr = [];
let historMassiv = [];
let numString = 0;

document.onkeypress = function (event) {
	if (event.keyCode>39 && event.keyCode<58) {
		numArr.push(event.key);
		outHtml.innerHTML += event.key;
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

function returnLastItem(arr) {
	return arr[arr.length - 1];
 }
//For DIV
function callClick() {
	let i = this.value;
	let r = returnLastItem(numArr);
	if (r == i && i == "/" || 
		 r == i && i == "*" || 
		 r == i && i == "-" || 
		 r == i && i == "+" || 
		 r == i && i == "." || 
		 
		 r == "/" && i == "/" || 
		 r == "/" && i == "*" || 
		 r == "/" && i == "-" || 
		 r == "/" && i == "+" || 
		 r == "/" && i == "." || 
		 
		 r == "*" && i == "/" || 
		 r == "*" && i == "*" || 
		 r == "*" && i == "-" || 
		 r == "*" && i == "+" || 
		 r == "*" && i == "." || 

		 r == "-" && i == "/" || 
		 r == "-" && i == "*" || 
		 r == "-" && i == "-" || 
		 r == "-" && i == "+" || 
		 r == "-" && i == "." || 

		 r == "+" && i == "/" || 
		 r == "+" && i == "*" || 
		 r == "+" && i == "-" || 
		 r == "+" && i == "+" || 
		 r == "+" && i == "." || 

		 r == "." && i == "/" || 
		 r == "." && i == "*" || 
		 r == "." && i == "-" || 
		 r == "." && i == "+" || 
		 r == "." && i == "." || 

		 r == ")" && i == ")" || 
		 r == ")" && i == "(" || 
		 r == "(" && i == ")" || 
		 r == "(" && i == "(" 
		 ) {
			 return false;
	} else {
		if (i == ")") {
			if (numArr[0] == undefined) {
				return false;
			}
		}
		outHtml.innerHTML += i;
		numArr.push(i);
	}
}

function delet () {
	outHtml.innerHTML = '';
	numArr = [];
	outAfter.innerHTML = '';
}

function erase () {
	let i = outHtml.innerHTML;
	i = i.slice (0, -1);
	outHtml.innerHTML = i;
	numArr.pop();
}

function equal () {
	checkLastArr();
	addMisArr();
	let historyList = document.getElementById("calckHistList");
	let result;
	if (numArr=='undefined' || numArr==null || numArr=="") {
		outHtml.innerHTML = '';
	} else {
		let string = Math.abs = numArr;
		let number = string.join('');
		result = eval(number);
		outHtml.innerHTML = result;
		outAfter.innerHTML = number + " = " + result;
		historMassiv.push(numString)
		for (let numString = 0; numString < historMassiv.length; numString++) {
		}
		numString++;
		historyList.innerHTML += numString + ") " + number + " = " + result + "<br>" + "<hr>" + "<br>";
		numArr = [];
		numArr.push(result);
	}
}

function addMisArr() {
	let openArr = 0;
	let closeArr = 0;
	for (let i = 0; i<numArr.length; i++) {
		if (numArr[i] == "(") openArr++;
		if (numArr[i] == ")") closeArr++;
	}
	for (closeArr; openArr>closeArr; closeArr++) {
		outHtml.value += ")";
		numArr.push(")");
	}
}
function checkLastArr() {
	let r = returnLastItem(numArr);
	if (r == "(" || 
		 r == ")" || 
		 r == "/" || 
		 r == "*" || 
		 r == "-" || 
		 r == "+" || 
		 r == ".") erase ();
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
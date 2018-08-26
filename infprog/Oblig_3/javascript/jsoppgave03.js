window.onload = oppstart;

function oppstart() {
	document.getElementById("btnoppg03a").onclick = oppg03a;
}
// alert

function oppg03a() {
	var thisArr = [3,5,6,7,12,4,2,423,53,23,53,7,87,4];
	var tall = parseInt(document.getElementById("tall").value);
	//alert(findThisNumb(thisArr, tall));
	
	if (findThisNumb(thisArr, tall) === true) {
		document.getElementById("print04").innerHTML = "tallet finnes i arrayen";
	} else {
		document.getElementById("print04").innerHTML = "tallet finnes <b>ikke</b> i arrayen";
	}
	
	document.getElementById("print").innerHTML = "det største tallet er " + findLargestNumb(thisArr);
	document.getElementById("print02").innerHTML = "det største tallet er " + findSum(thisArr);
	document.getElementById("print03").innerHTML = "det største tallet er " + findGjennomsnitt(thisArr);
	
	
}

function findLargestNumb(Arr, largestNumb) {
	var largestNumb = 0;
	for (var i = 0; i < Arr.length; i++) {
		if (largestNumb < Arr[i]) {
			largestNumb = Arr[i];
		}
	}
	return largestNumb;
}
function findSum(Arr) {
	var sum = 0;
	for (var i = 0; i < Arr.length; i++) {
		sum += Arr[i];
	}
	return sum;
}
function findGjennomsnitt(Arr) {
	var gjennom = 0;
	gjennom = (findSum(Arr) / Arr.length);
	gjennomFix = gjennom.toFixed(2);
	return gjennomFix;
}
function findThisNumb(Arr, numb) {
	for (var i = 0; i < Arr.length; i++) {
		if(Arr[i] === numb) {
			return true;
		} 
	}
	return false;
}



/*gende 4 funksjoner som arbeider med arrayer av tall, som returnerer følgende:
1. Finner største tallet i arrayen
2. Finner summen av arrayen
3. Finner gjennomsnittet av arrayen (kan denne benytte funksjon 2)
4. Finner ut om ett bestemt tall (angies som parameter) er i arrayen eller ikke */

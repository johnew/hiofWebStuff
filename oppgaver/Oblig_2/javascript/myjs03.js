window.onload = oppstart;

function oppstart() {
	document.getElementById("btncalc").onclick = oppg3;
	document.getElementById("btncalc02").onclick = calc;
}

function oppg3() {
	document.getElementById("print").innerHTML = "";
	
	var amount = document.getElementById("inamount").value;
	var rent = document.getElementById("inrent").value;
	var years = document.getElementById("inyears").value;
	var rentFaktor = rent / 100;
	rent = rentFaktor + 1;
	for(var i = 1; i <= years; i++) {
		amount = amount * rent;
		document.getElementById("print").innerHTML += "etter " + i + " år har du " + amount + "<br />";
	}
}


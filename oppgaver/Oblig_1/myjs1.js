window.onload = oppstart1;           // window.onload for alle javascsript
function oppstart1() {
	document.getElementById("btnoppg4").onclick = kalk;
	document.getElementById("btnoppg5").onclick = skjema;
	document.getElementById("btnoppg6").onclick = skjema2;
	document.getElementById("test").onclick = skjema3;
}
function oppg3() {                    // Oppgave 3 function
	var navn = prompt("skriv navnet ditt her!");
	if (navn != null) {
		document.getElementById("hest").innerHTML = "Hallo! " + navn + "   XD";
	}
	
	
}
function kalk() {                          // Oppgave 4:
	var tall1 = parseInt(document.getElementById("txttall1").value);
	var tall2 = parseInt(document.getElementById("txttall2").value);
	
	var sum = "  " + (tall1 + tall2);
	var differansen = "  " + (tall1 - tall2);
	var produktet = "  " + tall1 * tall2;
	var kvotienten = "  " + tall1 / tall2;
	
	document.getElementById("plus").innerHTML += sum;
	document.getElementById("minus").innerHTML += differansen;
	document.getElementById("gange").innerHTML += produktet;
	document.getElementById("deling").innerHTML += kvotienten;
}


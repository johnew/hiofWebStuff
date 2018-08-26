window.onload = oppstart;

function oppstart() {
	document.getElementById("btnoppg02").onclick = oppg02;
	document.getElementById("btnoppg02b").onclick = oppg02b;
	document.getElementById("spin01").onclick = spin1;
	document.getElementById("spin02").onclick = spin2;
	document.getElementById("spin03").onclick = spin3;
}

function oppg02() {           

	var tall = parseInt(document.getElementById("intall").value); // henter verdiene.
	var fra = parseInt(document.getElementById("intall2").value);
	var til = parseInt(document.getElementById("intall3").value);
	var ans;
	
	if(innenForIntervall(tall, fra, til) == true) { // hvis den er sann 
		document.getElementById("print").innerHTML = "tallet " + tall + " er innenfor intervallet."; 
	} else if (innenForIntervall(tall, fra, til) == false){ // hvis den ikke er sann.
		document.getElementById("print").innerHTML = "tallet " + tall + " er ikke innenfor dette intervallet.";
	} else { // alle andre tillfeller ( skall ikke kunne skje ).
		alert("what da heck?");
	}
}

function oppg02b() { 
	document.getElementById("print02").innerHTML = ""; // overwrite current innerhtml.

	var tall02 = document.getElementById("inTall").value; // collect values
	var fra02 = document.getElementById("inFra").value;
	var til02 = document.getElementById("inTil").value;
	
	if (innenForIntervall( tall02, fra02, til02) === true) { //check if fuction is true
		document.getElementById("print02").innerHTML = "tallet " + tall02 + " er innen for " + fra02 + " og " + til02;
	} else { // hvis den ikke er sann.
		document.getElementById("print02").innerHTML = "tallet " + tall02 + " er <strong>ikke</strong> innen for " + fra02 + " og " + til02;
	}
}
function spin1(e, delay) {
	if (typeof delay === "undefined") { // hvis delay sin type variabel er undefined blir den lik 0.
		var delay = 0;
	}
	document.getElementById("print01b").innerHTML = (Math.floor(Math.random() * 1000)); // skriver ut et random tall for hver runde.
	delay++ // øker deley med 1
	var delayFunc = setTimeout(spin1, 100, e, delay); // sier at denne funksjonen skal kjøre om 0.1 sekund.
	if (delay === 10) { // hvis delay er lik 10 skal funskjonen timeouten ikke kjøres ( dette er basicly en loop).
		clearTimeout(delayFunc);  // bare at denne loopèn har blitt gitt en forsinkelse på når den skal kjøre neste gang.
	}
}
function spin2(e, delay) { //veldig lik spin1 bare med andre id`er hentet.
	if (typeof delay === "undefined") {
		var delay = 0;
	}
	document.getElementById("print02b").innerHTML = (Math.floor(Math.random() * 1000));
	delay++
	var delayFunc = setTimeout(spin2, 100, e, delay);
	if (delay === 10) {
		clearTimeout(delayFunc);
	}
}

function spin3(e, delay, tall, fra, til) { // veldig lik de andre men har kjører innenForIntervall etter den er ferdig.
	if (typeof delay === "undefined") { 
		var delay = 0;
	}
	document.getElementById("print03b").innerHTML = (Math.floor(Math.random() * 1000));
	delay++
	var delayFunc = setTimeout(spin3, 100, e, delay);
	
	if (delay === 10) {
		clearTimeout(delayFunc);
		
		var fra = parseInt(document.getElementById("print01b").innerHTML);
		var til = parseInt(document.getElementById("print02b").innerHTML); // henter verdiene som har blitt
		var tall = parseInt(document.getElementById("print03b").innerHTML); // skrevet ut
		
		if (innenForIntervall(tall, fra, til) === true) { // kjører generelle funksjonen.
			document.getElementById("result").innerHTML = "tallet " + tall + " er innenfor " + fra + " til " + til;
		} else { // og skriver ut svar.
			document.getElementById("result").innerHTML = "tallet " + tall + " er <b>ikke</b> innenfor " + fra + " til " + til;
		}
		return; // ikke nødvendig men funksjonen skal stoppe her uansett.
	}
}


// dette er den generelle funsksjonen kan bli brukt hvor som helst ved å dytte inn tall verdier.
function innenForIntervall(tall, fra, til) {
	if (tall >= fra && tall <= til) {
		return true;
	} else {
		return false;
	}
}
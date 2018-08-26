window.onload = oppstart;

function oppstart() {
	document.getElementById("btnoppg02").onclick = oppg02;
	document.getElementById("btnclear02").onclick = clear;
}

function oppg02() {
	//alert("ekko");
	for(var hest = 0; hest < 101; hest++) {
		document.getElementById("utskrift02").innerHTML += " " + hest + ",";
	}
	for(var hest2 = 100; hest2 > -1; hest2--) {
		document.getElementById("utskrift03").innerHTML += " " + hest2;
	}
	for(var hest3 = 0; hest3 < 50.5; hest3 = hest3 + 0.5) { // vanlig løkke blir bare skrkevet ut en hall om gangen isteden for 1.
		document.getElementById("utskrift04").innerHTML += " " + hest3;
	}
	for(var hest4 = 0; hest4 < 101; hest4++) { // hvis tallet kan deles på 3 uten å få rest.
		if(hest4 % 3 === 0) {
		document.getElementById("utskrift05").innerHTML += " " + hest4;
		}
	}
	for(var hest5 = 1; hest5 < 101; hest5++) { // hvis tallet hest5 kan deles på 2 uten rest så skriv ut.
		if(hest5 % 2 === 0) {
			document.getElementById("utskrift06").innerHTML += " " + hest5;
		}
	}
	for(var hest6 = 0; hest6 < 101; hest6++) { // hvis det å dele på 2 gir 1 i rest så skriv ut.
		if(hest6 % 2 === 1) {
			document.getElementById("utskrift07").innerHTML += " " + hest6;
		}
	}
	for(var hest7 = 0; hest7 < 101; hest7++) {
		if(hest7 % 2 === 0) { // skriver ut alle partall vanlig.
			//hest7 * 2;
			document.getElementById("utskrift08").innerHTML += " " + hest7 + ".";
		}
		else if(hest7 % 2 === 1) { // skriver ut alle oddetall etter de har blitt ganget med -1.
			//hest7 = hest7 * (-1);
			document.getElementById("utskrift08").innerHTML += " " + hest7 * -1 + ".";
		}
	}
}

function clear() {    // fjerner alt i p.
	for(i = 0; i < 7; i++) {
		document.getElementsByTagName("p")[i].innerHTML = "";
	}
}

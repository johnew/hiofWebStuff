window.onload = oppstart;

function oppstart() {
	document.getElementById("btnoppg9").onclick = oppg9;
}

function oppg9() {
	
	var text = document.getElementById("intekst").value; // henter teksten.
	
	var textArr = text.split(" ");	// deler den inn i en array.
	var Counting = [];
	
	var textMain = {}; // lager en hoved array
	
	//var textCount = textArr.slice(); // lager en extra array basert på data hentet(kan være dette ikke er nødvendig men fungerer for nå).

	//Teller(textArr);
	gammelCounter(textArr,Counting,textMain);
	// document.getElementById("print").innerHTML = textMain[textCount[i]];
	
	
	console.log(Counting);
	console.log(textMain);
	console.log(textArr);
	//console.log(textMain[0]);
}
	


function Teller(textArr,Counting) {
	
	for(var i = 0; i < 0; i++) {
	//	if(textArr[i] == ) {
			Counting[tallArr[i]] = Counting[tallArr[i]] + 1;
	//	}
	}
	return Counting;
}

function gammelCounter(textArr,Counting,textMain) {
	for (i = 0; i < textArr.length; i++) { // skaner gjennom teksten(arrayen) med for løkka
		if (typeof textMain[textArr[i]] == "undefined") { // hvis ordet(eller aray elementet) ikke finnes fra før lages det
			textMain[textArr[i]] = textArr[i];
			Counting[i] = textArr[i];
			} 
		else { 										// mens hvis det finnes fra før teller legger vi på 1 i sub arrayen for å telle den.
			textMain[i] = textMain[i] + 1;  	// textMain[textCount[i]] + 1;	// kunne her skrevet textMain[textCount[i]]++ men vil ha mer oversikt.
													//textArr.splice(i,1);
		}
	}
}





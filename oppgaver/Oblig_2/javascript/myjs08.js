// var arr = Ha[ns","Ole","Nils","Olav","Per","Knut","Kari","Line","Pia"];  kopi paste

window.onload = oppstart;

function oppstart() {
	document.getElementById("btnoppg8").onclick = oppg8;
}

var studNavn = ["Hans","Ole","Nils","Olav","Per","Knut","Kari","Line","Pia"];
const amountRandom = 3;

function oppg8() {           

	var newStudNavn = [];
	
	for (var i = 0; i < amountRandom; i++) {
		
		var numbRandom = Math.floor(Math.random() * studNavn.length); // numbRandom velger et tilfeldigtall like langt som hoved arrayen.
		newStudNavn.push(studNavn[numbRandom]); // bruker tilfeldig tall til å velge element i hoved arrayen og så legge elementet i en ny array.
		studNavn.splice(numbRandom,1); // fjerner valgt elememt fra hoved arrayen slik at samme student ikke blir valgt igjen.
		} 
	document.getElementById("print").innerHTML += " " + newStudNavn + "<br />"; // skriver ut til slutt 
}
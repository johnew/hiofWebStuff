window.onload = oppstart;

function oppstart() {
	document.getElementById("btnoppg9a").onclick = oppg9a;
}
function oppg9a() {
	document.getElementById("print").innerHTML = "";
	
	var tall = document.getElementById("intall").value;
	 
	var tallArr = tall.split(",");
	var lengde = tallArr.length;
	var tallListe = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	var Counting = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	var tallTeller = [];
	
	Teller(lengde,tallTeller,tallArr,tallListe,Counting);
	
	for(var i = 0; i < Counting.length; i++) { //     utskrifts løkke.
		Tabell(i,tallArr,Counting,tallListe);		//tabell funksjon
		//document.getElementById("print").innerHTML += " " + Counting[i]; 
	}
	
	console.log(Counting);
}



function Teller(le, tallTeller, tallArr, tallListe,Counting) {
	
	for(var i = 0; i < le; i++) {
		if(tallArr[i] == tallListe[tallArr[i]]) {
			Counting[tallArr[i]] = Counting[tallArr[i]] + 1;
		}
	}
	return Counting;
}

function Tabell(i, tallArr,Counting,tallListe) {
	if(Counting[i] > 0) {
		for(var y = 0; y < Counting[i]; y++) {
			var img = document.createElement("img");
			img.src = "../img/blueBox.png";
			img.style.height = "50px";
			img.style.width = "50px";
			var src = document.getElementById("print");
			src.appendChild(img);
		}
	} else {
		var img = document.createElement("img");
		img.src = "../img/space.jpg";
		img.style.height = "50px";
		img.style.width = "50px";
		var src = document.getElementById("print");
		src.appendChild(img);
	}
		
		document.getElementById("print").innerHTML += tallListe[i] + "<br />";
	
}
	

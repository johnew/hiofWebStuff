window.onload = oppstart;

function oppstart() {
	document.getElementById("btnoppg7").onclick = oppg7;
}

function oppg7() {           
	var monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	var monthName = 
	["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desmenber"];
	
	var monthNumb = document.getElementById("monthIn").value;
	document.getElementById("print").innerHTML = "";
	
	for(var i = 0; i < monthDay.length; i++) {                   // loop de loop
		if(monthNumb == (i + 1)){  							// monthNumb er taller som blir tastet inn, i + 1 fordi i og arrayen starter på null. det skal ikke brukeren se.
			document.getElementById("print").innerHTML = "I " + monthName[i] + " er det " + monthDay[i] + " dager.";
			//document.getElementById("")
		}
		//if(monthNumb == (i + 1)) {
			
		//}
	}
}
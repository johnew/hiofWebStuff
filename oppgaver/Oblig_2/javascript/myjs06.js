window.onload = oppstart;

function oppstart() {
	document.getElementById("btnoppg6").onclick = oppg6;
}
var numbers = [3, 4, 56, 3, 2, 64, 12, 86, 13];
function oppg6() {            // i er 1000 verdi, y er 100 verdi osv..
	
	document.getElementById("print").innerHTML += " tall! : ";
	for(var i = 0; i < numbers.length; i++) {              // første utskrift, skriver ut numbers i vanlig rekkefølge.
		document.getElementById("print").innerHTML += " " + numbers[i] + ".";	
}
	
	
//	numbers.reverse();       // snur arrayen.
	document.getElementById("print").innerHTML += "<br /><br /> tallene er nå baklengs! : ";   // denne ligger over hver for videre og skal lage selve siden litt mer ryddig.
	for(var i = numbers.length - 1; i >= 0; i--) {              // skriver ut numbers baklengs.
		document.getElementById("print").innerHTML += " " + numbers[i] + ".";
}	
//	numbers.reverse();      // snur array tilbakke igjen.
	
	
	document.getElementById("print").innerHTML += "<br /><br /> annen hver verdi : ";
	for(var i = 0; i < numbers.length; i++) {      // skriver kun ut oddetall i verdiene (altså i verdien sine oddetall).
		if(i % 2 === 1) {
			document.getElementById("print").innerHTML += " " + numbers[i] + ".";
		}
	}
	
	
	document.getElementById("print").innerHTML += "<br /><br /> alle verdier under ti : ";
	for (var i = 0; i < numbers.length; i++) {      // skriver kun ut viss array verdien er mindre enn 10.
		if(numbers[i] < 10) {
			document.getElementById("print").innerHTML += " " + numbers[i] + ".";
		}
	}
	
	
	document.getElementById("print").innerHTML += "<br /><br /> alle partall i arrayen : ";
	for(var i = 0; i < numbers.length; i++) {
		if(numbers[i] % 2 === 0) {
			document.getElementById("print").innerHTML += " " + numbers[i] + ".";
		} else {
			document.getElementById("print").innerHTML += " this number is too odd to show ";     // ahh the bad joke.
		}
	}
	
	
	document.getElementById("print").innerHTML += "<br /><br /> summen av arrayen : ";
	var numbSum = 0;
	for(var i = 0; i < numbers.length; i++) {
		numbSum = numbSum + numbers[i];
	}
	document.getElementById("print").innerHTML += " " + numbSum + ".";
	
	
	document.getElementById("print").innerHTML += "<br /><br /> arrayens elementer : ";
	                                 //for(var i = 0; i < numbers.length; i++) {   // dette var unødvendig med mindre man vil se 8 8 8 8 8 8 8 8.
	document.getElementById("print").innerHTML += " " + numbers.length + ".";           // skriver ut antall elemter i arrayen.
	
	
	var gjenSnitt;
	document.getElementById("print").innerHTML += "<br /><br /> gjennosnittet av numbers : ";
	for(var i = 0; i < numbers.length; i++) {             // bruker numbSum som allerede hatr funnet summen og deler på numb.length som har også blitt funnet før.
		gjenSnitt = numbSum / numbers.length;
	}
	document.getElementById("print").innerHTML += " " + gjenSnitt + ".";
	
	
	document.getElementById("print").innerHTML += "<br /><br /> Summen av partallene : ";
	var parSum = 0;
	for(var i = 0; i < numbers.length; i++) {
		if(numbers[i] % 2 === 0) {
			parSum = parSum + numbers[i];
		}
		//if(numbers[i] % 2 === 0) {					// this did not work because parSum was defined as a number( or int).
			//parSum = parSum + numbers[i];
			//alert("does dis work?");
		}
	document.getElementById("print").innerHTML += " " + parSum + ".";
	
	
	document.getElementById("print").innerHTML += "<br /><br /> Det minste tallet i arayen er : ";
	var lav = 0;
	for(var i = 1; i < numbers.length; i++) {
		if(numbers[i] < numbers[lav]) {
			lav = i;
		}
	}
	document.getElementById("print").innerHTML += " " + numbers[lav] + ".";
	
	
	document.getElementById("print").innerHTML += "<br /><br /> Det minste tallet i arayen er : ";
	for(var i = 0; i < numbers.length; i++) { // tallet 13 er den bestemte verdien kunne her ha laget en input og let etter en bruker bestemt verdi men meh.
		var unluckyNumb = numbers.indexOf(13);        // unluckyNumb finner posisjonen til 13
	}
	var realUnluckyNumb = numbers[unluckyNumb];       // realUnluckyNumb finner tallet på posisjon unluckynumb
	document.getElementById("print").innerHTML += " " + realUnluckyNumb + ".";
	
	
	document.getElementById("print").innerHTML += "<br /><br /> tallet tre forkommer : ";
	var findNumb = 0;
	var found = 0;
	for(var i = 0; i < numbers.length; i++) { // letter etter det bestemte tallet for hver gang den finner det så øker variablen found med 1.
		findNumb = numbers[i];
		for(var x = 0; x < numbers.length; x++) {
			//alert(numbers[x]);
			if(findNumb === numbers[x]) {
				if (findNumb === x) {
					found++
				//alert("does dis work?");
				}
			}
		}
	}
	document.getElementById("print").innerHTML += " " + found + ".";
}





	
	//for(var i)
	//document.getElementById("print").innerHTML += "<br />";	











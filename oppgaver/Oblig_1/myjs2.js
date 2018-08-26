function skjema() {                     // Oppgave 5
	
	var user = document.getElementById("brukernavn").value;
	var pass = document.getElementById("passord").value;
	var fail;
	
	if(user === "" && pass === "") {
		fail = "du må skrive noe!";
	}
	else if (user === "") {
		fail = "du må skrive inn brukernavn!";
	}
	else if (pass === "") {
		fail = "du må skrive inn passord!";
	}
	else{
		fail = "Du er registrert";
	}
	document.getElementById("test").innerHTML = fail;
}


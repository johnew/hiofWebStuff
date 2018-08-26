function skjema3() {
	var user3 = document.getElementById("useroppg7").value;
	var pass3 = document.getElementById("passoppg7").value;
	var pass3check = document.getElementById("passcheck3").value;
	var alder = document.getElementById("txtalder").value;
	var minstalder = "19";
	var check3;
	
	if(user3 !== "" && pass3 !== "" && pass3check !== "" && alder !== "") {
		check3 = "du må skrive inn et brukernavn!";
	}
	else if(pass3 === "") {
		check3 = "du må skrive inn et passord!";
	}
	else if(user3 === "") {
		check3 = "du må skrive inn noe!";
	}
	else if(alder < 18) {
		check3 = "du er ikke gammel nok"
	}
	else {
		check3 = "takk for registreringen";
	}
	
	document.getElementById("stuff").innerHTML = check3;
	
}


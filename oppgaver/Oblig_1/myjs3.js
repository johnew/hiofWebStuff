function skjema2() {                         // Oppgave 6
	var user2 = document.getElementById("useroppg6").value;
	var pass2 = document.getElementById("passoppg6").value;
	var pass2check = document.getElementById("passcheck").value;
	var check2
	
	if(user2 === "" && pass2 === "" && pass2check === "") {
		check2 = "you should enter something!";
	}
	else if(user2 === "1234" && pass2 === "1234" && pass2check === "1234") {
		check2 = "you`ve got to be kidding me!";
	}
	else if(user2 === "") {
		check2 = "you need too enter a username!";
	}
	else if(pass2 === "") {
		check2 = "you need too enter a password!";
	}
	else if(pass2 != pass2check) {
		check2 = "your password did not match";
	}
	else if(pass2 === "Enter password" && pass2check === "Enter password") {
		check2 = "Nice try";
	}
	else if(user2 === pass2) {
		check2 = "Nope";
	}
	else {
		check2 = "thank you for registering!"
	}
	
	document.getElementById("done").innerHTML = check2;
}


window.onload = oppstart;

function oppstart() {
	document.getElementById("btnoppg5").onclick = oppg5;
}

var days = ["man", "tue", "wed", "thur", "fri", "sat", "sun"];
// denne opppaven har vært veldig dritt. den er ikke ferdig.
function oppg5() {
	document.getElementById("print").innerHTML = "";
	var monthNumb = parseInt(document.getElementById("moenetall").value);
	var selValue = parseInt(document.getElementById("velg").value);
	
	
	for (var x = 0; x < monthNumb; x++) {
		//document.getElementById("print").innerHTML += x;
		if(selValue >= x) {
			document.getElementById("print").innerHTML += "&nbsp";
		} else if (x % 7 == 1) {
			document.getElementById("print").innerHTML += "<li>" + x;
		} else if (x % 7 == 0) {
			document.getElementById("print").innerHTML += x + "</li>";
		} else {
			document.getElementById("print").innerHTML += x;
		}
	}
	console.log(selValue);
	console.log(monthNumb);
	
}
	/*var monthLength = document.getElementById("lengde").value;
	for(x = 0; x <= 6; x++) {
		document.getElementById("print").innerHTML += days[x] + " "; 

	}
	document.getElementById("print").innerHTML += "<br />";
	var selected = document.getElementById("velg").value;
	for(i = selected; i <= monthLength; i++) {
		if(i < 8 || 14 < i) {
		document.getElementById("print").innerHTML += "&nbsp" + i + " ";
		if(i % 7 == 0) {
			document.getElementById("print").innerHTML += "<br />";
		}
		if(i < 8) {
			document.getElementById("print").innerHTML += "&nbsp";
		}
		} else if (i == 8 || i == 9) {
			document.getElementById("print").innerHTML += i + "&nbsp&nbsp&nbsp";
		} else if(i == 14) {
			document.getElementById("print").innerHTML += i + "<br />";
		} else {
			document.getElementById("print").innerHTML += i + "&nbsp&nbsp";
		}
	}
	document.getElementById("print").innerHTML += "<br />";
	document.getElementById("print").style.fontFamily = "courier new"; */
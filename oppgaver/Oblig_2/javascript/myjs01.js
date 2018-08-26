window.onload = oppstart;

function oppstart() {
	document.getElementById("btnoppg1").onclick = oppg01;
	document.getElementById("btnclear").onclick = clear;
	document.getElementById("scarybtn").onclick = scaryBtn;
	document.getElementById("imgbtn").onclick = pic;
}
/*function addLoadEvent(func) {      
	var onoldload = window.onload;
	if (typeof window.onload != "function") {
		window.onload = func;
	} 
	else {
		window.onload = function() {
			if (onoldload) {
				onoldload() ;
			}
			func();
		}
	}
}
addLoadEvent(oppstart01);
addLoadEvent(oppstart02);
//addLoadEvent(nav);

//window.onload = oppstart, oppstart2 */

function oppg01() { 
	
	var text = document.getElementById("txtInput01").value; // henter teksten
	var numb = document.getElementById("numbInput01").value; // henter antall ganger
	
	for(var times = 0; times < numb; times++) {	// skriver ut teksten basert på antall ganger.
		document.getElementById("utskrift").innerHTML +=  " " + text + "<br />";
	}	
}

function clear() {          // clear fjerner teksten på oppg1.
	document.getElementById("utskrift").innerHTML = "";
}

function pic() {
	var picture = document.createElement("img");
	picture.src ="img/thomas.jpg";
	picture.style.height = "100%";
	picture.style.width = "100%";
	
	var src = document.getElementById("utskrift");
	src.appendChild(picture);
	
	var get = document.getElementById("")
	//picture.
} 

function scaryBtn() {   
	for(var aleTimes = 0; aleTimes < 2; aleTimes++) {
		alert("you clicked the wrong button!");
	}
}
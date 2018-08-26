window.onload = oppstart;

function oppstart() {
	document.getElementById("btnoppg04").onclick = oppg04;
	document.getElementById("btnoppg04").disabled = true;
	document.getElementById("btnLetter").onclick = oppg04bokstav;
	oppg04streker(); // sier her bare gjør dette.
}
// global variabler. // (they are all evil).
var step = 0;
var enteredWords = [""]; // denne holder det ordene som har blitt forsøkt.
var endGame = [];

var randomNumb = Math.floor(Math.random() * 6);
var ord = ["nisse", "apples", "hest", "javascript", "ekko drid", "hello!"];
var tempWord = ord[randomNumb];

var tempArr = tempWord.split("");
var endGame = [];
function oppg04streker() {
	
	//var tempArr.length = 12;
	var xStartPos = 40;
	var yLinePos = 200;
	
	for(var i = 0; i < tempArr.length; i++) { // lager streker etter hvor mange bokstaver ordet har.
		var xLinePos = xStartPos + 20; // setter lengden på linjene lik 20
		line01(xStartPos, yLinePos, xLinePos, yLinePos); // skriver linjene
		xStartPos = xStartPos + 25; // øker start posisjonen 25 til høyere for å få mellomrom.
	}
}

function oppg04bokstav() {
	var Letter = document.getElementById("inLetter").value; // henter verdien til input boxen.
	
	var xLetPos = 45; // posisjon for x denne blir endret for hver løkke gjennomskjøring.
	const yLetPos = 195; // posisjon for y denne er constant.
	var check = false;
	
	for(var x = 0; x < enteredWords.length; x++) { // ser om bokstaven matcher en array med ulovlig tegn(slik som ingenting).
		if (enteredWords[x] === Letter) {
			return alert("you have already entered this letter"); // returnerer hvis bokstaven har allerede blitt skrevet inn.
		}
	}
	
	for(var i = 0; i < tempArr.length; i++) { // dette er bokstav utsriften
		if(i !== 0) {
			xLetPos = xLetPos + 25; 	// setter avstand mellom bokstavene.
		}
		if(Letter === tempArr[i]) { 	// hvis bokstaven er lik ordet
			drawLetter(Letter, xLetPos, yLetPos); // tegner bokstaven
			check = true; 				// setter check til true slik at tegningen ikke fortsetter.
			endGame[i] = tempArr[i];
		}
	}
	if(check === false) { 				// hvis check er false så stemte ikke bokstaven med noe i ordet og tegningen går frem et steg.
		oppg04();
	}
	var teller = 0; 					// definerer teller inne i funksjon slik at den blir satt lik null for hver gang.
	for(i = 0; i < tempArr.length; i++) {
		if(endGame[i] === tempArr[i]) { // ser om arrayen som har blitt laget underveis er lik den orginale.
			teller++ 					// hvis den er det leg til 1.
		}
	}
	if (teller === tempArr.length) { 	// hvis telleren er like lang som arrayen så er hver bokstav lik.
		return end("you win"), endFun(); 		// vinn funsksjoneer stuff.
	}
	enteredWords.push(Letter); 			// dette vil legge boktaven som ble valgt inn i den ulovlige arrayen og sjekke det ved neste trykk.
	console.log(enteredWords);
}
function oppg04() { // step som skal utføres for hver feil. many many if`s
	if(step === 0) { 	// første steg
		oppg04a(); 		// ufører funksjon
		step++; 		// steg telleren øker
		return; 		// stopper funksjonen
	} 					// neste runde vil starte rett under.
	if (step === 1) {
		oppg04b();
		step++;
		return;
	}
	if(step === 2) {
		oppg04c();
		step++
		return;
	}
	if(step === 3) {
		oppg04d();
		step++
		return;
	}
	if(step === 4) {
		oppg04e();
		step++
		return;
	}
	if(step === 5) {
		oppg04f();
		step++
		return;
	}
	if(step === 6) {
		oppg04g();
		step++
		return;
	}
	if(step === 7) {
		oppg04h();
		step++
		return;
	}
	if(step === 8) {
		oppg04i();
		step++
		return;
	}
	if(step === 9) {
		oppg04j();
		step++
		return;
	}
	if(step === 10) {
		oppg04k();
		step++
		return;
	}
	if(step === 11) {
		oppg04l();
		step++
		return;
	}
	if(step === 12) {
		end("Game Over");
		return;
	}
}

function oppg04a() { // the ground (i guess). denne kjører etter første feil gjetting
	circle(400, 400, 100, 1 * Math.PI, 2 * Math.PI); // Step 1 // sirkel så ( x pos, y pos, radius, sirkel start i rad, slutt i rad).
}
function oppg04b() {
	line01(400, 300, 400, 100); // (streken sin x start posisjon, y sin start pos, x slutt pos, y slutt pos).
}
function oppg04c() {
	line01(400, 100, 600, 100);
}
function oppg04d() {
	line01(400, 175, 500, 100);
}
function oppg04e() {
	line01(600, 100, 600, 150);
}
function oppg04f() { // stick man`s head.
	circle(600, 162, 13, 0, 2 * Math.PI);
}
function oppg04g() { // neck
	line01(600, 175, 600, 190);
}
function oppg04h() { // stick man`s body
	line01(600, 190, 600, 240);
}
function oppg04i() { // stick man arms
	line01(600, 200, 550, 170);
}
function oppg04j() { // the other arm.
	line01(600, 200, 650, 170);
}
function oppg04k() { // stick man leg
	line01(600, 240, 630, 300);
}
function oppg04l() { // the other leg
	line01(600, 240, 570, 300);
}

function circle(xVerdi, yVerdi, radius, start, slutt) { //generel sirkel tegning funskjon
	var draw = document.getElementById("drawing"); 		// henter canvas idèn
	var drawtx = draw.getContext("2d"); 				// henter canvas 2d contexten
	drawtx.beginPath();									// starter en tegning.
	drawtx.arc(xVerdi, yVerdi, radius, start, slutt);   // lager sirkelen.
	drawtx.stroke(); 									// tegner det som har blitt laget.
}
function line01(xStartVerdi, yStartVerdi, xVerdi01, yVerdi01) { // linje med start og stopp
	
	var drawLine = document.getElementById("drawing");
	var drawLinetx = drawLine.getContext("2d");
	drawLinetx.beginPath();
	drawLinetx.moveTo(xStartVerdi,yStartVerdi);
	drawLinetx.lineTo(xVerdi01, yVerdi01);
	drawLinetx.stroke()
}
function drawLetter(Letter, xLetPos, yLetPos) { // den generele funksjonen for å skrive inn bokstavene
	var drawLet = document.getElementById("drawing");
	var drawLetTx = drawLet.getContext("2d");
	drawLetTx.fillText(Letter, xLetPos, yLetPos);
	drawLetTx.stroke();
}
function end(mes) {
	var drawWin = document.getElementById("drawing");
	var drawWinCtx = drawWin.getContext("2d");
	drawWinCtx.font = "130px arial";
	drawWinCtx.fillStyle = "blue";
	drawWinCtx.fillText(mes, 40, 180);
	drawWinCtx.stroke();
}
function endFun() {
	var x = 0;
	var y = 0;
	var color = ["black", "blue", "green", "aqua", "indigo", "orange", "yellow", "brown", "purple", "pink", "gold", "red", "silver", "#423ff4", "maroon"];
	for(var i = 0; i < (800 / 20); i++) {
		endFunRep(x, y, color);
		x += 20;
	}
}
function endFunRep(x, y, color) {
	var drawCon = document.getElementById("drawing");
	var drawConCtx = drawCon.getContext("2d");
	drawConCtx.beginPath();
	drawConCtx.moveTo(x, y);
	drawConCtx.lineTo(x + 5, y + 3);
	drawConCtx.lineWidth = 5;
	drawConCtx.strokeStyle = color[Math.floor((Math.random() * 15)) - 1];
	drawConCtx.stroke();
	
	y += 20;
	
	setTimeout(endFunRep, 500, x, y, color);
}



window.onload = oppstart;

var mouseClick = false;
var mousePos = { 
	x: 0,
	y: 0,
};

var keys = []; // bruker denne for å si hvilke knapper som er trykkt ned.
				// for eks 38 vil være true så lenge den knappen er nede men når den slippes blir den sat lik false igjen.
var mouseClick = false;
var eKey = false;
var jumpVar = false;
var jumpingVar = false;
var dudeImg = true;
var dudeImgRev = false;
var dudeImgUp = false;
var evilDudeAlive = false;
var evilDude02Alive = false;

function oppstart() {
	

	
	var Canvas = document.getElementById("canvas"); // hent canvas
	var ctx = Canvas.getContext("2d"); // hent canvas sinn context
	Canvas.width = 1280; // canvas størrelse
	Canvas.height = 600;
	Canvas.style.border = "solid"; // gjør canvas grensen synlig.
	
	//alert(bullet["counter"]);
	
	document.body.onkeydown = keyDown; // når en knapp trykke kjør keyDown.
	document.body.onkeyup = keyUp; // når en knapp slippes kjør keyUp.
	Canvas.onmousedown = mouseDown;		//onmousedown = mouseDown;
	document.body.onmouseup = mouseUp;
	
	//Variabler
	var dudeX = 0,
		dudeY = 0,
		dudeVelX = 0,
		dudeVelY = 0,
		dudeSpeed = 0;
	
	var	dude = {
		x: 0,
		y: 0,
		xVel: 0,
		yVel: 0,								
		speed: 0,
		friction: 0.95,
		gravity: 0.5,
		ammo: 0,
	}; 
	var evilDude = {
		x: 0,
		y: 0,
		xVel: 0,
		yVel: 0,								
		speed: 0,
		friction: 0.95,
		gravity: 0.5,
		ammo: 0,
	};
	var evilDude02 = {
		x: 0,
		y: 0,
		xVel: 0,
		yVel: 0,								
		speed: 0,
		friction: 0.95,
		gravity: 0.5,
		ammo: 0,
	};
	
	var bullet = {
		x: 0,
		y: 0,
		xVel: 0,
		yVel: 0,
		width: 2,
		speed: 5,
		counter: 0,
		extraCounter: 0,
		delay: 0,
		gravity: 0.8, // this should be interesting.
	};
	var bullet02 = {
		x: 0,
		y: 0,
		xVel: 0,
		yVel: 0,
		width: 2,
		speed: 5,
		counter: 0,
		delay: 0,
		gravity: 0.8,
	}
	var bullet03 = {
		x: 0,
		y: 0,
		xVel: 0,
		yVel: 0,
		width: 2,
		speed: 5,
		counter: 0,
		delay: 0,
	}
	
	var line = {
		x: 400,
		y: 400,
		xEnd: 550,
		yEnd: 410,
		width: 10,
	};
	var line02 = {x: 600, y: 400};

	var bullet05 = {
		x: 0,
		y: 0,
		xVel: 0,
		yVel: 0,
		width: 2,
		speed: 5,
		counter: 0,
	}; 
	var mouseClick = false;
	//setTimeout(bulletCheck, 15, mouseClick);
	
	img = new Image(); // lager et bilde element.
	img.src = "dudeFixed.png"; // henter bilde source.
	
	imgReversed = new Image();
	imgReversed.src = "dudeFixedReversed.png";
	
	imgUp = new Image();
	imgUp.src = "dudeLookUp.png";
	
	evilDudeImg = new Image();
	evilDudeImg.src = "evilDude.png";
	
	//level(ctx, ground); // siden canvas blir clear hver runde så må banen også det.
	
	setTimeout(evilDudeSpawn, 5000);
	setTimeout(evilDude02Spawn, 7000);
	setTimeout(game, 15, Canvas, ctx, img, dude, evilDude, evilDude02, line, bullet, bullet02, bullet03); // setter 0.02 sekund delay slik at bilde får tid til å loade.
} //				  /		   /    `-, 	,--'  ,--'
//					 /	       7	 /	   /	 (
function game(Canvas, ctx, img, dude, evilDude, evilDude02, line, bullet, bullet02, bullet03) { // kjører på delay.
	
	dude.xVel *= dude.friction; // friction gjør at velx/y går mot null slik at dude stopper når du slipper en tast.
	dude.yVel *= dude.friction;

	dude.yVel += dude.gravity;
	
	// legger til vel til bilde posisjonen.
	dude.x += dude.xVel;  // betyr: 'dudeX = dudeX + dudeVelX;'
	dude.y += dude.yVel;
	
	ctx.clearRect(0, 0, 1280, 600); // slett gamle bilde så lagg nytt under.
	if (evilDudeAlive === true) {
		evilDudeFunc(ctx, dude, bullet, evilDude);
	}
	if (evilDude02Alive === true) {
		evilDudeFunc(ctx, dude, bullet, evilDude02);
	}
	if(dudeImg === true) {
		ctx.drawImage(img, dude.x, dude.y, 70, 95); // bildet er orginalt (110, 151).
	} else if (dudeImgRev === true) {
		dudeImg = false;
		dudeImgUp = false;
		ctx.drawImage(imgReversed, dude.x, dude.y, 70, 95);
	} else if (dudeImgUp === true) {
		dudeImg = false;
		dudeImgRev = false;
		ctx.drawImage(imgUp, dude.x, dude.y, 70, 95);
	}
	controls(ctx, dude, bullet, bullet02, bullet03); // kaller kontroller funksjonen.
	
	bulletFunc(ctx, dude, bullet);
	barrier(dude);
	level(ctx, line, dude);
	
	document.getElementById("print").innerHTML =
		" x: " + Math.floor(dude.x) + " " + " , " + " y: " + Math.floor(dude.y);
	
	setTimeout(game, 15, Canvas, ctx, img, dude, evilDude, evilDude02, line, bullet, bullet02, bullet03); // !!!!!!!!!!!!Remeber to update the variables you send though!!!!!!!!
}

function controls(ctx, dude, bullet, bullet02, bullet03) {
	if (keys[87] === true) { // w = 87 // s = 83 // a = 65 // d = 68 // up
		//dude.yVel -= 3;
		dudeImg = false;
		dudeImgRev = false;
		dudeImgUp = true;
	}
	if (keys[83] === true) { // hvis keys på plass 83 er true så øke dude sinn yvelocity.
		dude.yVel++;
	}
	if (keys[65] === true) {
		dude.xVel--;
		dudeImg = false;
		dudeImgUp = false;
		dudeImgRev = true;
	}
	if (keys[68] === true) {
		dude.xVel++;
		dudeImgUp = false;
		dudeImgRev = false;
		dudeImg = true;
	}
	//if (keys[32] === true) {
	//	jumpFunc(dude);
	//}
	if (jumpVar == true){
		jumpFunc(dude);
	}
	//if (keys[32] === true) {
	//	bulletSpace(ctx, dude, bullet);
	
	if (eKey === true) {
		if (bullet.extraCounter === 0) {
			bestBullet(ctx, dude, bullet);
			bullet.extraCounter++;
		}
		if (bullet.extraCounter <= 60) {
			bestBullet(ctx, dude, bullet02);
			bullet.extraCounter++;
		}
		if (bullet.extraCounter <= 120) {
			bestBullet(ctx, dude, bullet03);
			bullet.extraCounter = 0;
		}
	} 
	
	return keys, dude, bullet;
}
function jumpFunc(dude) {
	var jumpCounter = 0;
	dude.yVel -= 3;
	
	if (jumpCounter === 120) {
		jumpVar = false;
	}
}
function barrier(dude) {
	if (dude.x > 1200) {
		dude.x = 1200;
	} else if (dude.x <= 0) {
		dude.x = 0;
	}
	if (dude.y > 500) {
		dude.y = 500;
	} else if (dude.y <= 0) {
		dude.y = 0;
	}
	return dude;
}

function level(ctx, line, dude) {
	groundLine(ctx, line);
	groundLineHitbox(ctx, line, dude);
	//line(ctx, line02);
	//lineBarrier(ctx, line, dude);
}


function groundLine(ctx, line) {
	ctx.beginPath();
	ctx.moveTo(line.x, line.y);
	ctx.lineTo((line.x + 300), (line.y))
	ctx.lineWidth = line.width;
	ctx.stroke();
	
	return ctx, line;
}
function groundLineHitbox(ctx, dude, line) {
	
}

function bulletFunc(ctx, dude, bullet) {			
	if (mouseClick === true) {
		bulletLine(ctx, dude, bullet)
		return ctx, mouseClick, bullet;
	}
}

function bestBullet(ctx, dude, bullet) {
		
	if(bullet.active === true) {
		keys[32] = true;
	}	
	
	if (bullet.counter === 0) {
		console.log("First shot");
		bullet.active = true;
		bullet.x = dude.x + 80;
		bullet.y = dude.y + 25;
	} else {
		bullet.x += 10;
		//console.log(bullet);
	}
	if(dudeImgUp === true) {
		bullet.x -= 10;
		bullet.y -= 10;
	}
	if (dudeImgRev === true) {
		bullet.x -= 20;
	}
	
	ctx.beginPath();
	ctx.moveTo(bullet.x - 20, bullet.y);
	ctx.lineTo(bullet.x, bullet.y)
	ctx.lineWidth = bullet.width;
	ctx.stroke();
	
	bullet.counter++;
	if (bullet.counter === 60) {
		bullet.counter = 0;
		eKey = false;
	}
	
	return ctx, dude, bullet;
}
function evilDudeSpawn() {
	evilDudeAlive = true;
}
function evilDude02Spawn() {
	evilDude02Alive = true;
}
function evilDudeFunc (ctx, dude, bullet, evilDude) {
	
	if(dude.x + 50 >= evilDude.x) {
		evilDude.x++;
	} else if (dude.x < evilDude.x) {
		evilDude.x--;
	}
	if(dude.y + 50 >= evilDude.y) {
		evilDude.y++;
	} else if (dude.y < evilDude.y) {
		evilDude.y -= 2;
	}
	//	evilDude.x += 0;
		//evilDude.y = 100;
	
	if (bullet.x > evilDude.x && bullet.x < (evilDude.x + 50) && bullet.y > evilDude.y && bullet.y < (evilDude.y + 50)) {
		evilDudeAlive = false;
		evilDude.x = 0;
		evilDude.y = 0;
		setTimeout(evilDudeSpawn, 5000);
	}
		
	evilDude.y += evilDude.friction ;

	evilDudeBarrier(ctx, dude, bullet, evilDude);
	ctx.drawImage(evilDudeImg, evilDude.x, evilDude.y, 70, 95);
}
function evilDudeBarrier(ctx, dude, bullet, evilDude) {
	if (evilDude.x >= 1200) {
		evilDude.x = 1200;
	} else if (evilDude.x < 0) {
		evilDude.x = 0;
	}
	if (evilDude.y >= 500) {
		evilDude.y = 500;
	} else if (evilDude.y < 0) {
		evilDude.y = 0;
	}
}


function keyDown(e) { // e for event.
	keys[e.keyCode] = true; // setter arrayen keys[posisjon key code] til true
	if (e.keyCode === 69) {
		eKey = true;
	}
	if (e.keyCode === 32) {
		if(jumpingVar === true){
			return;
		}
		jumpVar = true;
		jumpingVar = true;
		setTimeout(function(){ jumpVar = false;}, 200);
		setTimeout(function(){ jumpingVar = false;}, 1300);
	}
	//alert(e.keyCode);					// og returner via e. 
}  
function keyUp(e) { 
	keys[e.keyCode] = false; // når knappen slippes så blir keys[e.keyCode] false som stopper bevegelsen til figuren.
}
function mouseDown(e) {
	if (e.keyCode === 0) {
		mouseClick = true;
		mousePos.x = e.clientX;
		mousePos.y = e.clientY;
		
	}
	//if (e.keyCode === 32)
}
function mouseUp(e) {
	if(e.keyCode === 0) {
		mouseClick = false;
	}
} 
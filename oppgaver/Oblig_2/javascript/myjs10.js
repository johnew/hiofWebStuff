window.onload = oppstart;

function oppstart() {
	document.getElementById("btnoppg10").onclick = oppg10;
}

function oppg10() {           

	// alert("does dis work");
	
	var text = document.getElementById("intxt").value;
	var textArr = text.split("");
	
	
	
	console.log(textArr);
	//var img;
	
	for(i = 0; i < textArr.length; i++) {
		if(textArr[i] === "A" || textArr[i] === "a") {
			var imga = document.createElement("img");
			imga.src = "../img/A.jpg";
			imga.style.height = "100px";
			imga.style.width = "100px";
			var src = document.getElementById("print");
			src.appendChild(imga);
			
		}
		if(textArr[i] === "B" || textArr[i] === "b") {
			var imgb = document.createElement("img");
			imgb.src = "../img/b.png";
			imgb.style.height = "100px";
			imgb.style.width = "100px";
			var src = document.getElementById("print");
			src.appendChild(imgb);
		}
		if(textArr[i] === "R" || textArr[i] === "r") {
			var imgr = document.createElement("img");
			imgr.src = "../img/r.jpg";
			imgr.style.height = "100px";
			imgr.style.width = "100px";
			var src = document.getElementById("print");
			src.appendChild(imgr);
		}
		if(textArr[i] === "H" || textArr[i] === "h") {
			var imgh = document.createElement("img");
			imgh.src = "../img/h.jpg";
			imgh.style.height = "100px";
			imgh.style.width = "100px";
			var src = document.getElementById("print");
			src.appendChild(imgh);
		}
		if(textArr[i] === "K" || textArr[i] === "k") {
			var imgk = document.createElement("img");
			imgk.src = "../img/k.jpg";
			imgk.style.height = "100px";
			imgk.style.width = "100px";
			var src = document.getElementById("print");
			src.appendChild(imgk);
		}
		if(textArr[i] === "L" || textArr[i] === "l") {
			var imgl = document.createElement("img");
			imgl.src = "../img/l.png";
			imgl.style.height = "100px";
			imgl.style.width = "100px";
			var src = document.getElementById("print");
			src.appendChild(imgl);
		}
		if(textArr[i] === "U" || textArr[i] === "u") {
			var imgu = document.createElement("img");
			imgu.src = "../img/u.png";
			imgu.style.height = "100px";
			imgu.style.width = "100px";
			var src = document.getElementById("print");
			src.appendChild(imgu);
		}
		if(textArr[i] === " ") {
			var imgspace = document.createElement("img");
			imgspace.src = "../img/space.jpg";
			imgspace.style.height = "100px";
			imgspace.style.width = "100px";
			var src = document.getElementById("print");
			src.appendChild(imgspace);
		}
	}
}








window.onload = oppstart;

function oppstart() {
	document.getElementById("btnoppg4").onclick = oppg4;
}

function oppg4() {            // i er 1000 verdi, y er 100 verdi osv..
	for(var i = 1;  i <= 5; i++) {
		for(var y = 1; y <= 5; y++) {
			for(var x = 1; x <= 5; x++) {    // for hver x så kjører z 5 ganger så når x har kjørt 5 ganger så blir det all tall mellom 1 og 5 med to siffer.
				for(var z = 1; z <= 5; z++) {
					document.getElementById("print").innerHTML += " " + i + y + x + z;
				}
			}
		}
	}
	
}
<?php
	$forNavn = $_GET["fornavn"];
	$etterNavn = $_GET["etternavn"];
	$epost = $_GET["epost"];
	$valgt = $_GET["valgt"];
	// definerer variablene som er hentet fra urlèn.
	
	$fil = fopen("paameldinger.dat","a"); //åpner fila// hvor "a" er "moden" filen skal kun bli skrevet til.
	
	$lagretForm = $valgt . ":" . $forNavn . "¤" . $etterNavn . "¤" . $epost . "\n"; // legger dataen slik jeg vil ha den
	
	fwrite($fil,$lagretForm); // skriver til filen
	fclose($fil); // lukker fila.
	echo "hei!";
?>
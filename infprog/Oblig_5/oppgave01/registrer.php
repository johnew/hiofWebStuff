<?php

	$forNavn = $_GET["fornavn"];
	$etterNavn = $_GET["etternavn"];
	$epost = $_GET["epost"];
	// definerer variablene som er hentet fra urlèn.
	
	$resfil = fopen("lagret.dat","a") //åpner fila// hvor "a" er "moden" filen skal kun bli skrevet til.
	
	//$lagretForm = $forNavn . "¤" . $etterNavn . "¤" . $epost . "\n"; // legger dataen slik jeg vil ha den
	
	fwrite($resfil,"hei!"); // skriver til filen
	fclose($resfil); // lukker fila.
?>
<?php

header("Content-type: text/xml");
$plass = $_GET["plass"];

if($plass === "kristiansand") {
	$url = "http://www.yr.no/sted/Norge/Vest-Agder/Kristiansand/Kristiansand/varsel.xml";
}
if($plass === "bergen") {
	$url = "http://www.yr.no/sted/Norge/Hordaland/Bergen/Bergen/varsel.xml";
}
if ($plass === "stavanger") {
	$url = "http://www.yr.no/sted/Norge/Rogaland/Stavanger/Stavanger/varsel.xml";
}

$fil = fopen($url, "r");
while ($linje = fgets($fil)) {
	echo $linje;
}
fclose($fil);

?>
<?php
	$txt_file = fopen('index.php','r');
	
	$a = 1;
	while ($line = fgets($txt_file)) {
		echo($a." ".$line)."<br>";
		$a++;
	}
	
	fclose($txt_file);
?>

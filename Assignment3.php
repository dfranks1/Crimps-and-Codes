<html>
	<head>
	<title>Assignment 3</title>
	</head>
	<body>
		<h1>Dale Franks Assignment 3</h1>
		<?php
		//Assignment 3 Part 1
			function isBitten(){
				echo "<h2>Assignment 3 Part 1</h2>";
				$r = rand(0,1);
				if ($r == 1){
					return true;
				}
				else{
					return false;
				}
			}
			$result = isBitten();
			if ($result == true){
				echo "Charlie ate my lunch!";
			}
			else{
				echo "Charlie did not eat my lunch!";
			}
			echo "<br>";
			echo "<font color='green' size='2px'>Refresh the page to see the random 50% chance at work!</font>";
		?>
		<p></p>
		<?php
		//Assignment 3 Part 2
			$count = 0;
			echo "<h2>Assignment 3 Part 2</h2>";
			echo "<table style = 'width:300px' border='1' cellspacing='1' cellpadding='1'>";
			for($x = 0; $x < 9; $x++){
				echo "<tr>";
				for($y = 0; $y < 9; $y++){
					$count = $count + 1;
					if($count % 2 == 0){
						echo "<td height='35' width='35' style='background-color:red;'></td>";
					}
					else{
						echo "<td height='35' width='35' style='background-color:black;>'</td>";
					}
				}
				echo "</tr>";
			}
			echo "</table>";
		?>
		<p></p>
		<?php
		//Assignment 3 Part 3 Number 1
			echo "<h2>Assignment 3 Part 3</h2>";
			echo "<h3>Number 1</h3>";
			$month = array ('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
			for ($x = 0; $x <= 11; $x++){
				echo "$month[$x]";
				if (next($month)) {
					echo ', ';
				}
			}
		?>
		<p></p>
		<?php
		//Assignment 3 Part 3 Number 2
			echo "<h3>Number 2</h3>";
			$month = array ('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
			sort($month);
			for ($x = 0; $x <= 11; $x++) {
				echo "$month[$x]";
				if (next($month)) {
					echo ', ';
				}
			}
		?>
		<p></p>
		<?php
		//Assignment 3 Part 3 Number 3
			echo "<h3>Number 3</h3>";
			$month = array ('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September', 'October', 'November', 'December');
			foreach ($month as &$val) {
				echo "$val";
				if (next($month)) {
					echo ', ';
				}
			}
			echo "<p></p>";
			$month = array ('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September', 'October', 'November', 'December');
			sort($month);
			foreach ($month as &$val) {
				echo "$val";
				if (next($month)) {
					echo ', ';
				}
			}
		?>
		<p></p>
		<?php
		//Assignment 3 Part 4
			echo "<h2>Assignment 3 Part 4</h2>";
			//define array of restaurants
			$Restaurants = array(
				"Chama Gaucha" => 40.50,
                "Aviva by Kameel" => 15.00,
                "Bone’s Restaurant" => 65.00,
                "Umi Sushi Buckhead" => 40.50,
                "Fandangles" => 30.00,
                "Capital Grille" => 60.50,
                "Canoe" => 35.50,
                "One Flew South" => 21.00,
                "Fox Bros. BBQ" => 15.00,
                "South City Kitchen Midtown" => 29.00);

				//print table of restaurants
				echo "10 Best Restaurants in Atlanta";
				echo "<br>";
				printTable($Restaurants);
				echo "<br>";
				
				//print table of restaurants sorted by price
				echo "10 Best Restaurants in Atlanta Sorted by Price";
				echo "<br>";
				sortByPrice($Restaurants);
				echo "<br>";

				//print table of restaurants sorted by name
				echo "10 Best Restaurants in Atlanta Sorted by Name:";
				echo "<br>";
				sortByName($Restaurants);
				echo "<br>";

				//sort by price
				function sortByPrice($Restaurants){
					asort($Restaurants);
					printTable($Restaurants);
				}

				//sort by name
				function sortByName($Restaurants){
					ksort($Restaurants);
					printTable($Restaurants);
				}

				//print array as table
				function printTable($Restaurants){
					$html = "<table border='1'>";
					$html .= "<tr>";
					$html .= "<th>" . "Restaurant Name". "</th>";
					$html .= "<th>" ."Average Cost". "</th>";
					$html .= "</tr>";

					foreach($Restaurants as $key => $value){
						$html .= "<tr>";
						$html .= "<td>" . $key." " . "</td>";
						$html .= "<td>" . $value . "</td>";
						$html .= "</tr>";
					}
					$html .= '</table>';
    
					echo $html;
				}
			?>
	</body>
</html>
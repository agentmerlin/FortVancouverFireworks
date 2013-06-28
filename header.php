<?php 

include 'properties.php';

$con = mysqli_connect($db_host, $db_user, $db_pw, $db_name);

if (mysqli_connect_errno())
{
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
else {
?>

<html>
  
  <head>
    <link rel="stylesheet" type="text/css" href="style.css">
	<script type="text/javascript" src="scripts.js"></script>
  </head>
    
  <body onLoad="setFocus(); ticket_status_display()">
    <h3> Fort Vancouver Fireworks </h3>
	<h1> Ticket Taker Express </h1>

<?php } ?>
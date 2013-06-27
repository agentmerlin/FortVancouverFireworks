<?php

include 'header.php';

$id="";
$name="";
$status="";

if( !isset($_POST['login']) ) {

?>
    <div id="main_form">
      <form id="scan_form" method="post" action="index.php">
	    <table><tr>
	    <td><div id="input_title">Login:</div></td>
		<td><input type="text" name="login"></td></tr>
		<tr><td><input type="submit" value="Enter"></td>
		</tr></table>
      </form>
	</div>
<?php

}
else {

	$login = $_POST['login'];

	if( isset($_POST['ticket_id']) )
	{
		$id=urlencode($_POST['ticket_id']);
		
		$result = mysqli_query($con,
			"SELECT *
			FROM ticket
			WHERE ticket_id='".$id."'");

		if( in_array($id, $youth_tickets) ) {
			$status='VALID-YOUTH TICKET';
				
			mysqli_query($con,
				"INSERT INTO errors (ticket_id, status, scan_time, gate_id)
				VALUES ('".$id."', '".$status."', NOW(), '".$login."') ");
			
		}
		else if( $row = mysqli_fetch_array($result) )
		{
		
			//Has the ticket already been scanned?
			
			if( isset($row['scan_time']) ) {
			
				$name=$row['scan_time']." / ".$row['gate_id']; // give the name on the ticket
				$status='DUPLICATE TICKET ID';
				
				mysqli_query($con,
					"INSERT INTO errors (ticket_id, status, scan_time, gate_id)
					VALUES ('".$id."', '".$status."', NOW(), '".$login."') ");
			}
			else {
			
				$name=$row['full_name'];
				$status='VALID';
			
				mysqli_query($con,
					"UPDATE ticket
					SET scan_time=NOW(), gate_id='".$login."'
					WHERE ticket_id='".$id."'");
			}
		}
		else {
		
			$name=$id;
			$status='INVALID TICKET ID';
			
			mysqli_query($con,
				"INSERT INTO errors (ticket_id, status, scan_time, gate_id)
				VALUES ('".$id."', '".$status."', NOW(), '".$login."') ");
		}	
	}
	
?>
    <div id="main_form">
	  <form id="scan_form" method="post" action="index.php">
	    <table><tr>
	    
	    <td><div id="input_title">Scan Ticket:</div></td>
		<td><input id="input_box" type="text" name="ticket_id"></td></tr>
		
		<tr><td><input type="submit" value="Enter"></td></tr>
		
		<td><div id="input_title">Ticket Number:</div></td>
		<td><input id="input_box" type="text" name="ticket_number" value="<?php echo $id; ?>" disabled="disabled"></td></tr>
		
		<td><div id="input_title">Name:</div></td>
		<td><input id="input_box" type="text" name="name" value="<?php echo $name; ?>" disabled="disabled"></td></tr>
		
		<td><div id="input_title">Status:</div></td>
		<td><input id="input_box" type="text" name="status" value="<?php echo $status; ?>" disabled="disabled"></td></tr>
		
		</tr></table>
		<input type="hidden" name="login" value="<?php echo $login; ?>">
		
      </form>
	</div>
	
	<div id="footer">Logged in as: <b><?php echo $login; ?></b></div>
	
<?php
}

include 'footer.php';
?>
function setFocus() {

	var ticket_input = document.getElementsByName('ticket_id');
	
	if(ticket_input.length > 0) {
	
		ticket_input[0].focus();
	}
}

function ticket_status_display() {
	
	var status = document.getElementsByName('status');
	
	if(status.length > 0 && status[0].value !== '') {
	
		if(status[0].value.indexOf('PRIME') === 0) {
		
			status[0].style.color='blue';
			status[0].style.borderColor='blue';
			document.getElementById('prime-sound').play();
		}
		else if(status[0].value.indexOf('VALID') === 0) {
		
			status[0].style.color='green';
			status[0].style.borderColor='green';
		}
		else {
		
			status[0].style.color='red';
			status[0].style.borderColor='red';
			
			if(status[0].value.indexOf('DUPLICATE') === 0) {
				document.getElementById('duplicate-sound').play();
			}
			
			if(status[0].value.indexOf('INVALID') === 0) {
				document.getElementById('invalid-sound').play();
			}
		}
		
		status[0].style.fontWeight='bold';
	}
}
function setFocus() {

	var ticket_input = document.getElementsByName('ticket_id');
	
	if(ticket_input.length > 0) {
	
		ticket_input[0].focus();
	}
}

function ticket_status() {
	
	var status_input = document.getElementsByName('status');
	
	if(status_input.length > 0 && status_input[0].value !== '') {
	
		if(status_input[0].value.indexOf('VALID') === 0) {
		
			status_input[0].style.color='green';
			status_input[0].style.borderColor='green';
			status_input[0].style.fontWeight='bold';
		}
		else {
		
			status_input[0].style.color='red';
			status_input[0].style.borderColor='red';
			status_input[0].style.fontWeight='bold';
		}
	}
}
function registerHandler(){
	var newPassword = document.getElementById("newPassword");
	var confPassword = document.getElementById("confirmPassword");
	if(newPassword.value != confPassword.value){
		document.getElementById("checkPassword").innerHTML = "Passwords don't match!";
		newPassword.value = '';
		confPassword.value = '';
	}
	else
		window.location.href = 'today.html';
}


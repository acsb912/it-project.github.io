if(localStorage.getItem("userEmail")){
		 document.getElementById("user-email").value = localStorage.getItem("userEmail");
	}
document.getElementById("log-inB").onclick = function(){
	let val = true;
	const user_email = document.getElementById("user-email").value;
	const user_password = document.getElementById("user-password").value;
	document.getElementById("email-emp").style.display="none";
	document.getElementById("pass-emp").style.display="none";
	document.getElementById("notfound").style.display="none";
	document.getElementById("gotohome").style.display="none";
	if(user_email == ""){
		document.getElementById("email-emp").style.display="block";
		val = false;
	}
	if(user_password ==""){
		document.getElementById("pass-emp").style.display="block";
		val = false;
	}
	if(val){
		savedE = localStorage.getItem("userEmail");
		savedP = localStorage.getItem("userPassword");
		if(user_email!=savedE || user_password!=savedP){
			val = false;
			document.getElementById("notfound").style.display ="block";
		}
	}
	if(val){
		document.getElementById("gotohome").style.display="block";
	}
}

document.getElementById("sign_up").onclick = function(){
	
	const user_name = document.getElementById("user-name").value;
	const user_email = document.getElementById("user-email").value;
	const user_password = document.getElementById("user-password").value;
	const user_c_password = document.getElementById("user-c-password").value;
	const user_number = document.getElementById("user-number").value;
	
	document.getElementById("nameempError").style.display="none";
	document.getElementById("passempError").style.display="none";
	document.getElementById("numberempError").style.display="none";
	document.getElementById("emailempError").style.display="none";
	document.getElementById("cpassError").style.display="none";
	document.getElementById("nameError").style.display="none";
	document.getElementById("passError").style.display="none";
	document.getElementById("numberError").style.display="none";
	document.getElementById("emailError").style.display="none";
	document.getElementById("success").style.display ="none";
	
	let val = true;
	if(user_name==""){
	document.getElementById("nameempError").style.display="block";
	val = false;
	}else{
		let nameval = true;
	for(let i=0;i<user_name.length;i++){
	let char = user_name[i];
	if(!(char>='a'&& char<='z')&&!(char>='A'&& char<='Z')&&(char!=' ')){
		nameval = false;
		break;
	}
}	
	if(nameval == false){
	document.getElementById("nameError").style.display="block";
	val = false;
}
	}
		if(user_password==""){
	document.getElementById("passempError").style.display="block";
	val = false;
	}else if(user_password.length<8){
	document.getElementById("passError").style.display="block";
	val = false;
}  
		if(user_number==""){
	document.getElementById("numberempError").style.display="block";
	val = false;
	}else if(user_number.length != 11 || !(user_number.startsWith("01"))){
	document.getElementById("numberError").style.display="block";
	val = false;
}
	
		if(user_email==""){
	document.getElementById("emailempError").style.display="block";
	val = false;
	}else if(!user_email.includes("@")||!user_email.includes(".")){
		document.getElementById("emailError").style.display="block";
		val = false;
	}
	
	if(user_password != user_c_password){
	document.getElementById("cpassError").style.display="block";
	val = false;
}	
	if(val){
		localStorage.setItem("userName",user_name);
		localStorage.setItem("userEmail",user_email);
		localStorage.setItem("userPassword",user_password);
		localStorage.setItem("userNumber",user_number);
		document.getElementById("success").style.display ="block";
	}
	   
	
}


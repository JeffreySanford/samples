<<<<<<< HEAD
function hscroll (text, speed, delay) {
	if (speed==undefined|delay==undefined|text==undefined){
		speed=500;
		delay=2500;	
		text="Welcome to the page!";
	}
	$('#header').html('<div id="text">'+text+"</div>");
	$('#header').slideToggle(speed).delay(delay).slideToggle(speed);

}
function changeImage() {
	document.getElementById("image".style.height="35%")
	document.getElementById("image".style.height="35%")
	return true;
}

function alertMe(){
	alertmsg = document.image.src + "\nHeight: " + document.image.height + "\nWidth: " + document.image.width; 
	alvert(alertmsg);
	return true;
}

=======
function hscroll (text, speed, delay) {
	if (speed==undefined|delay==undefined|text==undefined){
		speed=500;
		delay=2500;	
		text="Welcome to the page!";
	}
	$('#header').html('<div id="text">'+text+"</div>");
	$('#header').slideToggle(speed).delay(delay).slideToggle(speed);

}
function changeImage() {
	document.getElementById("image".style.height="35%")
	document.getElementById("image".style.height="35%")
	return true;
}

function alertMe(){
	alertmsg = document.image.src + "\nHeight: " + document.image.height + "\nWidth: " + document.image.width; 
	alvert(alertmsg);
	return true;
}

>>>>>>> cec3953ac0874beed02ca76b8c082f3d543ae145

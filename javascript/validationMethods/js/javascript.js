console.info('form loaded');

document.theForm.realName.onfocus=function(){
	document.getElementByID('realNameHint').innerHTML = "Enter lastname then first";
}
document.theForm.realName.onblur=function(){
	document.getElementByID('realNameHint').innerHTML = "";
}
var userEmail = document.theForm.emailAddress.value;

if (userEmail.indexOf("@")) {
	document.theForm.getElementByID('emailHint') = innerHTML('Must be a proper email address');
}
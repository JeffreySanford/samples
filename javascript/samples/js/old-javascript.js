console.info('Document Loaded Correctly');
var n = 0;

function counter() {
	var e = document.getElementById("pageSeconds");
	e.innerHTML = ++n; 
	} 

	/* Hints */
window.onload = function(){
	setInterval(counter, 1000);

	/* Check inputs for patterns */
	var inputFields = document.theForm.getElementsByTagName("input");

	for (key in inputFields) {
		var myField = inputFields[key];
		var myError = document.getElementById('patternError');

		myField.onchange = function() {
			var myPattern = this.pattern;
			var myPlaceholder = this.placeholder;
			var isValid = this.value.search(myPattern) >= 0;

			if (!isValid && this.value != "") {
				myError.innerHTML = "Input does not match expected pattern. " + myPlaceholder;
			} else {
				myError.innerHTML = "";
			}
		}
	}

	document.theForm.userUrl.onchange = function() {
		var tmpUrl = document.theForm.userUrl.value;
		if (tmpUrl.indexOf("")){
			document.getElementById('middleasideHint').innerHTML = "The website link is required."	
	}

	document.theForm.userUrl.onchange = function() {
		var tmpUrl = document.theForm.userUrl.value;

		if (tmpUrl.indexOf("http://")){
			document.getElementById('middleAsideHint').innerHTML = "The website link must be a fully qualifed URL (e.g. http://yourdomain.com).  Adding for your convience."
		}		
	}

	document.theForm.realName.onfocus = function() {	
		console.info(document.getElementById('realName'));
		document.getElementById('realNameHint').innerHTML = "(Enter Last Name, then First Name)";
	}

	document.theForm.realName.onblur = function() {
		document.getElementById('realNameHint').innerHTML = "";
	}
}

};



/*  Functions Descriptions

counter() is  justused to show that javascript is actually 
running.  Using the set Interval, it updates every 1000ms.



Functions to write:
ONBLUE


ONCHANGE
ONFOCUS

*/
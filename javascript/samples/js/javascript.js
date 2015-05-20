/*Validating and processing forms with JavaScript an PHP*/
/ * Understanding forms:
//Input:

//Form:
- parameters:
	- action - where to send the data to
	- enctype - how to encode the data
		- default - do not have to be included
				  - the brwser will convert the data into a series of key and value pairs and modify the data so special characters like spaces and non- alpha-numeric will be converted.
		- "multipart/form-data" - is used when the user uploads data.
								it' s done in a series of steps. Must be send with POST.
		- "text/plain" - sends the fields inside an email message. 				   Not a good way to process the form.
	- method - POST - sends data in the background.
			 - GET - will send the data through a url

/ * Validating with HTML5:
//HTML validation:
- the new HTML5 attributes are the easiest way. The browser will do the work. Also will take advantage from your phone capabilities. But it is not accessible in the older browsers.

- required -
- placeholder -
- maxlength - works with text, email, search, password, tel or url
- min and max - numeric constraints, works with date and time
					- min="2014-03-04" max="2014-03-08"
- multiple - added to select allows you t select multiple options
		   - works with email and files -
- MIME type - multipurpose Internet Mail Extentions. Originaly for
			email attachments.
			- use the accept attribute main type(audio, video) +
			subtype(mp3, ogg, jpg,jpeg) or all with '*''

<input type="file" name="upload" accept="image/png">
<input type="file" name="upload" accept="audio/mp3, video/*">

- datalist - assist with some predetermined choices
		   - list="counties" links it with the datalist with id="counties"

<form action="#">
	<ol>
		<li>
			<label for="countyfield">County</label>
			<input name="county" id="countyfield" list="counties">

			<datalist id="counties">
				<option value="Orange"></option>
				<option value="Semicole"></option>
				<option value="Volusia"></option>
				<option value="Brevard"></option>
			</datalist>
		</li>
	</ol>
	<button type="submit">send</button>
</form>

- pattern - for inserting reg ex in the input tag
	- html5 pattern - ready reg ex for commontasks

<input type="text" name="username" pattern="[A-Za-z0-9]+">

/ * Validating with JavaScript:
//Accessing forms:
- accessing by id - getElementById("username")
- accessing by name - document.forms.username
					- document.forms is an array of the names of all forms
- radio buttons will return an array

//Looking up form elements:
- access through dot notation -

document.theform.username.type="radio"	- will make the field username of type radio
document.thefirm.username.value="kevin"

document.theform.reference[2].selected 	- will select the [2] element from the
										<select name="reference" id="reference">

//Handling focus changes:
- events are triggered whenthings happen
- forms have special events -
	- field selection events -
		- onfocus - when selected
		- onblur - when diselected

document.theform.username.onfocus=function() {
	document.getElementById('mynamehint').innerHTML = "(Enter last name, then first)";
}

document.theform.username.onblur=function() {
	document.getElementById('mynamehint').innerHTML = "";
}

//Validating change:
- onchange - triggers when content of a form field changes

document.theform.userurl.onchange=function() {
	var userURL = document.theform.userurl.value;

	// indexOf() look for the content and returns error if not found
	if(userURL.indexOf("http://")) {
			document.getElementById('formerror').innerHTML = "URLs must begin with http://";
	}
}	//on change


//Working with select:
- select fields are a little different.

<script>
	// from <select> of url <option> this will set the variable url to the choice, t
	// hrough selectedIndex, and change location to there
	document.theform.reference.onchange = function() {
		var id =document.theform.reference.selectedIndex;
		var url = document.theform.reference[id].value;
		window.location.href = url;
	}
</script>


//Dynamic validation:
- validation with JavaScript will work even in older browsers

<script>
// add slashes to all that already has in the reg ex
//
var myField = document.theform.mytelephone;
var myError = document.getElementById('formerror');
myField.onchange = function() {
	var myPattern = new RegEx("\\d{3}[\\-]\\d{3}[\\-]\\d{4}", "i");
	var isValid = this.value.search(myPattern) >= 0;
	if (!(isValid)){
		myError.innerHTML = "Input does not match expected pattern. xxx-xxx-xxxx";
	}else{
		myError.innerHTML = "";
	}
}
</script>

//Generic validation:


<script>
// will get all form input tags loop over them and check
// against a coresponding reg ex kept in the pattern attribute
var inputFields = document.theform.getElementByTagName("input");
	foreach(key in myField) {
		myField.onchange = function() {
			var myPattern = this.pattern;
			var myPlaceholder = this.placeholder;
			var isValid = this.value.search(myPattern) >= 0;
			if (!(isValid)){
				myError.innerHTML = "Input does not match expected pattern. " + myPlaceholder;
			}else{
				myError.innerHTML = "";
			}
		}
	}
</script>

//Modernizer:



//Interupting form submission:


/ * jQuery form validation:
// Understanding jQuery:
- Selectors
- global variable the '$'

$("#myform :input")

- form pseugo selectors:
:button, :checkbox, :checked, :radio, :submit and :text
- same events as in JavaScript:
.blur(), .change(), .focus(), .submit() and .val()

- advantages:
	- works in older versions of IE without the need of modernizr
$("#myform :input")
$(":input[requiered]")	// all requiered input fields
$("#myform").attr(placeholder)

// Validating onsubmit:



// Interactive jQuery validation:



// Validation plugin:

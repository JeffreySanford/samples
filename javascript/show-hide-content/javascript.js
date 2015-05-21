(function () {
   /*
   This function will show information on the page if a
   checkbox is clicked.  If it is not clicked th, it will
   hide the informaion.
   */
   // listen for this event
  var chkShowContent = document.getElementById('chkShowContent');

  chkShowContent.addEventListener('click', function () {
    var content = document.getElementById('showBiography');

    if (chkShowContent.checked !== true) {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
  //  Example of a closure
  //  http://javascriptissexy.com/understand-javascript-closures-with-ease/

  function showName (firstName, lastName) {
    // this inner function has access to the outer
    // function's variables, including the parameter
    function makeFullName () {
      var wholeName = firstName + ' ' + lastName;
      console.log("Changing Full Name (#userProfileName) to: " + wholeName );
      return wholeName;
    }
  return makeFullName ();
  }

  var userProfileName = document.getElementById('userProfileName');

  // Insert Jim Thompson into the DOM user profile name
  userProfileName.innerHTML = showName ('Bob', 'Zindel');
}());


/* On hover, the icon element (A, B, C, D) will trigger an event*/

/*
    document.getElementsByClassName("display-this").addEventListener("hover", displayArticle);
    document.getElementsByClassName("display-this").addEventListener("blur", hidearticle);
    function displayArticle(icon) {
      var display = getElementById("displayContent");
      display.show()
    }
*/

/*
   These work but will be refactored into one single event
   using an object (this) to determine wich object was
   hovered over.
 */

var A = document.getElementById("selectionA");
var B = document.getElementById("selectionB");
var C = document.getElementById("selectionC");
var D = document.getElementById("selectionD");

var teaser = document.getElementById("teaser");
var paragraph = document.getElementById("paragraph");

A.addEventListener('mouseover', function() {
  console.log("icon A section hovered");
  teaser.innerHTML = "This is a teaser line for section A";
  paragraph.innerHTML = "";
});

A.addEventListener('mouseout', function() {
  console.log("icon A section mouse-out");
  teaser.innerHTML = "";
});

A.addEventListener('click', function() {
  console.log('icon A section clicked');
  teaser.innerHTML = "";
  paragraph.innerHTML = "paragraph A will show here";
});

B.addEventListener('mouseover', function() {
  teaser.innerHTML = "This is a teaser line for section B";
  paragraph.innerHTML = "";
});

B.addEventListener('mouseout', function() {
  console.log("icon B section mouse-out");
  teaser.innerHTML = "";
});

B.addEventListener('click', function() {
  console.log('icon B section clicked');
  teaser.innerHTML = "";
  paragraph.innerHTML = "paragraph B will show here";
});

C.addEventListener('mouseover', function() {
  teaser.innerHTML = "This is a teaser line for section C";
  paragraph.innerHTML = "";
});

C.addEventListener('mouseout', function() {
  console.log("icon C section mouse-out");
  teaser.innerHTML = "";
});

C.addEventListener('click', function() {
  console.log('icon C section clicked');
  teaser.innerHTML = "";
  paragraph.innerHTML = "paragraph C will show here";
});

D.addEventListener('mouseover', function() {
  teaser.innerHTML = "This is a teaser line for section D";
  paragraph.innerHTML = "";
});

D.addEventListener('mouseout', function() {
  console.log("icon D section mouse-out");
  teaser.innerHTML = "";
});

D.addEventListener('click', function() {
  console.log('icon D section clicked');
  teaser.innerHTML = "";
  paragraph.innerHTML = "paragraph D will show here";
});

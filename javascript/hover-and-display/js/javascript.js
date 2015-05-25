/* On hover, the icon element (A, B, C) will trigger an event*/

/*
    document.getElementsByClassName("display-this").addEventListener("hover", displayArticle);
    document.getElementsByClassName("display-this").addEventListener("blur", hidearticle);

    function displayArticle(icon) {

      var display = getElementById("displayContent");
      display.show()
    }
*/
var selectionA = document.getElementById("selectionA");

selectionA.addEventListener("hover", function displaySectionA(){
  function () {
    console.log("icon A section hovered");
  });


document.getElementById("selectionB").addEventListener("hover". displaySectionB());
document.getElementById("selectionC").addEventListener("hover", displaySectionC());
document.getElementById("selectionD").addEventListener("hover", displaySectionD());

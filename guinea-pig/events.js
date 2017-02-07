"use-strict";
// connecting JS file to html by ID 'output-target' (div)
var outputTarget = document.getElementById("output-target");
// connection JS file to html by CLASS 'article-section' (section)
var articleSection = document.getElementsByClassName("article-section");
// adding a function that triggers the output field when user clicks on
// <section> in html. Output field prints out whatever section user clicks on.
function handleSectionClick(MouseEvent) {
  console.log(MouseEvent);
  var elementText = event.target.innerHTML;
  outputTarget.innerHTML = "You clicked on the " + elementText;
};
// a for loop for the eventListener to go off everytime a user clicks the article section.
for ( var i = 0; i < articleSection.length; i++) {
  articleSection.item(i).addEventListener("click", handleSectionClick);
};
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

// connection JS file to html by ID 'page-header'
var pageHeader = document.getElementById("page-header");
// adding an event listener for when mouse is over header 
pageHeader.addEventListener("mouseover", handleHeaderMouseOver);
// adding an event listener for when mouse leaves header 
pageHeader.addEventListener("mouseout", handleHeaderMouseOut);
// function to apply words to appear in 'output-target' ID (div) when mouse is over header
function handleHeaderMouseOver (MouseEvent) {
  outputTarget.innerHTML = "You moved your mouse over the header";
};
// function to apply words to appear in 'output-target' ID (div) when mouse is over header
function handleHeaderMouseOut (MouseEvent) {
  outputTarget.innerHTML = "You left me!!";  
};
////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

// connecting JS file to html by ID 'keypress-input'
var keypressInput = document.getElementById("keypress-input");
// adding event listener for when user automatically starts typing
// in the input field, and giving a mirror effect with their writing in output field in html
keypressInput.addEventListener("keydown", function(MouseEvent){
  console.log("MouseEvent", MouseEvent);
  outputTarget.innerHTML = MouseEvent.target.value;
});
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// connecting JS file to html by ID 'guineaPig'.when putting words into input field, This allows the output field
// to do the following actions...
var guineaPig = document.getElementById("guineaPig");
// connecting JS file to html ID 'add-color'. Turns output field font blue.
document.getElementById("add-color")
  .addEventListener("click", function(MouseEvent){
  guineaPig.classList.toggle("blue");
});
// connecting JS file to html ID 'make-large'. Turns output field into large font.
document.getElementById("make-large")
  .addEventListener("click", function(MouseEvent){
  guineaPig.classList.toggle("large");
});
// connecting JS file to html ID 'add-border'. Adds border to output field.
document.getElementById("add-border")
  .addEventListener("click", function(MouseEvent){
  guineaPig.classList.toggle("bordered");
});
// connecting JS file to html ID 'add-rounding'. When border is present, turns border in output field round.
document.getElementById("add-rounding")
  .addEventListener("click", function(MouseEvent){
  guineaPig.classList.toggle("rounded");
});


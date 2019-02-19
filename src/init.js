// declare variables to hold buttons and info
var info;
var buttons;
var pToDisplay;
window.onload=function(){
  // When the page loads grab the buttons from index.html,
  buttons = document.querySelectorAll(".button");
  // grab the person's info and put in info;
  info = document.querySelectorAll(".info");
// hide the paragraphs containing the person's info
//$(document).ready(() => {
//  $('.info').hide()
//});

// attach event listener to buttons
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
      clickedButton=document.getElementById("")
      displayInfo(this);
    }
  }
}
  // Show the info for the selected button when it is clicked
  function displayInfo(infoToDisplay){
    console.log("inside the function", infoToDisplay);
  //  $('.button').on('click', () => {
    //   $('.info').show();
     //});

     var pToDisplay = document.getElementById("firstName p");
     console.log(pToDisplay);
if (pToDisplay.style.display === "none") {
  pToDisplay.style.display = "block";
} else {
  pToDisplay.style.display = "none";
}
    //console.log(infoToDisplay);
//   for (var i = 0; i < buttons.length; i++){
//      if (buttons.length[i] == infoToDisplay){
//        console.log("hi", buttons.length[i]);
//        $(info[i]).show();
//      }
//      else {
//        //info.classList.remove("active");

  }
//  }
//}

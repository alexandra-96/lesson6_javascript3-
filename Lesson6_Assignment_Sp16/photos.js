/*    
    Program Name:  Photo Gallery Application
    Author: Alexandra Jimenez
    Date: Tuesday, March 22, 2016 
    Filename: photos.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrder = [1,2,3,4,5];
var figureCount = 3;

//populateFigures() variable
function populateFigures() {
   var filename;
   var currentFig;
   
   for (var i=1; i<4; i++) {
      filename = "Lesson6_Assignment_Sp16/images/IMG_O" + photoOrder[i] + "sm.jpg";
      currentFig = document.getElementsByTagName("img")[i-1];
      currentFig.src = filename;
   }// end of for loop
   
}//end of populateFigures()


/* shift all images one figure to the right, and change values in photoOrder array to match  */
function rightArrow() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] + 1) === 6) {
         photoOrder[i] = 1;
      } else {
         photoOrder[i] += 1;
      }
      populateFigures();
   }//end of for loop
}//end of rightArrow Function





/* shift all images one figure to the left, and change values in photoOrder array to match  */
function leftArrow() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] - 1) === 0) {
         photoOrder[i] = 5;
      } else {
         photoOrder[i] -= 1;
      }
      populateFigures();
   }//end of for loop
}//end of leftArrow Function

// create figure and img elements for fifth image
function previewFive() {

   var lastFigure = document.createElement("figure");
   
   lastFigure.id = "fig5";
   lastFigure.style.zIndex = "5";
   lastFigure.style.position = "absolute";
   lastFigure.style.right = "45px";
   lastFigure.style.top = "67px";
   
   var lastImage = document.createElement("img");
   lastImage.width = "240";
   lastImage.height = "135";
}//end of previewFive()

// create event listeners for left arrow, right arrow, and center figure element 
function createEventListeners() {
var leftarrow = document.getElementById("leftarrow");
   if (leftarrow.addEventListener) {
      leftarrow.addEventListener("click", leftArrow, false);
   } else if (leftarrow.attachEvent) {
      leftarrow.attachEvent("onclick", leftArrow);
   }//end of else if
var rightarrow = document.getElementById("rightarrow");
   if (rightarrow.addEventListener) {
      rightarrow.addEventListener("click", rightArrow, false);
   } else if (rightarrow.attachEvent) {
      rightarrow.attachEvent("onclick", rightArrow);
   }//end of else if
}//end of createEventListeners function



/* create event listeners and populate image elements */
function setUpPage() {
   createEventListeners();
   populateFigures();
}//end of setUpPage Function






/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false); 
} else if (window.attachEvent)  {
  window.attachEvent("onload", setUpPage);
}
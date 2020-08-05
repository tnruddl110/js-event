// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const title = document.getElementById("title");

function handleResize() {
  title.innerHTML = "You just resized!";
  title.style.color = "purple";
}
function handleClick() {
  title.innerHTML = "That was a right click";
  title.style.color = "orange";
}
function handleMouseLeave() {
  title.innerHTML = "The mouse is gone";
  title.style.color = "blue";
}
function handleMouseEnter() {
  title.innerHTML = "The mouse is here";
  title.style.color = "green";
}

title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
window.addEventListener("resize", handleResize);
window.addEventListener("contextmenu", handleClick);

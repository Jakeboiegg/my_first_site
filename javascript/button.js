let counter = 0
function incrementCounter() {
  counter = counter + 1

  document.getElementById("counter").textContent = counter;
}
function changeToClicked() {
  document.getElementById("incrementButton").classList.remove("notClicked")
  document.getElementById("incrementButton").classList.add("Clicked")
}
function changeToNotClicked() {
  document.getElementById("incrementButton").classList.remove("Clicked")
  document.getElementById("incrementButton").classList.add("notClicked")
}

document.getElementById("incrementButton").addEventListener("mousedown", changeToClicked);

document.getElementById("incrementButton").addEventListener("mouseup", function() {
  incrementCounter();
  changeToNotClicked();
});

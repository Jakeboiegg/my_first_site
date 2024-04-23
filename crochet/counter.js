let count_value = localStorage.getItem("crochet_counter_count")
if (count_value == null) {
  count_value = 0
  localStorage.setItem("crochet_counter_count", 0)
} else {
  count_value = parseInt(count_value)
}

function add() {
  count_value += 1
  localStorage.setItem("crochet_counter_count", count_value)
}

function subtract() {
  count_value -= 1
  if (count_value < 0) {
    count_value = 0
  }
  localStorage.setItem("crochet_counter_count", count_value)
}

function update_website() {
  document.getElementById("counter-number").textContent = count_value
}

document.getElementById("counter-number").textContent = count_value

document.getElementById("add-button").addEventListener("mousedown", function() {
  add()
  update_website()
})
document.getElementById("subtract-button").addEventListener("mousedown", function() {
  subtract()
  update_website()
})

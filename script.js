var hour9 = $("#hour-9")
var hour10 = $("#hour-10")
var hour11 = $("#hour-11")
var hour12 = $("#hour-12")
var hour1 = $("#hour-1")
var hour2 = $("#hour-2")
var hour3 = $("#hour-3")
var hour4 = $("#hour-4")
var hour5 = $("#hour-5")
var hourCheck = dayjs().hour();
var button9 = $("#button9")
var button10 = $("#button10")
var button11 = $("#button11")
var button12 = $("#button12")
var button1 = $("#button1")
var button2 = $("#button2")
var button3 = $("#button3")
var button4 = $("#button4")
var button5 = $("#button5")

// var testHour = 19

var reloadToday = setInterval(function () {
  var today = dayjs();
  $("#currentDay").text(today.format("MMM D, YYYY, hh:mm:ss A"));
}, 1000);


function hour9check() {
  if (hourCheck >= 10) {
    hour9.attr("class", "past")
  }
  else if (hourCheck >= 9 && hourCheck <= 10) {
    hour9.attr("class", "present")
  }
  else if (hourCheck <= 9) {
    hour9.attr("class", "future")
  }
}
hour9check()

function hour10check() {
  if (hourCheck >= 11) {
    hour10.attr("class", "past")
  }
  else if (hourCheck >= 10 && hourCheck <= 11) {
    hour10.attr("class", "present")
  }
  else if (hourCheck <= 10) {
    hour10.attr("class", "future")
  }
}
hour10check()

function hour11check() {
  if (hourCheck >= 12) {
    hour11.attr("class", "past")
  }
  else if (hourCheck >= 11 && hourCheck <= 12) {
    hour11.attr("class", "present")
  }
  else if (hourCheck <= 11) {
    hour11.attr("class", "future")
  }
}
hour11check()

function hour12check() {
  if (hourCheck >= 13) {
    hour12.attr("class", "past")
  }
  else if (hourCheck >= 12 && hourCheck <= 13) {
    hour12.attr("class", "present")
  }
  else if (hourCheck <= 12) {
    hour12.attr("class", "future")
  }
}
hour12check()

function hour1check() {
  if (hourCheck >= 14) {
    hour1.attr("class", "past")
  }
  else if (hourCheck >= 13 && hourCheck <= 14) {
    hour1.attr("class", "present")
  }
  else if (hourCheck <= 13) {
    hour1.attr("class", "future")
  }
}
hour1check()

function hour2check() {
  if (hourCheck >= 15) {
    hour2.attr("class", "past")
  }
  else if (hourCheck >= 14 && hourCheck <= 15) {
    hour2.attr("class", "present")
  }
  else if (hourCheck <= 14) {
    hour2.attr("class", "future")
  }
}
hour2check()

function hour3check() {
  if (hourCheck >= 16) {
    hour3.attr("class", "past")
  }
  else if (hourCheck >= 15 && hourCheck <= 16) {
    hour3.attr("class", "present")
  }
  else if (hourCheck <= 15) {
    hour3.attr("class", "future")
  }
}
hour3check()

function hour4check() {
  if (hourCheck >= 17) {
    hour4.attr("class", "past")
  }
  else if (hourCheck >= 16 && hourCheck <= 17) {
    hour4.attr("class", "present")
  }
  else if (hourCheck <= 16) {
    hour4.attr("class", "future")
  }
}
hour4check()

function hour5check() {
  if (hourCheck >= 18) {
    hour5.attr("class", "past")
  }
  else if (hourCheck >= 17 && hourCheck <= 18) {
    hour5.attr("class", "present")
  }
  else if (hourCheck <= 17) {
    hour5.attr("class", "future")
  }
}
hour5check()

$(document).click(button9, function () {
  var hour9info = $("#hour-9").val()
  localStorage.setItem("Box9", hour9info)
})

$(document).click(button10, function () {
  var hour10info = $("#hour-10").val()
  localStorage.setItem("Box10", hour10info)
})

$(document).click(button11, function () {
  var hour11info = $("#hour-11").val()
  localStorage.setItem("Box11", hour11info)
})

$(document).click(button12, function () {
  var hour12info = $("#hour-12").val()
  localStorage.setItem("Box12", hour12info)
})

$(document).click(button1, function () {
  var hour1info = $("#hour-1").val()
  localStorage.setItem("Box1", hour1info)
})

$(document).click(button2, function () {
  var hour2info = $("#hour-2").val()
  localStorage.setItem("Box2", hour2info)
})

$(document).click(button3, function () {
  var hour3info = $("#hour-3").val()
  localStorage.setItem("Box3", hour3info)
})

$(document).click(button4, function () {
  var hour4info = $("#hour-4").val()
  localStorage.setItem("Box4", hour4info)
})

$(document).click(button5, function () {
  var hour5info = $("#hour-5").val()
  localStorage.setItem("Box5", hour5info)
})

var storedBox9 = localStorage.getItem("Box9")
var storedBox10 = localStorage.getItem("Box10")
var storedBox11 = localStorage.getItem("Box11")
var storedBox12 = localStorage.getItem("Box12")
var storedBox1 = localStorage.getItem("Box1")
var storedBox2 = localStorage.getItem("Box2")
var storedBox3 = localStorage.getItem("Box3")
var storedBox4 = localStorage.getItem("Box4")
var storedBox5 = localStorage.getItem("Box5")
function loadBoxes() {
  hour9.text(storedBox9)
  hour10.text(storedBox10)
  hour11.text(storedBox11)
  hour12.text(storedBox12)
  hour1.text(storedBox1)
  hour2.text(storedBox2)
  hour3.text(storedBox3)
  hour4.text(storedBox4)
  hour5.text(storedBox5)
}
loadBoxes()









// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.


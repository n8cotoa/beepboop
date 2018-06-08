function makeNumberArray(userInput) {
  var numbersArray = [];
  for (index = 0; index <= userInput; ++index) {
    numbersArray.push(index)
  }
  return numbersArray
}

function replaceNum(input) {
  var numbersArray = makeNumberArray(input)
  var outputArray = []
  for (number = 0; number < numbersArray.length; ++number) {
    var userName = $("#userName").val();
    if ((number % 3) === 0 && number !== 0){
      outputArray.push("I'm sorry, " + userName + ". I'm afraid I can't do that.")
    } else if (replaceOneOrZero(number, 1)) {
      outputArray.push("Boop!")
    } else if (replaceOneOrZero(number, 0)) {
      outputArray.push("Beep!")
    } else {
     outputArray.push(number)
    }
  }
  return outputArray
}

function replaceOneOrZero(number, value) {
  var checkString = number.toString()
  if (checkString.includes(value)) {
    return true
  }
}

function result(input) {
  var outputArray = replaceNum(input)
  return outputArray.join(" ")
}

function flipIt(input) {
  var outputArray = replaceNum(input)
  var flipArray = outputArray.reverse().join(" ")
  return flipArray
}

function getRandomImg() {
  var imgArray = [0,1,2]
  var imgNameArray = ["robot1.jpg", "robot2.jpg", "robot3.jpg"]
  var index = imgArray[Math.floor(Math.random() * imgArray.length)];
  image = document.getElementById('randomImg')
  image.src = "img/" + imgNameArray[index]
  image.alt = "A robot"
}

function getDesign(input) {
  p = document.getElementById('textResults')
  if (input < 50) {
    p.classList.add("red")
    p.classList.remove("blue")
    p.classList.remove("green")
  } else if (input < 100 && input > 51) {
    p.classList.add("blue")
    p.classList.remove("red")
    p.classList.remove("green")
  } else {
    p.classList.add("green")
    p.classList.remove("blue")
    p.classList.remove("red")
  }
}

function isNumber(name) {
  return !isNaN(parseFloat(name)) && isFinite(name);
}

function inputValidation(input, name) {
  if (input < 0 || name === "") {
    return false
  } else if (isNaN(input) || name === "") {
    return false
  } else if (isNumber(name)) {
    return false
  } else {
    return true
  }
}

$(document).ready(function() {
  $("#submitBtn").click(function(e) {
    e.preventDefault();
    var inputNum = parseInt($("#userInput").val());
    var userName = $("#userName").val();
    if (inputValidation(inputNum, userName)) {
      makeNumberArray(inputNum);
      getRandomImg()
      getDesign(inputNum)
      $("#textResults").text(result(inputNum))
    } else {
      alert("Please enter your name and a number higher than 0")
    }
  });
  $("#flipBtn").click(function(e) {
    e.preventDefault();
    var inputNum = parseInt($("#userInput").val());
    var userName = $("#userName").val();
    if (inputValidation(inputNum, userName)) {
      makeNumberArray(inputNum);
      getRandomImg()
      getDesign(inputNum)
      $("#textResults").text(flipIt(inputNum))
    } else {
      alert("Please enter your name and a number higher than 0")
    }
  });
});

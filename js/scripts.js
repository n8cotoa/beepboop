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
    var userName = name
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
      $("#results").text(result(inputNum, userName))
    } else {
      alert("Please enter your name and a number higher than 0")
    }

  });
  $("#flipBtn").click(function(e) {
    e.preventDefault();
    var inputNum = parseInt($("#userInput").val());
    if (inputValidation(inputNum, userName)) {
      makeNumberArray(inputNum);
      $("#results").text(flipIt(inputNum, userName))
    } else {
      alert("Please enter your name and a number higher than 0")
    }
  });

});

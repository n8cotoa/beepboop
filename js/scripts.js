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
    if ((number % 3) === 0 && number !== 0){
      outputArray.push("Sorry Dave")
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
  return outputArray.join(", ")


}

function flipIt(input) {
  var outputArray = replaceNum(input)
  var flipArray = outputArray.reverse().join(", ")
  return flipArray

}

function inputValidation(input) {
  if (input < 0) {
    return false
  } else if (isNaN(input)) {
    return false
  } else {
    return true
  }
}

$(document).ready(function() {
  $("#submitBtn").click(function(e) {
    e.preventDefault();
    var inputNum = parseInt($("#userInput").val());

    if (inputValidation(inputNum)) {
      makeNumberArray(inputNum);
      $("#results").text(result(inputNum))
    } else {
      alert("Please enter a number higher than 0")
    }

  });
  $("#flipBtn").click(function(e) {
    e.preventDefault();
    var inputNum = parseInt($("#userInput").val());
    if (inputValidation(inputNum)) {
      makeNumberArray(inputNum);
      $("#results").text(flipIt(inputNum))
    } else {
      alert("Please enter a number higher than 0")
    }
  });

});

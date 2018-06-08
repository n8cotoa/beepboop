function makeNumberArray(userInput) {
  var numbersArray = [];
  for (index = 0; index <= userInput; ++index) {
    numbersArray.push(index)
  }
  return numbersArray
}

function replaceThree(input) {
  var numbersArray = makeNumberArray(input)
  var outputArray = []
  for (number = 0; number <= numbersArray.length; ++number) {
    if ((number % 3) === 0 && number !== 0){
      numbersArray.splice(number, 1, "Sorry Dave")
    } else if (number === 1 || number === 10) {
      console.log(numbersArray);
      numbersArray.splice(number, 1, "Boop!")
    } else if ((number % 10) === 0 || number === 0) {
      numbersArray.splice(number, 1, "Beep!")
   }
  }
  return numbersArray
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
  $("#SubmitBtn").click(function(e) {
    e.preventDefault();
    var inputNum = parseInt($("#userInput").val());
    makeNumberArray(inputNum);
    if (inputValidation(inputNum)) {
      var results
      $("#results").text(results)
    } else {
      alert("Please enter a number higher than 0")
    }

  });

});

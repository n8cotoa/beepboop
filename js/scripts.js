function makeNumberArray(userInput) {
  var numbersArray = [];
  for (index = 0; index <= userInput; ++index) {
    numbersArray.push(index)
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

function appendToResult(value) {
    var result = document.getElementById("result");
    result.value += value;
  }
  
  function calculateResult() {
    var result = document.getElementById("result").value;
    var calculatedResult = evaluateExpression(result);
    document.getElementById("result").value = calculatedResult;
  }
  
  function clearResult() {
    document.getElementById("result").value = "";
  }
  function evaluateExpression(expression) {
var operands = expression.split(/([-+*/])/);
var result = parseFloat(operands[0]);

for (var i = 1; i < operands.length; i += 2) {
  var operator = operands[i];
  var operand = parseFloat(operands[i + 1]);

  if (operator === "+") {
    result += operand;
  } else if (operator === "-") {
    result -= operand;
  } else if (operator === "*") {
    if (operands[i + 2] && parseFloat(operands[i + 2]) < 0) {
      operand *= -1;
      i++;
    }
    result *= operand;
  } else if (operator === "/") {
    result /= operand;
  }
}

return result;
}
 
  

  
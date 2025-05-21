document.getElementById("calcForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const num1 = parseFloat(this.num1.value);
  const num2 = parseFloat(this.num2.value);
  const operation = this.operation.value;
  const resultDiv = document.getElementById("result");

  // Input validation
  if (isNaN(num1) || isNaN(num2)) {
    showResult("⚠️ Please enter valid numbers!", true);
    return;
  }

  let result;
  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      if (num2 === 0) {
        showResult("⚠️ Cannot divide by zero!", true);
        return;
      }
      result = num1 / num2;
      break;
    default:
      showResult("⚠️ Invalid operation!", true);
      return;
  }

  showResult(`Result: ${result}`);
});

function showResult(message, isError = false) {
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = message;
  resultDiv.style.color = isError ? "#d32f2f" : "#222";
  resultDiv.focus();
}

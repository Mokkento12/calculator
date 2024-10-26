const buttons = document.querySelectorAll(".btn");
const resultInput = document.getElementById("result");

let currentInput = "";
let operation = "";
let previousInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "C") {
      currentInput = "";
      previousInput = "";
      operation = "";
      resultInput.value = "";
    } else if (value === "=") {
      if (currentInput && previousInput) {
        resultInput.value = calculate(previousInput, currentInput, operation);

        previousInput = resultInput.value;

        currentInput = "";
        operation = "";
      }
    } else {
      if (["+", "-", "*", "/"].includes(value)) {
        if (currentInput) {
          previousInput = currentInput;
          currentInput = "";
          operation = value;
        }
      } else {
        currentInput += value;
        resultInput.value = currentInput;
      }
    }
  });
});

function calculate(prev, current, operation) {
  prev = parseFloat(prev);

  current = parseFloat(current);

  switch (operation) {
    case "+":
      return prev + current;
    case "-":
      return prev - current;
    case "*":
      return prev * current;
    case "/":
      return prev / current;

    default:
      return current;
  }
}

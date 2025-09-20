class Calculator {
  operationFunc(operation, a, b) {
    switch (operation) {
      case "add":
        return a + b;

      case "subtract":
        return a - b;

      case "multiply":
        return a * b;

      case "divide":
        return a / b;

      default:
        return "Enter a valid operation";
    }
  }
}
let myCalculator = new Calculator();
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let a, b, operation;
rl.question("Enter First value: ", (val1) => {
  a = Number(val1);
  if (isNaN(val1)) {
    console.log("Enter valid a value");
    rl.close();
    return;
  }
  rl.question("Enter Second value: ", (val2) => {
    b = Number(val2);
    if (isNaN(val2)) {
      console.log("Enter valid b value");
      rl.close();
      return;
    }

    rl.question("Enter Operation ('add/subtract/multiply/divide'): ", (op) => {
      operation = op.trim();
      if (!["add", "subtract", "multiply", "divide"].includes(operation)) {
        console.log("Enter valid Operation");
        rl.close();
        return;
      }
      const result = myCalculator.operationFunc(operation, a, b);
      console.log("Result:", result);
      rl.close();
    });
  });
});

import { add, subtract, multiply, divide } from "./utils/operations.js";
import { parseNumbers, isValidOperation } from "./utils/parser.js";
import _ from "lodash";

const operation = process.argv[2];
const numberArgs = process.argv.slice(3);

if (!isValidOperation(operation)) {
  console.log("Invalid operation. Use: add, subtract, multiply, or divide");
  process.exit(1);
}

const numbers = parseNumbers(numberArgs);

if (_.isEmpty(numbers) || numbers.length !== numberArgs.length) {
  console.log("Please provide valid numbers.");
  process.exit(1);
}

let result;

switch (operation) {
  case "add":
    result = add(numbers);
    break;
  case "subtract":
    result = subtract(numbers);
    break;
  case "multiply":
    result = multiply(numbers);
    break;
  case "divide":
    result = divide(numbers);
    break;
  default:
    console.log("Invalid operation. Use: add, subtract, multiply, or divide");
    process.exit(1);
}

console.log(`Result: ${result}`);
export const DIVIDE_BY_ZERO = "CANNOT DIVIDE BY ZERO";
export const ERROR = "ERROR";

export const DIVIDE = "\xF7";
export const MULTIPLY = "\xD7";
export const SUBTRACT = "-";
export const ADD = "+";
export const EQUALS = "=";

export const BUTTON_DATA = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
  zero: "0",
  decimal: ".",
  
  divide: DIVIDE,
  multiply: MULTIPLY,
  subtract: SUBTRACT,
  add: ADD,
  equals: EQUALS,

  clear: "C"
}

/**
 * Returns the number obtained by performing an operation on a and b.
 * @param {number} a
 * @param {number} b
 * @param {string} op
 */
export const evaluate = (a, b, op) => {
  if (!(typeof a === "number") || !(typeof b === "number")) {
    return ERROR;
  }

  switch (op) {
    case DIVIDE:
      return (b !== 0) ? (a / b) : DIVIDE_BY_ZERO;
    case MULTIPLY:
      return a * b;
    case SUBTRACT:
      return a - b;
    case ADD:
      return a + b;
    default:
      return ERROR;
  }
}

export const calculate = (arr) => {
  if (arr.length === 1) {
    return (typeof arr[0] === "number") ? arr[0] : ERROR;
  } else if ((arr.length < 3) || (arr.length % 2 === 0)) {
    return ERROR;
  }
  
  let current = 0;
  
  for (let i = 0; i < (arr.length - 2); i += 2) {
    let a = (i === 0) ? arr[i] : current;
    let op = arr[i+1];
    let b = arr[i+2];
    current = evaluate(a, b, op);
    if (typeof current !== "number") break;
  }

  return current;
}

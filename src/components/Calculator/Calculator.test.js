import * as Utils from './calculator-utils';

describe('Utils.evaluate() tests', () => {
  it('adds numbers', () => {
    expect(Utils.evaluate(0, 0, Utils.ADD)).toEqual(0);
    expect(Utils.evaluate(1, 0, Utils.ADD)).toEqual(1);
    expect(Utils.evaluate(1.25, 5.3, Utils.ADD)).toEqual(6.55);
  });
  
  it('subtracts numbers', () => {
    expect(Utils.evaluate(0, 0, Utils.SUBTRACT)).toEqual(0);
    expect(Utils.evaluate(0, 1, Utils.SUBTRACT)).toEqual(-1);
    expect(Utils.evaluate(7.33, 4.21, Utils.SUBTRACT)).toEqual(3.12);
  });
  
  it('multiplies numbers', () => {
    expect(Utils.evaluate(0, 0, Utils.MULTIPLY)).toEqual(0);
    expect(Utils.evaluate(1, -0.5, Utils.MULTIPLY)).toEqual(-0.5);
    expect(Utils.evaluate(3, 7, Utils.MULTIPLY)).toEqual(21);
  });
  
  it('divides numbers', () => {
    expect(Utils.evaluate(1, 0, Utils.DIVIDE)).toEqual(Utils.DIVIDE_BY_ZERO);
    expect(Utils.evaluate(0, 1, Utils.DIVIDE)).toEqual(0);
    expect(Utils.evaluate(7, 2, Utils.DIVIDE)).toEqual(3.5);
    expect(Utils.evaluate(-10, 5, Utils.DIVIDE)).toEqual(-2);
  });
  
  it('returns error messages', () => {
    // Invalid a, b, and op param values
    expect(Utils.evaluate("0", 0, Utils.ADD)).toEqual(Utils.ERROR);
    expect(Utils.evaluate(0, false, Utils.ADD)).toEqual(Utils.ERROR);
    expect(Utils.evaluate(0, 0, "")).toEqual(Utils.ERROR);
  });
});

describe('Utils.calculate() tests', () => {
  it('linearly calculates', () => {
    const arr = [2.8, Utils.ADD, 1.1, Utils.DIVIDE, 2, Utils.SUBTRACT, 0.312, Utils.MULTIPLY, 1.5];
    expect(Utils.calculate(arr)).toEqual(2.457);
  });

  it('returns number when array length is 1', () => {
    expect(Utils.calculate([5])).toEqual(5);
  });

  it('returns error messages', () => {
    // Invalid array
    expect(Utils.calculate([])).toEqual(Utils.ERROR);
    expect(Utils.calculate(["5"])).toEqual(Utils.ERROR);
    expect(Utils.calculate([5, Utils.ADD])).toEqual(Utils.ERROR);
    expect(Utils.calculate([5, Utils.ADD, "0"])).toEqual(Utils.ERROR);
    expect(Utils.calculate([5, Utils.ADD, 6, Utils.SUBTRACT])).toEqual(Utils.ERROR);
    expect(Utils.calculate([false, true, false])).toEqual(Utils.ERROR);
    // Division by zero
    expect(Utils.calculate([1, Utils.DIVIDE, 0, Utils.SUBTRACT, 0.97])).toEqual(Utils.DIVIDE_BY_ZERO);
  });
});

export const PI = 22 / 7;
export default class Calculator {
  static x;

  constructor(value = 1) {
    this.x = value;
  }

  add(value) {
    this.x += value;
    return this;
  }

  substract(value) {
    this.x -= value;

    return this;
  }
  divide(value) {
    this.x /= value;
    return this;
  }
  multiply(value) {
    this.x *= value;
    return this;
  }
  square() {
    this.x = this.x * this.x;
    return this;
  }
  exponen(value) {
    this.x = Math.pow(this.x, value);
    return this;
  }
  squareRoot(value) {
    this.x = Math.sqrt(this.x);
    return this;
  }
  result() {
    return this.x;
  }
}

//module.export={Calculator,PI}

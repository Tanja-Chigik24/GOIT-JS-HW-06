'use strict';
class StringBuilder {
  #value;

  constructor(value) {
    this.#value = value;
  }
  getValue() {
    return this.#value;
  }

  padStart(str) {
    this.#value = str + this.#value;
  }
  padEnd(str) {
    this.#value += str;
  }

  padBoth(str) {
    this.padEnd(str);
    this.padStart(str);
  }
}
const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="

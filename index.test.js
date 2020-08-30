let assert = require('assert').strict;

let convert = require("./index.js");

assert.strictEqual(convert(123), "CXXIII");
assert.strictEqual(convert(4), "IV");
assert.strictEqual(convert(1999), "MCMXCIX");
assert.strictEqual(convert(1), "I");
assert.strictEqual(convert(1001), "MI");
assert.strictEqual(convert(594), "DXCIV");
assert.strictEqual(convert(3000), "MMM");



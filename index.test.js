let assert = require('assert').strict;

let convert = require("./index.js");

assert.strictEqual(convert(123), "CXXIII");
assert.strictEqual(convert(4), "IV");
assert.strictEqual(convert(1999), "MCMXCIX");
assert.strictEqual(convert(1), "I");
assert.strictEqual(convert(1001), "MI");
assert.strictEqual(convert(594), "DXCIV");
assert.strictEqual(convert(3000), "MMM");
assert.strictEqual(convert(3999), "MMMCMXCIX");
assert.strictEqual(convert(0), "Error. Number should be greater than 0 and less than 4000.");
assert.strictEqual(convert(-1), "Error. Number should be greater than 0 and less than 4000.");
assert.strictEqual(convert(4000), "Error. Number should be greater than 0 and less than 4000.");




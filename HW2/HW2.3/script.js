"use strict";

let a = -1;
let b = 0;

if (a > 0 && b > 0) {
    console.log(a - b);
} else if (a < 0 && b < 0) {
    console.log(a / b);
} else if (a >= 0 && b < 0 || a < 0 && b >= 0) {
    console.log(a + b);
}
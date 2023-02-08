'use strict'

const counterMaker = function () {
    let value = 0;
    return function (input = 0) {
        return value += input;
    }



}

const counter = counterMaker();

console.log(counter()) // 0
console.log(counter()) // 0
console.log(counter(1)) // 1
console.log(counter()) // 1
console.log(counter(3)) // 4
console.log(counter(7)) // 11
console.log(counter(-5)) // 6
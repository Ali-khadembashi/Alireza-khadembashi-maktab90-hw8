'use strict'


// const user = {

// }
// const setterGenerator = function (key) {

//     return function (value) {
//         this[key] = value;
//     }.bind(user);



// }
// const nameSetter = setterGenerator('name');
// nameSetter('Jack');
// console.log(user);



const user = {

}
const setterGenerator = function (key) {
    const newUser = {}
    const mamad = function (value) {
        this[key] = value;
        return this
    }

    return mamad



}
const nameSetter = setterGenerator('name');
nameSetter.call(user, 'Jack');
console.log(user);
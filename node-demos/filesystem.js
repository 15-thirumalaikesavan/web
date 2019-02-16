//Problem : Create a folder test.
//Node js > fs module (system)
//The fs module provides an API for interacting with the file system
const fs = require('fs');
const path = require('path');

console.log(__dirname);
fs.mkdir(path.join(__dirname, '/test'),{},error => {
    console.log("Folder Created!");
});


// // button.addEventListener('click', function handle(){
// //     console.log("hi");
// // })


// function handle(){
//     console.log("hi");
// }

// () => console.log("hi");

//Step 1
var obj1 = 10;
var obj = function test() {
    return "test function";
}
//console.log(test());
console.log(obj());
console.log(obj1);


// anonymous function
console.log(function () { console.log("anonymous") });
console.log((() => console.log("anolambda"))());
console.log(function () { return "test" }());
console.log((() => "test")());

//function with parameters
function test(i, j) {
    console.log(i);
    console.log(j);
    console.log(i + j);
}

console.log(((i, j) => {
    console.log(i);
    console.log(j);
    console.log(i + j);
})(1, 2));

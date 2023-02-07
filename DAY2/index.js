// 1. Declare a variable - let a;. On another line assign any value you like to a.
// Log the value of a before and after assignment. Try doing the same with const.

let a;
console.log(a); // Here Output will be undefiend as it is not initialized.
a = 10;
console.log(a); // Here Output will be 10 as it is  initialized with 10

// const b; // Syntax Error const variable has initialize on with declaration;
// console.log(b);
// b = 20
// uncommenting line(9 and 11) will throw synatx and type error respectively
// Even if we have initalized the const b with 20 (b=10;) this will throw a Type Error as we
// cannot reassign variables declared with const

// Typeof Operator
console.log(typeof 10); // number
console.log(typeof "str"); // string
console.log(typeof false); // boolean
console.log(typeof null); // object
console.log(typeof NaN); // number
console.log(typeof []); // object
console.log(typeof new Array()); // object
console.log(typeof {}); // object
console.log(typeof function () {}); // function
console.log(typeof (() => {})); // function
let x;
console.log(typeof x); // undefined

// How to detect NaN
let y = Number("jhon"); // y is NaN
console.log(y, typeof y); // NaN, number -> Here is outputs as number , so we can use the method isNaN to detect is its NaN or not
console.log(isNaN(y)); // true -> Here output is true , which means y is of NaN type, but there is one more problem
console.log(isNaN(undefined)); // true -> It console the true, which is not true, so we should always use isNaN method from scope of global Numbe object
console.log(Number.isNaN(undefined)); // false -> now its shows the correct expected results.

// How to Detect Null
let z = null;
console.log(z); // null
console.log(typeof z); // object, to correctly determine its type we can === strictly equal operator
console.log(z === null); // true , if its console true then it means z has null as variable type.
console.log(z == undefined); // true, Note: do not use '==' as it will result in wrong answer

// How to Detect an Array
let m = [1, 2, 3];
console.log(typeof m); // object, so correctly determine variable type as an arr using isArray method from global Array object
console.log(Array.isArray(m)); // true ,if it console true, it means our variable as type of array

// There is another way to determine typeof variables
console.log(Object.prototype.toString.call(m)); // [object Array],.i.e Array, now we can check the type of variables

// Object Manipulation using let and const declaration
let obj1 = {
  name: "json",
};
const obj2 = {
  name: "parse",
};

// Observation on above
// 1. we can reassign obj1 with another object, but not possible in case of obj2 as it declared using const.
// 2. we can add new items in both objects and can modify also
console.log(obj2);
obj2.newItem = "string";
console.log(obj2);

// Array Manipulation using let and const declaration

let arr1 = [1, 2, 3, 4];
const arr2 = [4, 5, 6, 7];

// Observation on above
// 1. we can reassign arr1 with another array, but not possible in case of arr2 as it declared using const.
// 2. we can add new items in both arrays and can modify also
console.log(arr2);
arr2.push(100);
console.log(arr2);
arr2[2] = 1000;
console.log(arr2);

// Methods thats change original array
// 1. push
// 2. pop
// 3. unshift
// 4. shift
// 5. sort
// 6. reverse
// 7. splice

// Method that do not change original array
// 1. map
// 2. filter
// 3. concat
// 4. slice
// 5. reduce
// 6. forEach

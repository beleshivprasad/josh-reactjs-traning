/*
    Q1. Declare a variable let age = 25;. Write a series of if else statements that will
        Print child to the console if age is less than equal to 12.
        Print teen to the console if age is between 13 and 18 (inclusive).
        Print adult to the console if age is above 18
*/

let age = 14;

if (age <= 12) {
  console.log("child");
} else if (age >= 13 && age <= 18) {
  console.log("teen");
} else if (age > 18) {
  console.log("adult");
} else {
  console.log("invalid age", age);
}
/*
    Q2. Do the same(for abvoe question) using switch case.
*/

switch (true) {
  case age <= 12:
    console.log("child");
    break;
  case age >= 13 && age <= 18:
    console.log("teen");
    break;
  case age > 18:
    console.log("adult");
    break;
  default:
    console.log("invalid age", age);
}

/*
    Q3. Declare a variable let arraySize = 25;.Using a for loop, add numbers from one onwards into an array till the arraySize is reached.
*/

let arraySize = 25;
let arr = [];
for (let i = 1; i <= arraySize; i++) {
  arr.push(i);
}

console.log(arr);

/*
    Q4. Do above question with while loop
*/

arr = [];
let i = 1;
while (i <= arraySize) {
  arr.push(i);
  i++;
}

console.log(arr);

/*
    Q5. Can you use return instead of break in loops?
    ans: break can only be use in while for loop, return is reserved for functions only,
        if we are using a loop inside the function, in that case only we can break out of loop using return.
        which will also terminate further function execution.
*/

(() => {
  for (let i = 0; i < 5; i++) {
    if (i == 3) return;
    console.log(i);
  }
})();

/**
    only 0,1,2 will be printed as we are returning from function  if i is equal to 3 , which will cause to terminate loop
    Output: 
    0
    1
    2
*/

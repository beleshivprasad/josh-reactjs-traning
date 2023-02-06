/*
  Q.1 What happens when you add a for loop/while loop/switch case block inside a function and use return instead of break? Do statements after the loop run? What is the return value? Can we pass a return value from within a loop? Can you return from inside an if block? What impact does that have?

*/

function getNumber() {
  for (let i = 0; i < 10; i++) {
    if (i === 5) return i;
    console.log("i => ", i); // i => 0, 1, 2, 3, 4, will return if i===5 and control will not go to line 9.
  }
}

console.log("getNumber() => ", getNumber()); // 5,

function odd_or_even(num) {
  switch (true) {
    case num % 2 === 0:
      console.log("even");
      return;
    case num % 2 === 1:
      console.log("odd");
      return;
    default:
      console.log("invalid number");
  }
}
odd_or_even(1);

/*
  ans: Whenever we use return keyword inside the function, whenever it is triggered the code execution after the return statement stop executing and control exits from the function,
  in above first code example there will be no code execution for i=5 to less than 10, so will also break inside function due to return statment
  And it will same for any kind of loop i.e. while , do while ,switch-case, for eg.

  Do statements after the loop run?
  ans: No

  What is the return value?
  ans: if we have written statment like return; it will return undefined.

  Can we pass a return value from within a loop?
  ans: yes we can pass return value something like, return 'even'; 

  Can you return from inside an if block?
  ans: if the 'if' block is inside the function then only we can use return inside the 'if' block, and if the condtion matched code inside the if (i.e. return;) will get executed and function execution will terminate.
*/

/*
  Q.2 Take a function that accepts a function as a parameter (also known as callback function). 

    function test(callback){
      callback();
    }

    function callbackFunc(){
      console.log(“Calling the callback function”)
      return 5;
    }

    Explore the following cases? what is printed in the console, and what gets returned:
    
    1. test(callbackFunc)
    2. test(callbackFunc())
    3. test(() => callbackFunc())
    4. What happens when you return callback() from the test function?
    5. What happens when you return callback from the test function?
*/

function test(callback) {
  callback();
}

function callbackFunc() {
  console.log("Calling the callback function");
  return 5;
}

test(callbackFunc); // output: Calling the callback function

test(callbackFunc()); // output: Calling the callback function and TypeError, callback is not function
// callback hold values as 5 not function
/*
  as we are calling the function callbackFunc at the time of passing as argument to test, 
  which will return value as 5 and  function test is trying to execute 5() and 5 is not a function so it is throwing error
*/

test(() => callbackFunc()); // output: Calling the callback function
/*
  we are passing callbackFunc inside the ans arrow function which is gettng executed and inside it we are executing callbackFunc and return value reutrned by callbackFunc
*/

// What happens when you return callback() from the test function?

function test(callback) {
  return callback();
}

test(callbackFunc); // output: Calling the callback function and will return 5 and eventully test return 5.
test(callbackFunc()); // output: Calling the callback function and  TypeError , callback i.e. 5 is not function
test(() => callbackFunc()); // output: Calling the callback function

// What happens when you return callback from the test function?

function test(callback) {
  return callback;
}

test(callbackFunc); // no ouput on console but it will return callbackFunc definition
test(callbackFunc()); // output: Calling the callback function and 5 is returned
test(() => callbackFunc()); // No output on console and it will return () => callbackFunc()

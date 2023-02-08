/*
    Q.1 What is the difference between ++i and i++?
*/

let i = 0;
const a = i++; // postfix increment
const b = ++i; // prefix increment

console.log(a, b); // 0 2

/*
    above code example gives output as 0 2. because,
    for variable a it returns the i value i.e 0 and i becomes 1.
    for variable b it does the increment of i value from 1 to 2 and returns the value;  
    
    ++i is pre-increment operator where as i++ is post increment. 
    the difference between them is ,
        1. ++i here i get incremented and then returns the value of i.
        2. i++ here i returns the value of i and then it get incremented. 
*/

/*
    Q.2 What do you think would happen if you pass an index beyond the range of the string? Or if you pass a negative index? Try it out.
*/

const str = "josh";
const indexOutOfLength = str.length + 1;
const negativeIndex = -2;

console.log(str.charAt(indexOutOfLength), str[indexOutOfLength]);
/*
    output: emtpy string and undefined.
    as charAt returns the emtpy string for index of bound
    and with array like syntax returns the undefined.
*/

console.log(str.charAt(negativeIndex), str[negativeIndex]);
/*
    output: emtpy string and undefined.
    as charAt returns the emtpy string for negative index
    and with array like syntax returns the undefined.
*/

/*
    Q.3 Do you think JSON.stringify would work for arrays as well? What about nested objects? What happens if we pass numbers, strings, undefined, null to JSON.stringify?
*/

const arr = [1, 2, 3, "josh"];

console.log(JSON.stringify(arr)); // [1, 2, 3, "shiv"]
console.log(typeof JSON.stringify(arr)); // string
/*
    JSON.stringify does work on array it converts array to string.
*/

const nestedObj = {
  name: "josh",
  age: 23,
  address: {
    city: "pune",
    pin: "411045",
  },
};

console.log(JSON.stringify(nestedObj)); // {"name":"josh","age":23,"address":{"city":"pune","pin":"411045"}}
console.log(typeof JSON.stringify(nestedObj)); // string
/*
    From above code example we can see that we can stringify nested objects as well.
*/

const _string = "josh";
const _number = 3;
const _null = null;
const _undefined = undefined;

console.log(JSON.stringify(_string), typeof JSON.stringify(_string)); // "josh" string
console.log(JSON.stringify(_number), typeof JSON.stringify(_number)); // "3" string
console.log(JSON.stringify(_null), typeof JSON.stringify(_null)); // "null" string
console.log(JSON.stringify(_undefined), typeof JSON.stringify(_undefined)); // undefined undefined
/*
    JSON.stringify() methods omits strings for respective given values execpt undefined.
    for null above gives output as string of null i.e. "null" same for other datatypes exepct undefined.
*/

/*
    Q.4 What happens if you pass a regular/invalid JSON string to JSON.parse? What will happen if such an invalid function runs in the program? Will other parts of the code execute correctly after that?
*/

function call() {
  const invalidJSONString = "[2,]";
  const parsedJSONString = JSON.parse(invalidJSONString);
  console.log(parsedJSONString);
}

call();
console.log("call executed successfully");

/*
    1. In above code example JSON.parse() method for invalid json string throws an execption ,
    2. In javascript if we dont handle the execption, the code execution get terminated.
    3. we can use try-catch block to handle execption.s

    so line no 91 raises a execption which is not handled anywhere that is why rest of code will not get executed.

*/

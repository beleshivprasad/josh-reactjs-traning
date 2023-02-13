/*
    Advanced Assignments: (optional)
    ● Write a function to check deep equality of two nested objects/arrays
    ● Write a recursive function to create a deep clone of a nested object
    ● Write a function that returns a nested key within an object:
*/

/*
    ● Write a function to check deep equality of two nested objects/arrays
*/

function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;

  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  } else {
    return Object.keys(obj).reduce((acc, key) => {
      acc[key] = deepClone(obj[key]);
      return acc;
    }, {});
  }
}

const originalObject = {
  name: "mark zukerberg",
  age: 35,
  skills: ["cpp", "javascript"],
  friends: [
    { name: "bill gates", age: 58 },
    { name: "jeff bezos", age: 53 },
  ],
};

const duplicateObject = {
  name: "mark zukerberg",
  age: 35,
  skills: ["cpp", "javascript"],
  friends: [
    { name: "bill gates", age: 58 },
    { name: "jeff bezos", age: 53 },
  ],
};

const copiedObject = deepClone(originalObject);

console.log(originalObject.friends[0] === copiedObject.friends[0]); // false
console.log(originalObject === copiedObject); // false

/*
    Write a function to check deep equality of two nested objects/arrays
*/

function compareDeepObjects(obj1, obj2) {
  if (typeof obj1 === "object") {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    const temp = [];
    for (let i = 0; i < keys1.length; i++) {
      temp.push(compareDeepObjects(obj1[keys1[i]], obj2[keys2[i]]));
    }
    return temp.every(Boolean);
  } else {
    return obj1 === obj2;
  }
}

function compareDeepArray(obj1, obj2) {
  if (Array.isArray(obj1)) {
    if (obj1.length !== obj2.length) return false;

    const temp = [];
    for (let i = 0; i < obj1.length; i++) {
      temp.push(compareDeepObjects(obj1[i], obj2[i]));
    }

    return temp.every(Boolean);
  } else {
    return obj1 === obj2;
  }
}

function compareDeep(obj1, obj2) {
  if (typeof obj1 !== typeof obj2)
    throw Error("both parameter should have same datatype");

  if (obj1 === null || obj2 === null) return obj1 === obj2;

  if (Array.isArray(obj1)) {
    return compareDeepArray(obj1, obj2);
  }

  if (typeof obj1 === "object") {
    return compareDeepObjects(obj1, obj2);
  }
  return obj1 === obj2;
}

console.log("comapreDeep", compareDeep(originalObject, duplicateObject));

/*
    Write a function that returns a nested key within an object:
    Example:
    {
        name:"Harry Potter",
        age: 12,
        address: {
            details: ["4", "Privet Drive"],
            area:"Little Whinging",
            city: "Surrey",
            state: "England"
        }
    }
    getNestedKey(obj, "address.details.1")
    //This should return "Privet Drive"
*/

function getNestedKey(obj, nestedKey) {
  const keys = nestedKey
    .split(".")
    .map((key) => (!isNaN(Number(key)) ? Number(key) : key));

  const value = keys.reduce((acc, key) => {
    if (!acc) acc = obj[key];
    else acc = acc[key];
    return acc;
  }, undefined);

  return value;
}

const person = {
  name: "Harry Potter",
  age: 12,
  address: {
    details: ["4", "Privet Drive"],
    area: "Little Whinging",
    city: "Surrey",
    state: "England",
  },
};

console.log(getNestedKey(person, "address.details.1")); // Privet Drive

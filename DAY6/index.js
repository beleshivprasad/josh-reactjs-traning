const users = [
  {
    id: 1,
    first_name: "Nicki",
    email: "ncrozier0@squarespace.com",
    date_of_birth: "2009/05/09",
  },
  {
    id: 2,
    first_name: "Raychel",
    email: "rmcgrady1@cpanel.net",
    date_of_birth: "1996/11/05",
  },
  {
    id: 3,
    first_name: "Demetris",
    email: "dkilshall2@elpais.com",
    date_of_birth: "2018/12/31",
  },
  {
    id: 4,
    first_name: "Amata",
    email: "abraiden3@canalblog.com",
    date_of_birth: "2012/05/23",
  },
  {
    id: 5,
    first_name: "Venita",
    email: "vheap4@clickbank.net",
    date_of_birth: "2020/10/04",
  },
  {
    id: 6,
    first_name: "Fairfax",
    email: "fcrichton5@merriam-webster.com",
    date_of_birth: "2009/12/23",
  },
  {
    id: 7,
    first_name: "Kathleen",
    email: "kvasyukhnov6@devhub.com",
    date_of_birth: "2010/12/20",
  },
  {
    id: 8,
    first_name: "Sam",
    email: "scorck7@sitemeter.com",
    date_of_birth: "2020/08/30",
  },
  {
    id: 9,
    first_name: "Virgilio",
    email: "vferandez8@e-recht24.de",
    date_of_birth: "2000/09/07",
  },
  {
    id: 10,
    first_name: "Townie",
    email: "tpetyt9@upenn.edu",
    date_of_birth: "2018/09/01",
  },
];

/*
    Q.1 Take the above array of objects. Accomplish the following tasks:
        1. Write a function filterByName that accepts a string as a parameter and returns an array with only those objects where the first_name field includes that string.
        2. Use Array.map to return an array of all the email fields.
        3. Use Array.sort to return the array sorted in descending order by date_of_birth.
        4. Write a function getById that accepts a number as a parameter and returns the object where the id is equal to that number.
*/

/*
    1. Write a function filterByName that accepts a string as a parameter and returns an array with only those objects where the first_name field includes that string.
*/

const filterByName = (name) => {
  return users.filter((user) => user.first_name.includes(name));
};

console.log(filterByName("s"));

/*
    2. Use Array.map to return an array of all the email fields.
*/

const getEmails = (name) => {
  return users.map((user) => user.email);
};

console.log(getEmails());

/*
    3. Use Array.sort to return the array sorted in descending order by date_of_birth.
*/

const sortUsersBy = (key = "id", order = "asc") => {
  const sortedData = users;
  switch (key) {
    case "date_of_birth":
      sortedData.sort((a, b) => new Date(a[key]) - new Date(b[key]));
      break;
    case "first_name":
    case "email":
      sortedData.sort((a, b) => b[key].localeCompare(a[key]));
      break;
    default:
      sortedData.sort((a, b) => a[key] - b[key]);
      break;
  }
  if (order === "desc") sortedData.reverse();

  return sortedData;
};

console.log(sortUsersBy("date_of_birth", "desc"));

/*
    4. Write a function getById that accepts a number as a parameter and returns the object where the id is equal to that number.
*/

const getById = (id) => {
  return users.find((user) => user.id === id) ?? {};
};

console.log(getById(33));

/*
    2. What makes a method mutating or non mutating in Javascript? Find out whether each of the following methods are mutating or non-mutating. How can you verify this?:
        1. push
        2. pop
        3. filter
        4. find
        5. sort
        6. map

*/

/*
    ans: if method is mutating the state of object it is called on then that method is considered to be a   mutating method.
    it can be determined by checking if that array after method call returns a new array or if original array is not equal array upon it called by 
    there are two ways to do it.
        1. JSON.stringify()
        2. === comparator
*/

function isMutating(originalArray, originalArrayCopy) {
  console.log(
    "originalArray => ",
    JSON.stringify(originalArray),
    "after method call => ",
    JSON.stringify(originalArrayCopy)
  );
  if (JSON.stringify(originalArray) === JSON.stringify(originalArrayCopy))
    return "non-mutating";

  return "mutating";
}

const originalArray = [1, 2, 5, 9, 6];
const originalArrayCopy = [...originalArray];

// 1. Push
function determineMutabilityOfPush(originalArray, originalArrayCopy) {
  originalArrayCopy.push(3);
  console.log("push is ", isMutating(originalArray, originalArrayCopy));
}

determineMutabilityOfPush([...originalArray], [...originalArrayCopy]);

// 2. Pop
function determineMutabilityOfPop(originalArray, originalArrayCopy) {
  originalArrayCopy.pop(3);
  console.log("push is ", isMutating(originalArray, originalArrayCopy));
}

determineMutabilityOfPop([...originalArray], [...originalArrayCopy]);

// 3. Filter
function determineMutabilityOfFilter(originalArray, originalArrayCopy) {
  originalArrayCopy.filter((item) => item > 2);

  console.log("filter is ", isMutating(originalArray, originalArrayCopy));
}
determineMutabilityOfFilter([...originalArray], [...originalArrayCopy]);

// 4. Find
function determineMutabilityOfFind(originalArray, originalArrayCopy) {
  originalArrayCopy.find((item) => item === 2);

  console.log("find is ", isMutating(originalArray, originalArrayCopy));
}
determineMutabilityOfFind([...originalArray], [...originalArrayCopy]);

// 5. Sort
function determineMutabilityOfSort(originalArray, originalArrayCopy) {
  originalArrayCopy.sort((a, b) => a - b);

  console.log("sort is ", isMutating(originalArray, originalArrayCopy));
}
determineMutabilityOfSort([...originalArray], [...originalArrayCopy]);

// 6. Map
function determineMutabilityOfMap(originalArray, originalArrayCopy) {
  originalArrayCopy.map((item) => item * item);

  console.log("map is ", isMutating(originalArray, originalArrayCopy));
}
determineMutabilityOfMap([...originalArray], [...originalArrayCopy]);

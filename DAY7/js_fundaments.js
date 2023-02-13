/*
    Write a function mapBy to convert an array of objects into an object mapped by the specified key:
    Example: 
    let users = [
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
    ];

    mapBy(users, "first_name") 
 
    This should return
    {
        "Nicki":{id:1, first_name:"Nicki", ...},
        "Raychel":{id:2, first_name:"Raychell", ...},
    }
*/

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
];

const mapBy = (records, mapKey) => {
  return records.reduce((acc, record) => {
    acc[record[mapKey]] = record;
    return acc;
  }, {});
};

console.log(mapBy(users, "first_name"));
/*
  output:
  {
    "Nicki": {
        "id": 1,
        "first_name": "Nicki",
        "email": "ncrozier0@squarespace.com",
        "date_of_birth": "2009/05/09"
    },
    "Raychel": {
        "id": 2,
        "first_name": "Raychel",
        "email": "rmcgrady1@cpanel.net",
        "date_of_birth": "1996/11/05"
    }
}
*/

/*
Write a function groupBy to convert an array of objects into groups based on the specified key:
  let user = [
  {
    id: 1,
    first_name: "Nicki",
    email: "ncrozier0@squarespace.com",
    date_of_birth: "2009/05/09",
    gender: "Male",
  },
  {
    id: 2,
    first_name: "Raychel",
    email: "rmcgrady1@cpanel.net",
    date_of_birth: "1996/11/05",
    gender: "Female",
  },
  {
    id: 3,
    first_name: "Demetris",
    email: "dkilshall2@elpais.com",
    date_of_birth: "2018/12/31",
    gender: "Male",
  },
  {
    id: 4,
    first_name: "Amata",
    email: "abraiden3@canalblog.com",
    date_of_birth: "2012/05/23",
    gender: "Female",
  },
];
  groupBy(users, "gender")
  This should return 
  {
  "Male":[
  {id:1, first_name:"Nicki", ...}, 
  {id:3, first_name:"Demetris", ...}
  ]
  "Female":[
  {id: 2, first_name:"Raychel", ...},
  {id: 4, first_name:"Amata", ...}
  ]
  }
*/

const users2 = [
  {
    id: 1,
    first_name: "Nicki",
    email: "ncrozier0@squarespace.com",
    date_of_birth: "2009/05/09",
    gender: "Male",
  },
  {
    id: 2,
    first_name: "Raychel",
    email: "rmcgrady1@cpanel.net",
    date_of_birth: "1996/11/05",
    gender: "Female",
  },
  {
    id: 3,
    first_name: "Demetris",
    email: "dkilshall2@elpais.com",
    date_of_birth: "2018/12/31",
    gender: "Male",
  },
  {
    id: 4,
    first_name: "Amata",
    email: "abraiden3@canalblog.com",
    date_of_birth: "2012/05/23",
    gender: "Female",
  },
];

const groupBy = (records, groupKey) => {
  return records.reduce((acc, record) => {
    if (!acc[record[groupKey]]) acc[record[groupKey]] = [record];
    else acc[record[groupKey]] = [...acc[record[groupKey]], record];

    return acc;
  }, {});
};

console.log(groupBy(users2, "gender"));
/*
output
{
    "Male": [
        {
            "id": 1,
            "first_name": "Nicki",
            "email": "ncrozier0@squarespace.com",
            "date_of_birth": "2009/05/09",
            "gender": "Male"
        },
        {
            "id": 3,
            "first_name": "Demetris",
            "email": "dkilshall2@elpais.com",
            "date_of_birth": "2018/12/31",
            "gender": "Male"
        }
    ],
    "Female": [
        {
            "id": 2,
            "first_name": "Raychel",
            "email": "rmcgrady1@cpanel.net",
            "date_of_birth": "1996/11/05",
            "gender": "Female"
        },
        {
            "id": 4,
            "first_name": "Amata",
            "email": "abraiden3@canalblog.com",
            "date_of_birth": "2012/05/23",
            "gender": "Female"
        }
    ]
}
*/

/*
Write a function that sorts an array of objects by the key that is passed in the second argument, and in the order passed as the 3rd argiment. 
  Example:
  let users = [{
  "id": 1,
  "first_name": "Nicki",
  "email": "ncrozier0@squarespace.com",
  "date_of_birth": "2009/05/09",
  "gender":"Male",
  }, {
  "id": 2,
  "first_name": "Raychel",
  "email": "rmcgrady1@cpanel.net",
  "date_of_birth": "1996/11/05",
    "gender":"Female"
  }, {
  "id": 3,
  "first_name": "Demetris",
  "email": "dkilshall2@elpais.com",
  "date_of_birth": "2018/12/31",
    "gender":"Male"
  }, {
  "id": 4,
  "first_name": "Amata",
  "email": "abraiden3@canalblog.com",
  "date_of_birth": "2012/05/23",
    "gender":"Female"
  }]

  sort(users, "id", "desc") //Should return users sorted by id in descending order
  sort(users, "first_name "desc") //Should return users sorted by first_name in ascending order
*/

const users3 = [
  {
    id: 1,
    first_name: "Nicki",
    email: "ncrozier0@squarespace.com",
    date_of_birth: "2009/05/09",
    gender: "Male",
  },
  {
    id: 2,
    first_name: "Raychel",
    email: "rmcgrady1@cpanel.net",
    date_of_birth: "1996/11/05",
    gender: "Female",
  },
  {
    id: 3,
    first_name: "Demetris",
    email: "dkilshall2@elpais.com",
    date_of_birth: "2018/12/31",
    gender: "Male",
  },
  {
    id: 4,
    first_name: "Amata",
    email: "abraiden3@canalblog.com",
    date_of_birth: "2012/05/23",
    gender: "Female",
  },
];

const sort = (records, key = "id", order = "asc") => {
  if (!Array.isArray(records)) throw Error("records is not type of Array");
  if (!records.length) return records;
  if (!records[0].hasOwnProperty(key)) throw Error("invalid sort key");
  if (!["asc", "desc"].includes(order)) throw Error("invalid sort order");

  const sortedData = structuredClone(records);

  let typeOfSortKey = typeof records[0][key];
  if (typeOfSortKey === "string" && Date.parse(records[0][key]))
    typeOfSortKey = "date";

  switch (typeOfSortKey) {
    case "string":
      sortedData.sort((a, b) => a[key].localeCompare(b[key]));
      break;
    case "number":
      sortedData.sort((a, b) => a[key] - b[key]);
      break;
    case "date":
      sortedData.sort((a, b) => new Date(a[key]) - new Date(b[key]));
      break;
    default:
      sortedData.sort((a, b) => a[key] - b[key]);
  }

  if (order === "desc") sortedData.reverse();

  return sortedData;
};

console.log(sort(users3, "date_of_birth", "desc"));
/*
  output:
    [
    {
        "id": 3,
        "first_name": "Demetris",
        "email": "dkilshall2@elpais.com",
        "date_of_birth": "2018/12/31",
        "gender": "Male"
    },
    {
        "id": 4,
        "first_name": "Amata",
        "email": "abraiden3@canalblog.com",
        "date_of_birth": "2012/05/23",
        "gender": "Female"
    },
    {
        "id": 1,
        "first_name": "Nicki",
        "email": "ncrozier0@squarespace.com",
        "date_of_birth": "2009/05/09",
        "gender": "Male"
    },
    {
        "id": 2,
        "first_name": "Raychel",
        "email": "rmcgrady1@cpanel.net",
        "date_of_birth": "1996/11/05",
        "gender": "Female"
    }
]
*/

/*
  Given 2 arrays with related objects, return a new array where objects having the same id from each of the arrays are merged. Try to achieve it with a complexity - O(n).
    Example:

    let userNames = [{
    "id": 1,
    "first_name": "Nicki",
    }, {
    "id": 2,
    "first_name": "Raychel",
    }, {
    "id": 3,
    "first_name": "Demetris",
    }, {
    "id": 4,
    "first_name": "Amata",
    }]

    let userEmails = [{
    "id": 2,
    "email": "rmcgrady1@cpanel.net",
    }, {
    "id": 1,
    "email": "ncrozier0@squarespace.com",
    }, {
    "id": 4,
    "email": "abraiden3@canalblog.com",
    }, {
    "id": 3,
    "email": "dkilshall2@elpais.com",
    }]
    
    mergeById(userNames, userEmails) 

    //This should return an array of users in the format: 
    [{
    "id": 1,ple:

    let userNames = [{
    "id": 1,
    "first_name": "Nicki",
    }, {
    "id": 2,
    "first_name": "Raychel",
    }, {
    "id": 3,
    "first_name": "Demetris",
    }, {
    "id": 4,
    "first_name": "Amata",
    }]
    let userEmails = [{
    "id": 2,
    "email": "rmcgrady1@cpanel.net",
    }, {
    "id": 1,
    "email": "ncrozier0@squarespace.com",
    }, {
    "id": 4,
    "email": "abraiden3@canalblog.com",
    }, {
    "id": 3,
    "email": "dkilshall2@elpais.com",
    }]
    
    mergeById(userNames, userEmails) 
    //This should return an array of users in the format: 
      [{
      "id": 1,
      "first_name": "Nicki",
      "email": "ncrozier0@squarespace.com",
      }, {
      "id": 2,
      "first_name": "Raychel",
      "email": "rmcgrady1@cpanel.net",
      }, {
      "id": 3,
      "first_name": "Demetris",
      "email": "dkilshall2@elpais.com",
      }, {
      "id": 4,
      "first_name": "Amata",
      "email": "abraiden3@canalblog.com",
      }]
      "first_name": "Nicki",
      "email": "ncrozier0@squarespace.com",
      }, {
      "id": 2,
      "first_name": "Raychel",
      "email": "rmcgrady1@cpanel.net",
      }, {
      "id": 3,
      "first_name": "Demetris",
      "email": "dkilshall2@elpais.com",
      }, {
      "id": 4,
      "first_name": "Amata",
      "email": "abraiden3@canalblog.com",
      }]
*/

const userNames = [
  {
    id: 1,
    first_name: "Nicki",
  },
  {
    id: 2,
    first_name: "Raychel",
  },
  {
    id: 3,
    first_name: "Demetris",
  },
  {
    id: 4,
    first_name: "Amata",
  },
];

const userEmails = [
  {
    id: 2,
    email: "rmcgrady1@cpanel.net",
  },
  {
    id: 1,
    email: "ncrozier0@squarespace.com",
  },
  {
    id: 4,
    email: "abraiden3@canalblog.com",
  },
  {
    id: 3,
    email: "dkilshall2@elpais.com",
  },
];

const mergeById = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2))
    throw Error("invalid input array", JSON.stringify(arr1));

  const mergedArray = [];
  const mergeKey = "id";
  const grpObj1 = mapBy(arr1, mergeKey);
  const grpObj2 = mapBy(arr2, mergeKey);

  Object.keys(grpObj1).forEach((key) => {
    mergedObject = { ...grpObj1[key], ...grpObj2[key] };
    mergedArray.push(mergedObject);
  });

  return mergedArray;
};

console.log(mergeById(userEmails, userNames));

/*
  output:
  [
    {
        "id": 3,
        "first_name": "Demetris",
        "email": "dkilshall2@elpais.com",
        "date_of_birth": "2018/12/31",
        "gender": "Male"
    },
    {
        "id": 4,
        "first_name": "Amata",
        "email": "abraiden3@canalblog.com",
        "date_of_birth": "2012/05/23",
        "gender": "Female"
    },
    {
        "id": 1,
        "first_name": "Nicki",
        "email": "ncrozier0@squarespace.com",
        "date_of_birth": "2009/05/09",
        "gender": "Male"
    },
    {
        "id": 2,
        "first_name": "Raychel",
        "email": "rmcgrady1@cpanel.net",
        "date_of_birth": "1996/11/05",
        "gender": "Female"
    }
]
*/

const duplicates = ["jhon", "deo", "deo", "shay", "isek", "jhon"];

const removeDuplicates = (arr) => {
  const mappedObject = duplicates.reduce((acc, item) => {
    acc[item] = item;
    return acc;
  }, {});

  return Object.keys(mappedObject); // Object.values(mappedObject) also works
};

console.log(removeDuplicates(duplicates));

// There is also alternate way to do this
console.log([...new Set(duplicates)]);

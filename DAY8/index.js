/*
    1. Write a function that can stop execution of a function for the number of milliseconds sent as an argument
    Example:
    const func = async () => {
        console.log("Printing before")
        //Call your function here eg. sleep(3000)
        console.log("Printing after")
    }
*/

const sleep = (timeInMiliseconds) => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(), timeInMiliseconds)
  );
};

const func = async () => {
  console.log("Printing before");
  await sleep(3000); // wait for 3 sec
  console.log("Printing after");
};

func();

/*
    2.Using promises write a function that fetches data from an API endpoint(GET https://reqres.in/api/users )
    Log the data into the console once it is received

*/

const fetchData = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};

fetchData("https://reqres.in/api/users")
  .then((data) => console.log(data))
  .catch((error) => console.log("error fetching data", err));

/*
    3. What will be printed to the console when the promise resolves and when it rejects?
    const testAsyncFunction = () => {
        return new Promise((resolve, reject) => {
            if (Math.random() > 0.5) {
            resolve("Test Resolve");
            } else {
            reject("Test Reject");
            }
        }).catch((err) => {
            console.log("Error caught in testAsyncFunction: ", err);
        });
    };

    testAsyncFunction()
    .then((res) => {
        console.log("Response in then block: ", res);
    })
    .catch((err) => console.log("Error in catch block: ", err));
*/

const testAsyncFunction = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Test Resolve");
    } else {
      reject("Test Reject");
    }
  }).catch((err) => {
    console.log("Error caught in testAsyncFunction: ", err);
  });
};

testAsyncFunction()
  .then((res) => {
    console.log("Response in then block: ", res);
  })
  .catch((err) => console.log("Error in catch block: ", err));

/*
  case promise success:
    when a random number is strictly above above 0.5 the promise get resolved i.e.then(callback) callback function
    will be executed,here in our case it will console "Response in then block:  Test Resolve"
  case promise failure:
    when a random number is less than 0.5 the promise get rejected i.e. catch(callback) callback function
    will be executed,here in our case it will console
        "Error caught in testAsyncFunction:  Test Reject"
        "Response in then block:  undefined"
    the below line is printed becuase after catch all then and finally chain functions are executed,unless that
    catch itself throws any execption or error,but only first catch is executed not any catch function after that.
*/

/*
  4.  What will be printed to the console?
    const testAsyncFunction2 = () => {
    return Promise.reject("Test static reject");
    };

    testAsyncFunction2()
    .then((res) => {
        console.log("Response in then block", res);
    })
    .catch((err) => console.log("Error in catch block", err));
*/

const testAsyncFunction2 = () => {
  return Promise.reject("Test static reject");
};

testAsyncFunction2()
  .then((res) => {
    console.log("Response in then block", res);
  })
  .catch((err) => console.log("Error in catch block", err));

// output: Error in catch block Test static reject

/*
  5. What will be printed to the console?
    const testAsyncFunction = () =>{
        return new Promise((resolve, reject) =>{
            if (Math.random() > 0.5) {
            resolve('Test Resolve');
            } else {
            reject('Test Reject');
            }
        }).catch((err) =>{
            console.log('Error caught in testAsyncFunction', err);
            throw new Error('Forced error');
        });
    };
    testAsyncFunction()
    .then((res) =>{
    console.log('Response in then block: ', res);
    })
    .catch((err) => console.log('Error in catch block: ', err));
*/

const testAsyncFunction3 = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Test Resolve");
    } else {
      reject("Test Reject");
    }
  }).catch((err) => {
    console.log("Error caught in testAsyncFunction", err);
    throw new Error("Forced error");
  });
};

testAsyncFunction3()
  .then((res) => {
    console.log("Response in then block: ", res);
  })
  .catch((err) => console.log("Error in catch block: ", err));

/*
  case promise success:
    when a random number is strictly above above 0.5 the promise get resolved i.e.then(callback) callback
    function will be executed,here in our case it will console "Response in then block:  Test Resolve"
  case promise failure:
    when a random number is less than 0.5 the promise get rejected i.e. catch(callback) callback function
    will be executed,here in our case it will console
        "Error caught in testAsyncFunction:  Test Reject"
        "Error in catch block:  Error: Forced error"
    the below line is printed becuase after in catch it is throwing a new Error which is causing it to catch
    another chained catch function

*/

/*
  6.Create a promise that makes a fetch call, but resolves with the data only 2 seconds after the data has
    been received in the fetch.
*/

const fetchDataWithDelay = (url, delayInMiliSeconds) => {
  // Function to Delay Execution
  function sleep() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), delayInMiliSeconds);
    });
  }

  // Fetching Data
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then(async (res) => {
        await sleep(delayInMiliSeconds);
        resolve(res);
      })
      .catch(async (error) => {
        await sleep(delayInMiliSeconds);
        reject(error);
        sleep;
      });
  });
};

fetchDataWithDelay("https://reqres.in/api/users", 2000)
  .then((data) => console.log(data))
  .catch((error) => console.log("error fetching data", err));

/*
    7. Complete the above tasks with async/await.
*/

/*
    2.Using promises write a function that fetches data from an API endpoint(GET https://reqres.in/api/users )
    Log the data into the console once it is received
    example using async await.

*/

(async function () {
  try {
    const res = await fetchData("https://reqres.in/api/users");
    console.log(res);
  } catch (error) {
    console.log("error, ", error);
  }
})();

/*
    3. What will be printed to the console when the promise resolves and when it rejects?
    const testAsyncFunction = () => {
        return new Promise((resolve, reject) => {
            if (Math.random() > 0.5) {
            resolve("Test Resolve");
            } else {
            reject("Test Reject");
            }
        }).catch((err) => {
            console.log("Error caught in testAsyncFunction: ", err);
        });
    };

    testAsyncFunction()
    .then((res) => {
        console.log("Response in then block: ", res);
    })
    .catch((err) => console.log("Error in catch block: ", err));

    using async await
*/

(async function () {
  try {
    const res = await testAsyncFunction();
    console.log("Response in then block: ", res);
  } catch (err) {
    console.log("Error in catch block: ", err);
  }
})();

/*
  4.  What will be printed to the console?
    const testAsyncFunction2 = () => {
    return Promise.reject("Test static reject");
    };

    testAsyncFunction2()
    .then((res) => {
        console.log("Response in then block", res);
    })
    .catch((err) => console.log("Error in catch block", err));

    using async await
*/

(async function () {
  try {
    const res = await testAsyncFunction2();
    console.log("Response in then block", res);
  } catch (err) {
    console.log("Error in catch block", err);
  }
})();

/*
  5. What will be printed to the console?
    const testAsyncFunction = () =>{
        return new Promise((resolve, reject) =>{
            if (Math.random() > 0.5) {
            resolve('Test Resolve');
            } else {
            reject('Test Reject');
            }
        }).catch((err) =>{
            console.log('Error caught in testAsyncFunction', err);
            throw new Error('Forced error');
        });
    };
    testAsyncFunction()
    .then((res) =>{
    console.log('Response in then block: ', res);
    })
    .catch((err) => console.log('Error in catch block: ', err));

    using async await
*/

(async function () {
  try {
    const res = await testAsyncFunction3();
    console.log("Response in then block: ", res);
  } catch (err) {
    console.log("Error in catch block: ", err);
  }
})();

/*
  6.Create a promise that makes a fetch call, but resolves with the data only 2 seconds after the data has
    been received in the fetch.
    using async await
*/

(async function () {
  try {
    const res = await fetchDataWithDelay("https://reqres.in/api/users", 2000);
    console.log("data", data);
  } catch (err) {
    console.log("error fetching data", err);
  }
})();

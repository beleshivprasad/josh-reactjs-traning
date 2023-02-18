/*
  Q.1.Visit any page on the browser, and replace the content of all the p tags with the phrase “How’s the Josh?”
  using Javascript
*/

function replaceTextForTags(e, text, tag) {
  const allPTags = document.querySelectorAll(tag);
  allPTags.forEach((tag) => {
    tag.innerText = text;
  });
}

/*
  Q.2. Go to youtube. Open any video. Add a button to the page using JS. On click of the button, the video
  playback speed should change to 10x
*/

function addPlaybackRateToYoutube(playbackRate) {
  var video = document.querySelector("video");
  var button = document.createElement("button");
  button.innerText = `${playbackRate}x`;
  button.style.backgroundColor = "black";
  button.style.fontSize = "20px";
  button.style.position = "absolute";
  button.style.top = "500px";
  button.style.left = "500px";
  button.style.color = "white";
  button.onclick = function () {
    video.playbackRate = playbackRate;
  };
  document.body.appendChild(button);
}

// addPlaybackRateToYoutube(10);

/*
  Create a form to submit a blog to a mock API (reqres.in)
*/

const blogForm = document.querySelector("#blog-form");
blogForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const content = document.querySelector("#content").value;
  const url = "https://reqres.in/api/blogs";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, author, content }),
  };
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});

/*
  Q.4 Create a blog list page that fetches a list of users from a mock API and adds them to a table on
  the page after loading. Add a button to sort the users by name. Add an input to filter the table by
  search. (Optional: Show “Loading…” or a loading spinner on the screen till the data loads
*/

let usersData = [];
const baseURL = "https://jsonplaceholder.typicode.com";
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

const UP_ARROW = "&#8593;";
const DOWN_ARROW = "&#8595;";

// Thech query params are based on what is accepted at server.
const fetchParams = {
  username_like: "",
  _sort: "",
  _order: "",
};

function fetchUsers(endpoint) {
  const queryParams = [];
  Object.keys(fetchParams).forEach((key) => {
    if (fetchParams[key]) queryParams.push(`${key}=${fetchParams[key]}`);
  });
  const queryString = "?" + queryParams.join("&");

  const url = baseURL + endpoint + queryString;
  console.log(url);
  spinner(true);
  fetch(url, options)
    .then((res) => res.json())
    .then((res) => {
      usersData = [...res];
      spinner(false);
      displayUsers(usersData);
    })
    .catch((err) => console.log("Error ", err));
}

function displayUsers(usersData) {
  let tableRows = "";
  const displayColumnList = [
    "id",
    "name",
    "username",
    "email",
    "phone",
    "website",
  ];

  usersData.forEach((user) => {
    let tableData = "";
    displayColumnList.forEach((key) => {
      tableData += `<td>${user[key]}</td>`;
    });

    tableRows += `<tr id="${user.id}">${tableData}</tr>`;
  });
  const tableBody = document.querySelector(".table-body");
  tableBody.innerHTML = tableRows;
}

function searchUser(event) {
  const search = document.querySelector("#searchKey").value;

  if (!search) {
    fetchParams.username_like = "";
    fetchParams._order = "";
    fetchParams._sort = "";
    fetchUsers("/users");
  } else {
    fetchParams.username_like = search;
    fetchUsers("/users");
  }
}

function filterUser(event, key) {
  const columnFilterBtns = document.querySelectorAll(".filter-btn");

  function setChildData(child, className, innerHTML) {
    child.className += className;
    child.innerHTML = innerHTML;
  }

  function setFetchParams(sortKey, sortOrder) {
    fetchParams._order = sortOrder;
    fetchParams._sort = sortKey;
  }

  columnFilterBtns.forEach((item) => {
    let childClassName = item.children[0].className;
    let child = item.children[0];
    if (item.className.includes(key)) {
      child.className = childClassName.replace(/asc|desc/gi, "");

      if (!child.innerHTML) {
        setChildData(child, "asc", UP_ARROW);
        setFetchParams(key, "asc");
      } else {
        const sortOrder = child.className.includes("asc") ? "desc" : "asc";

        if (sortOrder === "desc") {
          setChildData(child, "desc", UP_ARROW);
        } else {
          setChildData(child, "asc", DOWN_ARROW);
        }
        setFetchParams(key, sortOrder);
      }
      fetchUsers("/users");
    } else {
      child.innerHTML = "";
    }
  });
}

function spinner(flag) {
  if (flag) {
    const spinner = document.createElement("div");
    spinner.setAttribute("class", "spin");
    const tableBody = document.querySelector(".table-body");
    tableBody.innerHTML = "";
    const tableRow = document.createElement("tr");
    tableRow.appendChild(spinner);
    tableBody.appendChild(tableRow);
  } else {
    const tableBody = document.querySelector(".table-body");
    tableBody.innerHTML = "";
  }
}

// fetching users when page loads for first time
fetchUsers("/users");

// Index Handler
// Below functions Not Related to Assignments
function handleClick(e, question) {
  // Remove active links
  const allQuestionTabs = document.querySelectorAll(".tab-btn");
  allQuestionTabs.forEach(function (tab) {
    tab.className = tab.className.replace("active", "");
  });

  // Hide All Content
  const allContentTabs = document.querySelectorAll(".tab-content");
  allContentTabs.forEach(function (tab) {
    tab.style.display = "none";
  });

  //Show Content For Current Question
  const tabContent = document.getElementById(question);
  tabContent.style.display = "block";
  //Activate Selected Question Tab
  const tabButton = document.querySelector(`.${question}-btn`);
  tabButton.className += " active";
}

handleClick(null, "question4");

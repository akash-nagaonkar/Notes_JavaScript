/* Async and Await Example */

//Workflow Function

const getAllUserEmails = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  const userEmailArray = jsonUserData.map((user) => {
    return user.email;
  });
  postToWebpage(userEmailArray);
};

const postToWebpage = (data) => {
    console.log(data);
};

getAllUserEmails();

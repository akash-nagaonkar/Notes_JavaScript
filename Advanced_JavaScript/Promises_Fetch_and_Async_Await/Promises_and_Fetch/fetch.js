// Fetch
/* 
Q. You have sent a requaet to API and you got a 404 error, where will you get this 404 error?
--> 
A fetch promise only rejects when a network error is encountered. A fetch() promise does not reject on HTTP errors(404, etc). Instead, a then() handler must check the Response.ok and Response.ststus properties. 
That means we get 404 error as response wehere we have to check whether it is OK or not.
*/

/*
Q. How it works?
response = fetch("url") :-  1) Web browser/node --> network request
                            2) Data(Response(global memory) --> Data) :- 1) On Fullfilled[] - resolve 
                                                                         2) On Rejection[] - reject
*/

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    console.log("Response is succussfull:", response.ok); // true
    console.log("Response Status:", response.status); // 200
    return response.json();
  })
  .then((data) => {
    console.log("Data:", data); // Data: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
  })
  .catch((error) => {
    console.error("Error:", error);
  });

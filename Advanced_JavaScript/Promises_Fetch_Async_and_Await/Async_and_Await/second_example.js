/* Async and Await Example */

//Second parameter of fetch is a object

//Method GET
const getDadJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
      //   Accept: "text/plain"
    },
  });
  const jsonJokeData = await response.json();
  console.log(jsonJokeData);
  //   const textJokeData = await response.text();
  //   console.log(textJokeData);
};

// getDadJoke();

//Method POST

const jokeObj = {
  id: "BQKZTnOCIe",
  joke: "I had a pair of racing snails. I removed their shells to make them more aerodynamic, but they became sluggish.",
};

const psotData = async () => {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jokeObj),
  });
  const jsonResponse = await response.json();
  console.log(jsonResponse.headers);
};

// psotData(jokeObj)

//Another way to approach it

//Abstract into function
//Maybe from a form

const getDataFromForm = () => {
  const requestObj = {
    firstName: "Bruce",
    lastName: "Lee",
    categories: ["nerdy"],
  };
  return requestObj;
};

const buildReqUrl = (requestData) => {
  return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
};

const requestJoke = async (url) => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  const joke = jsonResponse.value.joke;
  console.log(joke);
  postJokeToPage(joke);
};

const postJokeToPage = (joke) => {
    console.log(joke);
}

//Procedural workflow function
const processJokeRequest = async () => {
    const requestData = getDataFromForm();
    const requestUrl = buildReqUrl(requestData);
    await requestJoke(requestUrl);
    console.log("Finished!");
}

processJokeRequest()
/*
== Async JavaScript ==

##  JavaScript 
--> 1) Synchronous
    2) Single Threaded
    *Default*
--> Execution Context 
    Executes one line of code at a time
    *Each operation waits for the last operation to complete before executing*

## Call Stack and Memory Heap

##  Blocking code and Non blocking code
--> Blocking code
    Block the flow of program
    Read file Synchronously
--> Non blocking code
    Does not block the flow of program
    Read file Asynchronously
*/

async function fetchData() {
  try {
    const response = await fetch("https://example.com/api/data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

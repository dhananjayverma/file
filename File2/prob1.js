// Sample asynchronous functions
function fetchData1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data 1');
    }, 2000);
  });
}

function fetchData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data 2');
    }, 1500);
  });
}

function fetchData3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Error: Failed to fetch data 3');
    }, 1000);
  });
}

// Using Promise.all to handle multiple promises
Promise.all([fetchData1(), fetchData2(), fetchData3()])
  .then((results) => {
    console.log('All promises resolved successfully');
    console.log('Results:', results);
  })
  .catch((error) => {
    console.log('One or more promises rejected');
    console.log('Error:', error);
  });

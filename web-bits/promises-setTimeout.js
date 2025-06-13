function wait(n) {
  return new Promise((resolve) => setTimeout(resolve, n * 1000));
}

function promiseExecute() {
  console.log("Promise Executed successfully");
}

wait(3).then(promiseExecute);

// function wait(n) {
//   let p = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, n * 1000);
//   });
//   return p;
// }

// module.exports = wait;

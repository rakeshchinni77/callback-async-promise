function getUserDetails(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(id === "123") {
        resolve({userroll: "678"})
      }
      else {
        reject("invalid ID");
      } // API CALL (simulated)
    }, 2000);
  })
}
const myfun = async() => {
  console.log("123");   // Step 1
  const result =  await getUserDetails("123"); // Step 2 (waits 2 sec)
  console.log(result); // Step 3
  console.log("456");  // Step 4
};
// Calling the async function
myfun();

//we can use await in async function level only
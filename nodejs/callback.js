function fun1(callback) {
  console.log("function1");
  callback();
}
function fun2() {
  console.log("function2");
}
//calling the function
fun1(fun2)

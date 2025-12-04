function fun1(callback) {
  console.log("function1");
  callback();
}
function fun2() {
  console.log("function2");
}
fun1(fun2)
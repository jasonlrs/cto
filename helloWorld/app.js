console.log("the app start");

function a() {
  return 100*10;
}

function f() {
  return a;              // 不带括号，表示这个函数对象
  // return a();        //带括号表示，要执行函数
}



console.log(f());

console.log((f())());   // 用小括号包住函数对象，后面再跟一个小括号，表示执行该函数

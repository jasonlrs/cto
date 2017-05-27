console.log("the app start");

// 匿名函数，声明一个函数时，用圆括号包住该函数，使用()();格式可执行匿名函数
//
(function() {
  console.log('这是一个匿名函数');
})();


var f;
f=function() {
  console.log('函数赋值给变量f');
}

f();


function f2() {
  console.log('函数f2');
}

var a=f2;
a();


function f3() {
  return function() {
    console.log('函数里的函数');
  }
}

console.log(f3);

console.log(f3());

console.log((f3())());

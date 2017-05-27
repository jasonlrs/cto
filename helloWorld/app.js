console.log("the app start");

var a=3;              //赋值
a=5;                  // 覆盖原有值，数值类型
a='hello world';     //重新赋值，字符串类型


var b = 3 + 5;

var str = a + ' hehe';   //字符串相加

console.log(str);

function f(v) {
  console.log(v);
}

f('a=' + a + ';  b=' + b + ' ; str=' +str);

require('@babel/register')

// {
//   let a = 10;
//   var b = 1;
// }

// // a
// console.log(b)
//////////////////////////////////
// for (let i = 0; i < 10; i++){
//   console.log(i)
// }

// console.log(i)
//////////////////////////////////////
// var a = [];
// for (var i = 0; i < 10; i++){
//   a[i] = function() {
//     console.log(i);
//   }
// }

// a[6]();
////////////////////////////////

// var a = [];

// for (let i = 0; i < 10; i++){
//   a[i] = function () {
//     console.log(i)
//   }
// }

// a[6]()
////////////////////////////////////////

// for (let i = 0; i < 3; i++){
//   let i = 'abc';
//   console.log(i)
// }

////////////////////

// console.log(foo);
// var foo = 2;

// console.log(bar);
// let bar = 2;

////////////////////////////////////

// var tmp = 123;

// if (true) {
//   tmp = 'abc';
//   let tmp;
// }

//////////////////////////////////

// {
//   //tmp = 'abc';
//   //console.log(tmp);
  
//   let tmp; 
//   console.log(tmp);
  
//   tmp = 123;
//   console.log(tmp);
// }

//////////////////////////////

// typeof x;
// let x;

//////////////////////////

// typeof undeclared_variable;
// console.log(undeclared_variable)

//////////////////////////

// function bar(x = y, y = 2){
//   return [x, y];
// }

// bar();

////////////////////////////////////////////

// function bar(x = 2, y = x){
//   return [x, y];
// }

// console.log(bar());

//总之，暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，
//但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。

// var x = x;

// let x = x;

////////////////////////////////////////

// function func() {
//   let a = 10;
//   var a = 1;
// }

// function func() {
//   let a = 10;
//   let a = 1;
// }

//////////////////////////////////

function func(arg) {
  let arg;
}
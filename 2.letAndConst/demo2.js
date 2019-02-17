'use strict'

require('@babel/register')

// var tmp = new Date();

// function func() {
//     console.log(tmp);
//     if (false) {
//         var tmp = 'hello world';
//     }
// }

// func();

////////////////////////////////////

// var s = 'hello';

// for (var i = 0; i < s.length; i++){
//     console.log(s[i]);
// }

// console.log(i);

///////////////////////////////////

// function func() {
//     let n = 5;
//     if (true){
//         let n = 10;
//     }
//     console.log(n);
// }

// func();

///////////////////////////////////
// {{{{{
//     {let insane = 'Hello World'}
//     console.log(insane);
// }}}}}

///////////////////////////////////

// {{{{{
//     let insane = 'Hello World';
//     {let insane = 'Hello World';}
// }}}}}

///////////////////////////////////

// function func() { console.log('I am outside!'); }

// (function (){
//     if (false) {
//         function func() { console.log('I am inside!'); }
//     }

//     func();
// }());

///////////////////////////////////

// function func() { console.log('I am outside!'); }

// (function () {
//     var f = undefined;
//     if (false) {
//         function func() { console.log('I am inside!'); }
//     }    

//     func();
// }());

///////////////////////////////////

// // 函数声明语句
// {
//     let a = 'secret';
//     function f() {
//         return a;
//     }
// }

// // 函数表达式
// {
//     let a = 'secret';
//     let f = function () {
//         return a;
//     }
// }

///////////////////////////////////

// const PI = 3.1415;
// console.log(PI);

// PI = 3;

///////////////////////////////////

// const foo;

///////////////////////////////////

// if (true) {
//     const MAX = 5;
// }

// MAX

///////////////////////////////////

// if (true) {
//     console.log(MAX);
//     const MAX = 5;
// }

///////////////////////////////////

// var message = 'Hello!';
// let age = 25;

// const message = 'Goodbye!';
// const age = 30;

// const foo = {};

// // 为 foo 添加一个属性，可以成功
// foo.prop = 123;
// console.log(foo.prop);

// // 将 foo 指向另一个对象，就会报错
// foo = {};

// const a = [];
// a.push('hello'); // 可执行
// a.length = 0; // 可执行
// a = ['Dave']; //报错

// // 想要冻结对象，应该使用Object.freeze方法
// const foo = Object.freeze({});

// // 常规模式，下一行不起作用
// // 严格模式，下一行报错
// foo.prop = 123;

// // 将对象彻底冻结的函数
// var constantize = (obj) => {
//     Object.freeze(obj);
//     Object.keys(obj).forEach( (key, i) => {
//         if ( typeof obj[key] === 'object' ) {
//             constantize( obj[key] );
//         }
//     })
// }
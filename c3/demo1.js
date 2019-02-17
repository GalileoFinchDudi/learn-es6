'use strict'

require('@babel/register')

// let a = 1;
// let b = 2;
// let c = 3;
 
// let [a, b, c] = [1, 2, 3];
// console.log(a);
// console.log(b);
// console.log(c);

// let [foo, [[bar], baz]] = [1, [[2], 3]];

// let [ , , baz] = ["foo", "bar", "baz"]

// let [foo, , baz] = [1, 2, 3];

// let [head, ...tail] = [1, 2, 3, 4];

// let [x, y, ...z] = ['a'];

// let [x, y] = [1, 2, 3];

// let [x, [y], z] = [1, [2, 3], 4];

// let [foo] = 1;
// let [foo] = false;
// let [foo] = NaN;
// let [foo] = undefined;
// let [foo] = null;
// let [foo] = {};

// console.log(x);
// console.log(y);
// console.log(z);

// let [x, y, z] = new Set(['a', 'b', 'c']);

// function* fibs() {
//     let a = 0;
//     let b = 1;
//     while (true) {
//         yield a;
//         [a, b] = [b, a + b];
//     }
// }

// let [first, second, third, fourth, fifth, sixth] = fibs();

// console.log(sixth)

// let [foo = true] = [];

// let [x, y = 'b'] = ['a'];

// let [x, y = 'b'] = ['a', undefined];

// let [x = 1] = [undefined];

// let [x = 1] = [null]

// function f() {
//     console.log('aaa');
// }

// let [x = f()] = [1];

// console.log(x)
// console.log(y)

// let x;
// if ([1][0] === undefined) {
//     x = f();
// } else {
//     x = [1][0];
// }

// let { foo, bar } = { foo: "aaa", bar: "bbb"};

// console.log(foo);
// console.log(bar);

// let { foo: baz } = { foo: 'aaa', bar: 'bbb' };

// console.log(baz);

// let obj = { first: 'hello', last: 'world' };
// let { first: f, last: l} = obj;

// console.log(f);
// console.log(l);

// let { foo: foo, bar: bar } = { foo: 'aaa', bar: 'bbb' };
// console.log(foo);
// console.log(bar);

// let { foo: baz } = { foo: "aaa", bar: "bbb" };

// console.log(baz);
// console.log(foo);

// let obj = {
//     p: [
//         'Hello',
//         { y: 'World' }
//     ]
// };

// let { p: [x, { y }] } = obj;
// console.log(x);
// console.log(y);

// const node = {
//     loc: {
//         start: {
//             line: 1,
//             column: 5
//         }
//     }
// };

// let { loc, loc: { start }, loc: { start: { line }} } = node;
// console.log(line);
// console.log(loc);
// console.log(start);

// let obj = {};
// let arr = [];

// ({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });

// console.log(obj);
// console.log(arr);

// var { x = 3 } = {};
// console.log(x);

// var {x, y = 5} = {x: 1};
// console.log(x);
// console.log(y);

// var {x: y = 3} = {};
// console.log(y);

// var {x: y = 3} = {x: 5};
// console.log(y);

// var { message: msg = 'Something went wrong' } = {};
// console.log(msg);

// var { x = 3 } = { x: undefined };
// console.log(x);

// var {x = 3} = {x: null};
// console.log(x)

// let {foo} = {bar: 'baz'};
// console.log(foo);

// let {foo: {bar}} = {foo: 'baz'}

// let _tmp = {baz: 'baz'};
// _tmp.foo.bar

// let x;
// {x} = {x: 1};

// let x;
// ({x} = {x: 1});

// let { log, sin, cos } = Math;
// console.log(log);
// console.log(sin);
// console.log(cos);

// let arr = [1, 2, 3];
// let {0: first, [arr.length - 1]: last} = arr;
// console.log(first);
// console.log(last);

// const [a, b, c, d, e] = 'hello';
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// let {length: len} = 'hello';
// console.log(len);

// let {toString: s} = 123;
// console.log(s === Number.prototype.toString);

// let {toString: s1} = true;
// console.log(s1 === Boolean.prototype.toString);

// function add([x, y]){
//     return x + y;
// }

// console.log(add([1, 2]));

// console.log([[1, 2], [3, 4]].map(([a, b]) => a + b));

// function move({x = 0, y = 0} = {}) {
//     return [x, y];
// }

// console.log(move({x: 3, y: 8}));
// console.log(move({x: 3}));
// console.log(move({}));
// console.log(move());

console.log([1, undefined, 3].map((x = 'yes') => x));
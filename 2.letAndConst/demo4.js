'use strict'

require('@babel/register');

// 获取顶层对象

// (typeof window !== 'undefined'
//     ? window
//     : (typeof process === 'object' &&
//        typeof require === 'function' &&
//        typeof global === 'object')
//        ? global
//        : this);

// var getGlobal = function () {
//     if (typeof self !== 'undefined') { return self; }
//     if (typeof window !== 'undefined') { return window; }
//     if (typeof global !== 'undefined') { return global; }
//     throw new Error('unable to locate global object');
// }
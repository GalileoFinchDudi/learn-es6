var babel = require('@babel/core');

// 字符串轉碼
babel.transform('code();', options);
// => { code, map, ast }

// 文件轉碼（異步）
babel.transformFile('filename.js', options, function(err, result) {
  result; // => { code, map, ast}
});

// 文件轉碼 （同步）
babel.transformFileSync('filename.js', options);
// => { code, map, ast }

// Babel AST轉碼
babel.transformFromAst(ast, code, options);
// => { code, map, ast }
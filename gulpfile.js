//  /**
//  *  Welcome to your gulpfile!
//  *  The gulp tasks are splitted in several files in the gulp directory
//  *  because putting all here was really too long
//  */
//
// 'use strict';
//
// var gulp = require('gulp');
// var wrench = require('wrench');
//
// /**
//  *  This will load all js or coffee files in the gulp directory
//  *  in order to load all gulp tasks
//  */
//
// wrench.readdirSyncRecursive('./gulp').filter(function (file) {
//   return (/\.(js|coffee)$/i).test(file);
// }).map(function (file) {
//   require('./gulp/' + file);
// });
//
//
// /**
//  *  Default task clean temporaries directories and launch the
//  *  main optimization build task
//  */
//
// gulp.task('default', ['clean'], function () {
//   gulp.start('build');
// });


var gulp = require('gulp'),
    less = require('gulp-less');

gulp.task('testLess', function () {
  gulp.src(['src/assets/styles/less/*.less','!less/{extend,page}/*.less'])
      .pipe(less())
      .pipe(gulp.dest('dest/css'));
});










// 通配符路径匹配示例：
// “src/a.js”：指定具体文件；
// “*”：匹配所有文件    例：src/*.js(包含src下的所有js文件)；
//  “**”：匹配0个或多个子文件夹    例：src/**/*.js(包含src的0个或多个子文件夹下的js文件)；
// “{}”：匹配多个属性    例：src/{a,b}.js(包含a.js和b.js文件)  src/*.{jpg,png,gif}(src下的所有jpg/png/gif文件)；
//  “!”：排除文件    例：!src/a.js(不包含src下的a.js文件)；
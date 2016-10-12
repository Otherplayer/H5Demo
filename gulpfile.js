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




//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less');
    htmlmin = require('gulp-htmlmin');
    cssmin = require('gulp-minify-css');
    cssver = require('gulp-make-css-url-version');
    autoprefixer = require('gulp-autoprefixer');

/**
 * Build locales (minify and copy to the target build folder)
 */
gulp.task('build:locales', function () {
  return gulp.src('src/assets/locales/*.json')
      .pipe(gulp.dest('dest/locales'));
});

gulp.task('build:css', function () {
  gulp.src('src/assets/styles/*.css')
      // .pipe(cssver()) //给css文件里引用文件加版本号（文件MD5）
      .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true 
        }))
      .pipe(cssmin())
      .pipe(gulp.dest('dist/styles'));
});
gulp.task('build:html', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src('src/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist/html'));
});
gulp.task('build:index', function () {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});


gulp.task('default',['build:index']);



// 通配符路径匹配示例：
// “src/a.js”：指定具体文件；
// “*”：匹配所有文件    例：src/*.js(包含src下的所有js文件)；
//  “**”：匹配0个或多个子文件夹    例：src/**/*.js(包含src的0个或多个子文件夹下的js文件)；
// “{}”：匹配多个属性    例：src/{a,b}.js(包含a.js和b.js文件)  src/*.{jpg,png,gif}(src下的所有jpg/png/gif文件)；
//  “!”：排除文件    例：!src/a.js(不包含src下的a.js文件)；
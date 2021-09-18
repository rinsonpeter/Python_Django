/* File: gulpfile.js */

var gulp  = require('gulp'),
 gutil = require('gulp-util');
 concat=require("gulp-concat");
   imagemin = require('gulp-imagemin');
 cache = require('gulp-cache');
 var jshint = require('gulp-jshint');

// create a default task and just log a message
gulp.task('default', function() {
  return gutil.log('Gulp is running!')
});

//concatenate js files using gulp
gulp.task('scripts', function() {
  var jssrc="src/js/*.js";
  var jsdest="build/js";
    return gulp.src(jssrc)
      .pipe(concat('main.js'))
      .pipe(gulp.dest(jsdest));
});

//Image compression.resultingimage size is less
gulp.task('images', function() {
  var imgsrc="src/images/*";
  var imgdest="build/images";
  return gulp.src(imgsrc)
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest(imgdest));
});
//npm install --save-dev jshint gulp-jshint required
gulp.task('jshint', function() {
  gulp
    .src('src/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));



});

var gulp = require('gulp');
var twig = require('gulp-twig');
var runSequence = require('run-sequence');

gulp.task('compile', function() {
  'use strict';
  return gulp.src([
    './templates/index.html',
    './templates/portfolio.html'
  ])
  .pipe(twig({
    data: {
      title: 'Single Page Website using Gulp Twig'
    }
  }))
  .pipe(gulp.dest('./build'));
});

gulp.task('send', function() {
  return gulp
    .src('./build/**/*')
    .pipe(gulp.dest('E:/vhosts/pocketninjadesign'));
});

gulp.task('default', function() {
  runSequence('compile', 'send');
});
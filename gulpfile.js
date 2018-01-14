var gulp = require('gulp');
var twig = require('gulp-twig');

gulp.task('compile', function() {
  'use strict';
  return gulp.src([
    './templates/index.html',
    './templates/holding.html'
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
    .pipe(gulp.dest('C:/xampp/htdocs/pnd'));
});

gulp.task('default', ['compile', 'send']);
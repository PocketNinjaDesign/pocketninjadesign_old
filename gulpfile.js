var gulp = require('gulp');
var twig = require('gulp-twig');

gulp.task('compile', function() {
  'use strict';
  return gulp.src([
    './templates/index.html'
    ,'./templates/about.html'
    ,'./templates/home.html'
    ,'./templates/portfolio.html'
    ,'./templates/typography.html'
    ,'./templates/contact.html'
    ,'./templates/experiments.html'
  ])
  .pipe(twig({
    data: {
      title: 'Single Page Website using Gulp Twig'
    }
  }))
  .pipe(gulp.dest('./build'));
});

gulp.task('default', ['compile']);
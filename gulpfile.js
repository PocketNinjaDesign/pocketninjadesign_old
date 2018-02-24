'use strict';

var gulp = require('gulp');
var twig = require('gulp-twig');
var runSequence = require('run-sequence');
var siteData = require('./src/data/siteData');

gulp.task('compile', function() {
  return gulp.src([
    './templates/index.twig',
    './templates/ui-design.twig',
    './templates/illustration.twig',
    './templates/graphics.twig'
  ])
  .pipe(twig({
    data: {
      uiDesign: {
        info: siteData.navigation[0],
        gallery: siteData.gallery[0].items
      },
      graphics: {
        info: siteData.navigation[1],
        gallery: siteData.gallery[1].items
      },
      illustration: {
        info: siteData.navigation[2],
        gallery: siteData.gallery[2].items
      },
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
'use strict';

var gulp = require('gulp');
var twig = require('gulp-twig');
var siteData = require('./src/data/siteData');

gulp.task('watch', function() {
  gulp.watch([
    './templates/**/*.twig',
    './src/data/siteData.js'
  ], ['compile']);
});

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
        gallery: siteData.gallery[0]
      },
      graphics: {
        info: siteData.navigation[1],
        gallery: siteData.gallery[1]
      },
      illustration: {
        info: siteData.navigation[2],
        gallery: siteData.gallery[2]
      },
    }
  }))
  .pipe(gulp.dest('./build'));
});

gulp.task('default', ['watch']);
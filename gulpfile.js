'use strict';

const gulp = require('gulp');
const twig = require('gulp-twig');
const minify = require('gulp-minify');
const sass = require('gulp-sass')(require('sass'));
const serve = require('gulp-serve');
const siteData = require('./dev/js/data/siteData');

// function serveSite () {
//   return gulp.task('serve', serve('build'));
// }

function watch () {
  return gulp.watch(['./templates/**/*.twig', './dev/js/data/siteData.js'], gulp.parallel(compile, styles, compress));
}

function styles () {
  return gulp.src('./dev/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build'));
};

function compress () {
  return gulp.src(['./dev/js/index.js'])
    .pipe(minify())
    .pipe(gulp.dest('build'));
}


function compile () {
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
}

exports.default = gulp.series(compile, styles, compress, watch);
exports.serve = gulp.task('serve', serve('build'));

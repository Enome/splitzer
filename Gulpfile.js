var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpack_config = require('./webpack.config');
var rename = require('gulp-rename');
var Nw = require('node-webkit-builder');
var util = require('gulp-util');

gulp.task('html', function () {
  return gulp
    .src('./build-resources/index.html')
    .pipe(gulp.dest('./build'));
});

gulp.task('images', function () {
  return gulp
    .src('./build-resources/images/*.*')
    .pipe(gulp.dest('./build'));
});

gulp.task('package.json:dev', function () {
  return gulp
    .src('./build-resources/package-development.json')
    .pipe(rename('package.json'))
    .pipe(gulp.dest('./build'));
});

gulp.task('package.json:prod', function () {
  return gulp
    .src('./build-resources/package-production.json')
    .pipe(rename('package.json'))
    .pipe(gulp.dest('./build'));
});

gulp.task('js:dev', function () {
  return gulp
    .src('./app/index.js')
    .pipe(webpack(webpack_config))
    .pipe(gulp.dest('build'));
});

gulp.task('js:prod', function () {

  webpack_config.watch = false;

  return gulp
    .src('./app/index.js')
    .pipe(webpack(webpack_config))
    .pipe(gulp.dest('build'));

});


/* Watch */

gulp.task('watch', function () {
  gulp.watch('build-resources/*.*', ['package.json:dev', 'html']);
});


/* Defaults */

gulp.task('default', ['watch', 'html', 'images', 'package.json:dev', 'js:dev']);
gulp.task('production', ['html', 'images', 'package.json:prod', 'js:prod'], function () {

  var nw = new Nw({

    version: '0.12.1',
    files: './build/**',
    platforms: ['win32'],

  });

  nw.on('log', function (msg) {
    util.log('node-webkit-builder', msg);
  });

  return nw.build().catch(function (err) {
    util.log('node-webkit-builder', err);
  });

});



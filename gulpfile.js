const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('processCSS', () => {
  gulp.src('scss/application.scss')
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(cleanCSS())
      .pipe(concat('application.css'))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('css/'));
});

gulp.task('build', ['processCSS']);

gulp.task('default', ['build']);

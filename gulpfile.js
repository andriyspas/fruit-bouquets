'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('styles', function () {
    return gulp.src('./src/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src'));
});

gulp.task('styles-watch', function() {
    gulp.watch('./src/**/*.scss', ['styles']);
});

gulp.task('default', ['styles', 'styles-watch']);
'use strict';

const gulp = require('gulp');
let sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function () {
    return gulp.src('./src/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/styles'));
});

gulp.task('styles-watch', function() {
    gulp.watch('./src/**/*.scss', ['styles']);
});

gulp.task('styles-autoprefixer', () =>
    gulp.src('./src/styles/index.css')
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./src'))
);

gulp.task('default', ['styles', 'styles-watch', 'styles-autoprefixer']);
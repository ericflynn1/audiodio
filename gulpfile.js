"use strict";


let gulp = require('gulp');

gulp.task('default', ['html', 'css', 'js']);

gulp.task('html', function () {
    return gulp.src(['index.html', 'components/*.html'], { base: './' })
        .pipe(gulp.dest('public/'));
});

gulp.task('css', function () {
    return gulp.src('style.css')
        .pipe(gulp.dest('public/'));
});

gulp.task('js', function () {
    return gulp.src('app.js')
        .pipe(gulp.dest('public/'))
});

gulp.task('watch', function () {
    gulp.watch('index.html', ['html']);
    gulp.watch('components/*.html', ['html']);
    gulp.watch('app.js', ['js']);
    gulp.watch('*.css', ['css']);
});
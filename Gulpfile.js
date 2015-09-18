var gulp = require('gulp'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch'),
    jade = require('gulp-jade'),
    imagemin = require('gulp-imagemin'),
    clean = require('gulp-clean');

gulp.task('clean', function () {
    return gulp.src('public', {read: false}).pipe(clean());
});


gulp.task('img', function () {
    return gulp.src(['./src/img/*.png', './src/img/*.jpg', './src/img/*.ico'])
        .pipe(gulp.dest('./public/img'));
});

gulp.task('jade2html', ['css', 'js', 'img', 'config', 'lib'], function () {
    return gulp.src(['./view/*.jade', './view/**/*.jade'])
        .pipe(jade({pretty: true}))
        .pipe(gulp.dest('./public'))
        .pipe(livereload());
});

gulp.task('default', ['jade2html'], function () {
    livereload.listen();
    gulp.watch(['./view/*.jade', './view/**/*.jade', './src/img/*.png', './src/img/*.ico', './src/script/**/*.js', './src/config.js', './src/css/*.css'], ['jade2html', 'img', 'js', 'config', 'css']);
});

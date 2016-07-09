var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');

gulp.task('default', function() {
    gulp.watch(['lib/**', 'test/**'], ['mocha']);
});

gulp.task('mocha', function() {
    return gulp.src(['test/*.js'])
        .pipe(mocha({ reporter: 'list', growl: true }))
        .on('error', gutil.log);
});
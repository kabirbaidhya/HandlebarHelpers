// Build for Browsers
var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

// TODO: Uglify

gulp.task('compile', function() {
    return browserify({ entries: './src/H.js', debug: true })
        .transform(babelify, {presets: ['es2015']})
        .bundle()
        .pipe(source('h.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['compile']);

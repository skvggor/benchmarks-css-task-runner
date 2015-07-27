var gulp = require('gulp');
var stylus = require('gulp-stylus');
var sass = require('gulp-sass');

require('gulp-stats')(gulp);

// Bad workround for how the gulp-stats loads the first task he finds
gulp.task('x', function() {
	gulp.src('stylesheets/libsass-stylesheet.scss')
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(gulp.dest('dist'))
});

gulp.task('scss-css', function() {
	gulp.src('stylesheets/libsass-stylesheet.scss')
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(gulp.dest('dist'))
});

gulp.task('stylus-css', function() {
	gulp.src('stylesheets/stylus-stylesheet.styl')
		.pipe(stylus({compress: true}))
		.pipe(gulp.dest('dist'))
});

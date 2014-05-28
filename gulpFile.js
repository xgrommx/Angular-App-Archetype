/**
 * TODO:
 *  - Compile Sass
 *  - Watch Sass
 *  - Watch HTML
 *  - Build (concat, uglify, copy, cleanup)
 **/

var gulp = require('gulp'),
	source = require('vinyl-source-stream'),
	watchify = require('watchify'),
	str2jsify = require('string-to-jsify'),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect'),
	gutil = require('gulp-util'),
	plumber = require('gulp-plumber'),
	config = require('./gulpConfig.js');


var production = false; //Link this to build options


gulp.task('watch-js', function() {

	var bundler = watchify(config.js.src);

	bundler.transform(str2jsify.configure({
		extensions: '.html'
	}));

	bundler.on('update', rebundle);

	function rebundle (file) {
		return bundler.bundle({
				debug: !production
			})
			.pipe(plumber())
			.pipe( source(config.js.output) )
			.pipe( gulp.dest(config.js.dist) )
			.pipe( livereload() );
	}

	return rebundle();
});


gulp.task('connect-dev', function () {
	connect.server({
		root: './app',
		port: 3000,
		livereload: true
	});
});


gulp.task('default', [
	'watch-js',
	'connect-dev'
]);
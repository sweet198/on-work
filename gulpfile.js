const gulp = require('gulp');
const watch = require('gulp-watch');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const fileinclude = require('gulp-file-include');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');
const beautify = require('gulp-beautify');
const sourcemaps = require('gulp-sourcemaps');
const browsersync = require("browser-sync").create();


gulp.task('sass', function() {
	return gulp.src('src/scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(beautify.css({indent_size: 2}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist/css'))
		.pipe(browsersync.stream());
});

gulp.task('js', function() {
	// may be in future it'll be compiled or smth
	return gulp.src('src/scripts/**/*.js')
		.pipe(gulp.dest('dist/scripts'))
		.pipe(browsersync.stream());
});

gulp.task('html', function() {
	return gulp.src('src/**/*.html')		
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(beautify.html({ indent_size: 2 }))
		.pipe(gulp.dest('dist'))
		.pipe(browsersync.stream());
});

gulp.task('imagemin', function() {
	return gulp.src('src/img/**')
		.pipe(changed('dist/img'))
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'))
		.pipe(browsersync.stream());
})

gulp.task('watch', function(){
	browsersync.init({
		server: "./dist/",
		port: 4000,
		notify: true
    });

	gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
	gulp.watch('src/**/*.html', gulp.series('html'));
	gulp.watch('src/js/*.js', gulp.series('js'));
	gulp.watch('src/img/**', gulp.series('imagemin'));
});

gulp.task('default', gulp.series('sass', 'js', 'html', 'watch'));
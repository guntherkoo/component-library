const gulp = require('gulp');
const path = require('path');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

gulp.task('dist', (done) => {
	gulp.src([
			'./components/**/*.{js,jsx}',
			'!./components/**/*.test.{js,jsx}',
		])
		.pipe(babel({
			envName: 'dist',
		}))
		.pipe(gulp.dest('./dist'));

	gulp.src('./components/**/*.{svg,png,jpg,jpeg,gif,json}')
		.pipe(gulp.dest('./dist'));

	done();
});

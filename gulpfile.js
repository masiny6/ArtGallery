var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var fileinclude = require('gulp-file-include');
var uglify = require('gulp-uglify-es').default;
var imageMin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');

gulp.task('html', function () {
	browserSync.notify('Compiling HTML');

	return gulp.src(['app/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
		.pipe(gulp.dest('dist/'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('css', function () {
	browserSync.notify('Compiling CSS');
	return gulp.src(['app/scss/*.scss'])
		.pipe(sass())
		.pipe(cssnano({
			reduceIdents: false
		}))
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
			cascade: true
		}))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.stream())
});

gulp.task('js', function () {
	browserSync.notify('Compiling internal JS');

	return gulp.src('app/js/*.js')
	    .pipe(fileinclude({
		    prefix: '@@',
		    basepath: '@file',
			indent: true
		}))
		.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist/js'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('fonts', function () {
	return gulp.src(['app/assets/fonts/*.eot', 'app/assets/fonts/*.ttf', 'app/assets/fonts/*.woff', 'app/assets/fonts/*.woff2'])
		.pipe(gulp.dest('dist/assets/fonts'))
     	.pipe(browserSync.stream())
});

gulp.task('img', function () {
	browserSync.notify('Compiling internal IMG');

	return gulp.src(['app/assets/images/*.png', 'app/assets/images/*.svg', 'app/assets/images/*.jpeg', 'app/assets/images/*.jpg', 'app/assets/images/*.gif'])
     	.pipe(imageMin())
		.pipe(gulp.dest('dist/assets/images'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('webserver', function () {
	browserSync({
		server: {
			baseDir: 'dist',
			tunnel: true
		},
		notify: true,
		tunnel: true
	});
});

gulp.task('clean', function () {
	return del(['dist']);
});

gulp.task('watch', function () {
	gulp.watch(['app/scss/*.scss', 'app/components/**/*.scss'], gulp.series('css'));
	gulp.watch(['app/*.html','app/components/**/*.html'], gulp.series('html'));
	gulp.watch(['app/js/*.js', 'app/components/**/*.js'], gulp.series('js'));
	gulp.watch(['app/assets/images/*.png', 'app/assets/images/*.svg', 'app/assets/images/*.jpeg', 'app/assets/images/*.jpg', 'app/assets/images/*.gif'], gulp.series('img'));
	gulp.watch(['app/assets/fonts/*.eot', 'app/assets/fonts/*.ttf', 'app/assets/fonts/*.woff', 'app/assets/fonts/*.woff2'], gulp.series('fonts'));
});

gulp.task('create', gulp.series('clean', gulp.parallel('html', 'css', 'js', 'img', 'fonts')));
gulp.task('default', gulp.series('create', gulp.parallel('webserver', 'watch')));
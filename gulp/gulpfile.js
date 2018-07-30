let gulp = require('gulp');
let sass = require('gulp-sass');
let runSequence = require('run-sequence');
let autoprefixer = require('gulp-autoprefixer');
let cssnano = require('gulp-cssnano');
let rigger = require('gulp-rigger');
let imagemin = require('gulp-imagemin');
let browserSync = require('browser-sync').create();



gulp.task('html', () => (
    gulp.src('./src/index.html')
    .pipe(rigger())
    .pipe(gulp.dest('./build/'))
    .pipe(browserSync.stream())
))

gulp.task('sass', () => (
    gulp.src('./src/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 5 versions'],
    }))
    .pipe(cssnano())
    .pipe(gulp.dest('./build/css/'))
    .pipe(browserSync.stream())
));

gulp.task('img', () => (
    gulp.src('./src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/img/'))
));

gulp.task('browser-sync', () => (
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    })
));

gulp.task('watch', function () {
    gulp.watch("src/html/*.html", ['html']);
    gulp.watch("src/scss/*.scss", ['sass']);
});


gulp.task('build', (callback) => (
    runSequence('html', 'sass', 'img', 'browser-sync', 'watch',
        callback)))
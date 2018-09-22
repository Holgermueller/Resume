const gulp = require('gulp');
const less = require('gulp-less');
const bs = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify-es').default;

// set up browser-sync
gulp.task('browser-sync', () => {
    bs.init({
        server: {
            baseDir: './',
        },
    });
});

// compilte less file
gulp.task('less', () => {
    gulp.src('./css/*.less')
        .pipe(less())
        .pipe(gulp.dest('./css'));
});

//minify css
gulp.task('minify-css', () => {
    gulp.src('./css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./css'));
});

// uglify js
gulp.task('uglify', () => {
    gulp.src('./js/resume.js')
    .pipe(rename('resume.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js'));
});

// watch for changes
gulp.task('watch', () => {
    gulp.watch('./css/*.less', ['less']).on('change', bs.reload);
    gulp.watch('./css/*.css', ['minify-css']).on('change');
    gulp.watch('./js/*.js', ['uglify']).on('change');
});

// set default tasks
gulp.task('default', ['browser-sync', 'watch']);

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var inject = require('gulp-inject');
var bowerFiles = require('main-bower-files');


// Static Server + watching scss/html files
gulp.task('serve', [], function() {

    browserSync.init({
        server: {
            baseDir: "./" // This was the problem 
        }
    });



   
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./scripts/**/*.js").on('change', browserSync.reload);
});

gulp.task('index', function () {
  gulp.src('./index.html')
  .pipe(inject(gulp.src('./scripts/**/*.js', {read: false})))
  .pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower', relative: true}))
  .pipe(gulp.dest('./'));
});
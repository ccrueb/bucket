var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var inject = require('gulp-inject');


// Static Server + watching scss/html files
gulp.task('serve', [], function() {

    browserSync.init({
        server: {
            baseDir: "./app" // This was the problem 
        }
    });



   
    gulp.watch("app/*.html").on('change', browserSync.reload);
    gulp.watch("app/*.js").on('change', browserSync.reload);
});

gulp.task('index', function () {
  gulp.src('./app/index.html')
  .pipe(inject(gulp.src('./app/**/*.js', {read: false}), {ignorePath: 'app'}))
  .pipe(gulp.dest('./app'));
});
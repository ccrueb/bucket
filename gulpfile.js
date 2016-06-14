var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var inject = require('gulp-inject');


// Static Server + watching scss/html files
gulp.task('serve', [], function() {

    browserSync.init({
        server: "./app"
    });



   
    gulp.watch("app/*.html").on('change', browserSync.reload);
    gulp.watch("app/*.js").on('change', browserSync.reload);
});

gulp.task('index', function () {
  var target = gulp.src('./app/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths: 
  var sources = gulp.src(['./app/*.js', './app/*.css'], {read: false});
 
  return target.pipe(inject(sources))
    .pipe(gulp.dest('./app'));
});
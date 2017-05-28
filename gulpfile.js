var gulp = require('gulp'),
    sass = require('gulp-sass'),
    serve = require('gulp-connect');

gulp.task('serve', function() {
  serve.server();
});

gulp.task('scss', function() {
  gulp.src('css/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('css/'));
});

gulp.task('watch', function() {
  gulp.watch('css/**/*.scss', ['scss']);
});

gulp.task('default', ['serve', 'watch']);

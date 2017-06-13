const gulp = require('gulp'),
    child = require('child_process'),
    gutil = require('gulp-util');

gulp.task('serve', () => {
  const jekyll = child.spawn('bundle', ['exec', 'jekyll', 'serve']);
  const logger = (buffer) => {
    buffer.toString()
        .split(/\n/)
        .forEach((message) => gutil.log(message));
  };
  jekyll.stdout.on('data', logger);
  jekyll.stderr.on('data', logger);
});

// TODO gulp watch... if _site changes, generate service worker

gulp.task('deploy', () => {
  // TODO build the service worker
  // TODO deploy to firebase
});

gulp.task('default', ['serve', 'watch']);

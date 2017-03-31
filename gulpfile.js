const gulp = require('gulp'),
    child = require('child_process'),
    gutil = require('gulp-util'),
    wb = require('workbox-build');

function buildSw() {
  return wb.generateSW({
    globDirectory: './_site/',
    swDest: './_site/sw.js',
    staticFileGlobs: ['**\/*'],
  }).then(() => {
    gutil.log('Service worker generated.');
  }).catch((err) => {
    gutil.log('[ERROR] This happened: ' + err);
  });
}

gulp.task('build', () => {
  const jekyll = child.spawn('bundle',
      ['exec', 'jekyll', 'build']);
  const logger = (buffer) => {
    buffer.toString()
        .split(/\n/)
        .forEach((message) => gutil.log(message));
  };
  jekyll.stdout.on('data', logger);
  jekyll.stderr.on('data', logger);
  buildSw();
});

gulp.task('serve', () => {
  const jekyll = child.spawn('bundle',
      ['exec', 'jekyll', 'serve', '--incremental', '--port', '8080']);
  const logger = (buffer) => {
    buffer.toString()
        .split(/\n/)
        .forEach((message) => gutil.log(message));
  };
  jekyll.stdout.on('data', logger);
  jekyll.stderr.on('data', logger);
  buildSw();
});

gulp.task('watch', () => {
  gulp.watch('src/**/*', ['build-sw']);
});

gulp.task('build-sw', () => {
  buildSw();
});

gulp.task('deploy', () => {
  buildSw();
  // Deploy to Firebase.
  const firebase = child.spawn('firebase',
      ['deploy']);
  const logger = (buffer) => {
    buffer.toString()
        .split(/\n/)
        .forEach((message) => gutil.log(message));
  };
  firebase.stdout.on('data', logger);
  firebase.stderr.on('data', logger);
});

gulp.task('default', ['serve', 'watch']);

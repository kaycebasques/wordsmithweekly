// TODO copy workbox-sw as part of build process

const gulp = require('gulp'),
    child = require('child_process'),
    gutil = require('gulp-util'),
    wb = require('workbox-build');

function buildJekyll() {
  const jekyll = child.spawn('bundle',
      ['exec', 'jekyll', 'build']);
  const logger = (buffer) => {
    buffer.toString()
        .split(/\n/)
        .forEach((message) => gutil.log(message));
  };
  jekyll.stdout.on('data', logger);
  jekyll.stderr.on('data', logger);
}

function buildSw() {
  return wb.injectManifest({
    globDirectory: './_site/',
    globPatterns: ['**\/*'],
    swSrc: './src/sw.js',
    swDest: './_site/sw.js',
  }).then(() => {
    gutil.log('Build Manifest generated.');
  }).catch((error) => {
    gutil.log('Error: ' + error);
  });
}

gulp.task('build', () => {
  buildJekyll();
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
  buildJekyll();
  buildSw();
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

const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const child = require('child_process');
const gutil = require('gulp-util');

const scssFiles = 'assets/scss/*.scss';
const scssIndex = 'assets/scss/global.scss';


gulp.task('jekyll', () => {
  const jekyll = child.spawn('jekyll', ['build',
    '--watch'
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('styles', () => {
  gulp.src(scssIndex)
  	.pipe(sass())
    .pipe(gulp.dest('assets/css/'))
});

gulp.task('watch', () => {
  gulp.watch(scssFiles, ['styles']);
});

gulp.task('default', ['jekyll', 'styles', 'watch']);
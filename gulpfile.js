var gulp = require('gulp');
var babel = require('gulp-babel');

var srcFiles = 'src/**/*';
var destination = 'lib';

gulp.task('build', function (callback) {
  return gulp.src(srcFiles)
    .pipe(babel({
      presets: ['es2015'],
      plugins: [
          'add-module-exports', // The order of this matters. MUST BE FIRST
          'transform-es2015-modules-umd'
        ]
    }))
    .pipe(gulp.dest(destination));
});
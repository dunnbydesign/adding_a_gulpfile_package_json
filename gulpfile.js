var gulp = require('gulp')
var mocha = require('gulp-mocha')
var jshint = require('gulp-jshint')

var jsWatchFiles = ['./*.js', './*/*.js']
var tasks = ['test', 'lint']

gulp.task('test', function () {
  return gulp.src('test/*.js', {read: false})
    .pipe(mocha({reporter: 'spec'}))
})

gulp.task('lint', function () {
  return gulp.src(jsWatchFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
})

gulp.task('watch', function () {
  return gulp.watch(jsWatchFiles, tasks)
})

gulp.task('default', tasks)

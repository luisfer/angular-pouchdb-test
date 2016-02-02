var gulp    = require('gulp'),
    gutil    = require('gulp-util'),
    uglify  = require('gulp-uglify'),
    concat  = require('gulp-concat');

    // (./*.js because main.js is in root folder)
    // 'default' is the name of the task. It cannot be custom
    // 'build-js' is the name of the destination folder for .js files.
    // it has to be different than the source folder to overwrite them
    // after the concat, and not append them

    gulp.task('default', function () {
    gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./build-js'));
	});


	gulp.task('watch', function () {
  		var task1 = ['default'];
  		gulp.watch('./build-js/*.js', task1);
	});

    var Server = require('karma').Server;

    /**
     * Run test once and exit
     */
    gulp.task('test', function (done) {
      new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
      }, done).start();
    });
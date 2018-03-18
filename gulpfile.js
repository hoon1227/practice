var gulp = require('gulp');
var webserver = require('gulp-webserver');

var dist = '';

// 웹서버를 localhost:8000 로 실행한다.
gulp.task('server', function () {
	return gulp.src(dist)
		.pipe(webserver());
});

//기본 task 설정
gulp.task('default', [
	'server']);

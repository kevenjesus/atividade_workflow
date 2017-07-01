var gulp = require("gulp");
var htmlmin = require("gulp-htmlmin")

gulp.task('mover-css', function(){
	return gulp.src('./source/scss/*.scss')
	.pipe(gulp.dest('./dist/css'))
});

gulp.task('minify', function(){
	return gulp.src('./source/index.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('./dist'))
});

gulp.task('escutar', function(){
	gulp.watch('./source/scss/*.scss', ['mover-css']);
	gulp.watch('./source/index.html', ['minify']);
});
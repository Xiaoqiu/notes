#Install
``` shell
npm init
npm install --save-dev gulp #gulp
npm install --save-dev gulp-uglify #compress JavaScript
npm install --save-dev gulp-minify-css #compress CSS
npm install --save-dev gulp-minify-html #compress html
npm install --save-dev gulp-imagemin #compress images
npm install --save imagemin-pngquant #compress PNG images
npm install --save imagemin-jpegtran #compress JPEG images
npm install --save-dev gulp-image-resize #resize images
npm install --save-dev gulp-rename #rename files (such as '*.min.*')
```

#Use
``` javascript
var gulp = require('gulp');
var minifyHTML = require('gulp-minify-html');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var jpegtran = require('imagemin-jpegtran');
var rename = require('gulp-rename');

gulp.task('minify-html', function() {
  var opts = {
    conditionals: true,
    spare:true
  };
 
  return gulp.src('*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('dist/html'));
});

gulp.task('js', function() {
	gulp.src(['*.js', '!*.min.js'])
	.pipe(rename(function (path) {
		path.basename += ".min";
	}))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'))
})

gulp.task('css', function() {
	gulp.src(['*.css', '!*.min.css'])
	.pipe(rename(function (path) {
		path.basename += ".min";
	}))
	.pipe(minifyCSS())
	.pipe(gulp.dest('dist/css'))
})

gulp.task('images', function() {
	gulp.src('*.png')
		.pipe(imagemin({
			progressive: true,
			use: [pngquant({quality: '50'})]
		}))
		.pipe(gulp.dest('dist/images'))

	gulp.src('*.jpg')
		.pipe(imagemin({
			progressive: true,
			use: [jpegtran()]
		}))
		.pipe(gulp.dest('dist/images'))
})

gulp.task('default', ['js', 'css', 'images', 'minify-html'])

```

## 1. watch
```javascript
var gulp = require('gulp')
var uglify = require('gulp-uglify')
var minifyCSS = require('gulp-minify-css')
var imagemin = require('gulp-imagemin')

gulp.task('js', function() {
	gulp.src('src/js/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
})

gulp.task('watchjs', function() {
	gulp.watch('src/js/**/*.js', ['js'])
})

gulp.task('css', function() {
	gulp.src('src/css/**/*.css')
		.pipe(minifyCSS())
		.pipe(gulp.dest('dist/css'))
})

gulp.task('watchcss', function() {
	gulp.watch('src/css/**/*.css', ['css'])
})

gulp.task('images', function() {
	gulp.src('src/images/**/*.*')
		.pipe(imagemin({
			progressive: true
		}))
		.pipe(gulp.dest('dist/images'))
})

gulp.task('watchimages', function() {
	gulp.watch('src/images/**/*.*', ['images'])
})

gulp.task('default', ['js', 'css', 'images', 'watchjs', 'watchcss', 'watchimages'])
```

## 2. postcss
```javascript
var gulp         = require('gulp');
var postcss      = require('gulp-postcss');
var nested       = require('postcss-nested');
var scss         = require('postcss-scss');
var autoprefixer = require('autoprefixer');

gulp.task('scss', function () {
    var processors = [nested, autoprefixer({browsers: ['last 2 versions']})];
    gulp.src('css/**/*.scss')
        .pipe(postcss(processors, {syntax: scss}))
        .pipe(gulp.dest('build'));
});

gulp.task('css', function () {
    var processors = [autoprefixer({browsers: ['last 20 versions']})];
    gulp.src('css/**/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('build'));
});
```

## 3. image resize
```javascript
var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var tingpng = require('gulp-tinypng');

gulp.task('image-resize', function () {
	gulp.src('raw/**/*.+(jpeg|jpg|png)')
		.pipe(imageResize({
			width: '50%'
		}))
		.pipe(gulp.dest('resize'));
});

gulp.task('imagemin', function() {
	gulp.src('raw/**/*.+(png)')
		.pipe(imagemin({
			progressive: true,
			use: [pngquant({quality: '50'})]
		}))
		.pipe(gulp.dest('imagemin'));

	gulp.src('raw/**/*.+(jpeg|jpg)')
		.pipe(imagemin({
			progressive: true
		}))
		.pipe(gulp.dest('imagemin'));
})

gulp.task('tingpng', function () {
  return gulp.src('raw/**/*.+(png)')
    .pipe(tingpng('hiwox1hFYoLliOMwfstG7gR_3i5QYj_w'))
    .pipe(gulp.dest('tingpng'));
});

gulp.task('default', ['image-resize', 'imagemin', 'tingpng']);
```

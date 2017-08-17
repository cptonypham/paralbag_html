var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var minify = require('gulp-minify');
var minifyCss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('scss/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function () {
    browserSync({
        notify: true,
        server: {
            baseDir: '.'
        }
    });
    gulp.watch(['*.html'], reload);
    gulp.watch(['js/*.js'], reload);
    gulp.watch(['css/*.css'], reload);
    gulp.watch("scss/*/*.scss", ['sass'], reload);
});

gulp.task('compress', function() {
  //cấu hình minify js
  gulp.src('js/*.js') //đường dẫn đến thư mục chứa các file js
    .pipe(minify({
        exclude: ['tasks'],
        ignoreFiles: ['-min.js'] //những file không muốn nén
    }))
    .pipe(gulp.dest('dist/js')); //thư mục dùng để chứa các file js sau khi nén

  //cấu hình minify css
  gulp.src('css/*.css') //đường dẫn đến thư mục chứa các file css
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css')); //thư mục dùng để chứa các file css sau khi nén

  //cấu hình minify image
  gulp.src('img/*') //đường dẫn đến thư mục chứa các file images
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest('dist/images')); //thư mục dùng để chứa các file images sau khi nén
});

gulp.task('default', ['serve']);
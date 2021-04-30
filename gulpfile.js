let gulp = require("gulp");
let sass = require("gulp-sass");
let rename = require('gulp-rename');
let csso = require("gulp-csso");
const minify = require("gulp-minify");
const htmlmin = require('gulp-htmlmin');

gulp.task("scss-items", function () {
  return gulp
    .src("src/scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(rename({suffix: '.min'}))
    .pipe(csso())
    .pipe(gulp.dest("dist/css"));
});

gulp.task('minify-html', function() {
  return gulp.src('index.html')
  .pipe(htmlmin({ collapseWhitespace: true}))
  .pipe(gulp.dest('dist'));
  });

  gulp.task('minify-js', function() {
    return gulp.src('src/js/*.js', {allowEmpty: true})
    .pipe(minify({noSource: true}))
    .pipe(gulp.dest('dist/js'));
    });

gulp.task("watch-scss", function() {
  gulp.watch("src/scss/*.scss", gulp.series("scss-items"));
  gulp.watch("index.html", gulp.series("minify-html"));
  gulp.watch("src/js/main.js", gulp.series("minify-js"));
});


gulp.task("default", gulp.series("scss-items", "watch-scss", "minify-html", "minify-js"), function() {

});




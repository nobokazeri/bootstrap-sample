const gulp = require('gulp')
const ejs = require("gulp-ejs")
const sass = require('gulp-sass')

const ejsSettingOption = {
  ext: '.html'
}

gulp.task('sass', () => {
  return gulp.src('./src/sass/custom.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public'))
})

gulp.task('ejs', () => {
  return gulp
    .src('./src/html/*.ejs')
    .pipe(ejs({}, {}, ejsSettingOption))
    .pipe(gulp.dest('./'))
})

gulp.task('watch', () => {
   gulp.watch('./src/sass/**/*.scss', gulp.series('sass'))
   gulp.watch('./src/html/atoms/**/*.ejs', gulp.series('ejs'))
   gulp.watch('./src/html/molecules/**/*.ejs', gulp.series('ejs'))
   gulp.watch('./src/html/organisms/**/*.ejs', gulp.series('ejs'))
   gulp.watch('./src/html/*.ejs', gulp.series('ejs'))
})
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var debug = require('gulp-debug');

gulp.task('default', function () {

    return gulp.src('css/*.css')
        .pipe(debug({minimal: false}))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'));
});


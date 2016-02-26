var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// define tasks here
gulp.task('sass', function() {
    return gulp.src('app/styles/style.scss')
        .pipe(sass({ style: 'expanded' }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('dist/css/'))
});

gulp.task('default', function() {
    // run tasks here
    // set up watch handlers here
    
});
// Initialize modules
var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// Sass task: compiles the style.scss file into style.css
gulp.task('sass', function(){
    return gulp.src('app/scss/style.scss')
        .pipe(sass()) // compile SCSS to CSS
        .pipe(cssnano()) // minify CSS
        .pipe(gulp.dest('dist')); // put final CSS in dist folder
});

// JS task: concatenates and uglifies JS files to script.js
gulp.task('js', function(){
    return gulp.src(['app/js/*.js'])
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// Watch task: watch SCSS and JS files for changes
gulp.task('watch', function(){
    gulp.watch('app/scss/*.scss', gulp.series('sass'));
    gulp.watch('app/js/**/*.js', gulp.series('js'));    
});

// Default task
gulp.task('default', gulp.series('sass', 'js', 'watch'));
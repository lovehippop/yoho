var gulp = require('gulp');
var uglify=require('gulp-uglify');
var concat=require('gulp-concat')
var connect=require('gulp-connect')
//创建一个任务
gulp.task('default', function() {
  // 将你的默认的任务代码放在这
  console.log(1 + 2);
});

gulp.task('minihtml',function(){
    console.log('我要开始')
})
gulp.task('mini',['minihtml','default'],function(){
    console.log('压缩成功')
})
gulp.task('fxx',function(){
    gulp.src('app/static/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist'))
})
gulp.task('ccc',function(){
    gulp.src('app/**/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist'));
})
gulp.task('connect',function(){
    connect.server({
        root:'dist',
        port:'7777',
        livereload:true
    })
})